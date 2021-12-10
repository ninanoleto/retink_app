import InfoBox from '../../Boxes/InfoBox/InfoBox';
import { InfoBoxIcon, InfoBoxType } from '../../Boxes/InfoBox/InfoBox.types';
import NavBar from '../../NavBar/NavBar';
import {
  ContentWrapper,
  StyledServices,
  Title,
  TitleWrapper,
  Wrapper,
} from './Services.styles';

const Services = () => {
  return (
    <>
      <NavBar />
      <StyledServices>
        <TitleWrapper>
          <Title>Enjoy our Services</Title>
        </TitleWrapper>
        <Wrapper>
          <ContentWrapper>
            <InfoBox about={InfoBoxType.Lock} icon={InfoBoxIcon.Lock} />
            <InfoBox about={InfoBoxType.Shop} icon={InfoBoxIcon.Shop} />
            <InfoBox about={InfoBoxType.Alarm} icon={InfoBoxIcon.Alarm} />
          </ContentWrapper>
        </Wrapper>
      </StyledServices>
    </>
  );
};

export default Services;
