// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { type Link } from '../../types';
import { fetchLinkRequest } from '../../actions/fetchLink';
import InfoLink from '../../components/infoLink';
import Loader from '../../components/loader';
import Modal from '../../components/modal';

const DisplayWrapper = styled.section`
  width: 70vw;
`;
type Props = {
  error: boolean,
  handelClose: () => void,
  linkId: string,
  link: Link,
  loading: boolean,
  fetchLink: typeof fetchLinkRequest,
};

class LinkDisplay extends Component<Props> {
  componentDidMount() {
    this.props.fetchLink(this.props.linkId);
  }

  componentDidUpdate() {
    if (this.props.error) {
      this.props.handelClose();
    }
  }

  render() {
    const { link, loading, handelClose } = this.props;
    return (
      <Modal handelClose={handelClose} loading={loading}>
        {loading ? <Loader /> : <DisplayWrapper>{link && <InfoLink link={link} />}</DisplayWrapper>}
      </Modal>
    );
  }
}

export default LinkDisplay;
