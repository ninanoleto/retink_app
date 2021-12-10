import {
  IconWrapper,
  InfoBoxWrapper,
  StyledIcon,
  StyledP,
  StyledTitle,
  Wrapper,
} from './InfoBox.styles';
import { InfoBoxIcon, InfoBoxType } from './InfoBox.types';
import icon from '../../static/IconHat.svg';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AlarmIcon from '@material-ui/icons/Alarm';

const titleIdx: Record<InfoBoxType, string> = {
  [InfoBoxType.Marketing]: 'Help me create a Marketing Plan!',
  [InfoBoxType.Info]: "I know what I'm looking for",
  [InfoBoxType.Lock]: 'Ac placerat vestibulum',
  [InfoBoxType.Shop]: 'Non curabitur gravida',
  [InfoBoxType.Alarm]: 'Tristique risus nec',
};

const paragraphIdx: Record<InfoBoxType, string> = {
  [InfoBoxType.Marketing]:
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis',
  [InfoBoxType.Info]:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  [InfoBoxType.Lock]:
    'Eturpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a vitae elementum curabitur.',
  [InfoBoxType.Shop]:
    'Svulputate sapien nec sagittis aliquam malesuada, bibendum arcu vitae elementum curabitur vitae nunc sed velit.',
  [InfoBoxType.Alarm]:
    'Mmus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra, maecenas accumsan lacus.',
};

const iconIdx: Record<InfoBoxIcon, JSX.Element> = {
  [InfoBoxIcon.Hero]: <StyledIcon src={icon} />,
  [InfoBoxIcon.Lock]: <LockOpenIcon />,
  [InfoBoxIcon.Shop]: <AddShoppingCartIcon />,
  [InfoBoxIcon.Alarm]: <AlarmIcon />,
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
    <Wrapper about={about}>
      <InfoBoxWrapper about={about}>
        {icon === InfoBoxIcon.Hero ? (
          iconIdx[icon]
        ) : (
          <IconWrapper>{iconIdx[icon]}</IconWrapper>
        )}
        <div>
          <StyledTitle about={about}>{title}</StyledTitle>
          <StyledP about={about}>{paragraph}</StyledP>
        </div>
      </InfoBoxWrapper>
    </Wrapper>
  );
};

export default InfoBox;
