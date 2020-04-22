import {
  LOGIN_FAILED,
  LOGOUT,
  LOGIN_SUCCEEDED
} from "../types";

const defaultUser = null;

export default (state = defaultUser, { type, ...payload }) => {
  switch (type) {
    case LOGIN_SUCCEEDED:
      return { ...state, ...payload };
    case LOGIN_FAILED:
      return state;
    case LOGOUT:
      return null;
    default:
      return state;
  }
};
