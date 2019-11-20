import React, { useState, useCallback } from "react";
import StyledWorks from "../styles/StyledWorks";
import Work from "./Work";
import TitleSection from "../TitleSection";
import { useTransition, animated, config } from "react-spring";
import WorksData from "../../WorksData";

const pages = [
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <Work {...WorksData[0]} />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <Work {...WorksData[1]} />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <Work {...WorksData[2]} />
    </animated.div>
  )
];

const Works = () => {
  const [index, set] = useState(0);
  const onClick = useCallback(e => {
    /*console.log(e.target.parentNode.title);
    if (e.target.parentNode.className.indexOf("svg-") !== -1) {
      console.log(e.target.parentNode);
    }*/
    set(state => (state + 1) % pages.length);
  }, []);
  const transitions = useTransition(index, p => p, {
    initial: { transform: "translate3d(0%,0%,0)" },
    from: { transform: "translate3d(0%,100%,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0%,0)" },
    leave: { opacity: 1, transform: "translate3d(0%,-100%,0)" },
    config: { mass: 1, tension: 280, friction: 62 }
  });

  return (
    <StyledWorks>
      <TitleSection title="Works" />
      <div className="simple-trans-main" onClick={onClick}>
        {transitions.map(({ item, props, key }) => {
          //const Page = pages[item];
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
