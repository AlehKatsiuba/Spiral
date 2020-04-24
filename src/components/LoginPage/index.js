import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Button } from "../Button";
import { mainColor } from "../../styledConstants";
import { Input, PasswordInput } from "../Input";
import { Form, Label } from "../Form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../store/actions";
import { Spinner } from "../Spinner";

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
      position: relative;
      margin: 100px 0;
      ${Spinner} {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
    ${Button} {
      margin-top: 100px;
    }
  }
`;

export function LoginPage() {
  const [{ login, password }, set] = useState({ login: '', password: '' });
  const history = useHistory();
  const dispatch = useDispatch();
  const { loggingIn, loggedIn } = useSelector(state => state.authorisation);

  useEffect(() => {
    if (loggedIn) {
      history.push('/home');
    }
  });

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
              disabled={loggingIn}
            />
          </Label>
          <Label title="Password">
            <PasswordInput
              value={password}
              onChange={({ target: { value } }) => set({ login, password: value })}
              placeholder="Password"
              disabled={loggingIn}
            />
          </Label>
          <Button
            onClick={(e) => {
              e.preventDefault();
              set({ login: '', password: '' });
              dispatch(logIn(login, password));
            }}
            disabled={login.length < 4 || password.length < 4 || loggingIn}
          >LOGIN</Button>
          {loggingIn && <Spinner />}
        </Form>
      </div>
    </StyledLoginPage>
  )
}