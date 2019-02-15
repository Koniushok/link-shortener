// @flow
import React, { Component, type ComponentType } from 'react';
import styled, { keyframes, css } from 'styled-components';
import queryString from 'query-string';
import { Revision } from 'styled-icons/boxicons-regular/Revision';
import { LoaderAlt } from 'styled-icons/boxicons-regular/LoaderAlt';
import { Table } from 'styled-icons/icomoon/Table';
import { List } from 'styled-icons/boxicons-regular/List';
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

const ControlPanelWrapper = styled.section`
  padding-top: 15px;
  border-bottom: 1px solid #e1e4e8;
  background-color: #fafbfc;
  & > section {
    width: 980px;
    margin: 0 auto;
    @media (max-width: 1000px) {
      width: 98%;
    }
  }
`;

const InfPanel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  & > div {
    display: flex;
  }
`;

const Title = styled.div`
  flex-wrap: wrap;
  div {
    height: 20px;
    padding: 1px 2px 1px 7px;
    margin: auto 0 4px 0;
  }
  h1 {
    margin: 0 10px 0 0;
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
const ResetButton = styled(Revision)`
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
    border-top: solid 3px ${MAIN_YELLOW};
    background-color: #fff;
  }
  border-radius: 4px 4px 0 0;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  color: black;
  margin-bottom: -0.5px;
  padding: 7px 15px 8px;
  display: inline-block;
  :hover {
    color: #898989;
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
  auth: boolean,
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
      auth,
    } = this.props;
    const parsed = queryString.parse(location.search);
    const { tag } = parsed;
    parsed.page = '1';
    const search = queryString.stringify({ ...parsed });
    return (
      <ControlPanelWrapper>
        <section>
          <InfPanel>
            <Title>
              <h1>Link list</h1>
              {tag && <Tag tag={String(tag)} handleDelete={this.handelDeleteTag} />}
            </Title>
            <div>
              {loading ? <ResetIndicator /> : <ResetButton onClick={handlerLoadLinks} />}
              <TableTypeButton
                onClick={typeDisplayTable}
                enabled={typeDisplay === displayType.TABLE}
              />
              <ListTypeButton
                onClick={typeDisplayList}
                enabled={typeDisplay === displayType.LIST}
              />
            </div>
          </InfPanel>
          <nav>
            {auth && (
              <NavLink to={`/links/my?${search}`} isActive={this.checkActiveMyLink}>
                My links
              </NavLink>
            )}
            <NavLink to={`/links/all?${search}`} isActive={this.checkActiveAllLink}>
              All links
            </NavLink>
          </nav>
        </section>
      </ControlPanelWrapper>
    );
  }
}

export default withRouter(ControlPanel);
