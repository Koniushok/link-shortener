// @flow
import { connect } from "react-redux";
import { loadAll, loadMy } from "../../actions/links";
import LinksDisplay from "./linksDisplay";

const mapStateToProps = ({ links }) => ({
  linksList: links.data,
  error: links.error,
  loading: links.loading
});

const mapDispatchToProps = dispatch => ({
  loadAllLinks: () => dispatch(loadAll()),
  loadMyLinks: () => dispatch(loadMy())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinksDisplay);
