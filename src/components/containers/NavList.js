import React, { useState, useEffect, useRef } from "react";
import StyledNavList from "../styles/StyledNavList";

const NavList = ({ children }) => {
  return <StyledNavList>{children}</StyledNavList>;
};

export default NavList;
