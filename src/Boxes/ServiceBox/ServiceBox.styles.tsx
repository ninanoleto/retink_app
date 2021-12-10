import styled from 'styled-components';
import { boxShadow, colors, mediaQuery } from '../../shared/variables';

export const Wrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  @media (max-width: ${mediaQuery.medium}) {
    flex-direction: column;
  }
`;

export const InfoBoxWrapper = styled.div`
  background-color: ${colors.white};
  border-radius: 5px;
  box-shadow: ${boxShadow.shadow};

  padding: 15px 30px 5px 20px;

  z-index: 4;
  cursor: pointer;

  padding: 20px 30px;

  width: 190px;
  margin: 0 20px 40px 20px;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${mediaQuery.large}) {
    width: 100%;
  }
`;

export const StyledIcon = styled.img`
  padding-right: 15px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(2);
  padding: 30px 0;

  @media (max-width: ${mediaQuery.medium}) {
    transform: scale(1.8);
    padding: 20px 0;
  }
  @media (max-width: ${mediaQuery.small}) {
    transform: scale(1.5);
    padding: 10px 0;
  }
`;

export const StyledTitle = styled.h3`
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0;
  margin-top: 10px;
  text-align: center;

  overflow: hidden;

  &::after {
    display: inline-block;
    content: '';
    border-bottom: 0.3rem solid ${colors.purple};
    width: 70%;
    margin: 1.5rem 1rem;
  }

  @media (max-width: ${mediaQuery.small}) {
    font-size: 0.9rem;
  }
`;

export const StyledP = styled.p`
  font-weight: 300;
  font-size: 1rem;
  color: ${colors.blueGrey};
  line-height: 25px;
  text-align: center;

  @media (max-width: ${mediaQuery.small}) {
    font-size: 0.8rem;
  }
`;
