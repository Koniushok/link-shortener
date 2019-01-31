// @flow
import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Redirect } from "react-router-dom";
import { Close } from "styled-icons/material/Close";
import { type Link } from "../../types";
import InfoLink from "../../components/infoLink";

const GlobalStyle = createGlobalStyle`
  body {
    overflow:hidden;
  }
`;
const ButtonClose = styled.div`
  width: 30px;
  height: 30px;
  margin-left: auto;
  cursor: pointer;
  &:hover {
    color: #b5b5b5;
  }
`;

const Modal = styled.div`
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
const ModalContent = styled.div`
  z-index: 2;
  display: block;
  max-width: 80%;
  background: #ffffff;
  border-radius: 5px;
`;
type Props = {
  link: ?Link,
  handelClose: () => void
};

class LinkModal extends Component<Props> {
  handelClickModal = (e: SyntheticEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      this.props.handelClose();
    }
  };

  render() {
    if (!this.props.link) {
      return <Redirect to="/not-found" />;
    }
    return (
      <Modal onClick={this.handelClickModal}>
        <GlobalStyle />
        <ModalContent>
          <ButtonClose onClick={this.props.handelClose}>
            <Close />
          </ButtonClose>
          <InfoLink link={this.props.link} />
        </ModalContent>
      </Modal>
    );
  }
}

export default LinkModal;
