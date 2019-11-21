import styled, { css } from "styled-components";

const StyledTextBox = styled.div`
  color: #333;
  display: flex;
  flex-direction: column;

  & a + p,
  h4 + p {
    margin-bottom: 5%;
  }

  & h3 {
    color: #262626;
    font-weight: 600;
    font-size: 1.9vw;
    margin-bottom: 1.8%;
  }

  & h4 {
    font-weight: 500;
    font-size: 1.3vw;
    margin-bottom: 2%;
  }

  &.textbox-header {
    color: #fff;
    z-index: 1;
    align-items: center;
    align-content: space-around;
    margin: 35vh auto 0;
    width: 100%;
    height: 100vh;
  }
  &.textbox-header h1 {
    font-weight: 300;
    font-size: 3.7vw;
    letter-spacing: 0.7vw;
    word-spacing: 0.3vw;
    text-transform: uppercase;
  }

  & p {
    font-size: ${props => (props.contact ? "1.8vw" : "1.02vw")};
    font-weight: ${props => (props.contact ? 500 : 400)};
    ${props =>
      props.contact &&
      css`
        text-align: justify;
        margin: 5% 5% 0;
      `}
  }

  @media screen and (max-width: 1023px) {
    &.title-work {
      position: relative;
    }

    &.textbox-header h1 {
      font-size: 6vw;
      letter-spacing: 0.9vw;
      word-spacing: 0.4vw;
    }

    & a + p,
    h4 + p {
      margin-bottom: 3%;
    }

    & h3 {
      font-size: 3.5vw;
      width: 80%;
    }

    & h4 {
      font-size: 2.7vw;
    }

    & p {
      font-size: ${props => (props.contact ? "2.5vw" : "1.9vw")};
    }
  }

  @media screen and (max-width: 500px) {
    &.textbox-header h1 {
      font-size: 12.5vw;
      letter-spacing: 1.2vw;
      word-spacing: 1vw;
    }

    & h3 {
      font-size: 2.55vh;
      width: 80%;
    }

    & h4 {
      font-size: 2vh;
    }

    & p {
      font-size: ${props => (props.contact ? "2vh" : "1.6vh")};
    }
  }
`;

export default StyledTextBox;
