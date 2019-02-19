// @flow
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProtectedRoute from './protectedRoute';
import { type State } from '../../reducers';

const mapStateToProps = ({ auth }: State) => ({
  auth: !!auth.token,
});


export default withRouter(
  connect(
    mapStateToProps,
  )(ProtectedRoute),
);
