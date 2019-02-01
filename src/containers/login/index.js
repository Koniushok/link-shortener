// @flow
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/auth';
import Login from './login';

const mapStateToProps = ({ auth }) => ({
  error: auth.error,
  loading: auth.loading,
  auth: auth.status,
});

const mapDispatchToProps = { loginRequest: login };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Login),
);
