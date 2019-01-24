// @flow
import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { links as linksActions } from "../../actions/index";
import TableLink from "./tableLink";
import TableList from "./tableList";
import Alert from "../../components/alert";
import ControlPanel, {
  NavLink,
  ResetIndicator,
  ResetButton,
  TableTypeButton,
  ListTypeButton
} from "./controlPanel";

const DisplayWrapper = styled.div`
  width: 100%;
`;
type Link = {
  url: string,
  shortLink: string,
  passage: number,
  tags: Array<string>,
  description: string
};

type Props = {
  error: string,
  linksList: ?Array<Link>,
  loading: boolean,
  loadAllLinks: () => void,
  loadMyLinks: () => void,
  typeLoad: "my" | "all"
};
type State = {
  typeDisplay: "table" | "list"
};
class LinksDisplay extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.loadLinks();
  }

  state = {
    typeDisplay: "table"
  };

  componentDidUpdate(prevProps) {
    if (prevProps.typeLoad !== this.props.typeLoad) this.loadLinks();
  }

  typeDisplayTable = () => {
    this.setState({ typeDisplay: "table" });
  };

  typeDisplayList = () => {
    this.setState({ typeDisplay: "list" });
  };

  loadLinks = () => {
    if (this.props.typeLoad === "all") this.props.loadAllLinks();
    else this.props.loadMyLinks();
  };

  render() {
    const { linksList, error, loading } = this.props;
    const { typeDisplay } = this.state;
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
        {typeDisplay === "table" && <TableLink linksList={linksList} />}
        {typeDisplay === "list" && <TableList linksList={linksList} />}
      </DisplayWrapper>
    );
  }
}

const mapStateToProps = ({ links }) => ({
  linksList: links.data,
  error: links.error,
  loading: links.loading
});

const mapDispatchToProps = dispatch => ({
  loadAllLinks: () => dispatch(linksActions.loadAll()),
  loadMyLinks: () => dispatch(linksActions.loadMy())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinksDisplay);
