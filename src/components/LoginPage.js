import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Button } from "./Button";
import { mainColor } from "../styledConstants";
import { Input, PasswordInput } from "./Input";
import { Form, Label } from "./Form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../store/actions";
import { LOGIN_SUCCEEDED } from "../store/types";
import { useAuthorisation } from "../hooks/useAuthorisation";

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
  const [{ login, password }, set] = useState({ login: '', password: '' });
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useAuthorisation(state => state.user);

  useEffect(() => {
    if (user) {
      history.push('/home');
      localStorage.setItem('user', JSON.stringify(user));
    }
  });

  /* const savedUser = localStorage.getItem('user');
  if (savedUser) {
    dispatch({ type: LOGIN_SUCCEEDED, ...JSON.parse(savedUser) });
  } */

  return (
    <StyledLoginPage>
      <div className="login-wrapper">
        <h2 className="loginTitle">
          Login
        </h2>
        <Form className="loginForm">
          <Label title="Login">
            <Input
              value={login}
              onChange={({ target: { value } }) => set({ login: value, password })}
              placeholder="Your email address"
            />
          </Label>
          <Label title="Password">
            <PasswordInput
              value={password}
              onChange={({ target: { value } }) => set({ login, password: value })}
              placeholder="Password"
            />
          </Label>
          <Button onClick={() => { dispatch(logIn(login, password)) }}>LOGIN</Button>
        </Form>
      </div>
    </StyledLoginPage>
  )
}