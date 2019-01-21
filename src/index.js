// @flow
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./containers/app";

const root = document.getElementById("root");

if (root !== null)
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    root
  );
