// @flow
import React from "react";
import styled from "styled-components";
import TableItem from "./tableItem";
import Link from "./fakeLinkList";

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

const TableLink = () => (
  <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>ShortLink</th>
        <th>url</th>
        <th>Description</th>
        <th>Passage</th>
        <th>Tags</th>
      </tr>
    </thead>
    <tbody>
      {Link.map((link, index) => (
        <TableItem link={link} index={index} key={link.shortLink} />
      ))}
    </tbody>
  </Table>
);

export default TableLink;
