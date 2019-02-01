// @flow
import { connect } from "react-redux";
import { linksLoadAll, linksLoadMy } from "../../actions/links";
import LinksDisplay from "./linksDisplay";
import { type State } from "../../reducers";

const mapStateToProps = ({ links }: State) => ({
  linksList: links.data,
  error: links.error,
  loading: links.loading
});

const mapDispatchToProps = { linksLoadAll, linksLoadMy };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinksDisplay);
