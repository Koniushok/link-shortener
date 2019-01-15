// @flow
import React from "react";
import { Route, Redirect } from "react-router-dom";
import type { typeRoute } from "react-router-dom";

const auth = false;

const ProtectedRoute: typeRoute = ({
  component: Component,
  render,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (!auth)
        return (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        );
      return Component ? <Component {...props} /> : render(props);
    }}
  />
);

export default ProtectedRoute;
