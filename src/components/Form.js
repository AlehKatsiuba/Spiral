import React from "react";
import styled from 'styled-components';
import { mainColor, greyColor } from "../styledConstants";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
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
`;

export function Label({ title, children }) {
  return (
    <StyledLabel>
      <div className="title">{title}</div>
      {children}
    </StyledLabel>
  )
} 
