// @flow
import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { type Link } from "../../types";
import LinkInf from "../../components/infoLink";
import Alert from "../../components/alert";

type Props = {
  notFound: boolean,
  linkId: string,
  link: Link,
  error: string,
  fetchLink: (id: string) => void
};

class LinkDisplay extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.props.fetchLink(this.props.linkId);
  }

  render() {
    const { error, link, notFound } = this.props;
    if (notFound) {
      return <Redirect to="/not-found" />;
    }
    return (
      <Fragment>
        {error && <Alert type="error">{error}</Alert>}
        {link && <LinkInf link={link} />}
      </Fragment>
    );
  }
}

export default LinkDisplay;
