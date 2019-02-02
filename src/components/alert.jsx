// @flow
import React, { type ComponentType } from 'react';
import { Close } from 'styled-icons/material/Close';
import styled from 'styled-components';

type AlertType = 'error' | 'success';

function getBackground(type: AlertType): string {
  switch (type) {
    case 'error':
      return '#f8d7da';
    case 'success':
      return '#d4edda';
    default:
      return '#fff';
  }
}
function getFontColor(type: AlertType): string {
  switch (type) {
    case 'error':
      return '#721c24';
    case 'success':
      return '#155724';
    default:
      return '#ccc';
  }
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
  handlerClose?: () => {},
};
const Alert = ({ children, type, handlerClose }: Props) => (
  <AlertWrapper type={type}>
    {children}
    {handlerClose && <Button onClick={handlerClose} />}
  </AlertWrapper>
);

Alert.defaultProps = {
  handlerClose: undefined,
};

export default Alert;
