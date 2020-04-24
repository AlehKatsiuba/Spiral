import React from "react";
import styled from 'styled-components';
import { Card, CardInfo, CardList, CardContent } from "../Card";
import { mainColor, greyColor } from "../../styledConstants";
import { useApi } from "../../hooks/useApi";
import { apiSevice } from "../../services/api";
import { Spinner } from "../Spinner";
import { currencyFormat } from "../../services/util";
import { useHistory } from "react-router-dom";

export const StyledAccountOverviewCard = styled(CardContent)`
  .header {
    margin: 30px 0;
    font-size: 20px;
  }
  .balance {
    margin: 30px 0 10px;
    font-size: 32px;
  }
  .total {
    margin: 10px 0 30px;
    color: ${greyColor};
  }
`;

export const Arrow = styled.span`
  color: ${mainColor};
  font-weight: bold;
  &::after {
    content: '﹥'
  }
`;

export function AccountOverviewCard() {
  const { data: balances, isLoading } = useApi(apiSevice.fetchAccounts);
  const history = useHistory();
  const totalCash = (balances || []).reduce((sum, balance) => sum + balance.count, 0);
  return (
    <Card>
      <StyledAccountOverviewCard centered>
        <h3 className="header">Accounts Overview</h3>
        <div className="balance">{currencyFormat(totalCash)}</div>
        <div className="total">Total Available cash</div>
      </StyledAccountOverviewCard>
      {isLoading ?
        <Spinner /> :
        <CardList>
          {balances.map(({ id, name, type, count }) =>
            <CardInfo
              key={id}
              title={name}
              subtitle={type}
              value={<>{currencyFormat(count)}<Arrow /></>}
              onClick={() => history.push(`/accounts/${name.toLowerCase()}`)}
            />
          )}
        </CardList>
      }
    </Card>
  )
}