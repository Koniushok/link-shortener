// @flow
import React, { type ComponentType } from "react";
import { Close } from "styled-icons/material/Close";
import styled from "styled-components";

type AlertType = "error" | "success";

function getBackground(type: AlertType): string {
  if (type === "error") return "#f8d7da";
  if (type === "success") return "#d4edda";
  return "#fff";
}
function getFontColor(type: AlertType): string {
  if (type === "error") return "#721c24";
  if (type === "success") return "#155724";
  return "#ccc";
}
const AlertWrapper: ComponentType<{ type: AlertType }> = styled.div`
  position: relative;
  padding: 5px 10px;
  background: ${props => getBackground(props.type)};
  color: ${props => getFontColor(props.type)};
`;
const Button = styled(Close)`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  width: 20px;
  height: 20px;
  &:hover {
    cursor: pointer;
  }
`;

type Props = {
  children: string,
  type: AlertType,
  handlerClose?: () => {}
};
const Alert = ({ children, type, handlerClose }: Props) => (
  <AlertWrapper type={type}>
    {children}
    {handlerClose && <Button onClick={handlerClose} />}
  </AlertWrapper>
);

export default Alert;
