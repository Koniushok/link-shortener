// @flow
import React, { Fragment } from "react";
import { hot } from "react-hot-loader/root";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/main";

const App = () => (
  <Fragment>
    <Header />
    <Main />
    <Footer />
  </Fragment>
);

export default hot(App);
