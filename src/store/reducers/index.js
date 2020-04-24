import { combineReducers } from "redux";

import authorisation from "./authorisation";
import router from "./router";

export default combineReducers({
  router,
  authorisation
});
