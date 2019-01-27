// @flow
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login } from "../../actions/user";
import Login from "./login";

const mapStateToProps = ({ user }) => ({
  error: user.error,
  loading: user.loading,
  auth: user.auth
});

const mapDispatchToProps = dispatch => ({
  loginRequest: (password: string, loginName: string) =>
    dispatch(login(password, loginName))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
