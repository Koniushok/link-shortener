// @flow
import { connect } from 'react-redux';
import { fetchLinkRequest, fetchLinkReset } from '../../actions/fetchLink';
import LinkDisplay from './linkDisplay';
import { type State } from '../../reducers';

const mapStateToProps = ({ fetchLink }: State) => ({
  link: fetchLink.data,
  error: fetchLink.error,
  loading: fetchLink.loading,
});

const mapDispatchToProps = { fetchLink: fetchLinkRequest, fetchLinkReset };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LinkDisplay);
