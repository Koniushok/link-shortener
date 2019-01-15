// @flow
import React, { Fragment } from "react";
import { HeaderDiv } from "../styled-components/wrappers";
import NavLink from "../styled-components/navLink";

const auth = false;

const Header = () => (
  <HeaderDiv>
    <NavLink to="/" exact>Home</NavLink>
    {auth ? (
      <Fragment>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/login">Sing In</NavLink>
      </Fragment>
    ) : (
      <NavLink to="/logout">Logout</NavLink>
    )}
  </HeaderDiv>
);

export default Header;
