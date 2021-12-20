import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style/bootstrap-grid.scss";
import "./style/style.scss";
import { Provider } from "react-redux";
import storeHandler from "./redux/store"
import callAPI from "./api";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeHandler(callAPI)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

