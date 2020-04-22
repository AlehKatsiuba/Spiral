import React from 'react';
import styled from 'styled-components';
import { backgroundColor } from '../styledConstants';
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { NotImplementedPage } from './NotImplemented';
import { Header } from './Header';
import { NavPanel } from './NavPanel';
import { useSelector } from 'react-redux';
import { useAuthorisation } from '../hooks/useAuthorisation';

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
      & > * {
        max-width: 1080px;
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
            <main className="content">
              <Switch>
                <Route path="/home">
                  <HomePage />
                </Route>
                <Route path="/accounts"><NotImplementedPage /></Route>
                <Route path="/giving"><NotImplementedPage /></Route>
                <Route path="/payments"><NotImplementedPage /></Route>
                <Route path="/cards"><NotImplementedPage /></Route>
              </Switch>
            </main>
          </div>
        )}
        <Redirect path="*" to="/login"></Redirect>
      </Switch>
    </StyledLayout>
  )
}
