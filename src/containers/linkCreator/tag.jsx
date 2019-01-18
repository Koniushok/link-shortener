// @flow
import React from "react";
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
  text: string,
  handleDelete: () => void
};

const Tag = ({ text, handleDelete }: Props) => (
  <TagWrapper>
    <span>{text}</span>
    <ButtonDelete onClick={handleDelete} />
  </TagWrapper>
);

export default Tag;
