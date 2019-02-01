// @flow
import { connect } from "react-redux";
import { createLink } from "../../actions/linkCreator";
import linkCreator from "./linkCreator";
import { type State } from "../../reducers";

const mapStateToProps = ({ linkCreator: linkCreatorState }: State) => ({
  result: linkCreatorState.result,
  error: linkCreatorState.error,
  loading: linkCreatorState.loading
});

const mapDispatchToProps = { createLink };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(linkCreator);
