import React from 'react';
import Card from '../../Boxes/Card/Card';
import { CardType } from '../../Boxes/Card/Card.types';
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
            <Card about={CardType.Lock} />
            <Card about={CardType.Shop} />
            <Card about={CardType.Alarm} />
          </ContentWrapper>
        </Wrapper>
      </div>
    </>
  );
};

export default Services;
