// @flow
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { logout as logoutActions } from '../../actions/auth';
import ProtectedRoute from '../../components/protectedRoute';
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

type Props = {
  logout: typeof logoutActions,
  auth: boolean,
};
const App = ({ logout, auth }: Props) => (
  <AppWrapper>
    <Header handleLogout={logout} auth={auth} />
    <Switch>
      <Route path="/not-found" component={NotFound} />
      <Main>
        <Switch>
          <ProtectedRoute auth={auth} path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Registration} />
          <ProtectedRoute
            auth={auth}
            path="/link/edit/:id"
            render={({ match }) => <LinkEditor linkId={match.params.id} />}
          />
          <ProtectedRoute
            auth={auth}
            path="/links/my"
            exact
            render={() => <LinksDisplay typeLoad="my" />}
          />
          <ProtectedRoute
            auth={auth}
            path="/links/all"
            exact
            render={() => <LinksDisplay typeLoad="all" />}
          />
          <ProtectedRoute
            auth={auth}
            path="/links/my/:id"
            exact
            render={({ match }) => <LinkDisplay typeLink="my" linkId={match.params.id} />}
          />
          <ProtectedRoute
            auth={auth}
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

export default App;
