// @flow
import { connect } from 'react-redux';
import { fetchLinkRequest } from '../../actions/fetchLink';
import LinkDisplay from './linkDisplay';
import { type State } from '../../reducers';

const mapStateToProps = ({ fetchLink }: State) => ({
  link: fetchLink.data,
  error: fetchLink.error,
  loading: fetchLink.loading,
});

const mapDispatchToProps = { fetchLink: fetchLinkRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LinkDisplay);
