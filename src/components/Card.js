import React from "react";
import styled from 'styled-components';
import { greyColor, mainColor, lightGreyColor } from "../styledConstants";
import { Image } from './Image';
import { Link } from "./Link";
import { currencyFormat } from "../services/util";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 275px;
  min-width: 275px;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  border-radius: 4px;
  background-color: white;
  overflow: hidden;
  user-select: none;
  hr {
    border: 0;
    border-top: 1px solid #ccc;
  }
`;

const StyledCardInfo = styled.div`
  display: flex;
  height: 60px;
  box-sizing: border-box;
  padding: 10px 15px;
  align-items: center;
  color: ${props => props.fontColor || 'black'};
  background-color: ${props => props.backgroundColor || 'white'};
  ${Image} {
    margin-right: 15px;
  }
  .title {
    font-size: 18px;
    margin-bottom: 5px;
  }
  .subtitle {
    color: ${props => props.fontColor || greyColor};
    font-weight: 100;
  }
  .value {
    font-size: 24px;
    flex: 1 0;
    text-align: end;
    margin-left: 15px;
    .arrow {
      color: ${mainColor};
      font-weight: bold;
    }
  }
`;

export function CardInfo({ title, subtitle, value, image, ...rest }) {
  let imageNode;
  if (typeof image === 'string') {
    imageNode = <Image
      width="40px"
      height="40px"
      imageUrl={image}
      circle
    />
  } else {
    imageNode = image;
  }
  return (
    <StyledCardInfo {...rest}>
      {imageNode}
      <div>
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
      {value && <div className="value">
        {value}<span className="arrow">﹥</span>
      </div>}
    </StyledCardInfo>
  );
}

export const CardList = styled.div`
  overflow: hidden;
  & > :not(:first-child) {
    border-top: 1px solid ${lightGreyColor};
  }
`;

export const CardMedia = styled(Image)`
  background: center / cover no-repeat;
  background-image: url(${props => props.image});
  height: 200px;
`;

export const CardContent = styled.div`
  padding: 0 10px;
  text-align: ${props => props.centered ? 'center' : 'start'};
`;

export const CardDescription = styled.p`
  padding: 15px;
`;

export const CardFooter = styled.div`
  padding: 15px;
  flex: 1 0 20px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

export const CardSubstrate = styled.div`
  background-color: ${lightGreyColor};
  padding: 1px;
  ${CardList} {
    border-radius: 4px;
  }
`;

export const CardProperty = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
`;
