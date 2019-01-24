// @flow
import React, { Component } from "react";
import styled, { keyframes, css } from "styled-components";
import { Update } from "styled-icons/material/Update";
import { LoaderAlt } from "styled-icons/boxicons-regular/LoaderAlt";
import { Table } from "styled-icons/icomoon/Table";
import { List } from "styled-icons/boxicons-regular/List";
import { connect } from "react-redux";
import { NavLink as RouterLink } from "react-router-dom";
import { links as linksActions } from "../../actions/index";
import TableLink from "./tableLink";
import TableList from "./tableList";
import Alert from "../../components/alert";

const ControlPanel = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
`;
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
const TableTypeButton = styled(Table)`
  width: 30px;
  background: #e1e1e1;
  height: 30px;
  box-shadow: inset 0 1px 1px 1px rgba(0, 0, 0, 0.5),
    inset 0 0 0 60px rgba(0, 0, 0, 0), 0 1px rgba(255, 255, 255, 0.08);
  color: #000000;
  padding: 0 5px;
  ${props => props.enabled && StyleEnabledButton}
  cursor: pointer;
  :hover {
    background: #ffd600;
    color: black;
  }
`;
const ListTypeButton = styled(List)`
  width: 30px;
  background: #e1e1e1;
  height: 30px;
  box-shadow: inset 0 1px 1px 1px rgba(0, 0, 0, 0.5),
    inset 0 0 0 60px rgba(0, 0, 0, 0), 0 1px rgba(255, 255, 255, 0.08);
  color: #000000;
  ${props => props.enabled && StyleEnabledButton}
  cursor: pointer;
  :hover {
    background: #ffd600;
    color: black;
  }
`;
const StyleEnabledButton = css`
  background: #ffd600;
  color: black;
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
type State = {
  typeDisplay: "table" | "list"
};
class LinksDisplay extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.loadLinks();
  }
  state = {
    typeDisplay: "table"
  };
  typeDisplayTable = () => {
    this.setState({ typeDisplay: "table" });
  };
  typeDisplayList = () => {
    this.setState({ typeDisplay: "list" });
  };
  componentDidUpdate(prevProps) {
    if (prevProps.typeLoad !== this.props.typeLoad) this.loadLinks();
  }

  loadLinks = () => {
    if (this.props.typeLoad === "all") this.props.loadAllLinks();
    else this.props.loadMyLinks();
  };

  render() {
    const { linksList, error, loading } = this.props;
    const { typeDisplay } = this.state;
    return (
      <DisplayWrapper>
        {error && <Alert type="error">{error}</Alert>}
        <ControlPanel>
          <nav>
            <NavLink to="/links/my">My links</NavLink>
            <NavLink to="/links/all">All links</NavLink>
          </nav>
          <div>
            {loading ? (
              <ResetIndicator />
            ) : (
              <ResetButton onClick={this.loadLinks} />
            )}
            <TableTypeButton
              onClick={this.typeDisplayTable}
              enabled={typeDisplay === "table"}
            />
            <ListTypeButton
              onClick={this.typeDisplayList}
              enabled={typeDisplay === "list"}
            />
          </div>
        </ControlPanel>
        {typeDisplay === "table" && <TableLink linksList={linksList} />}
        {typeDisplay === "list" && <TableList linksList={linksList} />}
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
