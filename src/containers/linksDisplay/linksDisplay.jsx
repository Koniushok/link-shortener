// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { links as linksActions } from "../../actions/index";
import TableLink from "./tableLink";

type Link = {
  url: string,
  shortLink: string,
  passage: number,
  tags: Array<string>,
  description: string
};

type Props = {
  error: string,
  linksList: ?Array<Link>,
  loading: boolean,
  loadAllLinks: () => void,
  loadMyLinks: () => void,
  typeLoad: "my" | "all"
};
class LinksDisplay extends Component<Props> {
  constructor(props) {
    super(props);
    this.loadLinks();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.typeLoad !== this.props.typeLoad) this.props.loadAllLinks();
  }

  loadLinks = () => {
    if (this.props.typeLoad === "all") this.props.loadAllLinks();
    else this.props.loadMyLinks();
  };

  render() {
    const { linksList, error, loading } = this.props;
    if (error) console.error("LinksDisplay error: ", error);
    console.log("LinksDisplay loading: ", loading);
    return (
      <div>
        {linksList && <TableLink linksList={linksList}>Links</TableLink>}
      </div>
    );
  }
}

const mapStateToProps = ({ links }) => ({
  linksList: links.data,
  error: links.error,
  loading: links.loading
});

const mapDispatchToProps = dispatch => ({
  loadAllLinks: () => dispatch(linksActions.loadAll()),
  loadMyLinks: () => dispatch(linksActions.loadMy())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinksDisplay);
