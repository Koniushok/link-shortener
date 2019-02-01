// @flow
import { connect } from "react-redux";
import { fetchLinkRequest } from "../../actions/link";
import LinkDisplay from "./linkDisplay";
import { type State } from "../../reducers";

const mapStateToProps = ({ link }: State) => ({
  link: link.data,
  error: link.error,
  loading: link.loading
});

const mapDispatchToProps = { fetchLink: fetchLinkRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkDisplay);
