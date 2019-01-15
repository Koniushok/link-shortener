import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const NavLink = styled(Link).attrs({
  activeClassName: "selected"
})`
  text-decoration: none;
  font-size: 20px;
  margin: 5px;
  color: white;
  border-radius: 3px;
  padding: 8px 5px;
  background: #9696962e;
  display: block;
  font-weight: bold;
  &.selected {
    color: #ffd707;
  }
  :hover {
    background: "#eebd0";
    color: #ffd707;
  }
`;

export default NavLink;
