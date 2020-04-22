import { combineReducers } from "redux";

import user from "./user";
import router from "./router";

export default combineReducers({
  router,
  user
});
