import React, { Component } from "react";
import styled from "styled-components";
import TableItem from "./tableItem";

const Div = styled.div`
  overflow: auto;
  width: 1000px;
`;
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
class TableLink extends Component {
  render() {
    return (
      <Div>
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
            {Link.map((link, index) => {
              return (
                <TableItem link={link} index={index} key={link.shortLink} />
              );
            })}
          </tbody>
        </Table>
      </Div>
    );
  }
}

export default TableLink;
