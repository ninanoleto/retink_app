import {
  IconWrapper,
  InfoBoxWrapper,
  StyledP,
  StyledTitle,
  Wrapper,
} from './ServiceBox.styles';
import { ServiceBoxType } from './ServiceBox.types';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AlarmIcon from '@material-ui/icons/Alarm';

const titleIdx: Record<ServiceBoxType, string> = {
  [ServiceBoxType.Lock]: 'Ac placerat vestibulum',
  [ServiceBoxType.Shop]: 'Non curabitur gravida',
  [ServiceBoxType.Alarm]: 'Tristique risus necdec',
};

const paragraphIdx: Record<ServiceBoxType, string> = {
  [ServiceBoxType.Lock]:
    'Eturpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a vitae elementum curabitur.',
  [ServiceBoxType.Shop]:
    'Svulputate sapien nec sagittis aliquam malesuada, bibendum arcu vitae elementum curabitur vitae nunc sed.',
  [ServiceBoxType.Alarm]:
    'Mmus mauris vitae ultricies leonec integer malesuada nunc vel risus commodo viverra, maecenas accumsan.',
};

const iconIdx: Record<ServiceBoxType, JSX.Element> = {
  [ServiceBoxType.Lock]: <LockOpenIcon />,
  [ServiceBoxType.Shop]: <AddShoppingCartIcon />,
  [ServiceBoxType.Alarm]: <AlarmIcon />,
};

type ServiceBoxProps = {
  about: ServiceBoxType;
};

const ServiceBox = (props: ServiceBoxProps) => {
  const { about } = props;

  const title = titleIdx[about];
  const paragraph = paragraphIdx[about];
  const icon = iconIdx[about];

  return (
    <Wrapper>
      <InfoBoxWrapper>
        <IconWrapper>{icon}</IconWrapper>
        <div>
          <StyledTitle>{title}</StyledTitle>
          <StyledP>{paragraph}</StyledP>
        </div>
      </InfoBoxWrapper>
    </Wrapper>
  );
};

export default ServiceBox;
