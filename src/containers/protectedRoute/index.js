// @flow
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProtectedRoute from './protectedRoute';
import { noticeAdd } from '../../actions/notice';
import { type State } from '../../reducers';

const mapStateToProps = ({ auth }: State) => ({
  auth: !!auth.token,
});

const mapDispatchToProps = { noticeAdd };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ProtectedRoute),
);
