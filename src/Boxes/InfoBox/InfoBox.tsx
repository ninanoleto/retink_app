import React from 'react';
import {
  InfoBoxWrapper,
  StyledIcon,
  StyledP,
  StyledTitle,
  Wrapper,
} from './InfoBox.styles';
import { InfoBoxIcon, InfoBoxType } from './InfoBox.types';
import icon from '../../static/IconHat.svg';

const titleIdx: Record<InfoBoxType, string> = {
  [InfoBoxType.Marketing]: 'Help me create a Marketing Plan!',
  [InfoBoxType.Info]: "I know what I'm looking for",
};

const paragraphIdx: Record<InfoBoxType, string> = {
  [InfoBoxType.Marketing]:
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis',
  [InfoBoxType.Info]:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

const iconIdx: Record<InfoBoxIcon, JSX.Element> = {
  [InfoBoxIcon.Hero]: <StyledIcon src={icon} />,
};

type InfoBoxProps = {
  about: InfoBoxType;
  icon: InfoBoxIcon;
};

const InfoBox = (props: InfoBoxProps) => {
  const { about, icon } = props;

  const title = titleIdx[about];
  const paragraph = paragraphIdx[about];

  return (
    <Wrapper>
      <InfoBoxWrapper>
        {iconIdx[icon]}
        <div>
          <StyledTitle>{title}</StyledTitle>
          <StyledP>{paragraph}</StyledP>
        </div>
      </InfoBoxWrapper>
    </Wrapper>
  );
};

export default InfoBox;
