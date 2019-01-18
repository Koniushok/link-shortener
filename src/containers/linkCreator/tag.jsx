// @flow
import React, { PureComponent } from "react";
import styled from "styled-components";
import { XCircle } from "styled-icons/boxicons-regular/XCircle";

const TagWrapper = styled.div`
  padding: 5px 10px;
  border-radius: 30px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #d6d6d6ab;
`;
const ButtonDelete = styled(XCircle)`
  margin-left: 8px;
  border-radius: 50%;
  color: #00000057;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

type Props = {
  tag: string,
  handleDelete: (tag: string) => void
};

class Tag extends PureComponent<Props> {
  handleClick = () => {
    const { handleDelete, tag } = this.props;
    handleDelete(tag);
  };

  render() {
    const { tag } = this.props;
    return (
      <TagWrapper>
        <span>{tag}</span>
        <ButtonDelete onClick={this.handleClick} />
      </TagWrapper>
    );
  }
}

export default Tag;
