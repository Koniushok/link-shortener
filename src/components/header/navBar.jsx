// @flow
import React from "react";
import { Link } from "react-router-dom";

const guestLinks = [
  {
    id: 0,
    url: "/",
    title: "Home"
  },
  {
    id: 1,
    url: "/authorization",
    title: "Sing In"
  },
  {
    id: 2,
    url: "/registration",
    title: "Sign Up"
  }
];

const userLinks = [
  {
    id: 0,
    url: "/",
    title: "Home"
  },
  {
    id: 1,
    url: "",
    title: ""
  },
  {
    id: 2,
    url: "/logout",
    title: "Logout"
  }
];

const Links = userLinks;

const NavBar = () => (
  <div>
    {Links.map(link => (
      <Link to={link.url} key={link.id}>{link.title}</Link>
    ))}
  </div>
);

export default NavBar;
