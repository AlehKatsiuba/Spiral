import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, CardInfo, CardSubstrate, CardProperty, CardList } from './Card';
import { apiSevice } from '../services/api';
import { useApi } from '../hooks/useApi';
import { Spinner } from './Spinner';
import { mainColor, greyColor } from '../styledConstants';
import { currencyFormat, dateFormat } from '../services/util';
import { Input } from './Input';
import { Button } from './Button';

const StyledTransactionsCard = styled.div`
  margin: 10px;
  .date {
    padding: 5px 15px;
  }
`;

const HighlightedSubstr = styled.span`
  background-color: ${mainColor};
  color: white;
`;

function HighlightedSubstring({ string = '', regExp }) {
  const matchedSubstrings = Array.from(string.matchAll(regExp));

  if (!matchedSubstrings.length || regExp.test('')) {
    return string;
  }

  let caret = 0;
  let substrings = matchedSubstrings.reduce((arr, matched) => {
    const part = arr.concat([
      <span>{string.substring(caret, matched.index)}</span>,
      <HighlightedSubstr>{matched[0]}</HighlightedSubstr>
    ]);
    caret = matched.index + matched[0].length;
    return part;
  }, []).concat(<span>{string.substring(caret, string.length)}</span>);
  return substrings;
}

export function TransactionsCard({ date, balance, transactions = [], regExp }) {

  const filteredTransactions = regExp.test('') ?
    transactions :
    transactions.filter(i => i.name.match(regExp) || i.type.match(regExp));

  if (!filteredTransactions.length) {
    return null;
  }

  return (
    <StyledTransactionsCard>
      <div className="date">{dateFormat(date)}</div>
      <Card>
        <CardSubstrate>
          <CardProperty>
            <div>End day balance</div>
            <div>{currencyFormat(balance)}</div>
          </CardProperty>
          <CardList>
            {filteredTransactions.map(({ id, name, type, amount }) =>
              <CardInfo
                key={id}
                title={<HighlightedSubstring string={name} regExp={regExp} />}
                subtitle={<HighlightedSubstring string={type} regExp={regExp} />}
                value={currencyFormat(amount)}
              />
            )}
          </CardList>
        </CardSubstrate>
      </Card>
    </StyledTransactionsCard>
  )
}

const StyledCheckingPage = styled.div`
  .main {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .info {
      .balance {
        margin: 50px 0 20px;
        text-align: center;
        font-size: 32px;
      }
      .total {
        margin: 20px 0 50px;
        text-align: center;
        color: ${greyColor}
      }
    }
    .search {
      margin: 30px 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      ${Input} {
        margin: 20px;
        background-color: white;
      }
      ${Button} {
        margin: 20px;
        background-color: ${mainColor};
        color: white;
      }
    }
  }
  .accounts {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;

export function CheckingPage() {
  const [search, setSearch] = useState('');
  const { data: days, isLoading } = useApi(apiSevice.fetchChekingTransactions);
  const totalCash = 1500.2;

  const searchString = search.replace(/\\/g, '\\\\');
  const regExp = new RegExp(searchString, 'gi');

  return (
    <StyledCheckingPage>
      <div className="main">
        <div className="info">
          <h3 className="balance">
            {currencyFormat(totalCash)}
          </h3>
          <h3 className="total">
            Total available cash
        </h3>
        </div>
        <div className="search">
          <Input
            value={search}
            onChange={({ target: { value } }) => setSearch(value)}
            placeholder="Search transactions"
          />
          <Button>Account details</Button>
        </div>
      </div>
      {isLoading ?
        <Spinner /> :
        <div className="accounts">
          {days.map(({ date, balance, transactions }) =>
            <TransactionsCard
              key={date.valueOf()}
              date={date}
              balance={balance}
              transactions={transactions}
              regExp={regExp}
            />
          )}
        </div>
      }
    </StyledCheckingPage>
  )
}
