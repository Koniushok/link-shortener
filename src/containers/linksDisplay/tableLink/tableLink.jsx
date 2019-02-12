// @flow
import React from 'react';
import styled from 'styled-components';
import TableItem from './tableItem';
import { type Link } from '../../../types';
import { type TypeLinksLoad } from '../../../constants/display';

const TableWrapper = styled.div`
  overflow: auto;
  padding-bottom: 5px;
  border: 1px solid #dfe2e5;
`;

const Table = styled.table`
  position: relative;
  width: 100%;
  border-collapse: collapse;
  & th,
  td {
    text-align: left;
    padding: 0.75rem;
  }
  & thead {
    background: #f1f8ff;
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
  <TableWrapper>
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>ShortLink</th>
          <th>url</th>
          <th>Description</th>
          <th>Clicks</th>
          <th>Tags</th>
          <th />
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
  </TableWrapper>
);

export default TableLink;
