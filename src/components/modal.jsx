// @flow
import React, { Component, type Node } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Close } from 'styled-icons/material/Close';

const GlobalStyle = createGlobalStyle`
  body {
    overflow:hidden;
  }
`;
const ButtonClose = styled.div`
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  right: -15px;
  top: -15px;
  width: 30px;
  height: 30px;
  margin-left: auto;
  cursor: pointer;
  &:hover {
    color: #b5b5b5;
  }
`;
ButtonClose.displayName = 'ButtonClose';

const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 0;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;
ModalWrapper.displayName = 'ModalWrapper';
const ModalContent = styled.div`
  position: relative;
  z-index: 2;
  display: block;
  padding: 0 15px;
  background: #ffffff;
  border-radius: 5px;
`;
ModalContent.displayName = 'ModalContent';
type Props = {
  children?: Node,
  handelClose: () => void,
  loading?: boolean,
};

class Modal extends Component<Props> {
  static defaultProps = {
    children: null,
    loading: false,
  };

  handelClickModal = (e: SyntheticEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      this.props.handelClose();
    }
  };

  render() {
    return (
      <ModalWrapper onClick={this.handelClickModal}>
        <GlobalStyle />
        {this.props.loading ? (
          this.props.children
        ) : (
          <ModalContent>
            <ButtonClose onClick={this.props.handelClose}>
              <Close />
            </ButtonClose>
            {this.props.children}
          </ModalContent>
        )}
      </ModalWrapper>
    );
  }
}

export default Modal;
