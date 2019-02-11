// @flow
import { connect } from 'react-redux';
import { createLinkRequested, createLinkReset } from '../../actions/linkCreator';
import linkCreator from './linkCreator';
import { type State } from '../../reducers';

const mapStateToProps = ({ linkCreator: linkCreatorState }: State) => ({
  result: !!linkCreatorState.link,
  error: linkCreatorState.error,
  loading: linkCreatorState.loading,
});

const mapDispatchToProps = { createLink: createLinkRequested, createLinkReset };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(linkCreator);
