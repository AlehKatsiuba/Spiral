import {
  LOGIN_FAILED,
  LOGOUT,
  LOGIN_SUCCEEDED,
  LOGIN_REQUESTED
} from "../types";

const user = JSON.parse(localStorage.getItem('user'));

const initialUser = user ? { loggedIn: true, user } : {};

export default (state = initialUser, { type, ...user }) => {
  switch (type) {
    case LOGIN_REQUESTED:
      return { loggingIn: true }
    case LOGIN_SUCCEEDED:
      return { loggedIn: true, user };
    case LOGIN_FAILED:
      return {};
    case LOGOUT:
      return {};
    default:
      return state;
  }
};
