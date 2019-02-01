// @flow
import React, { Component } from "react";
import styled from "styled-components";
import TableLink from "./tableLink";
import TableList from "./tableList";
import Alert from "../../components/alert";
import Modal from "../../components/modal";
import LinkDisplay from "../linkDisplay";
import LinkEditor from "../linkEditor";
import ControlPanel, {
  NavLink,
  ResetIndicator,
  ResetButton,
  TableTypeButton,
  ListTypeButton
} from "./controlPanel";
import { type Link } from "../../types";

const DisplayWrapper = styled.div`
  width: 100%;
`;

type Props = {
  error: string,
  linksList: ?Array<Link>,
  loading: boolean,
  loadAllLinks: () => void,
  loadMyLinks: () => void,
  typeLoad: "my" | "all"
};
type State = {
  typeDisplay: "table" | "list",
  selectedLinkID: string,
  editLinkID: string
};
class LinksDisplay extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.loadLinks();
  }

  state = {
    typeDisplay: "table",
    selectedLinkID: "",
    editLinkID: ""
  };

  componentDidUpdate(prevProps: Props) {
    if (prevProps.typeLoad !== this.props.typeLoad) {
      this.loadLinks();
    }
  }

  typeDisplayTable = () => {
    this.setState({ typeDisplay: "table" });
  };

  typeDisplayList = () => {
    this.setState({ typeDisplay: "list" });
  };

  loadLinks = () => {
    switch (this.props.typeLoad) {
      case "all":
        this.props.loadAllLinks();
        break;
      case "my":
        this.props.loadMyLinks();
        break;
      default:
        break;
    }
  };

  handelItemClick = (linkId: string) => {
    this.setState({ selectedLinkID: linkId });
  };

  handelModalClose = () => {
    this.setState({ selectedLinkID: "" });
  };

  render() {
    const { linksList, error, loading } = this.props;
    const { typeDisplay, selectedLinkID, editLinkID } = this.state;
    return (
      <DisplayWrapper>
        {error && <Alert type="error">{error}</Alert>}
        <ControlPanel>
          <nav>
            <NavLink to="/links/my">My links</NavLink>
            <NavLink to="/links/all">All links</NavLink>
          </nav>
          <div>
            {loading ? (
              <ResetIndicator />
            ) : (
              <ResetButton onClick={this.loadLinks} />
            )}
            <TableTypeButton
              onClick={this.typeDisplayTable}
              enabled={typeDisplay === "table"}
            />
            <ListTypeButton
              onClick={this.typeDisplayList}
              enabled={typeDisplay === "list"}
            />
          </div>
        </ControlPanel>
        {typeDisplay === "table" && (
          <TableLink
            linksList={linksList}
            handelItemClick={this.handelItemClick}
          />
        )}
        {typeDisplay === "list" && (
          <TableList
            linksList={linksList}
            handelItemClick={this.handelItemClick}
          />
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
