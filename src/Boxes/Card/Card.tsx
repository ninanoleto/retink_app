import {
  IconWrapper,
  CardWrapper,
  StyledP,
  StyledTitle,
  Wrapper,
} from './Card.styles';
import { CardType } from './Card.types';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AlarmIcon from '@material-ui/icons/Alarm';

const titleIdx: Record<CardType, string> = {
  [CardType.Lock]: 'Ac placerat vestibulum',
  [CardType.Shop]: 'Non curabitur gravida',
  [CardType.Alarm]: 'Tristique risus necdec',
};

const paragraphIdx: Record<CardType, string> = {
  [CardType.Lock]:
    'Eturpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a vitae elementum curabitur.',
  [CardType.Shop]:
    'Svulputate sapien nec sagittis aliquam malesuada, bibendum arcu vitae elementum curabitur vitae nunc sed.',
  [CardType.Alarm]:
    'Mmus mauris vitae ultricies leonec integer malesuada nunc vel risus commodo viverra, maecenas accumsan.',
};

const iconIdx: Record<CardType, JSX.Element> = {
  [CardType.Lock]: <LockOpenIcon />,
  [CardType.Shop]: <AddShoppingCartIcon />,
  [CardType.Alarm]: <AlarmIcon />,
};

type CardProps = {
  about: CardType;
};

const Card = (props: CardProps) => {
  const { about } = props;

  const title = titleIdx[about];
  const paragraph = paragraphIdx[about];
  const icon = iconIdx[about];

  return (
    <Wrapper>
      <CardWrapper>
        <IconWrapper>{icon}</IconWrapper>
        <div>
          <StyledTitle>{title}</StyledTitle>
          <StyledP>{paragraph}</StyledP>
        </div>
      </CardWrapper>
    </Wrapper>
  );
};

export default Card;
