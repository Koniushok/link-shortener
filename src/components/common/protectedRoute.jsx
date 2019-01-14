import React from "react";
import { Route, Redirect } from "react-router-dom";

const auth = false;

const ProtectedRoute = props => {
  if (auth) return <Route {...props} />;
  return <Redirect from={props.path} to="/login" />;
};

export default ProtectedRoute;
