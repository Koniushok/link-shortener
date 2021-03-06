// @flow
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/auth';
import Login from './login';
import { type State } from '../../reducers';

const mapStateToProps = ({ auth }: State) => ({
  loading: auth.loading,
  auth: !!auth.token,
});

const mapDispatchToProps = { loginRequest: login };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Login),
);
