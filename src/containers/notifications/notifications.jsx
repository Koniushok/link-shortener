// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { noticeDelete } from '../../actions/notice';
import Notice from './notice';
import { type Notice as NoticeType } from '../../types';

const Wrapper = styled.div`
  position: fixed;
  bottom: 80px;
  right: 25px;
  z-index: 99;
`;
type Props = {
  noticeList: Array<NoticeType>,
  noticeDelete: typeof noticeDelete,
};
class Notifications extends Component<Props> {
  handelDelete = (notice: NoticeType) => {
    this.props.noticeDelete(notice.id);
  };

  render() {
    return (
      <Wrapper>
        {this.props.noticeList.map(notice => (
          <Notice key={notice.text} notice={notice} handelDelete={this.handelDelete} />
        ))}
      </Wrapper>
    );
  }
}

export default Notifications;
