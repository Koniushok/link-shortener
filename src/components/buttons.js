// @flow
import { type ComponentType } from "react";
import styled from "styled-components";

type Props = {
  alignRight?: boolean,
  alignLeft?: boolean,
  alignCenter?: boolean
};

const Button = (styled.button`
  display: block;
  padding: 9px 15px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 6px;
  color: #fff;
  background: #6c757d;
  border: solid 3px #6c757d;
  margin: ${props => props.alignRight && "0 0 0 auto"};
  margin: ${props => props.alignLeft && "0 auto 0 0"};
  margin: ${props => props.center && "0 auto"};
  :focus {
    border: 3px solid #a9a9a9;
    outline: #a9a9a9;
  }
  :hover {
    cursor: pointer;
    border: 3px solid #ffffff9c;
  }
`: ComponentType<Props>);

export default Button;
