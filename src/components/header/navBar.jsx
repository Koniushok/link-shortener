// @flow
import React from "react";
import { Link } from "react-router-dom";
import { guestLinks as links } from "./linkList";

const NavBar = () => (
  <div>
    {links.map(link => (
      <Link to={link.url} key={link.id}>
        {link.title}
      </Link>
    ))}
  </div>
);

export default NavBar;
