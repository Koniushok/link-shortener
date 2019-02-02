// @flow
import { connect } from 'react-redux';
import { linksLoadAll, linksLoadMy } from '../../actions/links';
import LinksDisplay from './linksDisplay';

const mapStateToProps = ({ links }) => ({
  linksList: links.data,
  error: links.error,
  loading: links.loading,
});

const mapDispatchToProps = dispatch => ({
  loadAllLinks: () => dispatch(linksLoadAll()),
  loadMyLinks: () => dispatch(linksLoadMy()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LinksDisplay);
