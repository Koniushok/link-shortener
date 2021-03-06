// @flow
import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { typeLinksLoad } from '../../constants/display';
import Route from '../protectedRoute';
import LinkCreator from '../linkCreator';
import Login from '../login';
import Registration from '../registration';
import NotFound from './notFound';
import Header from '../header';
import LinksDisplay from '../linksDisplay';
import Profile from '../profile';
import Notifications from '../notifications';

const Footer = styled.footer`
  background: #24292e;
  min-height: 50px;
`;

const Main = styled.main`
  flex: auto;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const AppWrapper = styled.div`
  display: flex;
  font-family: 'Segoe UI', Roboto, Arial, sans-serif;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const App = () => (
  <AppWrapper>
    <Header />
    <Notifications />
    <Main>
      <Switch>
        <Route path="/not-found" component={NotFound} />
        <Route protect path="/create" exact component={LinkCreator} />
        <Route protect path="/profile" exact component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Registration} />
        <Route
          protect
          path="/links/my"
          exact
          render={props => <LinksDisplay typeLoad={typeLinksLoad.MY} {...props} />}
        />
        <Route
          path="/links/all"
          exact
          render={props => <LinksDisplay typeLoad={typeLinksLoad.ALL} {...props} />}
        />
        <Redirect from="/links" exact to="/links/all" />
        <Redirect from="/" exact to="/links/all" />
        <Redirect to="/not-found" />
      </Switch>
    </Main>
    <Footer />
  </AppWrapper>
);

export default App;
