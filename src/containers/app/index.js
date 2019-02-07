// @flow
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/auth';
import App from './app';
import { type State } from '../../reducers';

const mapStateToProps = ({ auth }: State) => ({
  auth: !!auth.token,
});

const mapDispatchToProps = { logout };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);
