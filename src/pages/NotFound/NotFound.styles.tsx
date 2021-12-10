import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, mediaQuery } from '../../shared/variables';

export const ContentWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;

  @media (max-width: ${mediaQuery.small}) {
    font-size: 0.8rem;
  }

  @media (max-width: ${mediaQuery.xSmall}) {
    font-size: 0.6rem;
  }
`;

export const StyledBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${colors.offWhite};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.offWhite};
  background-color: ${colors.purple};
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background-color: ${colors.darkPurple};
    color: ${colors.white};
  }

  @media (max-width: ${mediaQuery.xSmall}) {
    font-size: 0.8rem;
  }
`;
