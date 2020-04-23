import React from "react";
import styled from 'styled-components';
import { Card, CardInfo, CardMedia, CardDescription, CardFooter, CardList, CardContent } from "./Card";
import { Button } from "./Button";
import { Greeting } from "./Greeting";
import { greenColor, mainColor, greyColor } from "../styledConstants";
import { useApi } from "../hooks/useApi";
import { apiSevice } from "../services/api";
import { Spinner } from "./Spinner";
import PayDayPic from "../static/PayDay.jpg";
import { currencyFormat } from "../services/util";

const CardsDashboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  & > * {
    margin: 10px;
    flex: 1 1 300px;
    max-width: 500px;
  }
`;

const StyledHomePage = styled.div`
  .greeting {
    margin: 10px;
  }
`;

export function HomePage() {
  return (
    <StyledHomePage>
      <Greeting className="greeting" userName="Danny" />
      <CardsDashboard>
        <AccountOverviewCard />
        <GivingImpactCard
          titleImage="https://cms-tc.pbskids.org/parents/expert-tips-and-advice/helping-young-children-learn-to-make-friends-hero.jpg?mtime=20181008025027"
          backgroundImage="https://cms-tc.pbskids.org/parents/expert-tips-and-advice/helping-young-children-learn-to-make-friends-hero.jpg?mtime=20181008025027"
          title="ST Jude"
          subtitle="Your giving impact 5m ago"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer luctus ligula quis mollis rhoncus. Nulla facilisi.
        Donec consectetur lacus vel quam ullamcorper egestas."
        />
        <RecentTransactionsCard />
        <PayDayCard />
        <UpcomingBigPaymentsCard />
        <QuoteOfTheDay
          quote="That which does not kill us makes us stronger."
          author="Friedrich Nietzsche"
        />
      </CardsDashboard>
    </StyledHomePage>
  )
}

const StyledAccountOverviewCard = styled(CardContent)`
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

export function AccountOverviewCard() {
  const { data: balances, isLoading } = useApi(apiSevice.fetchAccounts, []);
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
              value={currencyFormat(count)}
            />
          )}
        </CardList>
      }
    </Card>
  )
}

export function GivingImpactCard({ titleImage, backgroundImage, title, subtitle, description }) {
  return (
    <Card>
      <CardInfo
        image={titleImage}
        title={title}
        subtitle={subtitle}
      />
      <CardMedia
        image={backgroundImage}
      />
      <CardDescription>
        {description}
      </CardDescription>
      <CardFooter>
        <Button>Share to spread the world</Button>
      </CardFooter>
    </Card>
  );
};

export function RecentTransactionsCard() {
  const { data: transactions, isLoading } = useApi(apiSevice.fetchAccounts, []);
  return (
    <Card>
      <CardInfo title="Recent Transactions" subtitle="Jun 29" backgroundColor={mainColor} fontColor="white" />
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

const GreenText = styled.span`
  color: ${greenColor};
`;

export function PayDayCard() {
  const { data: payDay, isLoading } = useApi(apiSevice.fetchPayDay, []);
  return (
    <Card>
      <CardInfo title="It's your payday" subtitle="Jul 31" fontColor="white" backgroundColor={greenColor} />
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

export function UpcomingBigPaymentsCard() {
  const { data: payments, isLoading } = useApi(apiSevice.fetchAccounts, []);
  return (
    <Card>
      <CardInfo
        title="Upcoming big payments card"
        subtitle="Jun 29"
        fontColor="white"
        backgroundColor={mainColor}
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

