// @flow
import { connect } from "react-redux";
import { editLinkRequested } from "../../actions/editLink";
import { fetchLinkRequest } from "../../actions/fetchLink";
import LinkEditor from "./linkEditor";
import { type State } from "../../reducers";

const mapStateToProps = ({ editLink, link }: State) => ({
  result: editLink.result,
  editError: editLink.error,
  editLoading: editLink.loading,
  link: link.data,
  fetchError: link.error
});

const mapDispatchToProps = { editLinkRequested, fetchLink: fetchLinkRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkEditor);
