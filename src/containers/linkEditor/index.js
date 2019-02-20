// @flow
import { connect } from 'react-redux';
import { editLinkRequested } from '../../actions/editLink';
import { fetchLinkRequest } from '../../actions/fetchLink';
import LinkEditor from './linkEditor';
import { type State } from '../../reducers';

const mapStateToProps = ({ editLink, fetchLink }: State) => ({
  result: !!editLink.link,
  editError: editLink.error,
  fetchLoading: fetchLink.loading,
  editLoading: editLink.loading,
  link: fetchLink.data,
});

const mapDispatchToProps = {
  editLinkRequested,
  fetchLink: fetchLinkRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LinkEditor);
