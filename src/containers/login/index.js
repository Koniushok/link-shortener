// @flow
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, authResetError } from '../../actions/auth';
import Login from './login';
import { type State } from '../../reducers';

const mapStateToProps = ({ auth }: State) => ({
  error: auth.error,
  loading: auth.loading,
  auth: !!auth.token,
});

const mapDispatchToProps = { loginRequest: login, authResetError };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Login),
);
