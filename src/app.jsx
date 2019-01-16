// @flow
import React, { Fragment } from "react";
import { hot } from "react-hot-loader/root";
import { Switch, Route } from "react-router-dom";
import NotFound from "./containers/notFound";
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
    <Switch>
      <Route path="/not-found" component={NotFound} />
      <Route
        render={mach => (
          <Fragment>
            <Header />
            <Main {...mach }/>
            <Footer />
          </Fragment>
        )}
      />
    </Switch>
  </AppWrapper>
);

export default hot(App);
