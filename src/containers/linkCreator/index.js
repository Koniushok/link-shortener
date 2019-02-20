// @flow
import { connect } from 'react-redux';
import { createLinkRequested, createLinkReset } from '../../actions/linkCreator';
import linkCreator from './linkCreator';
import { type State } from '../../reducers';

const mapStateToProps = ({ linkCreator: linkCreatorState }: State) => ({
  newLink: linkCreatorState.link,
  loading: linkCreatorState.loading,
});

const mapDispatchToProps = { createLink: createLinkRequested, createLinkReset };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(linkCreator);
