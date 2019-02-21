// @flow
import React, { Component, type ComponentType } from 'react';
import {
  Route, Redirect, type Location, type ContextRouter,
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

class ProtectedRoute extends Component<Props> {
  static defaultProps = {
    protect: false,
    exact: false,
    component: undefined,
    render: undefined,
  };

  componentWillReceiveProps = (nextProps: Props) => {
    if (nextProps.protect && !nextProps.auth) {
      this.props.noticeAdd({
        level: 'warning',
        text: 'To go to the page, login',
      });
    }
  };

  render() {
    const {
      protect, auth, component, render, location, exact, path,
    } = this.props;
    if (auth && (path === '/login' || path === '/signup')) {
      const { from } = queryString.parse(location.search);
      return <Redirect to={String(from || '/links')} />;
    }
    if (!protect || auth) {
      if (component) return <Route exact={exact} path={path} component={component} />;
      if (render) return <Route exact={exact} path={path} render={render} />;
      return null;
    }
    return <Redirect to={`/login?from=${path}`} />;
  }
}

export default ProtectedRoute;
