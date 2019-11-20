import React from "react";
import StyledWork from "../styles/StyledWork";
import Workimage from "./WorkImage";
import WorkDescription from "../containers/WorkDescription";
import ComputerBricks from "../../assets/computer_brickwall.jpg";

const Work = ({ image, hrefCode, hrefDemo, ...description }) => {
  return (
    <StyledWork>
      <Workimage
        src={image}
        hrefCode={hrefCode}
        hrefDemo={hrefDemo}
        alt="imagen de la applicacion"
      />
      <WorkDescription
        hrefCode={hrefCode}
        hrefDemo={hrefDemo}
        {...description}
      />
    </StyledWork>
  );
};

export default Work;
