// @flow
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import { Sort } from 'styled-icons/material/Sort';
import { type Location, type RouterHistory, Link as RouteNavLink } from 'react-router-dom';
import { linksLoadAll, linksLoadMy } from '../../actions/links';
import { deleteLinkRequested } from '../../actions/deleteLink';
import TableLink from './tableLink';
import TableList from './tableList';
import ControlPanel from './controlPanel';
import LinkDisplay from '../linkDisplay';
import LinkEditor from '../linkEditor';
import { type Link } from '../../types';
import Pagination from './pagination';
import {
  displayType,
  typeLinksLoad,
  type TypeLinksLoad,
  type DisplayType,
} from '../../constants/display';

const itemLimit = 8;
const pageLimit = 3;
const DisplayWrapper = styled.section`
  width: 980px;
  margin: 20px auto 0 auto;
  @media (max-width: 1000px) {
    width: 98%;
  }
`;
const NavLink = styled(RouteNavLink)`
  border-radius: 5px;
  display: block;
  background: #6c757d;
  text-align: center;
  text-decoration: none;
  color: white;
  font-weight: 600;
  padding: 1px 21px;
  font-size: 19px;
  height: 26px;
  :hover {
    background: #405153;
  }
`;
const ListPanel = styled.div`
  margin: 0 0 5px auto;
  display: flex;
  justify-content: flex-end;
  svg {
    width: 25px;
    height: 25px;
  }
  select {
    margin-right: 10px;
    background: #fff;
    color: #000;
    border: none;
    border-bottom: 1px solid #ccc;
    :focus {
      outline: none;
    }
  }
  select option {
    background: #e8e8e8;
  }
`;
const CreateBlock = styled.div`
  display: flex;
  justify-content: center;
  span {
    font-size: 23px;
    font-weight: bold;
    margin-right: 40px;
  }
`;

type Props = {
  linksList: ?Array<Link>,
  loading: boolean,
  history: RouterHistory,
  linkCount: number,
  linksLoadAll: typeof linksLoadAll,
  linksLoadMy: typeof linksLoadMy,
  deleteLink: typeof deleteLinkRequested,
  typeLoad: TypeLinksLoad,
  location: Location,
  auth: boolean,
};
type State = {
  typeDisplay: DisplayType,
  selectedLinkID: string,
  editLinkID: string,
};
class LinksDisplay extends Component<Props, State> {
  state = {
    typeDisplay: displayType.TABLE,
    selectedLinkID: '',
    editLinkID: '',
  };

  componentDidMount() {
    if (window.innerWidth < 600) {
      this.setState({ typeDisplay: displayType.LIST });
    }
    this.loadLinks();
  }

  componentWillReceiveProps(nextProps: Props) {
    const nextParsed = queryString.parse(nextProps.location.search);
    const parsed = queryString.parse(this.props.location.search);
    if (parsed.tag !== nextParsed.tag) {
      this.setState({ selectedLinkID: '', editLinkID: '' });
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (
      prevProps.typeLoad !== this.props.typeLoad
      || prevProps.location.search !== this.props.location.search
    ) {
      this.loadLinks();
    }
  }

  checkQueryString = () => {
    const parsed = queryString.parse(this.props.location.search);
    let { page, items } = parsed;
    let check = true;
    if (!page || Number(page) < 1) {
      page = '1';
      check = false;
    }
    if (!items || Number(items) < 1) {
      items = String(itemLimit);
      check = false;
    }
    if (!check) {
      const search = queryString.stringify({
        items,
        page,
        tag: parsed.tag,
        sort: parsed.sort,
      });
      this.props.history.replace(`${this.props.location.pathname}?${search}`);
      return check;
    }

    return check;
  };

  typeDisplayTable = () => {
    this.setState({ typeDisplay: displayType.TABLE });
  };

  typeDisplayList = () => {
    this.setState({ typeDisplay: displayType.LIST });
  };

  loadLinks = () => {
    const { search } = this.props.location;
    if (this.checkQueryString()) {
      switch (this.props.typeLoad) {
        case typeLinksLoad.ALL:
          this.props.linksLoadAll(search);
          break;
        case typeLinksLoad.MY:
          this.props.linksLoadMy(search);
          break;
        default:
          break;
      }
    }
  };

  handelSelectChange = (e: SyntheticEvent<HTMLSelectElement>) => {
    const parsed = queryString.parse(this.props.location.search);
    const search = queryString.stringify({ ...parsed, sort: e.currentTarget.value });
    this.props.history.push(`${this.props.location.pathname}?${search}`);
  };

  getSelectValue = () => {
    const { sort } = queryString.parse(this.props.location.search);
    return String(sort);
  };

  handelItemClick = (linkId: string) => {
    this.setState({ selectedLinkID: linkId });
  };

  handelEditClick = (linkId: string) => {
    this.setState({ editLinkID: linkId });
  };

  handelDeleteClick = (linkId: string) => {
    this.props.deleteLink(linkId);
  };

  handelModalClose = () => {
    this.setState({ selectedLinkID: '', editLinkID: '' });
  };

  onPageChange = (page: number) => {
    const parsed: any = queryString.parse(this.props.location.search);
    parsed.page = String(page);
    this.props.history.push(`${this.props.location.pathname}?${queryString.stringify(parsed)}`);
  };

  render() {
    const {
      linksList, loading, typeLoad, auth, linkCount,
    } = this.props;
    const { typeDisplay, selectedLinkID, editLinkID } = this.state;
    let { items, page } = queryString.parse(this.props.location.search);
    items = Number(items) || itemLimit;
    page = Number(page) || 1;
    return (
      <section>
        <ControlPanel
          handlerLoadLinks={this.loadLinks}
          typeDisplayTable={this.typeDisplayTable}
          typeDisplayList={this.typeDisplayList}
          typeDisplay={typeDisplay}
          loading={loading}
          auth={auth}
        />
        <DisplayWrapper>
          {linksList && !!linksList.length ? (
            <Fragment>
              <ListPanel>
                <Sort />
                <select onChange={this.handelSelectChange} value={this.getSelectValue()}>
                  <option>default</option>
                  <option value="-clicks">by popularity ↓</option>
                  <option value="clicks">by popularity ↑</option>
                  <option value="-tag">by tags ↓</option>
                  <option value="tag">by tags ↑</option>
                  <option value="title">by title</option>
                </select>
                {auth && <NavLink to="/create">Create</NavLink>}
              </ListPanel>
              {typeDisplay === displayType.TABLE && (
                <TableLink
                  linksList={linksList}
                  handelItemClick={this.handelItemClick}
                  handelEditClick={this.handelEditClick}
                  handelDeleteClick={this.handelDeleteClick}
                  typeLoad={typeLoad}
                  startIndex={(page - 1) * items + 1}
                />
              )}
              {typeDisplay === displayType.LIST && (
                <TableList
                  linksList={linksList}
                  handelEditClick={this.handelEditClick}
                  handelDeleteClick={this.handelDeleteClick}
                  typeLoad={typeLoad}
                />
              )}
              <Pagination
                itemsCount={linkCount}
                pageLimit={pageLimit}
                itemLimit={items}
                onPageChange={this.onPageChange}
                currentPage={page}
              />
            </Fragment>
          ) : (
            <CreateBlock>
              <span>The list is empty</span>
              {auth && <NavLink to="/create">Create</NavLink>}
            </CreateBlock>
          )}
        </DisplayWrapper>
        {selectedLinkID && (
          <LinkDisplay linkId={selectedLinkID} handelClose={this.handelModalClose} />
        )}
        {editLinkID && <LinkEditor linkId={editLinkID} handelClose={this.handelModalClose} />}
      </section>
    );
  }
}

export default LinksDisplay;
