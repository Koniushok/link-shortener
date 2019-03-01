// @flow
import React from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { URL_REDIRECT } from '../constants/api';

const Button = styled.button`
  padding: 1px 13px;
  background: none;
  font-size: 13px;
  display: inline-block;
  border-radius: 5px;
  border: 1px solid #ee6123;
  color: #ee6123;
  cursor: pointer;
  &:focus {
    outline: 0;
    animation: effect_dylan 0.8s ease-out;
  }
  @keyframes effect_dylan {
    50% {
      transform: scale(1.5, 1.5);
      opacity: 0;
    }
    99% {
      transform: scale(0.01, 0.011);
      opacity: 0;
    }
    100% {
      transform: scale(0.001, 0.001);
      opacity: 1;
    }
  }
`;
const Link = styled.a`
  color: #ee6123;
  margin-right: 20px;
  text-decoration: none;
  margin-bottom: 10px;
`;

const ShortLink = ({ link }: { link: string }) => (
  <div>
    <Link rel="noreferrer noopener" target="_blank" href={`${URL_REDIRECT}/${link}`}>
      {`${URL_REDIRECT}/${link}`}
    </Link>
    <CopyToClipboard text={`${URL_REDIRECT}/${link}`}>
      <Button>copy</Button>
    </CopyToClipboard>
  </div>
);
ShortLink.displayName = 'ShortLink';
export default ShortLink;
