// @flow
import { css } from 'styled-components';

const linkStyle = css`
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  margin: 5px;
  color: white;
  border-radius: 3px;
  padding: 8px 5px;
  background: #9696962e;
  display: block;
  font-weight: bold;
  :hover {
    background: '#eebd0';
    color: #ffd707;
  }
`;
export default linkStyle;
