import {
  LOGIN_REQUESTED,
  LOGOUT,
} from "./types";

export const logIn = (login, password) => ({
  type: LOGIN_REQUESTED,
  login,
  password
});

export const logOut = () => ({
  type: LOGOUT
});
