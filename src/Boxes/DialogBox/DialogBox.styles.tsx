import styled from 'styled-components';
import { boxShadow, colors, mediaQuery } from '../../shared/variables';
import { move, move2 } from '../../pages/Home/Home.styles';

type DialogBoxProps = {
  about: 'help' | 'click';
};

const getWidth = (props: DialogBoxProps) =>
  (props.about === 'help' && `200px`) || (props.about === 'click' && `130px`);

const getDialogBoxCorner = (props: DialogBoxProps) =>
  (props.about === 'help' &&
    `
    border-color: transparent transparent transparent white;
    right: 250px;
    top: 218px;
    `) ||
  (props.about === 'click' &&
    `
    border-color: transparent white transparent transparent;
    right: 210px;
    top: 248px;
    `);

const getPosition = (props: DialogBoxProps) =>
  (props.about === 'help' &&
    `
    right: 20px;
    top: 95px;
    `) ||
  (props.about === 'click' &&
    `
    right: 50px;
    top: 250px;
    `);

const getPositionXLarge = (props: DialogBoxProps) =>
  (props.about === 'help' &&
    `
    right: 8%;
    `) ||
  (props.about === 'click' &&
    `
    right: 10%;
    `);
const getPositionSmall = (props: DialogBoxProps) =>
  (props.about === 'help' &&
    `
    top: 110px;
    `) ||
  (props.about === 'click' &&
    `
    top: 250px;
    `);

const getBorderRadius = (props: DialogBoxProps) =>
  (props.about === 'help' && '5px 5px 5px 0;') ||
  (props.about === 'click' && '0px 5px 5px 5px;');

export const DialogBoxWrapper = styled.div<DialogBoxProps>`
  background-color: ${colors.white};
  margin: 10px 30px;
  padding: 10px 20px;
  border-radius: ${getBorderRadius};

  font-weight: 300;
  font-size: 0.9rem;
  color: ${colors.blueGrey};
  line-height: 20px;

  width: ${getWidth};
  position: absolute;
  z-index: 3;
  ${getPosition}

  box-shadow: ${boxShadow.shadowLarge};
  animation: ${move} 30s ease-in-out infinite;

  & span {
    color: ${colors.blueGrey};
  }

  @media (min-width: ${mediaQuery.xLarge}) {
    ${getPositionXLarge}
  }

  @media (max-width: ${mediaQuery.small}) {
    font-size: 0.8rem;
    ${getPositionSmall}
  }
`;

const getAnimation = (props: DialogBoxProps) =>
  (props.about === 'help' && move) || (props.about === 'click' && move2);

export const El = styled.div<DialogBoxProps>`
  animation: ${(props) => getAnimation(props)} 30s ease-in-out infinite;
  border-width: 0px 20px 20px 20px;
  border-style: solid;
  transform: scale(0.1);
  position: absolute;
  z-index: 20;
  ${getDialogBoxCorner}

  @media (min-width: ${mediaQuery.xLarge}) {
    display: none;
  }
`;
