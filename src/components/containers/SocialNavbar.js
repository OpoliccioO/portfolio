import React, { useState, useEffect, useRef } from "react";
import { animated, useSpring, config } from "react-spring";
import { useScroll } from "react-use-gesture";
import StyledSocialNavbar from "../styles/StyledSocialNavbar";
import { Icon } from "../IconTag";

const active = [
  { git: false, link: false },
  { git: false, link: false },
  { icons: true }
];

const SocialNavbar = () => {
  const iconRef = useRef();
  const [color, setColor] = useState(["home", "home"]);
  const [display, setDisplay] = useState("show");

  const bind = useScroll(
    ({ xy: [x, y] }) => {
      const sectionHeight = window.innerHeight * 0.95 - 5;
      const iconHeight = iconRef.current.offsetHeight / 2;

      if (y < sectionHeight && !active[0].git) {
        active[0].git = true;
        active[1].git = false;
        setColor(["home", "works"]);
      } else if (y < sectionHeight - iconHeight && !active[0].link) {
        active[0].link = true;
        active[1].link = false;
        setColor(["home", "home"]);
      } else if (y >= sectionHeight - iconHeight && !active[1].link) {
        active[1].link = true;
        active[0].link = false;
        setColor(["home", "works"]);
      } else if (y >= sectionHeight && !active[1].git) {
        active[0].git = false;
        active[1].git = true;
        setColor(["works", "works"]);
      }
      if (y >= 0 && y < sectionHeight * 1.8 && !active[2].icons) {
        active[2].icons = true;
        setDisplay("show");
      } else if (y >= sectionHeight * 1.8 && active[2].icons) {
        active[2].icons = false;
        setDisplay("hide");
      }
    },
    { domTarget: window }
  );

  useEffect(bind, [bind]);

  return (
    <StyledSocialNavbar
      ref={iconRef}
      colorGit={color[0]}
      colorLink={color[1]}
      display={display}
    >
      <Icon
        title="Github"
        as="a"
        to="https://github.com"
        target="_blank"
        icon={["fab", "github"]}
        size="large"
      />
      <Icon
        title="Linkedin"
        as="a"
        to="https://www.linkedin.com/in/pol-martin-colome-210bab16b/"
        target="_blank"
        icon={["fab", "linkedin"]}
        size="large"
      />
    </StyledSocialNavbar>
  );
};

export default SocialNavbar;
