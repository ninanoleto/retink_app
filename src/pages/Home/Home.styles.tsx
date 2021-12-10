import styled, { keyframes } from 'styled-components';
import { colors, mediaQuery } from '../../shared/variables';

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding: 5% 10%;
  height: 100vh;

  @media (min-width: ${mediaQuery.xLarge}) {
    padding: 5% 20%;
  }

  @media (max-width: ${mediaQuery.large}) {
    display: block;
  }
`;

export const Hero = styled.div`
  padding: 10px 20px;
`;

export const Title = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  color: ${colors.white};
  font-size: 2.8rem;

  @media (max-width: ${mediaQuery.small}) {
    font-size: 2rem;
  }
`;

export const move = keyframes`
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(100px);
  }
  100% {
    transform: translatey(0px);
  }
}
`;

export const move2 = keyframes`
  0% {
    transform: translatey(0px) rotate(180deg);
  }
  50% {
    transform: translatey(100px) rotate(180deg);
  }
  100% {
    transform: translatey(0px) rotate(180deg);
  }
}
`;

export const Mascot = styled.img`
  height: 700px;
  position: absolute;
  top: 95px;
  right: 50px;
  z-index: -1;
  overflow: hidden;
  animation: ${move} 30s ease-in-out infinite;

  @media (min-width: ${mediaQuery.xLarge}) {
    right: 10%;
  }

  @media (max-width: ${mediaQuery.medium}) {
    height: 600px;
    right: 100px;
    top: 150px;
  }

  @media (max-width: ${mediaQuery.medium}) {
    height: 500px;
    right: 100px;
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
