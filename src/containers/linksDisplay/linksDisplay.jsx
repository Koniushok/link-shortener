// @flow
import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { Update } from "styled-icons/material/Update";
import { LoaderAlt } from "styled-icons/boxicons-regular/LoaderAlt";
import { connect } from "react-redux";
import { NavLink as RouterLink } from "react-router-dom";
import { links as linksActions } from "../../actions/index";
import TableLink from "./tableLink";
import Alert from "../../components/alert";

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const ResetIndicator = styled(LoaderAlt)`
  display: inline-block;
  width: 30px;
  height: 30px;
  animation: ${rotate} 2s linear infinite;
`;
const ResetButton = styled(Update)`
  width: 30px;
  height: 30px;
  display: inline-block;
  cursor: pointer;
`;
const NavLink = styled(RouterLink).attrs({
  activeClassName: "selected"
})`
  &.selected {
    border-bottom: solid 3px #ffeb00;
  }
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  padding-bottom: 2px;
  color: black;
  margin: 5px;
  font-weight: 500;
  display: inline-block;
  :hover {
    color: gray;
  }
`;
const DisplayWrapper = styled.div`
  width: 100%;
`;
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
    if (prevProps.typeLoad !== this.props.typeLoad) this.loadLinks();
  }

  loadLinks = () => {
    if (this.props.typeLoad === "all") this.props.loadAllLinks();
    else this.props.loadMyLinks();
  };

  render() {
    const { linksList, error, loading } = this.props;
    return (
      <DisplayWrapper>
        {error && <Alert type="error">{error}</Alert>}
        <NavLink to="/links/my">My links</NavLink>
        <NavLink to="/links/all">All links</NavLink>
        {loading ? (
          <ResetIndicator />
        ) : (
          <ResetButton onClick={this.loadLinks} />
        )}
        <TableLink linksList={linksList} />
      </DisplayWrapper>
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
