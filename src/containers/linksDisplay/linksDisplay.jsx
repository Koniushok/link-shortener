// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import TableLink from './tableLink';
import TableList from './tableList';
import ControlPanel from './controlPanel';
import Alert from '../../components/alert';
import Modal from '../../components/modal';
import LinkDisplay from '../linkDisplay';
import LinkEditor from '../linkEditor';
import { type Link } from '../../types';
import displayType, { type DisplayType } from '../../constants/display';

const DisplayWrapper = styled.div`
  width: 100%;
`;

type Props = {
  error: string,
  linksList: ?Array<Link>,
  loading: boolean,
  linksLoadAll: () => void,
  linksLoadMy: () => void,
  typeLoad: 'my' | 'all',
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
    if (prevProps.typeLoad !== this.props.typeLoad) {
      this.loadLinks();
    }
  }

  typeDisplayTable = () => {
    this.setState({ typeDisplay: displayType.TABLE });
  };

  typeDisplayList = () => {
    this.setState({ typeDisplay: displayType.LIST });
  };

  loadLinks = () => {
    switch (this.props.typeLoad) {
      case 'all':
        this.props.linksLoadAll();
        break;
      case 'my':
        this.props.linksLoadMy();
        break;
      default:
        break;
    }
  };

  handelItemClick = (linkId: string) => {
    this.setState({ selectedLinkID: linkId });
  };

  handelModalClose = () => {
    this.setState({ selectedLinkID: '' });
  };

  render() {
    const { linksList, error, loading } = this.props;
    const { typeDisplay, selectedLinkID, editLinkID } = this.state;
    return (
      <DisplayWrapper>
        {error && <Alert type="error">{error}</Alert>}
        <ControlPanel
          HandlerLoadLinks={this.loadLinks}
          typeDisplayTable={this.typeDisplayTable}
          typeDisplayList={this.typeDisplayList}
          typeDisplay={typeDisplay}
          loading={loading}
        />
        {typeDisplay === displayType.TABLE && (
          <TableLink linksList={linksList} handelItemClick={this.handelItemClick} />
        )}
        {typeDisplay === displayType.LIST && (
          <TableList linksList={linksList} handelItemClick={this.handelItemClick} />
        )}
        {selectedLinkID && (
          <Modal handelClose={this.handelModalClose}>
            <LinkDisplay linkId={selectedLinkID} />
          </Modal>
        )}
        {editLinkID && (
          <Modal handelClose={this.handelModalClose}>
            <LinkEditor linkId={selectedLinkID} />
          </Modal>
        )}
      </DisplayWrapper>
    );
  }
}

export default LinksDisplay;
