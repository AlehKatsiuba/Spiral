import { call, put, takeLatest } from "redux-saga/effects";
import {
  LOGIN_REQUESTED,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  LOGOUT
} from "../types";
import { apiSevice } from "../../services/api";

export function* logIn() {
  yield takeLatest(LOGIN_REQUESTED, function* ({ login, password }) {
    try {
      const user = yield call(() => apiSevice.logIn(login, password));
      localStorage.setItem('user', JSON.stringify(user));
      yield put({ type: LOGIN_SUCCEEDED, ...user });
    } catch (e) {
      yield put({ type: LOGIN_FAILED, message: e.message });
    }
  });
}

export function* logOut() {
  yield takeLatest(LOGOUT, function* () {
    localStorage.removeItem('user');
    yield null;
  });
}
