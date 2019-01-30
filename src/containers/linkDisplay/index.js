// @flow
import { connect } from "react-redux";
import { fetchLink } from "../../actions/link";
import LinkDisplay from "./linkDisplay";

const mapStateToProps = ({ link }) => ({
  notFound: link.notFound,
  link: link.data,
  error: link.error,
  loading: link.loading
});

const mapDispatchToProps = { fetchLink };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkDisplay);
