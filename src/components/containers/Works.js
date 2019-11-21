import React, { useState, useCallback } from "react";
import StyledWorks from "../styles/StyledWorks";
import Work from "./Work";
import TitleSection from "../TitleSection";
import { useTransition, animated } from "react-spring";
import WorksData from "../../WorksData";

const Works = () => {
  const [index, set] = useState(0);

  const onClick = useCallback(e => {
    e.target.tagName !== "svg" &&
      e.target.tagName !== "path" &&
      set(state => (state + 1) % WorksData.length);
  }, []);
  /*
  const [hover, setHover] = useState(false);
  const onMouseEnter = useCallback(() => {
    setHover(true);
  }, []);
  const onMouseLeave = useCallback(() => {
    setHover(false);
  }, []);
          onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
  */

  const transitions = useTransition(index, p => p, {
    initial: { transform: "translate3d(0%,0%,0)" },
    from: { transform: "translate3d(0%,100%,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0%,0)" },
    leave: { opacity: 1, transform: "translate3d(0%,-100%,0)" },
    config: { mass: 1, tension: 280, friction: 62 }
  });

  return (
    <StyledWorks>
      <TitleSection
        title="Works"
        mutedText="(Clica o aprieta para pasar al siguiente)"
      />
      <div className="simple-trans-main" onClick={onClick}>
        {transitions.map(({ item, props, key }) => {
          return (
            <animated.div key={key} style={props}>
              <Work {...WorksData[item]} />
            </animated.div>
          );
        })}
      </div>
    </StyledWorks>
  );
};

export default Works;
