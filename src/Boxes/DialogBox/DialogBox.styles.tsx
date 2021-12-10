import styled from 'styled-components';
import {
  animation,
  boxShadow,
  colors,
  mediaQuery,
} from '../../shared/variables';
import { DialogBoxType } from './Dialog.types';

type DialogBoxProps = {
  about: DialogBoxType;
};

const getWidth = (props: DialogBoxProps) =>
  (props.about === DialogBoxType.Help && `200px`) ||
  (props.about === DialogBoxType.Click && `130px`);

const getBorderRadius = (props: DialogBoxProps) =>
  (props.about === DialogBoxType.Help && '5px 5px 5px 0;') ||
  (props.about === DialogBoxType.Click && '0px 5px 5px 5px;');

const getCorner = (props: DialogBoxProps) =>
  (props.about === DialogBoxType.Help &&
    `
    border-color: transparent transparent transparent white;
    right: 250px;
    top: 218px;
    `) ||
  (props.about === DialogBoxType.Click &&
    `
    border-color: transparent white transparent transparent;
    right: 210px;
    top: 248px;
    `);

const getPosition = (props: DialogBoxProps) =>
  (props.about === DialogBoxType.Help &&
    `
    right: 20px;
    top: 95px;
    `) ||
  (props.about === DialogBoxType.Click &&
    `
    right: 50px;
    top: 250px;
    `);

const getPositionRightXLarge = (props: DialogBoxProps) =>
  (props.about === DialogBoxType.Help && `8%`) ||
  (props.about === DialogBoxType.Click && `10%`);

const getPositionTopSmall = (props: DialogBoxProps) =>
  (props.about === DialogBoxType.Help && `110px`) ||
  (props.about === DialogBoxType.Click && `250px;`);

const getAnimation = (props: DialogBoxProps) =>
  (props.about === DialogBoxType.Help && animation.move) ||
  (props.about === DialogBoxType.Click && animation.move2);

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
  animation: ${animation.move} ${animation.effects};

  & span {
    color: ${colors.blueGrey};
  }

  @media (min-width: ${mediaQuery.xLarge}) {
    right: ${getPositionRightXLarge};
  }

  @media (max-width: ${mediaQuery.small}) {
    font-size: 0.8rem;
    top: ${getPositionTopSmall};
  }
`;

export const CornerElement = styled.div<DialogBoxProps>`
  animation: ${(props) => getAnimation(props)} ${animation.effects};
  border-width: 0px 20px 20px 20px;
  border-style: solid;
  transform: scale(0.1);
  position: absolute;
  z-index: 20;
  ${getCorner}

  @media (min-width: ${mediaQuery.xLarge}) {
    display: none;
  }
`;
