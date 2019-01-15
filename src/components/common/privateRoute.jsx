// @flow
import React from "react";
import { Route } from "react-router-dom";
import type { RouteProps } from "react-router-dom";

const auth = false;

const PrivateRoute = (props: RouteProps) => {
  if (auth) return <Route {...props} />;
  return null;
};

export default PrivateRoute;
