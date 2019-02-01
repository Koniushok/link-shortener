// @flow
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Home from '../home';
import Authorization from '../authorization';
import Registration from '../registration';
import NotFound from './notFound';
import Header from './header';

const Footer = styled.footer`
  background: #24292e;
  min-height: 70px;
`;

const Main = styled.main`
  flex: auto;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
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
          <Route path="/login" component={Authorization} />
          <Route path="/signup" component={Registration} />
          <Redirect to="/not-found" />
        </Switch>
      </Main>
    </Switch>

    <Footer />
  </AppWrapper>
);

export default hot(App);
