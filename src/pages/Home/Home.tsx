import NavBar from '../../NavBar/NavBar';
import InfoBox from '../../Boxes/InfoBox/InfoBox';
import DialogBox from '../../Boxes/DialogBox/DialogBox';

import mascot from '../../static/mascot.png';
import {
  ContentWrapper,
  Hero,
  Mascot,
  MascotWrapper,
  Title,
} from './Home.styles';
import { InfoBoxIcon, InfoBoxType } from '../../Boxes/InfoBox/InfoBox.types';

const Home = () => {
  return (
    <>
      <NavBar />
      <ContentWrapper>
        <Hero>
          <Title>What are you looking for?</Title>
          <InfoBox about={InfoBoxType.Marketing} icon={InfoBoxIcon.Hero} />
          <InfoBox about={InfoBoxType.Info} icon={InfoBoxIcon.Hero} />
        </Hero>
        <MascotWrapper>
          <Mascot src={mascot} />
          <DialogBox about="help" />
          <DialogBox about="click" />
        </MascotWrapper>
      </ContentWrapper>
    </>
  );
};

export default Home;
