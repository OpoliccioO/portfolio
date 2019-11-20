import React from "react";
import PropTypes from "prop-types";
import StyledLink from "./styles/StyledLink";
import { Icon } from "./IconTag";

const Link = ({ children, ...props }) => {
  const iconButton = props.demo ? "laptop" : props.code ? "code" : null;
  return (
    <StyledLink {...props}>
      {iconButton !== null && <Icon icon={iconButton} size="medium" />}
      {children}
    </StyledLink>
  );
};

Link.propTypes = {
  children: PropTypes.string
};

export default Link;
