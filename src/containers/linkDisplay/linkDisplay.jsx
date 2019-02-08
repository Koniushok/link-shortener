// @flow
import React, { Component } from 'react';
import { type Link } from '../../types';
import { fetchLinkRequest } from '../../actions/fetchLink';
import LinkInf from '../../components/infoLink';
import Alert from '../../components/alert';
import Loader from '../../components/loader';
import Modal from '../../components/modal';

type Props = {
  handelClose: () => void,
  linkId: string,
  link: Link,
  loading: boolean,
  error: string,
  fetchLink: typeof fetchLinkRequest,
};

class LinkDisplay extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.props.fetchLink(this.props.linkId);
  }

  render() {
    const {
      error, link, loading, handelClose,
    } = this.props;
    return (
      <Modal handelClose={handelClose} loading={loading}>
        {loading && <Loader />}
        {error && <Alert type="error">{error}</Alert>}
        {link && <LinkInf link={link} />}
      </Modal>
    );
  }
}

export default LinkDisplay;
