// @flow
import React, { type ComponentType } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Reset } from 'styled-icons/boxicons-regular/Reset';
import { LoaderAlt } from 'styled-icons/boxicons-regular/LoaderAlt';
import { Table } from 'styled-icons/icomoon/Table';
import { List } from 'styled-icons/boxicons-regular/List';
import { ChartBar } from 'styled-icons/fa-regular/ChartBar';
import { NavLink as RouterLink } from 'react-router-dom';
import { MAIN_YELLOW } from '../../constants/color';
import { displayType, type DisplayType } from '../../constants/display';
import { Tag } from '../../components/tags';

const ControlPanelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 10% 0 10%;
  border-bottom: 1px solid #e1e4e8;
  background-color: #fafbfc;
`;

const InfPanel = styled.div`
  display: inline-flex;
  height: 100%;
  align-items: center;
  & > svg {
    width: 25px;
    margin-left: 20px;
  }
  span {
    font-size: 25px;
    margin-right: 20px;
  }
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
const ResetButton = styled(Reset)`
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
    border-bottom: solid 4px ${MAIN_YELLOW};
  }
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  color: black;
  padding: 5px 10px;
  margin-right: 10px;
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
  handelDeleteTag: () => void,
  typeDisplay: DisplayType,
  loading: boolean,
  locationSearch: string,
  tag: string,
};
const ControlPanel = ({
  HandlerLoadLinks,
  typeDisplayTable,
  typeDisplayList,
  handelDeleteTag,
  typeDisplay,
  loading,
  locationSearch,
  tag,
}: Props) => (
  <ControlPanelWrapper>
    <nav>
      <NavLink
        to={`/links/my${locationSearch}`}
        isActive={(match, location) => location.pathname === '/links/my'}
      >
        My links
      </NavLink>
      <NavLink
        to={`/links/all${locationSearch}`}
        isActive={(match, location) => location.pathname === '/links/all'}
      >
        All links
      </NavLink>

      <InfPanel>
        <ChartBar />
        <span>0</span>
        {tag && <Tag tag={tag} handleDelete={handelDeleteTag} />}
      </InfPanel>
    </nav>

    <div>
      {loading ? <ResetIndicator /> : <ResetButton onClick={HandlerLoadLinks} />}
      <TableTypeButton onClick={typeDisplayTable} enabled={typeDisplay === displayType.TABLE} />
      <ListTypeButton onClick={typeDisplayList} enabled={typeDisplay === displayType.LIST} />
    </div>
  </ControlPanelWrapper>
);

export default ControlPanel;
