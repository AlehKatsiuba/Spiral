import React from 'react';
import styled, { keyframes } from 'styled-components';
import { mainColor } from '../styledConstants';

const circleFadeDelay = keyframes`
  0%, 39%, 100% { opacity: 0; }
  40% { opacity: 1; } 
`;

const StyledSpinner = styled.div`
  & {
    margin: 100px auto;
    width: 50px;
    height: 50px;
    position: relative;

    .sk-circle {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }

    .sk-circle:before {
      content: '';
      display: block;
      margin: 0 auto;
      width: 15%;
      height: 15%;
      background-color: ${({ color }) => color || mainColor};
      border-radius: 100%;
      animation: ${circleFadeDelay} 1.2s infinite ease-in-out both;
    }
    .sk-circle2 {
      transform: rotate(30deg);
    }
    .sk-circle3 {
      transform: rotate(60deg);
    }
    .sk-circle4 {
      transform: rotate(90deg);
    }
    .sk-circle5 {
      transform: rotate(120deg);
    }
    .sk-circle6 {
      transform: rotate(150deg);
    }
    .sk-circle7 {
      transform: rotate(180deg);
    }
    .sk-circle8 {
      transform: rotate(210deg);
    }
    .sk-circle9 {
      transform: rotate(240deg);
    }
    .sk-circle10 {
      transform: rotate(270deg);
    }
    .sk-circle11 {
      transform: rotate(300deg); 
    }
    .sk-circle12 {
      transform: rotate(330deg); 
    }
    .sk-circle2:before {
      animation-delay: -1.1s; 
    }
    .sk-circle3:before {
      animation-delay: -1s; 
    }
    .sk-circle4:before {
      animation-delay: -0.9s; 
    }
    .sk-circle5:before {
      animation-delay: -0.8s; 
    }
    .sk-circle6:before {
      animation-delay: -0.7s; 
    }
    .sk-circle7:before {
      animation-delay: -0.6s; 
    }
    .sk-circle8:before {
      animation-delay: -0.5s; 
    }
    .sk-circle9:before {
      animation-delay: -0.4s;
    }
    .sk-circle10:before {
      animation-delay: -0.3s;
    }
    .sk-circle11:before {
      animation-delay: -0.2s;
    }
    .sk-circle12:before {
      animation-delay: -0.1s;
    }
  }
`;

export function Spinner(props) {
  return (
    <StyledSpinner {...props}>
      <div class="sk-circle1 sk-circle"></div>
      <div class="sk-circle2 sk-circle"></div>
      <div class="sk-circle3 sk-circle"></div>
      <div class="sk-circle4 sk-circle"></div>
      <div class="sk-circle5 sk-circle"></div>
      <div class="sk-circle6 sk-circle"></div>
      <div class="sk-circle7 sk-circle"></div>
      <div class="sk-circle8 sk-circle"></div>
      <div class="sk-circle9 sk-circle"></div>
      <div class="sk-circle10 sk-circle"></div>
      <div class="sk-circle11 sk-circle"></div>
      <div class="sk-circle12 sk-circle"></div>
    </StyledSpinner>
  )
}