// @flow
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Home from '../home';
import Login from '../login';
import Registration from '../registration';
import NotFound from './notFound';
import Header from './header';
import LinksDisplay from '../linksDisplay';
import LinkDisplay from '../linkDisplay';
import LinkEditor from '../linkEditor';

const Footer = styled.footer`
  background: #24292e;
  min-height: 70px;
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
    <Switch>
      <Route path="/not-found" component={NotFound} />
      <Main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Registration} />
          <Route
            path="/link/edit/:id"
            render={({ match }) => <LinkEditor linkId={match.params.id} />}
          />
          <Route path="/links/my" exact render={() => <LinksDisplay typeLoad="my" />} />
          <Route path="/links/all" exact render={() => <LinksDisplay typeLoad="all" />} />
          <Route
            path="/links/my/:id"
            exact
            render={({ match }) => <LinkDisplay typeLink="my" linkId={match.params.id} />}
          />
          <Route
            path="/links/all/:id"
            exact
            render={({ match }) => <LinkDisplay typeLink="all" linkId={match.params.id} />}
          />
          <Redirect from="/links" exact to="/links/my" />
          <Redirect to="/not-found" />
        </Switch>
      </Main>
    </Switch>

    <Footer />
  </AppWrapper>
);

export default hot(App);
