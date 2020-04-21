import React from 'react';
import styled from 'styled-components';
import { backgroundColor } from './styledConstants';
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginPage } from './components/LoginPage';
import { HomePage } from './components/HomePage';
import { NotImplementedPage } from './components/NotImplemented';
import { Header } from './components/Header';
import { NavPanel } from './components/NavPanel';

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

export default function Layout() {
  return (
    <StyledLayout>
      <Header>Spiral</Header>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Redirect exact path="/" to="/login"></Redirect>
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
      </Switch>
    </StyledLayout>
  )
}
