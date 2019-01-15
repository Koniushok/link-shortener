// @flow
import React from "react";
import { hot } from "react-hot-loader/root";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/main";
import { AppDiv, MainDiv } from "./components/styled-components/divs";

const App = () => (
  <AppDiv>
    <Header />
    <MainDiv>
      <Main />
    </MainDiv>
    <Footer />
  </AppDiv>
);

export default hot(App);
