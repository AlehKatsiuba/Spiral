import React from "react";
import styled from 'styled-components';
import { Card, CardInfo, CardMedia, CardFooter } from "../Card";
import { Button } from "../Button";
import { greenColor } from "../../styledConstants";
import { useApi } from "../../hooks/useApi";
import { apiSevice } from "../../services/api";
import { Spinner } from "../Spinner";
import PayDayPic from "../../static/images/PayDay.jpg";
import { currencyFormat } from "../../services/util";
import { StyledAccountOverviewCard } from "./AccountOverviewCard";

const GreenText = styled.span`
  color: ${greenColor};
`;

export function PayDayCard() {
  const { data: payDay, isLoading } = useApi(apiSevice.fetchPayDay);
  return (
    <Card>
      <CardInfo
        title="It's your payday"
        subtitle="Jul 31"
        fontColor="white"
        backgroundColor={greenColor}
      />
      {isLoading ?
        <Spinner color={greenColor} /> :
        <>
          <StyledAccountOverviewCard centered>
            <div className="balance"><GreenText>+{currencyFormat(payDay.count)}</GreenText></div>
            <div className="total">{payDay.employerName}</div>
          </StyledAccountOverviewCard>
          <CardMedia image={PayDayPic} />
        </>
      }
      <CardFooter>
        <Button color={greenColor}>See more transactions</Button>
      </CardFooter>
    </Card>
  )
}