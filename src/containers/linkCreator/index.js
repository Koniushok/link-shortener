// @flow
import { connect } from "react-redux";
import { createLink } from "../../actions/linkCreator";
import linkCreator from "./linkCreator";

const mapStateToProps = ({ linkCreatorState }) => ({
  result: linkCreatorState.result,
  error: linkCreatorState.error,
  loading: linkCreatorState.loading
});

const mapDispatchToProps = { createLink };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(linkCreator);
