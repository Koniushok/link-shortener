// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { type Link } from '../../types';
import { fetchLinkRequest } from '../../actions/fetchLink';
import LinkInf from '../../components/infoLink';
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
  constructor(props: Props) {
    super(props);
    this.props.fetchLink(this.props.linkId);
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.error) {
      this.props.handelClose();
    }
  }

  render() {
    const { link, loading, handelClose } = this.props;
    return (
      <Modal handelClose={handelClose} loading={loading}>
        {loading ? <Loader /> : <DisplayWrapper>{link && <LinkInf link={link} />}</DisplayWrapper>}
      </Modal>
    );
  }
}

export default LinkDisplay;
