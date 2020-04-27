import React, { useState } from 'react';
import styled from 'styled-components';
import { apiSevice } from '../../services/api';
import { useApi } from '../../hooks/useApi';
import { Spinner } from '../Spinner';
import { mainColor, greyColor } from '../../styledConstants';
import { currencyFormat } from '../../services/util';
import { Input, SearchInput } from '../Input';
import { Button } from '../Button';
import { TransactionsCard } from './TransactionsCard';

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
  const { data: days, isLoading } = useApi(apiSevice.fetchChekingTransactions, search);
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
          <SearchInput
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
