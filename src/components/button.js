// @flow
import { type ComponentType } from "react";
import styled from "styled-components";

type Props = {
  alignRight?: boolean,
  alignLeft?: boolean,
  alignCenter?: boolean
};

function getButtonMargin(props: Props): string {
  if (props.alignRight) return "0 0 0 auto";
  if (props.alignLeft) return "0 auto 0 0";
  if (props.alignCenter) return "0 auto";
  return "0";
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
