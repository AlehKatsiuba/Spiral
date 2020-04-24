import React from "react";
import { Card, CardInfo, CardFooter, CardList } from "../Card";
import { Button } from "../Button";
import { useApi } from "../../hooks/useApi";
import { apiSevice } from "../../services/api";
import { Spinner } from "../Spinner";
import { currencyFormat } from "../../services/util";
import { mainColor } from "../../styledConstants";
import logo from '../../static/images/SpiralLogo.jpg'

export function RecentTransactionsCard() {
  const { data: transactions, isLoading } = useApi(apiSevice.fetchAccounts);
  return (
    <Card>
      <CardInfo
        title="Recent Transactions"
        subtitle="Jun 29"
        backgroundColor={mainColor}
        fontColor="white"
        image={logo}
      />
      {isLoading ?
        <Spinner /> :
        <CardList>
          {transactions.map(({ id, name, type, count }) =>
            <CardInfo
              key={id}
              title={name}
              subtitle={type}
              value={currencyFormat(count)}
            />
          )}
        </CardList>
      }
      <CardFooter>
        <Button>See more transactions</Button>
      </CardFooter>
    </Card>
  )
}