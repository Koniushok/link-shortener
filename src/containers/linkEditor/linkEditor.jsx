// @flow
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { type LinkCreate, type Link } from '../../types';
import Alert from '../../components/alert';
import LinkForm from '../../components/linkForm';
import { editLinkRequested } from '../../actions/editLink';

const FormWrapper = styled.section`
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    width: 60vw;
  }
`;

type Props = {
  linkId: string,
  link: ?Link,
  result: string,
  fetchError: string,
  editError: string,
  editLoading: boolean,
  editLinkRequested: typeof editLinkRequested,
  fetchLink: (id: string) => void,
};

class LinkEditor extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.props.fetchLink(this.props.linkId);
  }

  handleSubmit = (link: LinkCreate) => {
    if (this.props.link) {
      this.props.editLinkRequested(this.props.link.id, link);
    }
  };

  render() {
    const {
      result, fetchError, editLoading, link, editError,
    } = this.props;
    const error = fetchError || editError;
    return (
      <Fragment>
        {error && <Alert type="error">{error}</Alert>}
        {result && <Alert type="success">{result}</Alert>}
        <FormWrapper>
          <h1>Edit link</h1>
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
      </Fragment>
    );
  }
}

export default LinkEditor;
