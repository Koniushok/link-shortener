// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { XCircle } from 'styled-icons/boxicons-regular/XCircle';

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
  a {
    color: black;
    text-decoration: none;
    word-break: break-all;
    margin-top: -4px;
  }
`;
const ButtonDelete = styled.div`
  margin-left: 8px;
  border-radius: 50%;
  color: #00000057;
  display: inline-flex;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    color: black;
  }
  svg {
    width: 30px;
  }
`;

type Props = {
  tag: string,
  handleDelete: ?(tag: string) => void,
};

export class Tag extends PureComponent<Props> {
  handleDeleteClick = (e: SyntheticEvent<HTMLElement>) => {
    e.stopPropagation();
    if (this.props.handleDelete) {
      this.props.handleDelete(this.props.tag);
    }
  };

  render() {
    const { tag } = this.props;
    return (
      <TagWrapper>
        <Link to={`/links/all?tag=${this.props.tag}`}>{tag}</Link>
        {this.props.handleDelete && (
          <ButtonDelete>
            {this.props.handleDelete && <XCircle onClick={this.handleDeleteClick} />}
          </ButtonDelete>
        )}
      </TagWrapper>
    );
  }
}

type TagsProps = {
  tagList: Array<string>,
  handleDelete: ?(tag: string) => void,
};

const Tags = ({ tagList, handleDelete }: TagsProps) => (
  <TagsContainer>
    {tagList.map(tag => (
      <Tag key={tag} tag={tag} handleDelete={handleDelete} />
    ))}
  </TagsContainer>
);

export default Tags;
