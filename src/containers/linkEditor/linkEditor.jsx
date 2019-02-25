// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from '../../components/modal';
import { type LinkCreate, type Link } from '../../types';
import LinkForm from '../../components/linkForm';
import { editLinkRequested, editLinkReset } from '../../actions/editLink';
import { fetchLinkRequest } from '../../actions/fetchLink';
import Loader from '../../components/loader';

const FormWrapper = styled.section`
  flex: auto;
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    width: 600px;
    @media (max-width: 660px) {
      width: 85vw;
    }
  }
`;

type Props = {
  handelClose: () => void,
  linkId: string,
  result: boolean,
  link: ?Link,
  fetchError: boolean,
  fetchLoading: boolean,
  editLoading: boolean,
  editLinkReset: typeof editLinkReset,
  editLinkRequested: typeof editLinkRequested,
  fetchLink: typeof fetchLinkRequest,
};

class LinkEditor extends Component<Props> {
  componentDidMount() {
    this.props.fetchLink(this.props.linkId);
  }

  componentDidUpdate() {
    if (this.props.result || this.props.fetchError) {
      this.props.handelClose();
    }
  }

  componentWillUnmount() {
    this.props.editLinkReset();
  }

  handleSubmit = (link: LinkCreate) => {
    if (this.props.link) {
      this.props.editLinkRequested(this.props.link.id, link);
    }
  };

  render() {
    const {
      editLoading, link, handelClose, fetchLoading,
    } = this.props;
    return (
      <Modal handelClose={handelClose} loading={fetchLoading}>
        <FormWrapper>
          {fetchLoading && <Loader />}
          {!fetchLoading && <h1>Edit link</h1>}
          {link && (
            <LinkForm
              loading={editLoading}
              onSubmit={this.handleSubmit}
              linkData={{
                title: link.title,
                url: link.url,
                description: link.description,
                tags: link.tags,
              }}
              buttonLabel="Save"
            />
          )}
        </FormWrapper>
      </Modal>
    );
  }
}

export default LinkEditor;
