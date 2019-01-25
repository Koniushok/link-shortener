// @flow
import { connect } from "react-redux";
import { links as linksActions } from "../../actions/index";
import LinksDisplay from "./linksDisplay";

const mapStateToProps = ({ links }) => ({
  linksList: links.data,
  error: links.error,
  loading: links.loading
});

const mapDispatchToProps = dispatch => ({
  loadAllLinks: () => dispatch(linksActions.loadAll()),
  loadMyLinks: () => dispatch(linksActions.loadMy())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinksDisplay);
