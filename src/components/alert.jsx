// @flow
import { type ComponentType } from "react";
import styled from "styled-components";

type AlertType = "error" | "success";
type Props = {
  type: AlertType
};
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
const Alert: ComponentType<Props> = styled.div`
  padding: 5px 10px;
  background: ${props => getBackground(props.type)};
  color: ${props => getFontColor(props.type)};
`;

export default Alert;
