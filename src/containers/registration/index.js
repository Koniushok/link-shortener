// @flow
import { connect } from 'react-redux';
import { registry as registryAction } from '../../actions/registry';
import Registration from './registration';

const mapStateToProps = ({ registry }) => ({
  result: registry.result,
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
