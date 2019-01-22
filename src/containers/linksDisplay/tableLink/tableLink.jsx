// @flow
import React from "react";
import styled from "styled-components";
import TableItem from "./tableItem";

type Link = {
  url: string,
  shortLink: string,
  passage: number,
  tags: Array<string>,
  description: string
};

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
  linksList: Array<Link>
};

const TableLink = (props: Props) => (
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
      {props.linksList.map((link, index) => (
        <TableItem link={link} index={index} key={link.shortLink} />
      ))}
    </tbody>
  </Table>
);

export default TableLink;
