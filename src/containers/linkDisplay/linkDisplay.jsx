// @flow
import React, { Component, Fragment } from 'react';
import { type Link } from '../../types';
import { fetchLinkRequest } from '../../actions/fetchLink';
import LinkInf from '../../components/infoLink';
import Alert from '../../components/alert';

type Props = {
  linkId: string,
  link: Link,
  error: string,
  fetchLink: typeof fetchLinkRequest,
};

class LinkDisplay extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.props.fetchLink(this.props.linkId);
  }

  render() {
    const { error, link } = this.props;
    return (
      <Fragment>
        {error && <Alert type="error">{error}</Alert>}
        {link && <LinkInf link={link} />}
      </Fragment>
    );
  }
}

export default LinkDisplay;
