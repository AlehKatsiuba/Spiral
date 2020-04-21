import React from "react";
import styled from 'styled-components';
import { mainColor, greyColor } from "../styledConstants";

export const Input = styled.input.attrs(props => ({
  placeholder: props.placeholder
}))`
  padding: 10px 0;
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  border: 0;
  border-bottom: 1px solid ${greyColor};
  color: ${props => props.color || mainColor};
  background-color: transparent;
  transition: border-bottom-color 250ms;
  &:focus {
    border-bottom-color: ${props => props.color || mainColor};
  }
  &:placeholder {
    color: ${greyColor};
  }
`;

export const PasswordInput = styled(Input).attrs({ type: 'password' })``;
