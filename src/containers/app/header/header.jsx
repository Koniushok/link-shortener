// @flow
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import linkStyle from './linkStyle';
import { MAIN_YELLOW } from '../../../constants/color';

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

const auth = true;

const Header = () => (
  <HeaderWrapper>
    <NavLink to="/" exact>
      Home
    </NavLink>
    {auth ? (
      <Fragment>
        <NavLink to="/links">Links</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/login">Sing In</NavLink>
      </Fragment>
    ) : (
      <ButtonLink to="/logout">Logout</ButtonLink>
    )}
  </HeaderWrapper>
);

export default Header;
