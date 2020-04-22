import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components';
import { mainColor, greyColor, backgroundColor } from './styledConstants';
import store, { history } from "./store/store";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";

const GlogalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: ${backgroundColor};
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${greyColor};
    border-radius: 8px;
    &:hover {
      background-color: ${mainColor};
    }
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlogalStyle />
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
