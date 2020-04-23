import React from 'react';
import styled from 'styled-components';
import { Card, CardInfo } from './Card';
import { apiSevice } from '../services/api';
import { useApi } from '../hooks/useApi';
import { Spinner } from './Spinner';
import { Image } from './Image';
import { mainColor, greyColor, greenColor } from '../styledConstants';
import { useHistory } from 'react-router-dom';
import { currencyFormat } from '../services/util';

const StyledAccountsPage = styled.div`
  .main {
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
    .actions {
      margin: 50px 0;
      display: flex;
      justify-content: space-around;
      .action {
        ${Image} {
          width: 10vw;
          height: 10vw;
          max-width: 120px;
          min-width: 75px;
          max-height: 120px;
          min-height: 75px;
        }
        .title {
          margin-top: 10px;
          font-size: 18px;
          color: ${greyColor};
          text-align: center;
        }
      }
    }
  }
  .accounts {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    & > ${Card} {
      flex: 1 1;
      margin: 10px;
      cursor: pointer;
    }
  }
`;

const StyledSSI = styled.div`
  text-align: center;
  color: ${greenColor};
  padding: 5px 15px 10px;
`;

function SSI({ value }) {
  return (
    <StyledSSI>
      {value > 0 ? '⯅' : '⯆'} Savings is {value > 0 ? 'up' : 'down'} {value}% from last mounth
    </StyledSSI>
  )
}

export function AccountsPage() {
  const { data: balances, isLoading } = useApi(apiSevice.fetchAccounts, []);
  const totalCash = (balances || []).reduce((sum, balance) => sum + balance.count, 0);
  const history = useHistory();
  return (
    <StyledAccountsPage>
      <div className="main">
        <h3 className="balance">
          {currencyFormat(totalCash)}
        </h3>
        <h3 className="total">
          Total available cash
        </h3>
        <div className="actions">
          <div className="action">
            <Image
              circle
              borderColor={mainColor}
            />
            <div className="title">Send</div>
          </div>
          <div className="action">
            <Image
              circle
              borderColor={mainColor}
            />
            <div className="title">Bill Pay</div>
          </div>
          <div className="action">
            <Image
              circle
              borderColor={mainColor}
            />
            <div className="title">Transfer</div>
          </div>
        </div>
      </div>
      {isLoading ?
        <Spinner /> :
        <div className="accounts">
          {balances.map(({ id, name, type, count, ssi }) =>
            <Card key={id}>
              <CardInfo
                title={name}
                subtitle={type}
                value={currencyFormat(count)}
                onClick={() => history.push(`/accounts/${name.toLowerCase()}`)}
              />
              {ssi ? <SSI value={ssi} /> : null}
            </Card>
          )}
        </div>
      }
    </StyledAccountsPage>
  )
}
