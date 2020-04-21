import React from "react";
import styled from 'styled-components';
import { Button } from "./Button";
import { mainColor } from "../styledConstants";
import { Input, PasswordInput } from "./Input";
import { Form, Label } from "./Form";
import { useHistory } from "react-router-dom";

const StyledLoginPage = styled.div`
  padding: 50px;
  .login-wrapper {
    margin: 0 auto;
    max-width: 500px;
    .loginTitle {
      display: inline-block;
      font-weight: bold;
      font-size: 26px;
      border-bottom: 2px solid ${mainColor};
    }
    .loginForm {
      margin: 50px 0;
    }
  }
`;

export function LoginPage() {
  const history = useHistory();
  return (
    <StyledLoginPage>
      <div className="login-wrapper">
        <h2 className="loginTitle">
          Login
        </h2>
        <Form className="loginForm">
          <Label title="Login">
            <Input placeholder="Your email address" />
          </Label>
          <Label title="Password">
            <PasswordInput placeholder="Password" />
          </Label>
          <Button onClick={() => { history.push('/home') }}>LOGIN</Button>
        </Form>
      </div>
    </StyledLoginPage>
  )
}