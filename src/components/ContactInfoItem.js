import React from "react";
import styled from "styled-components";
import { Icon } from "./IconTag";

const StyledInfoItem = styled.div`
  border: 0.2vw solid #333;
  border-radius: 10px;
  padding: 3%;
  position: relative;
  width: 31%;

  & span {
    position: absolute;
    bottom: 72%;
    left: 43.5%;
    background: #fff;
    padding: 3.5%;
    margin: 0;
  }

  & a {
    color: #333;
    text-decoration: none;
    margin: 0;
    font-size: 1.5vw;
    text-align: center;
  }

  @media screen and (max-width: 1023px) {
    & {
      width: 50%;
      margin-bottom: 6%;
    }

    & a {
      font-size: 2vw;
    }
  }

  @media screen and (max-width: 500px) {
    & {
      width: 80%;
      margin-bottom: 15%;
    }

    & a {
      font-size: 4vw;
    }

    & span {
      bottom: 65%;
    }

    & svg {
      font-size: 4vw;
    }
  }
`;

const ContactInfoItem = ({ icon, size, text, to, target }) => {
  return (
    <StyledInfoItem>
      <Icon icon={icon} size={size} />
      <a href={to} target={target}>
        {text}
      </a>
    </StyledInfoItem>
  );
};

export default ContactInfoItem;
