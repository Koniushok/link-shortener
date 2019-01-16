// @flow
import React, { Fragment } from "react";
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

export const HeaderWrapper = styled.header`
  display: flex;
  background: #24292e;
  flex-direction: row;
  justify-content: flex-end;
`;
const auth = true;

const Header = () => (
  <HeaderWrapper>
    <NavLink to="/" exact>
      {"Home"}
    </NavLink>
    {auth ? (
      <Fragment>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/login">Sing In</NavLink>
      </Fragment>
    ) : (
      <NavLink to="/logout">Logout</NavLink>
    )}
  </HeaderWrapper>
);

export default Header;
