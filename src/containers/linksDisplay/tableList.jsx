// @flow
import React from 'react';
import styled from 'styled-components';
import InfoLink from '../../components/infoLink';
import { type Link } from '../../types';

const LinkWrapper = styled.div`
  margin: 10px 15px;
  padding: 0 5px 0 15px;
  border-radius: 5px;
  box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
`;

const TableList = ({ linksList }: { linksList: ?Array<Link> }) => (
  <div>
    {linksList
      && linksList.map(link => (
        <LinkWrapper key={link.shortLink}>
          <InfoLink link={link} />
        </LinkWrapper>
      ))}
  </div>
);

export default TableList;
