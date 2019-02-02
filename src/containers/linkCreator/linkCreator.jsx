// @flow
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { type LinkCreate } from '../../types';
import Alert from '../../components/alert';
import LinkForm from '../../components/linkForm';

const FormWrapper = styled.section`
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    width: 100%;
    max-width: 400px;
  }
`;

type Props = {
  result: string,
  error: string,
  loading: boolean,
  createLink: (link: LinkCreate) => void,
};
class LinkCreator extends Component<Props> {
  handleSubmit = (link: LinkCreate) => {
    this.props.createLink(link);
  };

  render() {
    const { result, error, loading } = this.props;
    return (
      <Fragment>
        {error && <Alert type="error">{error}</Alert>}
        {result && <Alert type="success">{result}</Alert>}
        <FormWrapper>
          <h1>Create link</h1>
          <LinkForm loading={loading} onSubmit={this.handleSubmit} buttonLabel="Create" />
        </FormWrapper>
      </Fragment>
    );
  }
}

export default LinkCreator;
