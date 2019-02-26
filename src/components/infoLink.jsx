// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { ChartBar } from 'styled-icons/fa-regular/ChartBar';
import { Delete } from 'styled-icons/material/Delete';
import { Edit } from 'styled-icons/fa-solid/Edit';
import Tags from './tags';
import { type Link } from '../types';
import ShortLink from './shortLink';

const LinkWrapper = styled.div`
  a {
    word-break: break-all;
  }
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
const BottomPanel = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;

const ClicksInf = styled.div`
  display: flex;
  color: #979797;
  p {
    font-size: 22px;
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

type Props = {
  handelEditClick?: (linkId: string) => void,
  handelDeleteClick?: (linkId: string) => void,
  link: Link,
};
class InfoLink extends Component<Props> {
  static defaultProps = {
    handelEditClick: undefined,
    handelDeleteClick: undefined,
  };

  handelEditClick = () => {
    if (this.props.handelEditClick) this.props.handelEditClick(this.props.link.id);
  };

  handelDeleteClick = () => {
    if (this.props.handelDeleteClick) this.props.handelDeleteClick(this.props.link.id);
  };

  render() {
    const { link } = this.props;
    return (
      <LinkWrapper>
        <Title>
          {link.title}
          <ControlButton>
            {this.props.handelDeleteClick && <Delete onClick={this.handelDeleteClick} />}
            {this.props.handelEditClick && <Edit onClick={this.handelEditClick} />}
          </ControlButton>
        </Title>
        <LongLink rel="noreferrer noopener" target="_blank" href={link.url}>
          {link.url}
        </LongLink>
        <Description>
          <h4>Description:</h4>
          <p>{link.description}</p>
        </Description>
        <Tags tagList={link.tags} />
        <BottomPanel>
          <ShortLink link={link.shortLink} />
          <ClicksInf>
            <ChartBar />
            <p>{link.clicks}</p>
          </ClicksInf>
        </BottomPanel>
      </LinkWrapper>
    );
  }
}
InfoLink.displayName = 'InfoLink';
export default InfoLink;
