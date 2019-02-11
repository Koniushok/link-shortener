// @flow
import { connect } from 'react-redux';
import { editLinkRequested, editLinkReset } from '../../actions/editLink';
import { fetchLinkRequest, fetchLinkReset } from '../../actions/fetchLink';
import LinkEditor from './linkEditor';
import { type State } from '../../reducers';

const mapStateToProps = ({ editLink, fetchLink }: State) => ({
  result: !!editLink.link,
  fetchLoading: fetchLink.loading,
  editError: editLink.error,
  editLoading: editLink.loading,
  link: fetchLink.data,
  fetchError: fetchLink.error,
});

const mapDispatchToProps = {
  editLinkRequested,
  fetchLink: fetchLinkRequest,
  editLinkReset,
  fetchLinkReset,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LinkEditor);
