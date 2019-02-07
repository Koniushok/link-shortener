// @flow
import React from 'react';
import styled from 'styled-components';
import TableItem from './tableItem';
import { type Link } from '../../../types';
import { type TypeLinksLoad } from '../../../constants/display';

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
  handelDeleteClick: (linkId: string) => void,
  typeLoad: TypeLinksLoad,
  linksList: ?Array<Link>,
};

const TableLink = ({
  handelItemClick,
  handelEditClick,
  linksList,
  handelDeleteClick,
  typeLoad,
}: Props) => (
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
            handelDeleteClick={handelDeleteClick}
            handelItemClick={handelItemClick}
            handelEditClick={handelEditClick}
            typeLoad={typeLoad}
          />
        ))}
    </tbody>
  </Table>
);

export default TableLink;
