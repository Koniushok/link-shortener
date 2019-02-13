// @flow
import { connect } from 'react-redux';
import { linksLoadAll, linksLoadMy, linksLoadReset } from '../../actions/links';
import { deleteLinkRequested, deleteLinkReset } from '../../actions/deleteLink';
import LinksDisplay from './linksDisplay';
import { type State } from '../../reducers';

const mapStateToProps = ({ links, deleteLink }: State) => ({
  linksList: links.data,
  error: links.error || deleteLink.error,
  loading: links.loading,
  deletedLink: deleteLink.deletedLink,
  clicks: links.clicks,
});

const mapDispatchToProps = {
  linksLoadAll,
  linksLoadMy,
  deleteLink: deleteLinkRequested,
  deleteLinkReset,
  linksLoadReset,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LinksDisplay);
