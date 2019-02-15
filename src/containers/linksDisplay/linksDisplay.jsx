// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import { type Location, type RouterHistory } from 'react-router-dom';
import { linksLoadAll, linksLoadMy, linksLoadReset } from '../../actions/links';
import { deleteLinkRequested, deleteLinkReset } from '../../actions/deleteLink';
import TableLink from './tableLink';
import TableList from './tableList';
import ControlPanel from './controlPanel';
import Alert from '../../components/alert';
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
  margin: 35px auto 0 auto;
  @media (max-width: 1000px) {
    width: 98%;
  }
`;

type Props = {
  error: string,
  linksList: ?Array<Link>,
  loading: boolean,
  history: RouterHistory,
  linkCount: number,
  linksLoadReset: typeof linksLoadReset,
  deleteLinkReset: typeof deleteLinkReset,
  linksLoadAll: typeof linksLoadAll,
  linksLoadMy: typeof linksLoadMy,
  deleteLink: typeof deleteLinkRequested,
  deletedLink: Link,
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

  componentWillMount() {
    if (window.innerWidth < 600) {
      this.setState({ typeDisplay: displayType.LIST });
    }
    this.loadLinks();
  }

  componentWillReceiveProps(nextProps: Props) {
    const parsed = queryString.parse(nextProps.location.search);
    const currentPage = Number(parsed.page) || 1;
    this.setState({ currentPage });
  }

  componentDidUpdate(prevProps: Props) {
    if (
      prevProps.typeLoad !== this.props.typeLoad
      || prevProps.location.search !== this.props.location.search
    ) {
      this.loadLinks();
    }
  }

  componentWillUnmount() {
    this.props.linksLoadReset();
    this.props.deleteLinkReset();
  }

  typeDisplayTable = () => {
    this.setState({ typeDisplay: displayType.TABLE });
  };

  typeDisplayList = () => {
    this.setState({ typeDisplay: displayType.LIST });
  };

  loadLinks = () => {
    const parsed = queryString.parse(this.props.location.search);
    parsed.page = parsed.page || '1';
    parsed.items = parsed.items || String(itemLimit);
    const search = queryString.stringify({ ...parsed });
    this.props.history.push(`${this.props.location.pathname}?${search}`);
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
      linksList, error, loading, deletedLink, typeLoad, auth, linkCount,
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
        {deletedLink && (
          <Alert type="success" absolute>
            {`Link ${deletedLink.shortLink} successfully deleted`}
          </Alert>
        )}
        {error && (
          <Alert type="error" absolute>
            {error}
          </Alert>
        )}
        <DisplayWrapper>
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
          {selectedLinkID && (
            <LinkDisplay linkId={selectedLinkID} handelClose={this.handelModalClose} />
          )}
          {editLinkID && <LinkEditor linkId={editLinkID} handelClose={this.handelModalClose} />}
        </DisplayWrapper>
      </section>
    );
  }
}

export default LinksDisplay;
