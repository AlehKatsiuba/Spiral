import React from "react";
import styled from 'styled-components';
import { Button } from "./Button";
import { mainColor } from "../styledConstants";
import { useHistory } from "react-router-dom";

const StyledNotImplementedPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    font-size: 32px;
    color: ${mainColor};
    margin-bottom: 20px;
    margin-top: -20%;
  }
`;

export function NotImplementedPage() {
  const history = useHistory();
  return (
    <StyledNotImplementedPage>
      <div className="title">Page is not implemented</div>
      <Button onClick={() => history.goBack()}>Go back</Button>
    </StyledNotImplementedPage>
  )
}
