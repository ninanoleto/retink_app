import { ContentWrapper, StyledBg, StyledLink } from './NotFound.styles';

const NotFound = () => {
  return (
    <ContentWrapper>
      <StyledBg>
        <h1>404 Page Not Found</h1>
        <StyledLink to="/">Go to Home</StyledLink>
      </StyledBg>
    </ContentWrapper>
  );
};

export default NotFound;
