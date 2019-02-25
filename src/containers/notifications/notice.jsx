// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { Info } from 'styled-icons/icomoon/Info';
import { Warning } from 'styled-icons/icomoon/Warning';
import { CheckCircle } from 'styled-icons/fa-regular/CheckCircle';
import { Error } from 'styled-icons/boxicons-solid/Error';
import { Close } from 'styled-icons/material/Close';
import { type Notice as NoticeType } from '../../types';

const lifetime = 4000;
const deleteTime = 1000;

type Level = 'error' | 'info' | 'warning' | 'success';
const getBackgroundWrapper = (level: Level) => {
  switch (level) {
    case 'error':
      return '#ff4136';
    case 'info':
      return '#0074d9';
    case 'warning':
      return '#f39c12';
    case 'success':
      return '#2ecc40';
    default:
      return '#2ecc40';
  }
};
const NoticeWrapper = styled.div`
  width: 300px;
  min-height: 70px;
  margin-bottom: 20px;
  position: relative;
  background: ${({ level }) => getBackgroundWrapper(level)};
  box-shadow: 1px 7px 14px -5px rgba(0, 0, 0, 0.2);
  animation: move 0.7s linear;
  display: flex;
  justify-content: space-between;
  ${({ remove }) => remove && `animation: remove ${deleteTime / 1000}s ease-out both;`}
  @keyframes remove {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes move {
    0% {
      transform: translate(300px, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;
const Progress = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(to right, #ff9993 50%, #fff 0%, #fff 50%);
  animation: moveProgress ${lifetime / 1000}s linear;
  background-size: 200% 100%;
  @keyframes moveProgress {
    from {
      background-position: 100%;
    }
    to {
      background-position: 0%;
    }
  }
`;
const Icon = styled.div`
  display: flex;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  background: ${({ background }) => background};
  svg {
    width: 20px;
    height: 20px;
    color: #fff;
  }
`;
const DeleteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 7px;
  svg {
    cursor: pointer;
    width: 25px;
    height: 25px;
    color: #fff;
  }
`;
const Text = styled.div`
  display: flex;
  flex: auto;
  padding-left: 10px;
  font-size: 15px;
  align-items: center;
  color: #fff;
`;
const TypeIcon = ({ level }: { level: Level }) => {
  switch (level) {
    case 'error':
      return (
        <Icon background="#bf3128">
          <Error />
        </Icon>
      );
    case 'info':
      return (
        <Icon background="#0057a3">
          <Info />
        </Icon>
      );
    case 'warning':
      return (
        <Icon background="#b6750d">
          <Warning />
        </Icon>
      );
    case 'success':
      return (
        <Icon background="#229930">
          <CheckCircle />
        </Icon>
      );
    default:
      return null;
  }
};
type Props = {
  notice: NoticeType,
  handelDelete: (notice: NoticeType) => void,
};
type State = {
  remove: boolean,
};
class Notice extends Component<Props, State> {
  state = {
    remove: false,
  };

  timeoutDelete = null;

  componentDidMount = () => {
    this.timeoutDelete = setTimeout(this.onDelete, lifetime);
  };

  onDelete = () => {
    this.setState({ remove: true });
    setTimeout(() => this.props.handelDelete(this.props.notice), deleteTime);
  };

  handelClickDelete = () => {
    if (this.timeoutDelete) {
      clearTimeout(this.timeoutDelete);
    }
    this.onDelete();
  };

  render() {
    const { text, level } = this.props.notice;
    return (
      <NoticeWrapper remove={this.state.remove} level={level}>
        <TypeIcon level={level} />
        <Text>{text}</Text>
        <DeleteButton>
          <Close onClick={this.handelClickDelete} />
        </DeleteButton>
        <Progress />
      </NoticeWrapper>
    );
  }
}

export default Notice;
