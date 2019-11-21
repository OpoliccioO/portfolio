import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  font-size: 2.7vw;
  color: #333;
  width: 80%;
  text-align: left;
  margin-top: 5%;
  padding: 0 0 0.5% 1%;
  text-transform: uppercase;
  border-bottom: 0.2vw solid #333;

  & em {
    color: #757373;
    position: relative;
    left: 55%;
    font-weight: 400;
    text-transform: initial;
    font-size: 1.35vw;
  }

  @media screen and (max-width: 1023px) {
    & {
      border: 0;
      font-size: 4.5vw;
      margin-top: 6%;
    }
    & em {
      font-size: 2vw;
      left: 34%;
    }
  }
  @media screen and (max-width: 500px) {
    & {
      margin-top: 0;
      width: 100%;
      padding-left: 5%;
      padding-top: 7%;
      font-size: 2.7vh;
    }
    & em {
      font-size: 1.3vh;
      left: 20%;
    }
  }
`;

const TitleSection = ({ title, mutedText }) => {
  return (
    <StyledTitle>
      {title}
      <em>{mutedText ? mutedText : null}</em>
    </StyledTitle>
  );
};

export default TitleSection;
