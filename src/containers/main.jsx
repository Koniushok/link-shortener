import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import Home from "./home";
import NotFound from "./notFound";
import Authorization from "./authorization"
import Registration from "./registration";
import Logout from "./logout";

const MainWrapper = styled.main`
  flex: auto;
`;

const Main = () => (
  <MainWrapper>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Authorization} />
      <Route path="/signup" component={Registration} />
      <Route path="/logout" component={Logout} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </MainWrapper>
);

export default Main;
