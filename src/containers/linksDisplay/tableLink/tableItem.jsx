// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { ChartBar } from 'styled-icons/fa-regular/ChartBar';
import { Tags } from 'styled-icons/fa-solid/Tags';
import { Delete } from 'styled-icons/material/Delete';
import { Edit } from 'styled-icons/fa-solid/Edit';
import { type Link } from '../../../types';
import { typeLinksLoad, type TypeLinksLoad } from '../../../constants/display';

const TableRow = styled.tr`
  & td {
    max-width: 5em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    svg {
      color: #7b7b7b;
      width: 16px;
      margin-right: 5px;
    }
    &:last-child {
      max-width: 3em;
      padding: 0;
    }
  }
  border-top: 1px solid #dee2e6;

  :hover {
    cursor: pointer;
    box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgba(60, 64, 67, 0.3),
      0 1px 3px 1px rgba(60, 64, 67, 0.15);
  }
`;

const ControlWrapper = styled.div`
  display: flex;
  && svg {
    color: #727373;
    width: 30px;
    margin-right: 0;
    height: 30px;
    :hover {
      color: black;
    }
  }
`;

type Props = {
  handelItemClick: (linkId: string) => void,
  handelEditClick: (linkId: string) => void,
  handelDeleteClick: (linkId: string) => void,
  typeLoad: TypeLinksLoad,
  link: Link,
  index: number,
};

type State = {
  hover: boolean,
};

class TableItem extends Component<Props, State> {
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
      url, shortLink, clicks, tags, description, title,
    } = this.props.link;
    return (
      <TableRow
        onClick={this.handelClick}
      >
        <th>{this.props.index}</th>
        <td>{title}</td>
        <td>{shortLink}</td>
        <td>{url}</td>
        <td>{description}</td>
        <td>
          <ChartBar />
          {clicks}
        </td>
        <td>
          <Tags />
          {tags.length}
        </td>
        <td>
          {this.props.typeLoad === typeLinksLoad.MY && (
            <ControlWrapper>
              <Delete onClick={this.handelDeleteClick} />
              <Edit onClick={this.handelEditClick} />
            </ControlWrapper>
          )}
        </td>
      </TableRow>
    );
  }
}

export default TableItem;
