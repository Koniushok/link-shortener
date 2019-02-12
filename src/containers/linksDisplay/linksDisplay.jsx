// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import { type Location } from 'react-router-dom';
import { linksLoadAll, linksLoadMy, linksLoadReset } from '../../actions/links';
import { deleteLinkRequested, deleteLinkReset } from '../../actions/deleteLink';
import TableLink from './tableLink';
import TableList from './tableList';
import ControlPanel from './controlPanel';
import Alert from '../../components/alert';
import LinkDisplay from '../linkDisplay';
import LinkEditor from '../linkEditor';
import { type Link } from '../../types';
import {
  displayType,
  typeLinksLoad,
  type TypeLinksLoad,
  type DisplayType,
} from '../../constants/display';

const DisplayWrapper = styled.div`
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
  linksLoadReset: typeof linksLoadReset,
  deleteLinkReset: typeof deleteLinkReset,
  linksLoadAll: typeof linksLoadAll,
  linksLoadMy: typeof linksLoadMy,
  deleteLink: typeof deleteLinkRequested,
  deletedLink: Link,
  typeLoad: TypeLinksLoad,
  location: Location,
};
type State = {
  typeDisplay: DisplayType,
  selectedLinkID: string,
  editLinkID: string,
};
class LinksDisplay extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.loadLinks();
  }

  state = {
    typeDisplay: displayType.TABLE,
    selectedLinkID: '',
    editLinkID: '',
  };

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
    const { tag } = queryString.parse(this.props.location.search);
    switch (this.props.typeLoad) {
      case typeLinksLoad.ALL:
        this.props.linksLoadAll(tag ? String(tag) : undefined);
        break;
      case typeLinksLoad.MY:
        this.props.linksLoadMy(tag ? String(tag) : undefined);
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

  render() {
    const {
      linksList, error, loading, deletedLink, typeLoad,
    } = this.props;
    const { typeDisplay, selectedLinkID, editLinkID } = this.state;
    return (
      <div>
        <ControlPanel
          handlerLoadLinks={this.loadLinks}
          typeDisplayTable={this.typeDisplayTable}
          typeDisplayList={this.typeDisplayList}
          typeDisplay={typeDisplay}
          loading={loading}
        />
        {deletedLink && (
          <Alert type="success">{`Link ${deletedLink.shortLink} successfully deleted`}</Alert>
        )}
        {error && <Alert type="error">{error}</Alert>}
        <DisplayWrapper>
          {typeDisplay === displayType.TABLE && (
            <TableLink
              linksList={linksList}
              handelItemClick={this.handelItemClick}
              handelEditClick={this.handelEditClick}
              handelDeleteClick={this.handelDeleteClick}
              typeLoad={typeLoad}
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
          {selectedLinkID && (
            <LinkDisplay linkId={selectedLinkID} handelClose={this.handelModalClose} />
          )}
          {editLinkID && <LinkEditor linkId={editLinkID} handelClose={this.handelModalClose} />}
        </DisplayWrapper>
      </div>
    );
  }
}

export default LinksDisplay;
