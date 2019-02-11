// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { type Link } from '../../types';
import { fetchLinkRequest, fetchLinkReset } from '../../actions/fetchLink';
import LinkInf from '../../components/infoLink';
import Alert from '../../components/alert';
import Loader from '../../components/loader';
import Modal from '../../components/modal';

const DisplayWrapper = styled.section`
  width: 70vw;
`;
type Props = {
  handelClose: () => void,
  linkId: string,
  link: Link,
  loading: boolean,
  error: string,
  fetchLinkReset: typeof fetchLinkReset,
  fetchLink: typeof fetchLinkRequest,
};

class LinkDisplay extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.props.fetchLink(this.props.linkId);
  }

  componentWillUnmount() {
    this.props.fetchLinkReset();
  }

  render() {
    const {
      error, link, loading, handelClose,
    } = this.props;
    return (
      <Modal handelClose={handelClose} loading={loading}>
        {loading ? (
          <Loader />
        ) : (
          <DisplayWrapper>
            {error && (
              <Alert type="error" absolute={false}>
                {error}
              </Alert>
            )}
            {link && <LinkInf link={link} />}
          </DisplayWrapper>
        )}
      </Modal>
    );
  }
}

export default LinkDisplay;
