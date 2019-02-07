// @flow
import { connect } from 'react-redux';
import { linksLoadAll, linksLoadMy } from '../../actions/links';
import { deleteLinkRequested } from '../../actions/deleteLink';
import LinksDisplay from './linksDisplay';
import { type State } from '../../reducers';

const mapStateToProps = ({ links, deleteLink }: State) => ({
  linksList: links.data,
  error: links.error || deleteLink.error,
  loading: links.loading,
  deletedLink: deleteLink.deletedLink,
});

const mapDispatchToProps = { linksLoadAll, linksLoadMy, deleteLink: deleteLinkRequested };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LinksDisplay);
