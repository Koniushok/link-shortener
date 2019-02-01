// @flow
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import type { Node } from 'react';
import type { RouteProps, ContextRouter } from 'react-router-dom';

const auth = false;

const ProtectedRoute = ({ component: Component, render, ...rest }: RouteProps) => (
  <Route
    {...rest}
    render={(props: ContextRouter): Node => {
      if (!auth) {
        return (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        );
      }
      if (Component) return <Component {...props} />;
      if (render) return render(props);
      return <div />;
    }}
  />
);

export default ProtectedRoute;
