import React from "react";
import { Card, CardInfo, CardDescription, CardFooter, CardList } from "../Card";
import { Button } from "../Button";
import { mainColor } from "../../styledConstants";
import { useApi } from "../../hooks/useApi";
import { apiSevice } from "../../services/api";
import { Spinner } from "../Spinner";
import { currencyFormat } from "../../services/util";
import logo from '../../static/images/SpiralLogo.jpg'

export function UpcomingBigPaymentsCard() {
  const { data: payments, isLoading } = useApi(apiSevice.fetchAccounts);
  return (
    <Card>
      <CardInfo
        title="Upcoming big payments card"
        subtitle="Jun 29"
        fontColor="white"
        backgroundColor={mainColor}
        image={logo}
      />
      {isLoading ?
        <Spinner /> :
        <CardList>
          {payments.map(({ id, name, type, count }) =>
            <CardInfo
              key={id}
              title={name}
              subtitle={type}
              value={currencyFormat(count)}
            />)}
        </CardList>
      }
      <CardDescription>Total cash in your checking account:</CardDescription>
      <CardFooter>
        <Button>I need a lone</Button>
        <Button>Transfer</Button>
      </CardFooter>
    </Card>
  );
}