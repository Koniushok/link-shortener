// @flow
import React, { Component } from "react";
import styled from "styled-components";
import { withRouter, type RouterHistory, type Match } from "react-router-dom";
import { Delete } from "styled-icons/material/Delete";
import { Edit } from "styled-icons/fa-solid/Edit";
import { type Link } from "../../../types";

const TableRow = styled.tr`
  & td {
    text-align: left;
    padding: 0.75rem;
    max-width: 5em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  border-top: 1px solid #dee2e6;

  :hover {
    cursor: pointer;
    box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0,
      0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
  }
`;

const ControlWrapper = styled.td`
  display: inline-flex;
  position: absolute;
  right: 0px;
  && {
    padding: 6px 0px;
  }
  & svg {
    color: #727373;
    width: 30px;
    height: 30px;
    margin-left: 5px;
    :hover {
      color: black;
    }
  }
`;

const ButtonControl = () => (
  <ControlWrapper>
    <Delete />
    <Edit />
  </ControlWrapper>
);

type Props = {
  history: RouterHistory,
  match: Match,
  link: Link,
  index: number
};

type State = {
  hover: boolean
};

class TableItem extends Component<Props, State> {
  state = {
    hover: false
  };

  handelMouseEnter = () => {
    this.setState({ hover: true });
  };

  handelMouseLeave = () => {
    this.setState({ hover: false });
  };

  handelClick = () => {
    const { history, match, link } = this.props;
    history.push(`${match.path}/${link.id}`);
  };

  render() {
    const { url, shortLink, passage, tags, description } = this.props.link;
    return (
      <TableRow
        onMouseEnter={this.handelMouseEnter}
        onMouseLeave={this.handelMouseLeave}
        onClick={this.handelClick}
      >
        <th>{this.props.index}</th>
        <td>{shortLink}</td>
        <td>{url}</td>
        <td>{description}</td>
        <td>{passage}</td>
        <td>{tags.length}</td>
        {this.state.hover && <ButtonControl />}
      </TableRow>
    );
  }
}

export default withRouter(TableItem);
