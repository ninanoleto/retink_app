import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { boxShadow, colors, mediaQuery } from '../shared/variables';

export const StyledNavBar = styled.div`
  height: 3.5rem;
  background-color: ${colors.white};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;

  box-shadow: ${boxShadow.shadow};

  @media (min-width: ${mediaQuery.xLarge}) {
    padding: 0 20%;
  }

  @media (max-width: ${mediaQuery.small}) {
    height: 7rem;
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const StyledLogo = styled.img`
  height: 25px;
`;

export const LinkContainer = styled.div``;

export const StyledLink = styled(Link)`
  margin: 0 30px;
  text-decoration: none;
  color: ${colors.blueGrey};
  font-size: 14px;

  &:hover {
    color: black;
  }

  @media (max-width: ${mediaQuery.xxSmall}) {
    margin: 0 10px;
  }
`;

export const StyledButton = styled.button`
  color: ${colors.offWhite};
  background-color: ${colors.purple};
  padding: 10px 20px 10px 18px;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  cursor: pointer;
  box-shadow: ${boxShadow.shadow};
  transition: all 0.2s;

  &:hover {
    background-color: ${colors.darkPurple};
    color: ${colors.white};
  }
`;

export const StyledIcon = styled.img`
  padding-right: 8px;
`;
