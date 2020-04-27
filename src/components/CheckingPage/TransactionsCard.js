import React from 'react';
import styled from 'styled-components';
import { Card, CardInfo, CardSubstrate, CardProperty, CardList } from '../Card';
import { currencyFormat, dateFormat } from '../../services/util';
import { mainColor } from '../../styledConstants';

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

const StyledTransactionsCard = styled.div`
  margin: 10px;
  .date {
    padding: 5px 15px;
  }
`;

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
