// @flow
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/auth';
import Header from './header';
import { type State } from '../../reducers';

const mapStateToProps = ({ auth }: State) => ({
  auth: !!auth.token,
});

const mapDispatchToProps = { handleLogout: logout };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Header),
);
