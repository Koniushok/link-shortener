// @flow
import { type ComponentType } from 'react';
import styled from 'styled-components';

type Props = {
  alignRight?: boolean,
  alignLeft?: boolean,
  alignCenter?: boolean,
};

function getButtonMargin({ alignRight, alignLeft, alignCenter }: Props): string {
  switch (true) {
    case alignRight:
      return '0 0 0 auto';
    case alignLeft:
      return '0 auto 0 0';
    case alignCenter:
      return '0 auto';
    default:
      return '0';
  }
}
const Button = (styled.button`
  display: block;
  padding: 9px 15px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 6px;
  color: #fff;
  background: #6c757d;
  border: solid 3px #6c757d;
  margin: ${props => getButtonMargin(props)};
  cursor: pointer;
  :focus {
    border: 3px solid #a9a9a9;
    outline: #a9a9a9;
  }
  :hover {
    border: 3px solid #ffffff9c;
  }
  :disabled {
    background: #d9d9d9;
    border: 3px solid #ffffff9c;
    cursor: default;
  }
`: ComponentType<Props>);

export default Button;
