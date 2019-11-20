import React from "react";
import StyledHeader from "../styles/StyledHeader";
import OverlayBackground from "../styles/OverlayBackground";
import TextBox from "../TextBox";
import AnimatedText from "../AnimatedText";

const Header = () => {
  const strings = ["Ingeniero", "Desarollador Web", "Mejora Continua"];
  return (
    <StyledHeader>
      <OverlayBackground />
      <TextBox className="textbox-header" title={<h1>Pol Martin</h1>}>
        <AnimatedText
          strings={strings}
          typeSpeed={80}
          loop={true}
          startDelay={900}
          showCursor={false}
          backSpeed={50}
        />
      </TextBox>
    </StyledHeader>
  );
};

export default Header;

/* <HeaderBackground />*/
