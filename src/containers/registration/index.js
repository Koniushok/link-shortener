// @flow
import { connect } from 'react-redux';
import { registryRequest as registryAction, registryReset } from '../../actions/registry';
import Registration from './registration';
import { type State } from '../../reducers';

const mapStateToProps = ({ registry }: State) => ({
  error: registry.error,
  loading: registry.loading,
});

const mapDispatchToProps = {
  createProfile: registryAction,
  registryReset,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Registration);
