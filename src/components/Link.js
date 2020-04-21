import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { mainColor, greyColor } from '../styledConstants';

export const Link = styled(NavLink)`
  color: ${greyColor};
  text-decoration: none;
  &.active {
    color: ${mainColor};
    outline: none;
  }
  &:hover {
    color: ${mainColor};
  }
`;
