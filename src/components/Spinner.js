import React from 'react';
import styled, { keyframes } from 'styled-components';
import { mainColor } from '../styledConstants';

const circleFadeDelay = keyframes`
  0%, 39%, 100% { opacity: 0; }
  40% { opacity: 1; } 
`;

export const Spinner = styled(SpinnerComponent)`
  & {
    margin: 100px auto;
    width: 50px;
    height: 50px;
    position: relative;

    div {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      &:before {
        content: '';
        display: block;
        margin: 0 auto;
        width: 15%;
        height: 15%;
        background-color: ${({ color }) => color || mainColor};
        border-radius: 100%;
        animation: ${circleFadeDelay} 1.2s infinite ease-in-out both;
      }
    }

    div:nth-child(2) {
      transform: rotate(30deg);
      &:before {
        animation-delay: -1.1s; 
      }
    }
    div:nth-child(3) {
      transform: rotate(60deg);
      &:before {
        animation-delay: -1s; 
      }
    }
    div:nth-child(4) {
      transform: rotate(90deg);
      &:before {
        animation-delay: -0.9s; 
      }
    }
    div:nth-child(5) {
      transform: rotate(120deg);
      &:before {
        animation-delay: -0.8s; 
      }
    }
    div:nth-child(6) {
      transform: rotate(150deg);
      &:before {
        animation-delay: -0.7s; 
      }
    }
    div:nth-child(7) {
      transform: rotate(180deg);
      &:before {
        animation-delay: -0.6s; 
      }
    }
    div:nth-child(8) {
      transform: rotate(210deg);
      &:before {
        animation-delay: -0.5s; 
      }
    }
    div:nth-child(9) {
      transform: rotate(240deg);
      &:before {
        animation-delay: -0.4s; 
      }
    }
    div:nth-child(10) {
      transform: rotate(270deg);
      &:before {
        animation-delay: -0.3s; 
      }
    }
    div:nth-child(11) {
      transform: rotate(300deg);
      &:before {
        animation-delay: -0.2s; 
      }
    }
    div:nth-child(12) {
      transform: rotate(330deg); 
      &:before {
        animation-delay: -0.1s; 
      }
    }
  }
`;

export function SpinnerComponent(props) {
  return (
    <div {...props}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}