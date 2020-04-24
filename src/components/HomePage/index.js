import React from "react";
import styled from 'styled-components';
import { Greeting } from "../Greeting";
import { AccountOverviewCard } from "./AccountOverviewCard";
import { GivingImpactCard } from "./GivingImpactCard";
import { RecentTransactionsCard } from "./RecentTransactionsCard";
import { PayDayCard } from "./PayDayCard";
import { UpcomingBigPaymentsCard } from "./UpcomingBigPaymentsCard";
import { QuoteOfTheDay } from "./QuoteOfTheDay";
import background from '../../static/images/children-learn-to-make-friends.jpg'

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
          backgroundImage={background}
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
