// @flow
import { connect } from "react-redux";
import { createProfile } from "../../actions/registry";
import Registration from "./registration";
import { type RegistryProfile } from "../../types";

const mapStateToProps = ({ registry }) => ({
  result: registry.result,
  error: registry.error,
  loading: registry.loading
});

const mapDispatchToProps = dispatch => ({
  createProfile: (profile: RegistryProfile) => dispatch(createProfile(profile))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);
