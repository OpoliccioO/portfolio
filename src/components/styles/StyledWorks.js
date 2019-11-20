import styled from "styled-components";

const StyledWorks = styled.section`
  & .simple-trans-main {
    width: 80%;
    height: 66%;
    margin: 7% 10% 7%;
    padding: 0 2.5%;
    position: relative;
    overflow: hidden;
    z-index: 3;
  }

  & .simple-trans-main > div {
    height: 100%;
    position: absolute;
  }

  @media screen and (max-width: 1023px) {
    & .simple-trans-main {
      height: 70%;
    }
  }

  @media screen and (max-width: 500px) {
    & .simple-trans-main {
      margin: 5% 0 0 0;
      padding: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

export default StyledWorks;
