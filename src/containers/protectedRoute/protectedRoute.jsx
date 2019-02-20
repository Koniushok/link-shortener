// @flow
import React, { type ComponentType } from 'react';
import {
  Route, Redirect, type Location, type ContextRouter, withRouter,
} from 'react-router-dom';
import queryString from 'query-string';
import { type Notice } from '../../types';

type Props = {
  noticeAdd: (notice: $Diff<Notice, { id: string }>) => void,
  protect?: boolean,
  auth: boolean,
  exact?: boolean,
  component?: ComponentType<*>,
  render?: (router: ContextRouter) => React$Node,
  location: Location,
  path: string,
};
const ProtectedRoute = ({
  protect,
  noticeAdd,
  auth,
  component: Component,
  render,
  location,
  exact,
  path,
}: Props) => {
  if (auth && (path === '/login' || path === '/signup')) {
    const { from } = queryString.parse(location.search);
    return <Redirect to={String(from || '/links')} />;
  }
  if (!protect || auth) {
    if (Component) return <Route exact={exact} path={path} component={Component} />;
    if (render) return <Route exact={exact} path={path} render={render} />;
    return null;
  }
  noticeAdd({
    level: 'warning',
    text: 'To go to the page, login',
  });
  return <Redirect to={`/login?from=${path}`} />;
};
ProtectedRoute.defaultProps = {
  protect: false,
  exact: false,
  component: undefined,
  render: undefined,
};
export default withRouter(ProtectedRoute);
