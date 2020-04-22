import { createStore, compose, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import rootSaga from "./sagas";
import { history } from "./reducers/router";

export const sagaMiddleware = createSagaMiddleware();

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(routerMiddleware(history), sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);

export { history };
