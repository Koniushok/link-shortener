// @flow
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
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
  width: 100px;
  margin: 0 0 5px auto;
  display: block;
  background: #6c757d;
  text-align: center;
  text-decoration: none;
  color: white;
  font-weight: 600;
  padding: 5px 0;
  :hover {
    background: #405153;
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
  a {
    margin: 0;
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
  currentPage: number,
};
class LinksDisplay extends Component<Props, State> {
  state = {
    typeDisplay: displayType.TABLE,
    selectedLinkID: '',
    editLinkID: '',
    currentPage: 1,
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
    const currentPage = Number(nextParsed.page) || 1;
    this.setState({ currentPage });
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
    if (!parsed.page || !parsed.items) {
      const page = parsed.page || '1';
      const items = parsed.items || String(itemLimit);
      const search = queryString.stringify({ items, page, tag: parsed.tag });
      this.props.history.replace(`${this.props.location.pathname}?${search}`);
      return false;
    }
    return true;
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
    this.setState({ currentPage: page });
  };

  render() {
    const {
      linksList, loading, typeLoad, auth, linkCount,
    } = this.props;
    const {
      typeDisplay, selectedLinkID, editLinkID, currentPage,
    } = this.state;
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
              <NavLink to="/create">Create</NavLink>
              {typeDisplay === displayType.TABLE && (
                <TableLink
                  linksList={linksList}
                  handelItemClick={this.handelItemClick}
                  handelEditClick={this.handelEditClick}
                  handelDeleteClick={this.handelDeleteClick}
                  typeLoad={typeLoad}
                  startIndex={(currentPage - 1) * itemLimit + 1}
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
                itemLimit={itemLimit}
                onPageChange={this.onPageChange}
                currentPage={currentPage}
              />
            </Fragment>
          ) : (
            <CreateBlock>
              <span>The list is empty</span>
              <NavLink to="/create">Create</NavLink>
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
