import React from "react";
import { Route } from "react-router-dom";

const auth = false;

const PrivateRoute = props => {
  if (auth) return <Route {...props} />;
  return null;
};

export default PrivateRoute;
