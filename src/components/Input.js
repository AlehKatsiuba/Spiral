import React from 'react';
import styled from 'styled-components';
import { mainColor, greyColor } from "../styledConstants";
import searchImg from '../static/images/search.svg'

export const Input = styled.input.attrs(props => ({
  placeholder: props.placeholder
}))`
  padding: 5px 20px;
  border-radius: 20px;
  line-height: 1.4;
  box-sizing: border-box;
  border: 1px solid ${greyColor};
  color: ${props => props.color || mainColor};
  background-color: transparent;
  transition: border-bottom-color 250ms;
  &:focus:not(:disabled) {
    border-color: ${props => props.color || mainColor};
  }
  &:placeholder {
    color: ${greyColor};
  }
  &:disabled {
    opacity: 0.5;
  }
`;

export const PasswordInput = styled(Input).attrs({ type: 'password' })``;

export function SearcInputComponent({ tag, ...rest }) {
  return (
    <div {...rest}>
      <img src={searchImg} />
      <input />
    </div>
  )
}

export const SearchInput = styled(SearcInputComponent)`
  display: flex;
  margin-right: 5px;
  padding: 5px;
  border-radius: 20px;
  line-height: 1.4;
  box-sizing: border-box;
  border: 1px solid ${greyColor};
  color: ${props => props.color || mainColor};
  background-color: white;
  transition: border-bottom-color 250ms;
  img {
    height: 20px;
    margin-right: 5px;
  }
  .tag {
    background-color: ${mainColor};
    border-radius: 4px;
    color: white;
    padding: 0 5px;
    margin-right: 5px;
  }
  input {
    border: none;
    background-color: transparent;
    &:focus:not(:disabled) {
      border-color: ${props => props.color || mainColor};
    }
    &:placeholder {
      color: ${greyColor};
    }
    &:disabled {
      opacity: 0.5;
    }
  }
`;

