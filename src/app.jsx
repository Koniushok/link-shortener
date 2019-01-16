// @flow
import React from "react";
import { hot } from "react-hot-loader/root";
import Footer from "./containers/footer";
import Header from "./containers/header";
import Main from "./containers/main";
import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  font-family: Arial, sans-serif;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const App = () => (
  <AppWrapper>
    <Header />
    <Main />
    <Footer />
  </AppWrapper>
);

export default hot(App);
