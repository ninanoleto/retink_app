import NavBar from '../../NavBar/NavBar';
import InfoBox from '../../Boxes/InfoBox/InfoBox';
import DialogBox from '../../Boxes/DialogBox/DialogBox';

import mascot from '../../static/mascot.png';
import {
  CardsWrapper,
  ContentWrapper,
  Hero,
  Main,
  Mascot,
  MascotWrapper,
  SectionFeatures,
  SectionWrapper,
  Title,
  TitleFeature,
} from './Home.styles';
import { InfoBoxIcon, InfoBoxType } from '../../Boxes/InfoBox/InfoBox.types';
import { DialogBoxType } from '../../Boxes/DialogBox/Dialog.types';
import Card from '../../Boxes/Card/Card';
import { CardType } from '../../Boxes/Card/Card.types';

const Home = () => {
  return (
    <>
      <NavBar />
      <Main>
        <ContentWrapper>
          <Hero>
            <Title>What are you looking for?</Title>
            <InfoBox about={InfoBoxType.Marketing} icon={InfoBoxIcon.Hero} />
            <InfoBox about={InfoBoxType.Info} icon={InfoBoxIcon.Hero} />
          </Hero>
          <MascotWrapper>
            <Mascot src={mascot} />
            <DialogBox about={DialogBoxType.Help} />
            <DialogBox about={DialogBoxType.Click} />
          </MascotWrapper>
        </ContentWrapper>
        <SectionWrapper>
          <SectionFeatures>
            <div>
              <TitleFeature>How it works</TitleFeature>
            </div>
          </SectionFeatures>
          <CardsWrapper>
            <Card about={CardType.Lock} />
            <Card about={CardType.Alarm} />
          </CardsWrapper>
        </SectionWrapper>
      </Main>
    </>
  );
};

export default Home;
