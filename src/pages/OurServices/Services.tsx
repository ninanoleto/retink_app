import ServiceBox from '../../Boxes/ServiceBox/ServiceBox';
import { ServiceBoxType } from '../../Boxes/ServiceBox/ServiceBox.types';
import NavBar from '../../NavBar/NavBar';
import {
  ContentWrapper,
  Title,
  TitleWrapper,
  Wrapper,
} from './Services.styles';

const Services = () => {
  return (
    <>
      <NavBar />
      <div>
        <TitleWrapper>
          <Title>Enjoy our Services</Title>
        </TitleWrapper>
        <Wrapper>
          <ContentWrapper>
            <ServiceBox about={ServiceBoxType.Lock} />
            <ServiceBox about={ServiceBoxType.Shop} />
            <ServiceBox about={ServiceBoxType.Alarm} />
          </ContentWrapper>
        </Wrapper>
      </div>
    </>
  );
};

export default Services;
