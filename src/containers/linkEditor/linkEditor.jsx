// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from '../../components/modal';
import { type LinkCreate, type Link } from '../../types';
import Alert from '../../components/alert';
import LinkForm from '../../components/linkForm';
import { editLinkRequested, editLinkReset } from '../../actions/editLink';
import { fetchLinkRequest, fetchLinkReset } from '../../actions/fetchLink';
import Loader from '../../components/loader';

const FormWrapper = styled.section`
  flex: auto;
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    width: 60vw;
  }
`;

type Props = {
  handelClose: () => void,
  linkId: string,
  link: ?Link,
  result: boolean,
  fetchError: string,
  editError: string,
  fetchLoading: boolean,
  editLoading: boolean,
  editLinkReset: typeof editLinkReset,
  fetchLinkReset: typeof fetchLinkReset,
  editLinkRequested: typeof editLinkRequested,
  fetchLink: typeof fetchLinkRequest,
};

class LinkEditor extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.props.fetchLink(this.props.linkId);
  }

  componentWillUnmount() {
    this.props.fetchLinkReset();
    this.props.editLinkReset();
  }

  handleSubmit = (link: LinkCreate) => {
    if (this.props.link) {
      this.props.editLinkRequested(this.props.link.id, link);
    }
  };

  render() {
    const {
      result,
      fetchError,
      editLoading,
      link,
      editError,
      handelClose,
      fetchLoading,
    } = this.props;
    const error = fetchError || editError;
    return (
      <Modal handelClose={handelClose} loading={fetchLoading}>
        {error && <Alert type="error">{error}</Alert>}
        {result && <Alert type="success">Link successfully changed</Alert>}
        <FormWrapper>
          {fetchLoading ? <Loader /> : <h1>Edit link</h1>}
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
              tags={link.tags}
              buttonLabel="Save"
            />
          )}
        </FormWrapper>
      </Modal>
    );
  }
}

export default LinkEditor;
