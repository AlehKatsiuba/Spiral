import React from "react";
import styled from 'styled-components';
import { greyColor } from "../styledConstants";

export const Card = styled.div`
  min-width: 275px;
  min-width: 275px;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  border-radius: 4px;
  background-color: white;
  overflow: hidden;
  hr {
    border: 0;
    border-top: 1px solid #ccc;
  }
  & > :not(:first-child) {
    margin-top: 10px;
  }
`;

const StyledCardInfo = styled.div`
  display: flex;
  height: 40px;
  padding: 10px;
  align-items: center;
  color: ${props => props.fontColor || 'black'};
  background-color: ${props => props.backgroundColor || 'white'};
  .image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: center / contain no-repeat;
    margin-right: 20px;
  }
  .title {
    font-size: 20px;
    margin-bottom: 5px;
  }
  .subtitle {
    color: ${props => props.fontColor || greyColor};
    font-weight: 100;
  }
  .value {
    font-size: 26px;
    flex: 1 0;
    text-align: end;
  }
`;

export function CardInfo({ title, subtitle, value, imageUrl, ...rest }) {
  return (
    <StyledCardInfo {...rest}>
      {imageUrl && <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>}
      <div>
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
      {value && <div className="value">{value}</div>}
    </StyledCardInfo>
  );
}

export const CardList = styled.div`
  & > :not(:first-child) {
    border-top: 1px solid ${greyColor};
  }
`;

export const CardMedia = styled.div`
  background: center / cover no-repeat;
  background-image: url(${props => props.imageUrl});
  min-height: 200px;
`;

export const CardContent = styled.div`
  padding: 0 10px;
  text-align: ${props => props.centered ? 'center' : 'start'};
`;

export const CardDescription = styled.p`
  padding: 0 10px;
`;

export const CardFooter = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-around;
`;
