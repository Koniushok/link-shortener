// @flow
import React, { type ComponentType } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Update } from 'styled-icons/material/Update';
import { LoaderAlt } from 'styled-icons/boxicons-regular/LoaderAlt';
import { Table } from 'styled-icons/icomoon/Table';
import { List } from 'styled-icons/boxicons-regular/List';
import { NavLink as RouterLink } from 'react-router-dom';
import { MAIN_YELLOW } from '../../constants/color';
import { displayType, type DisplayType } from '../../constants/display';

const ControlPanelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 10px;
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
const buttonSize = css`
  width: 30px;
  height: 30px;
`;
const ResetIndicator = styled(LoaderAlt)`
  display: inline-block;
  ${buttonSize}
  animation: ${rotate} 2s linear infinite;
  margin-right: 10px;
`;
const ResetButton = styled(Update)`
  display: inline-block;
  ${buttonSize}
  cursor: pointer;
  margin-right: 10px;
`;

const typeButton = css`
  background: #e1e1e1;
  box-shadow: inset 0 1px 1px 1px rgba(0, 0, 0, 0.5), inset 0 0 0 60px rgba(0, 0, 0, 0),
    0 1px rgba(255, 255, 255, 0.08);
  color: #000000;
  padding: 0 5px;
  cursor: pointer;
  :hover {
    background: ${MAIN_YELLOW};
    color: black;
  }
`;

const EnabledTypeButton = css`
  background: ${MAIN_YELLOW};
  color: black;
`;

const TableTypeButton: ComponentType<{ enabled: boolean }> = styled(Table)`
  ${buttonSize}
  ${typeButton}
  ${props => props.enabled && EnabledTypeButton}
`;

const ListTypeButton: ComponentType<{ enabled: boolean }> = styled(List)`
  ${buttonSize}
  ${typeButton}
  ${props => props.enabled && EnabledTypeButton}
`;

const NavLink = styled(RouterLink).attrs({
  activeClassName: 'selected',
})`
  &.selected {
    border-bottom: solid 3px ${MAIN_YELLOW};
  }
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  padding-bottom: 2px;
  color: black;
  margin: 5px;
  font-weight: 500;
  display: inline-block;
  :hover {
    color: gray;
  }
`;

type Props = {
  HandlerLoadLinks: () => void,
  typeDisplayTable: () => void,
  typeDisplayList: () => void,
  typeDisplay: DisplayType,
  loading: boolean,
};
const ControlPanel = ({
  HandlerLoadLinks,
  typeDisplayTable,
  typeDisplayList,
  typeDisplay,
  loading,
}: Props) => (
  <ControlPanelWrapper>
    <nav>
      <NavLink to="/links/my">My links</NavLink>
      <NavLink to="/links/all">All links</NavLink>
    </nav>
    <div>
      {loading ? <ResetIndicator /> : <ResetButton onClick={HandlerLoadLinks} />}
      <TableTypeButton onClick={typeDisplayTable} enabled={typeDisplay === displayType.TABLE} />
      <ListTypeButton onClick={typeDisplayList} enabled={typeDisplay === displayType.LIST} />
    </div>
  </ControlPanelWrapper>
);

export default ControlPanel;
