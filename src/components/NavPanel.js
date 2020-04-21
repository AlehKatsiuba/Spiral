import React from 'react';
import styled from 'styled-components';
import { Link } from "./Link";

const StyledNavPanel = styled.nav`
  flex: 1 1 200px;
  text-align: right;
  margin-right: 30px;
  @media only screen and (max-width: 730px) {
    display: none;
  }
  ul {
    li {
      font-size: 24px;
      padding: 10px;
      &.small {
        padding: 5px 10px;
        font-size: 16px;
      }
    }
  }
`;

export function NavPanel({ className }) {
  return (
    <StyledNavPanel className={className}>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/accounts">Accounts</Link>
        </li>
        <li>
          <Link to="/giving">Giving</Link>
        </li>
        <li>
          <Link to="/payments">Payments</Link>
        </li>
        <li>
          <Link to="/cards">Cards</Link>
        </li>
        <li className="small">
          <Link to="/help">Help and support</Link>
        </li>
        <li className="small">
          <Link to="/alerts-settings">Alerts settings</Link>
        </li>
        <li className="small">
          <Link to="/accessebility">Accessebility</Link>
        </li>
        <li className="small">
          <Link to="/policies">Policies and Terms</Link>
        </li>
      </ul>
    </StyledNavPanel>
  )
}
