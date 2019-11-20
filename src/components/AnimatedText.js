import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import StyledAnimatedText from "./styles/StyledAnimatedText";

const AnimatedText = ({
  strings,
  typeSpeed,
  loop,
  startDelay,
  showCursor,
  backSpeed
}) => {
  const text = useRef();
  let typed = null;

  useEffect(() => {
    const options = {
      strings,
      typeSpeed,
      loop,
      startDelay,
      showCursor,
      backSpeed
    };

    typed = new Typed(text.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return <StyledAnimatedText ref={text} />;
};

export default AnimatedText;
