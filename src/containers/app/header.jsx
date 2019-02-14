// @flow
import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { MAIN_YELLOW } from '../../constants/color';
import { logout } from '../../actions/auth';

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

const NavLink = styled(Link).attrs({
  activeClassName: 'selected',
})`
  &.selected {
    color: ${MAIN_YELLOW};
  }
  ${linkStyle}
`;

const ButtonLink = styled.button`
  border: none;
  outline: none;
  ${linkStyle}
`;

export const HeaderWrapper = styled.header`
  display: flex;
  background: #24292e;
  flex-direction: row;
  justify-content: flex-end;
`;

type Props = {
  handleLogout: typeof logout,
  auth: boolean,
};
const Header = ({ auth, handleLogout }: Props) => (
  <HeaderWrapper>
    {auth ? (
      <Fragment>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/links">Links</NavLink>
        <ButtonLink onClick={handleLogout}>Logout</ButtonLink>
      </Fragment>
    ) : (
      <Fragment>
        <NavLink to="/links">Links</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/login">Sign In</NavLink>
      </Fragment>
    )}
  </HeaderWrapper>
);

export default Header;
