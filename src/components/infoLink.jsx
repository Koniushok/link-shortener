// @flow
import React from "react";
import styled from "styled-components";
import Tags from "./tags";

type Link = {
  url: string,
  shortLink: string,
  passage: number,
  tags: Array<string>,
  description: string
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  td,
  th {
    padding: 0.75rem;
    font-size: 18px;
    vertical-align: top;
    text-align: left;
  }
  a {
    word-break: break-all;
  }
`;
const InfoLink = ({ link }: { link: Link }) => (
  <Table>
    <tbody>
      <tr>
        <th>url</th>
        <td>
          <a href={link.url} rel="noreferrer noopener" target="_blank">
            {link.url}
          </a>
        </td>
      </tr>
      <tr>
        <th>shortLink</th>
        <td>
          <a rel="noreferrer noopener" target="_blank" href={link.shortLink}>
            {link.shortLink}
          </a>
        </td>
      </tr>
      <tr>
        <th>passage</th>
        <td>{link.passage}</td>
      </tr>
      <tr>
        <th>tags</th>
        <td>
          <Tags tag="valera" tagList={link.tags} />
        </td>
      </tr>
    </tbody>
  </Table>
);

export default InfoLink;
