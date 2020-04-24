import React from 'react';
import styled from 'styled-components';
import { mainColor } from '../styledConstants';
import { useHistory } from 'react-router-dom';
import { Image } from './Image';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../store/actions';
import spiralLogo from '../static/SpiralLogo.jpg'

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
    display: flex;
    flex: 1 1 200px;
    margin-right: 30px;
    align-items: center;
    justify-content: flex-end;
    .logo {
      padding: 0 10px;
    }
    img {
      padding-left: 10px;
    }
  }
  .header {
    flex: 5 1 500px;
    .header-content {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      max-width: 1080px;
      padding-right: 10%;
      @media only screen and (max-width: 730px) {
        padding-right: 0;
      }
      .user {
        display: flex;
        flex: 0 0 300px;
        margin: 0 10px;
        justify-content: flex-end;
        .name {
          font-size: 20px;
          @media only screen and (max-width: 730px) {
            display: none;
          }
        }
        ${Image} {
          margin: 5px 5px 5px 20px;
          flex: 0 0 40px;
          box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
        }
      }
    }
  }
`;

const defautAvatar = 'https://cdn0.iconfinder.com/data/icons/avatar-vol-2-4/512/2-512.png';

export function Header({ className }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.authorisation.user);
  return (
    <StyledHeader className={className}>
      <div className="header-logo">
        <img src={spiralLogo} height="40px" alt="logo" onClick={() => history.push('/home')} />
        <div className="logo">Spiral</div>
      </div>
      <div className="header">
        <div className="header-content">
          <div className="user">
            <div className="name">{user ? user.name : ''}</div>
            <Image
              width='40px'
              height="40px"
              imageUrl={user ? user.avatar : defautAvatar}
              circle
              onClick={() => dispatch(logOut())}
            />
          </div>
        </div>
      </div>
    </StyledHeader>
  )
}