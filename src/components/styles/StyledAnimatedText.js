import styled from "styled-components";

const StyledAnimatedText = styled.span`
  font-size: 1.85vw;
  font-weight: 100;
  letter-spacing: 0.75vw;
  margin-top: 1.5%;

  @media screen and (max-width: 1023px) {
    & {
      font-size: 3.2vw;
      letter-spacing: 0.8vw;
    }
  }

  @media screen and (max-width: 500px) {
    & {
      font-size: 6.5vw;
      letter-spacing: 1.2vw;
    }
  }
`;

export default StyledAnimatedText;
