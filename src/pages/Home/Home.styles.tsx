import styled from 'styled-components';
import { animation, colors, mediaQuery } from '../../shared/variables';

export const SectionFeatures = styled.div`
  position: relative;
  margin: 15% 10% 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionWrapper = styled.div`
  @media (max-width: ${mediaQuery.large}) {
    margin-top: 700px;
  }
`;

export const Main = styled.div`
  position: absolute;
  width: 100%;
`;

export const TitleFeature = styled.h2`
  text-transform: uppercase;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 3rem;
  font-weight: 300;
  color: ${colors.blueGrey};
`;

export const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 15% 70px;

  animation: ${animation.moveInRight} ${animation.defaultEffects};

  @media (max-width: ${mediaQuery.large}) {
    margin: 0 20% 70px;
    flex-direction: column;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding: 5% 10%;

  @media (min-width: ${mediaQuery.xLarge}) {
    padding: 5% 20%;
  }

  @media (max-width: ${mediaQuery.large}) {
    display: block;
  }
`;

export const Hero = styled.div`
  padding: 10px 20px;

  animation: ${animation.moveInLeft} ${animation.defaultEffects};
`;

export const Title = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  color: ${colors.white};
  font-size: 2.8rem;

  @media (max-width: ${mediaQuery.small}) {
    font-size: 2rem;
  }
`;

export const Mascot = styled.img`
  height: 700px;
  position: absolute;
  top: 95px;
  right: 50px;
  z-index: -1;
  overflow: hidden;
  animation: ${animation.move} ${animation.slowEffects};

  @media (min-width: ${mediaQuery.xLarge}) {
    right: 10%;
  }

  @media (max-width: ${mediaQuery.medium}) {
    height: 600px;
    right: 100px;
    top: 150px;
  }

  @media (max-width: ${mediaQuery.xSmall}) {
    height: 500px;
    right: 90px;
    top: 150px;
  }
`;

export const MascotWrapper = styled.div`
  @media (max-width: ${mediaQuery.large}) {
    position: relative;
    top: -90px;
  }

  @media (max-width: ${mediaQuery.xSmall}) {
    right: -60px;
  }

  @media (max-width: ${mediaQuery.xxSmall}) {
    right: -85px;
  }
`;
