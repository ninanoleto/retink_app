import styled from 'styled-components';
import { animation, colors, mediaQuery } from '../../shared/variables';

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: ${colors.white};
  font-family: 'Nunito Sans', sans-serif;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 3rem;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media (max-width: ${mediaQuery.small}) {
    font-size: 2.8rem;
  }
  @media (max-width: ${mediaQuery.xSmall}) {
    font-size: 2.5rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding: 0 10%;
  height: 100vh;

  animation: ${animation.moveInDown} ${animation.defaultEffects};
  (min-width: ${mediaQuery.xLarge}) {
    padding: 5% 20%;
  }

  @media (max-width: ${mediaQuery.medium}) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 50%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
