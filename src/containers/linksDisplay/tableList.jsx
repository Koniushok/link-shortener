// @flow
import React from 'react';
import styled from 'styled-components';
import InfoLink from '../../components/infoLink';
import { type Link } from '../../types';
import { typeLinksLoad, type TypeLinksLoad } from '../../constants/display';

const LinkWrapper = styled.div`
  margin: 10px 0;
  padding: 0 5px 0 15px;
  border-radius: 5px;
  box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
`;
const ListWrapper = styled.div`
  margin-bottom: 60px;
`;

type Props = {
  handelEditClick: (linkId: string) => void,
  handelDeleteClick: (linkId: string) => void,
  typeLoad: TypeLinksLoad,
  linksList: ?Array<Link>,
};
const TableList = ({
  linksList, handelEditClick, handelDeleteClick, typeLoad,
}: Props) => (
  <ListWrapper>
    {linksList
      && linksList.map(link => (
        <LinkWrapper key={link.shortLink}>
          {typeLoad === typeLinksLoad.MY ? (
            <InfoLink
              link={link}
              handelEditClick={handelEditClick}
              handelDeleteClick={handelDeleteClick}
            />
          ) : (
            <InfoLink link={link} />
          )}
        </LinkWrapper>
      ))}
  </ListWrapper>
);

export default TableList;
