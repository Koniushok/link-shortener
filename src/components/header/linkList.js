// @flow
type Link = {
  id: number,
  url: string,
  title: string,
  exact?: boolean
};

export const guestLinks: Array<Link> = [
  {
    id: 0,
    url: "/",
    title: "Home",
    exact: true
  },
  {
    id: 1,
    url: "/login",
    title: "Sing In"
  },
  {
    id: 2,
    url: "/signup",
    title: "Sign Up"
  }
];

export const userLinks: Array<Link> = [
  {
    id: 0,
    url: "/",
    title: "Home"
  },
  {
    id: 1,
    url: "/logout",
    title: "Logout"
  }
];
