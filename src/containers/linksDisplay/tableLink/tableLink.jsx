// @flow
import React from 'react';
import styled from 'styled-components';
import TableItem from './tableItem';
import { type Link } from '../../../types';

const Table = styled.table`
  position: relative;
  width: 100%;
  border-collapse: collapse;
  & th {
    text-align: left;
    padding: 0.75rem;
  }
  & thead {
    text-align: inherit;
    border-bottom: 2px solid #dee2e6;
  }
`;

type Props = {
  handelItemClick: (linkId: string) => void,
  handelEditClick: (linkId: string) => void,
  linksList: ?Array<Link>,
};

const TableLink = ({ handelItemClick, handelEditClick, linksList }: Props) => (
  <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>ShortLink</th>
        <th>url</th>
        <th>Description</th>
        <th>Passage</th>
        <th>Tags</th>
      </tr>
    </thead>
    <tbody>
      {linksList
        && linksList.map((link, index) => (
          <TableItem
            link={link}
            index={index}
            key={link.shortLink}
            handelItemClick={handelItemClick}
            handelEditClick={handelEditClick}
          />
        ))}
    </tbody>
  </Table>
);

export default TableLink;
