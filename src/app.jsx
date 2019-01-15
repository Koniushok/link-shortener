// @flow
import React from "react";
import { hot } from "react-hot-loader/root";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/main";
import { AppWrapper } from "./components/styled-components/wrappers";

const App = () => (
  <AppWrapper>
    <Header />
    <Main />
    <Footer />
  </AppWrapper>
);

export default hot(App);
