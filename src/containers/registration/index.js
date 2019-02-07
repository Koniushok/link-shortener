// @flow
import { connect } from 'react-redux';
import { registryRequest as registryAction } from '../../actions/registry';
import Registration from './registration';
import { type State } from '../../reducers';

const mapStateToProps = ({ registry }: State) => ({
  result: !!registry.profile,
  error: registry.error,
  loading: registry.loading,
});

const mapDispatchToProps = {
  createProfile: registryAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Registration);
