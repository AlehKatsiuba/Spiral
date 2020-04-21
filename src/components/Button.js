import React from "react";
import styled from 'styled-components';
import { mainColor } from "../styledConstants";

export const Button = styled.button`
  border-radius: 20px;
  padding: 10px 20px;
  line-height: 16px;
  height: 36px;
  border: 1px solid ${props => props.color || mainColor};
  color: ${props => props.color || mainColor};
  background-color: ${props => props.backgroundColor || 'transparent'};
  transition: color 250ms, background-color 250ms;
  &:hover {
    background-color: ${props => props.color || mainColor};
    color: white;
  }
`;