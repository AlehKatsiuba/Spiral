import React from "react";
import styled from 'styled-components';
import { Card, CardInfo, CardMedia, CardDescription, CardFooter, CardList, CardContent } from "./Card";
import { Button } from "./Button";
import { Greeting } from "./Greeting";
import { greenColor, mainColor, greyColor } from "../styledConstants";
import { useApi } from "../hooks/useApi";
import { apiSevice } from "../services/api";

const StyledHomePage = styled.div`
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    & > * {
      margin: 10px;
      flex: 1 1 300px;
      max-width: 500px;
    }
  }
  .greeting {
    margin: 10px;
  }
`;

export function HomePage() {
  const { data: accounts, isLoading } = useApi(apiSevice.fetchAccounts);
  return (
    <StyledHomePage>
      <Greeting className="greeting" userName="Danny" />
      <div className="cards">
        <AccountOverviewCard balances={accounts ?? []} />
        <GivingImpactCard
          titleImage="https://cms-tc.pbskids.org/parents/expert-tips-and-advice/helping-young-children-learn-to-make-friends-hero.jpg?mtime=20181008025027"
          backgroundImage="https://cms-tc.pbskids.org/parents/expert-tips-and-advice/helping-young-children-learn-to-make-friends-hero.jpg?mtime=20181008025027"
          title="ST Jude"
          subtitle="Your giving impact 5m ago"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer luctus ligula quis mollis rhoncus. Nulla facilisi.
        Donec consectetur lacus vel quam ullamcorper egestas.
        Donec ultricies ligula velit, quis maximus libero hendrerit bibendum.
        Nullam rhoncus elit vitae metus auctor lobortis. Nam egestas nisl vitae ornare convallis."
        />
        <RecentTransactionsCard />
        <PayDayCard />
        <UpcomingBigPaymentsCard />
        <QuoteOfTheDay
          quote="That which does not kill us makes us stronger."
          author="Friedrich Nietzsche"
        />
      </div>
    </StyledHomePage>
  )
}

const StyledAccountOverviewCard = styled(CardContent)`
  .header {
    margin-top: 20px;
    font-size: 20px;
  }
  .balance {
    margin-top: 20px;
    font-size: 28px;
  }
  .total {
    margin-top: 10px;
    color: ${greyColor};
  }
`;

export function AccountOverviewCard({ balances = [] }) {
  const totalCash = balances.reduce((sum, balance) => sum + balance.count, 0);
  return (
    <Card>
      <StyledAccountOverviewCard centered>
        <h3 className="header">Accounts Overview</h3>
        <div className="balance">${totalCash}</div>
        <div className="total">Total Available cash</div>
      </StyledAccountOverviewCard>
      <CardList>
        {balances.map(({ id, name, type, count }) => <CardInfo key={id} title={name} subtitle={type} value={`$${count}`} />)}
      </CardList>
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

export function RecentTransactionsCard({ transactions = [] }) {
  return (
    <Card>
      <CardInfo title="Recent Transactions" subtitle="Jun 29" backgroundColor={mainColor} fontColor="white" />
      <CardList>
        {transactions.map(({ id, name, type, count }) => <CardInfo key={id} title={name} subtitle={type} value={`$${count}`} />)}
        <CardInfo title="Cheking" subtitle="Main account (...0353)" value="$1,1500.20" />
        <CardInfo title="Cheking" subtitle="Main account (...0353)" value="$1,1500.20" />
        <CardInfo title="Cheking" subtitle="Main account (...0353)" value="$1,1500.20" />
      </CardList>
      <CardFooter>
        <Button>See more transactions</Button>
      </CardFooter>
    </Card>
  )
}

export function PayDayCard() {
  return (
    <Card>
      <CardInfo title="It's your payday" subtitle="Jul 31" fontColor="white" backgroundColor={greenColor} />
      <CardMedia image="" />
      <CardFooter>
        <Button color={greenColor}>See more transactions</Button>
      </CardFooter>
    </Card>
  )
}

export function UpcomingBigPaymentsCard({ payments = [] }) {
  return (
    <Card>
      <CardInfo title="Upcoming big payments card" subtitle="Jun 29" fontColor="white" backgroundColor={mainColor} />
      <CardList>
        {payments.map(({ id, name, type, count }) => <CardInfo key={id} title={name} subtitle={type} value={`$${count}`} />)}
        <CardInfo title="Cheking" subtitle="Main account (...0353)" value="$1,1500.20" />
        <CardInfo title="Cheking" subtitle="Main account (...0353)" value="$1,1500.20" />
        <CardInfo title="Cheking" subtitle="Main account (...0353)" value="$1,1500.20" />
      </CardList>
      <CardDescription>Total cash in your checking account:</CardDescription>
      <CardFooter>
        <Button>I need a lone</Button>
        <Button>Transfer</Button>
      </CardFooter>
    </Card>
  );
}

const Quote = styled.h3`
  font-size: 25px;
  padding: 50px 20px 30px;
`;

const Author = styled.h3`
  color: ${greyColor};
`;

export function QuoteOfTheDay({ quote, author }) {
  return (
    <Card>
      <CardInfo title="Quote of the day" subtitle="Jun 29" fontColor="white" backgroundColor={mainColor} />
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

