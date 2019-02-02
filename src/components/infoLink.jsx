// @flow
import React from 'react';
import styled from 'styled-components';
import { ChartBar } from 'styled-icons/fa-regular/ChartBar';
import { Delete } from 'styled-icons/material/Delete';
import { Edit } from 'styled-icons/fa-solid/Edit';
import Tags from './tags';
import { type Link } from '../types';

const LinkWrapper = styled.div`
  word-break: break-all;
`;

const Title = styled.h3`
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
`;
const LongLink = styled.a`
  color: #8f989d;
  text-decoration: none;
`;
const Description = styled.div`
  margin-top: 8px;
  color: black;
  margin-bottom: 10px;
  h4 {
    color: #a7a7a7;
    margin: 0;
    font-weight: initial;
  }
  p {
    margin: 0;
  }
`;
const ShortLink = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: #ff901b;
  }
`;

const Passage = styled.div`
  display: flex;
  color: #979797;
  p {
    font-size: 18px;
    padding-top: 5px;
    margin: 0 5px;
  }
  svg {
    width: 25px;
    height: 25px;
  }
`;
const ControlButton = styled.div`
  display: flex;
  color: #979797;
  svg {
    cursor: pointer;
    width: 25px;
    height: 25px;
    :hover {
      color: black;
    }
  }
`;
const InfoLink = ({ link }: { link: Link }) => (
  <LinkWrapper>
    <Title>
      {link.title}
      <ControlButton>
        <Delete />
        <Edit />
      </ControlButton>
    </Title>
    <LongLink rel="noreferrer noopener" target="_blank" href={link.url}>
      {link.url}
    </LongLink>
    <Description>
      <h4>Description:</h4>
      <p>{link.description}</p>
    </Description>
    <Tags tagList={link.tags} handleDelete={null} />
    <ShortLink>
      <a rel="noreferrer noopener" target="_blank" href={link.shortLink}>
        {link.shortLink}
      </a>
      <Passage>
        <p>{link.passage}</p>
        <ChartBar />
      </Passage>
    </ShortLink>
  </LinkWrapper>
);

export default InfoLink;
