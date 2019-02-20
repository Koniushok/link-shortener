// @flow
import { connect } from 'react-redux';
import { noticeDelete } from '../../actions/notice';
import Notifications from './notifications';
import { type State } from '../../reducers';

const mapStateToProps = ({ notice }: State) => ({
  noticeList: notice,
});

const mapDispatchToProps = { noticeDelete };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notifications);
