import React from 'react';
import styled from 'styled-components';
import { mainColor } from '../styledConstants';
import { useHistory } from 'react-router-dom';
import { Image } from './Image';

const StyledHeader = styled.header`
  display: flex;
  background-color: ${mainColor};
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
  color: white;
  font-size: 26px;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  .header-logo {
    flex: 1 1 200px;
    text-align: right;
    margin-right: 30px;
    .logo {
      padding-right: 10px;
    }
  }
  .header {
    flex: 5 1 500px;
    .header-content {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      max-width: 1080px;
      .user {
        flex: 0 0 50px;
        margin: 0 10px;
        ${Image} {
          margin: 5px;
        }
      }
    }
  }
`;

const defautAvatar = 'https://i1.pngguru.com/preview/137/834/449/cartoon-cartoon-character-avatar-drawing-film-ecommerce-facial-expression-png-clipart.jpg';

export function Header({ className }) {
  const history = useHistory();
  return (
    <StyledHeader className={className}>
      <div className="header-logo">
        <div className="logo">Spiral</div>
      </div>
      <div className="header">
        <div className="header-content">
          <div className="user">
            <Image
              width='40px'
              height="40px"
              imageUrl={defautAvatar}
              circle
              onClick={() => history.push('login')}
            />
          </div>
        </div>
      </div>
    </StyledHeader>
  )
}