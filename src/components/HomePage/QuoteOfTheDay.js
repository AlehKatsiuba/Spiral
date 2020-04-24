import React from "react";
import styled from 'styled-components';
import { Card, CardInfo, CardFooter, CardContent } from "../Card";
import { Button } from "../Button";
import { mainColor, greyColor } from "../../styledConstants";
import logo from '../../static/images/SpiralLogo.jpg'

const Quote = styled.h3`
  font-size: 32px;
  margin: 70px 20px 30px;
`;

const Author = styled.h3`
  color: ${greyColor};
  margin-bottom: 30px;
`;

export function QuoteOfTheDay({ quote, author }) {
  return (
    <Card>
      <CardInfo
        title="Quote of the day"
        subtitle="Jun 29"
        fontColor="white"
        backgroundColor={mainColor}
        image={logo}
      />
      <CardContent centered>
        <Quote>“{quote}”</Quote>
        <Author>{author}</Author>
      </CardContent>
      <CardFooter>
        <Button>Share to spread the world</Button>
      </CardFooter>
    </Card>
  );
}
