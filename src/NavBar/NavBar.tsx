import React from 'react';
import { Link } from 'react-router-dom';
import {
  LinkContainer,
  StyledButton,
  StyledIcon,
  StyledLink,
  StyledLogo,
  StyledNavBar,
} from './NavBar.styles';

import logo from '../static/logo.png';
import icon from '../static/White.svg';

const NavBar = () => {
  return (
    <>
      <StyledNavBar>
        <Link to="/retink_app">
          <StyledLogo src={logo} />
        </Link>
        <LinkContainer>
          <StyledLink to="/retink_app">Home</StyledLink>
          <StyledLink to="/services">Services</StyledLink>
          <StyledLink to="/about">About us</StyledLink>
        </LinkContainer>
        <StyledButton>
          <StyledIcon src={icon} />
          Login
        </StyledButton>
      </StyledNavBar>
    </>
  );
};

export default NavBar;
