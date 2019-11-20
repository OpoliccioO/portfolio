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

  @media screen and (max-width: 1023px) {
    & {
      width: 100%;
      border: 0;
      font-size: 4.5vw;
      padding-left: 5%;
      padding-top: 5%;
    }
  }
  @media screen and (max-width: 500px) {
    & {
      margin-top: 0;
    }
  }
`;

const TitleSection = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

export default TitleSection;
