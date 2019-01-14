// @flow
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import Authorization from "../pages/authorization";
import Registration from "../pages/registration";
import Logout from "../pages/logout";

const Main = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={Authorization} />
    <Route path="/signup" component={Registration} />
    <Route path="/logout" component={Logout} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
);

export default Main;
