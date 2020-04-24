import React from "react";
import styled from 'styled-components';
import { greyColor } from "../styledConstants";
import { Input } from "./Input";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  & > * {
    margin-top: 10px;
    width: 100%;
  }
`;

const StyledLabel = styled.label`
  .title {
    font-size: 24px;
    margin: 5px 0;
  }
  ${Input} {
    padding: 10px 0;
    width: 100%;
    border: 0;
    border-bottom: 1px solid ${greyColor};
    border-radius: 0;
  }
`;

export function Label({ title, children }) {
  return (
    <StyledLabel>
      <div className="title">{title}</div>
      {children}
    </StyledLabel>
  )
} 
