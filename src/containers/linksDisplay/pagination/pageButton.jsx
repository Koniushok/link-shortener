// @flow
import React, { PureComponent, type Node } from 'react';
import styled, { css } from 'styled-components';

const activeStyle = css`
  background-color: #4caf50;
  color: white;
  border: 1px solid #4caf50;
`;

export const Button = styled.button`
  background: none;
  display: inline-block;
  color: black;
  float: left;
  font-weight: 500;
  padding: 6px 10px;
  text-decoration: none;
  border: 1px solid #ddd;
  cursor: pointer;
  ${props => props.active && activeStyle};
  :focus {
    outline: none;
  }
  :disabled {
    color: #c9c9c9;
    cursor: default;
  }
`;

type Props = {
  onPageChange: (page: number) => void,
  page: number,
  children: Node,
  active?: boolean,
  disabled?: boolean,
};
class PageButton extends PureComponent<Props> {
  static defaultProps = {
    active: false,
    disabled: false,
  };

  handelPageChange = () => {
    this.props.onPageChange(this.props.page);
  };

  render() {
    return (
      <Button
        onClick={this.handelPageChange}
        active={this.props.active}
        disabled={this.props.disabled}
      >
        {this.props.children}
      </Button>
    );
  }
}

export default PageButton;
