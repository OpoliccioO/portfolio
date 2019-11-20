import React from "react";
import StyledTextBox from "./styles/StyledTextBox";

const TextBox = ({ title, children, ...props }) => {
  return (
    <StyledTextBox {...props}>
      {title ? title : null}
      {children}
    </StyledTextBox>
  );
};

export default TextBox;
