import {
  LOGIN_REQUESTED,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
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
