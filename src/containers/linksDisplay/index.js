// @flow
import { connect } from 'react-redux';
import { linksLoadAll, linksLoadMy } from '../../actions/links';
import { deleteLinkRequested } from '../../actions/deleteLink';
import LinksDisplay from './linksDisplay';
import { type State } from '../../reducers';

const mapStateToProps = ({ links, auth }: State) => ({
  linksList: links.data,
  linkCount: links.linkCount,
  loading: links.loading,
  auth: !!auth.token,
});

const mapDispatchToProps = {
  linksLoadAll,
  linksLoadMy,
  deleteLink: deleteLinkRequested,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LinksDisplay);
