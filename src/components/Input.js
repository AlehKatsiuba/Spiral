import styled from 'styled-components';
import { mainColor, greyColor } from "../styledConstants";

export const Input = styled.input.attrs(props => ({
  placeholder: props.placeholder
}))`
  padding: 5px 20px;
  border-radius: 20px;
  line-height: 1.4;
  box-sizing: border-box;
  border: 1px solid ${greyColor};
  color: ${props => props.color || mainColor};
  background-color: transparent;
  transition: border-bottom-color 250ms;
  &:focus:not(:disabled) {
    border-color: ${props => props.color || mainColor};
  }
  &:placeholder {
    color: ${greyColor};
  }
  &:disabled {
    opacity: 0.5;
  }
`;

export const PasswordInput = styled(Input).attrs({ type: 'password' })``;
