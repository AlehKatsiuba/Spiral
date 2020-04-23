import React from 'react';
import styled from 'styled-components';
import { backgroundColor } from '../styledConstants';
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { NotImplementedPage } from './NotImplemented';
import { Header } from './Header';
import { NavPanel } from './NavPanel';
import { useAuthorisation } from '../hooks/useAuthorisation';
import { AccountsPage } from './AccountsPage';
import { CheckingPage } from './CheckingPage';

const StyledLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${backgroundColor};
  & > .page {
    flex: 1 1;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: calc(100% - 50px);
    & > .content {
      flex: 5 1 500px;
      overflow-y: auto;
      height: 100%;
      & > main {
        max-width: 1080px;
        padding-right: 10%;
        @media only screen and (max-width: 730px) {
          padding-right: 0;
        }
      }
    }
  }
`;

export function Layout() {
  const user = useAuthorisation(state => state.user);
  return (
    <StyledLayout>
      <Header>Spiral</Header>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Redirect exact path="/" to="/login"></Redirect>
        {user && (
          <div className="page">
            <NavPanel />
            <div className="content">
              <main>
                <Switch>
                  <Route path="/home">
                    <HomePage />
                  </Route>
                  <Route path="/accounts">
                    <Switch>
                      <Route exact path="/accounts"><AccountsPage /></Route>
                      <Route path="/accounts/cheking"><CheckingPage /></Route>
                      <Route path="/accounts/*"><NotImplementedPage /></Route>
                    </Switch>
                  </Route>
                  <Route path="/giving"><NotImplementedPage /></Route>
                  <Route path="/payments"><NotImplementedPage /></Route>
                  <Route path="/cards"><NotImplementedPage /></Route>
                </Switch>
              </main>
            </div>
          </div>
        )}
        <Redirect path="*" to="/login"></Redirect>
      </Switch>
    </StyledLayout>
  )
}
