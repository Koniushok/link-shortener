// @flow
import React, { Component, type ComponentType } from 'react';
import styled, { keyframes, css } from 'styled-components';
import queryString from 'query-string';
import { Reset } from 'styled-icons/boxicons-regular/Reset';
import { LoaderAlt } from 'styled-icons/boxicons-regular/LoaderAlt';
import { Table } from 'styled-icons/icomoon/Table';
import { List } from 'styled-icons/boxicons-regular/List';
import { ChartBar } from 'styled-icons/fa-regular/ChartBar';
import {
  NavLink as RouterLink,
  withRouter,
  type Location,
  type RouterHistory,
  type Match,
} from 'react-router-dom';
import { MAIN_YELLOW } from '../../constants/color';
import { displayType, type DisplayType } from '../../constants/display';
import { Tag } from '../../components/tags';

const ControlPanelWrapper = styled.div`
  padding-top: 15px;
  border-bottom: 1px solid #e1e4e8;
  background-color: #fafbfc;
  & > section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 980px;
    margin: 0 auto;
    @media (max-width: 1000px) {
      width: 98%;
    }
  }
`;

const InfPanel = styled.div`
  display: inline-flex;
  margin: auto auto auto 0;
  align-items: center;
  & > svg {
    width: 20px;
    margin-left: 20px;
  }
  span {
    font-size: 20px;
    margin-right: 20px;
  }
  div {
    padding: 1px 2px 1px 7px;
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
  handlerLoadLinks: () => void,
  typeDisplayTable: () => void,
  typeDisplayList: () => void,
  typeDisplay: DisplayType,
  loading: boolean,
  location: Location,
  history: RouterHistory,
  clicks: number,
};
class ControlPanel extends Component<Props> {
  handelDeleteTag = () => {
    this.props.history.push(this.props.location.pathname);
  };

  checkActiveMyLink = (match: Match, location: Location) => location.pathname === '/links/my';

  checkActiveAllLink = (match: Match, location: Location) => location.pathname === '/links/all';

  render() {
    const {
      handlerLoadLinks,
      typeDisplayTable,
      typeDisplayList,
      typeDisplay,
      loading,
      location,
      clicks,
    } = this.props;
    const { tag } = queryString.parse(this.props.location.search);
    return (
      <ControlPanelWrapper>
        <section>
          <nav>
            <NavLink to={`/links/my${location.search}`} isActive={this.checkActiveMyLink}>
              My links
            </NavLink>
            <NavLink to={`/links/all${location.search}`} isActive={this.checkActiveAllLink}>
              All links
            </NavLink>
          </nav>
          <InfPanel>
            <ChartBar />
            <span>{clicks}</span>
            {tag && <Tag tag={String(tag)} handleDelete={this.handelDeleteTag} />}
          </InfPanel>

          <div>
            {loading ? <ResetIndicator /> : <ResetButton onClick={handlerLoadLinks} />}
            <TableTypeButton
              onClick={typeDisplayTable}
              enabled={typeDisplay === displayType.TABLE}
            />
            <ListTypeButton onClick={typeDisplayList} enabled={typeDisplay === displayType.LIST} />
          </div>
        </section>
      </ControlPanelWrapper>
    );
  }
}

export default withRouter(ControlPanel);
