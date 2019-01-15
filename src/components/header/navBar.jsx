// @flow
import React, { Fragment } from "react";
import { guestLinks as linksList } from "./linkList";
import NavLink from "../styled-components/navLink";

const NavBar = () => (
  <Fragment>
    {linksList.map(link => (
      <NavLink to={link.url} exact={link.exact} key={link.id}>
        {link.title}
      </NavLink>
    ))}
  </Fragment>
);

export default NavBar;
