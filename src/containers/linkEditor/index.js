// @flow
import { connect } from "react-redux";
import { editLinkRequested } from "../../actions/editLink";
import { fetchLink } from "../../actions/link";
import LinkEditor from "./linkEditor";

const mapStateToProps = ({ editLink, link }) => ({
  result: editLink.result,
  editError: editLink.error,
  editLoading: editLink.loading,
  link: link.data,
  fetchError: link.error
});

const mapDispatchToProps = { editLinkRequested, fetchLink };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkEditor);
