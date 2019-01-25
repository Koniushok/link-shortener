// @flow
import React, { PureComponent } from "react";
import styled from "styled-components";
import { XCircle } from "styled-icons/boxicons-regular/XCircle";

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0px;
  & > * {
    margin: 0 5px 5px 0;
  }
`;

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
  handleDelete: ?(tag: string) => void
};

export class Tag extends PureComponent<Props> {
  handleClick = () => {
    if (this.props.handleDelete) {
      this.props.handleDelete(this.props.tag);
    }
  };

  render() {
    const { tag } = this.props;
    return (
      <TagWrapper>
        <span>{tag}</span>
        {this.props.handleDelete && <ButtonDelete onClick={this.handleClick} />}
      </TagWrapper>
    );
  }
}
type TagsProps = {
  tagList: Array<string>,
  handleDelete: ?(tag: string) => void
};

const Tags = ({ tagList, handleDelete }: TagsProps) => (
  <TagsContainer>
    {tagList.map(tag => (
      <Tag key={tag} tag={tag} handleDelete={handleDelete} />
    ))}
  </TagsContainer>
);

export default Tags;
