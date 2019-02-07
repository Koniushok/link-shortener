// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { Delete } from 'styled-icons/material/Delete';
import { Edit } from 'styled-icons/fa-solid/Edit';
import { type Link } from '../../../types';

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
    box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgba(60, 64, 67, 0.3),
      0 1px 3px 1px rgba(60, 64, 67, 0.15);
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

type Props = {
  handelItemClick: (linkId: string) => void,
  handelEditClick: (linkId: string) => void,
  handelDeleteClick: (linkId: string) => void,
  link: Link,
  index: number,
};

type State = {
  hover: boolean,
};

class TableItem extends Component<Props, State> {
  state = {
    hover: false,
  };

  handelMouseEnter = () => {
    this.setState({ hover: true });
  };

  handelMouseLeave = () => {
    this.setState({ hover: false });
  };

  handelClick = () => {
    this.props.handelItemClick(this.props.link.id);
  };

  handelEditClick = (e: SyntheticEvent<HTMLElement>) => {
    e.stopPropagation();
    this.props.handelEditClick(this.props.link.id);
  };

  handelDeleteClick = (e: SyntheticEvent<HTMLElement>) => {
    e.stopPropagation();
    this.props.handelDeleteClick(this.props.link.id);
  };

  render() {
    const {
      url, shortLink, passage, tags, description, title,
    } = this.props.link;
    return (
      <TableRow
        onMouseEnter={this.handelMouseEnter}
        onMouseLeave={this.handelMouseLeave}
        onClick={this.handelClick}
      >
        <th>{this.props.index}</th>
        <td>{title}</td>
        <td>{shortLink}</td>
        <td>{url}</td>
        <td>{description}</td>
        <td>{passage}</td>
        <td>{tags.length}</td>
        {this.state.hover && (
          <ControlWrapper>
            <Delete onClick={this.handelDeleteClick} />
            <Edit onClick={this.handelEditClick} />
          </ControlWrapper>
        )}
      </TableRow>
    );
  }
}

export default TableItem;
