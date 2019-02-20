// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { type LinkCreate, type Link } from '../../types';
import { createLinkRequested, createLinkReset } from '../../actions/linkCreator';
import LinkForm from '../../components/linkForm';
import ShortLink from '../../components/shortLink';

const FormWrapper = styled.section`
  flex: auto;
  display: flex;
  padding: 0 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    width: 100%;
    max-width: 400px;
  }
`;

type Props = {
  newLink: ?Link,
  loading: boolean,
  createLinkReset: typeof createLinkReset,
  createLink: typeof createLinkRequested,
};
class LinkCreator extends Component<Props> {
  componentWillUnmount() {
    this.props.createLinkReset();
  }

  handleSubmit = (link: LinkCreate) => {
    this.props.createLink(link);
  };

  render() {
    const { newLink, loading } = this.props;
    return (
      <FormWrapper>
        <h1>Create link</h1>
        {newLink && <ShortLink link={newLink.shortLink} />}
        <LinkForm loading={loading} onSubmit={this.handleSubmit} buttonLabel="Create" />
      </FormWrapper>
    );
  }
}

export default LinkCreator;
