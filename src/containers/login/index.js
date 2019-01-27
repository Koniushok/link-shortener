// @flow
import { connect } from "react-redux";
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
