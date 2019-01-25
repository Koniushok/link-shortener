// @flow
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./containers/app";
import Store from "./store";

const root = document.getElementById("root");

if (root !== null)
  ReactDOM.render(
    <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    root
  );
