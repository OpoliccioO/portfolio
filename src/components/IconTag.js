import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StyledIcon from "./styles/StyledIcon";
import StyledTag from "./styles/StyledTag";

export const Icon = ({ icon, ...props }) => {
  return (
    <StyledIcon {...props}>
      <FontAwesomeIcon icon={icon} />
    </StyledIcon>
  );
};

export const Tag = ({ text, size }) => {
  return <StyledTag size={size}>{text}</StyledTag>;
};
