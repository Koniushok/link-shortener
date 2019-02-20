// @flow
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchProfileRequest } from '../../actions/fetchProfile';
import Profile from './profile';
import { type State } from '../../reducers';

const mapStateToProps = ({ fetchProfile }: State) => ({
  loading: fetchProfile.loading,
  profileData: fetchProfile.profile,
});

const mapDispatchToProps = { fetchProfileRequest };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Profile),
);
