/* eslint-disable react/jsx-one-expression-per-line */
// @flow
import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { MAIN_YELLOW } from '../../constants/color';

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
  &.selected {
    color: ${MAIN_YELLOW};
  }
  :hover {
    background: '#eebd0';
    color: ${MAIN_YELLOW};
  }
`;

const NavLink = styled(Link).attrs({
  activeClassName: 'selected',
})`
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

const auth = false;

const Header = () => (
  <HeaderWrapper>
    <NavLink to="/" exact>
      Home
    </NavLink>
    {auth ? (
      <Fragment>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/login">Sing In</NavLink>
      </Fragment>
    ) : (
      <ButtonLink to="/logout">Logout</ButtonLink>
    )}
  </HeaderWrapper>
);

export default Header;
