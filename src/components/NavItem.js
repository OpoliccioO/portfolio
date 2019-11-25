import React from "react";
import styled from "styled-components";

const StyledNavItem = styled.li`
  transform: rotate(180deg);
  margin: 0 8%;
  font-size: 1.7vw;
  text-transform: uppercase;
  letter-spacing: 0.2vw;
  font-weight: 400;

  & a {
    text-decoration: none;
  }

  & a[title="Home"] {
    color: ${props => (props.colorHome === "home" ? "#fff" : "#333")};
  }

  & a[title="Portfolio"] {
    color: ${props => (props.colorWorks === "home" ? "#fff" : "#333")};
  }

  & a[title="Contact"] {
    color: ${props => (props.colorContact === "home" ? "#fff" : "#333")};
  }
`;
/*const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));*/

const NavItem = React.forwardRef(({ to, linkText, title, ...props }, ref) => (
  <StyledNavItem {...props} ref={ref}>
    <a href={to} title={title}>
      {linkText}
    </a>
  </StyledNavItem>
));

export default NavItem;
