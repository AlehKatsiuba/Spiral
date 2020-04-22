import { all } from "redux-saga/effects";
import { logIn, logOut } from "./user";

export default function* rootSaga() {
  yield all([logIn(), logOut()]);
}
