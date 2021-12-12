import React from 'react';
import { ContentWrapper, StyledBg, StyledLink } from './NotFound.styles';

const NotFound = () => {
  return (
    <ContentWrapper>
      <StyledBg>
        <h1>404 Page Not Found</h1>
        <StyledLink to="/retink_app">Go to Home</StyledLink>
      </StyledBg>
    </ContentWrapper>
  );
};

export default NotFound;
