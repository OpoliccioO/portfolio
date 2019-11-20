import React from "react";
import StyledWorkImage from "../styles/StyledWorkImage";
import OverlayBackground from "../styles/OverlayBackground";
import Link from "../Link";

const WorkImage = ({ src, alt, hrefDemo, hrefCode }) => {
  return (
    <StyledWorkImage image={src}>
      <img src={src} alt={alt} />
      <OverlayBackground works />
      <Link demo href={hrefDemo} target="_blank">
        Demo
      </Link>
      <Link code href={hrefCode} target="_blank">
        Codigo
      </Link>
    </StyledWorkImage>
  );
};
//
export default WorkImage;
