import React, { useState, useEffect, useRef } from "react";
import StyledNavbar from "../styles/StyledNavbar";
import NavList from "./NavList";
import NavItem from "../NavItem";
import { useScroll } from "react-use-gesture";

const active = [
  { home: true, works: true, contact: true },
  { home: false, works: false, contact: false }
];

const Navbar = props => {
  const homeRef = useRef();
  const worksRef = useRef();
  const contactRef = useRef();
  const [section, setSection] = useState(["home", "home", "home"]);
  /*const [{ section }, set] = useSpring(() => ({
    section: "home",
    config: config.stiff
  }));*/

  const bind = useScroll(
    ({ xy: [x, y] }) => {
      const sectionHeight = window.innerHeight * 0.65;
      const homeWidth = homeRef.current.offsetWidth * 1.16;
      const worksWidth = worksRef.current.offsetWidth * 1.16;
      const contactWidth = contactRef.current.offsetWidth * 1.16;

      if (y < sectionHeight && !active[0].home) {
        active[0].home = true;
        active[1].home = false;
        setSection(["home", "works", "works"]);
      }
      if (y < sectionHeight - worksWidth && !active[0].works) {
        active[0].works = true;
        active[1].works = false;
        setSection(["home", "home", "works"]);
      }
      if (
        y < sectionHeight - (contactWidth + worksWidth) &&
        !active[0].contact
      ) {
        active[0].contact = true;
        active[1].contact = false;
        setSection(["home", "home", "home"]);
      }
      if (
        y >= sectionHeight - (contactWidth + worksWidth) &&
        !active[1].contact
      ) {
        active[1].contact = true;
        active[0].contact = false;
        setSection(["home", "home", "works"]);
      }
      if (y >= sectionHeight - worksWidth && !active[1].works) {
        active[0].works = false;
        active[1].works = true;
        setSection(["home", "works", "works"]);
      }
      if (y >= sectionHeight && !active[1].home) {
        active[0].home = false;
        active[1].home = true;
        setSection(["works", "works", "works"]);
      }
    },
    { domTarget: window }
  );

  const scrollToSection = section => {
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: [0, window.innerHeight, window.innerHeight * 2].find(
        (position, index) => section === index
      )
    });
  };

  useEffect(bind, [bind]);

  return (
    <StyledNavbar>
      <NavList>
        <NavItem
          to="#home"
          linkText="Home"
          title="Home"
          ref={homeRef}
          colorHome={section[0]}
          onClick={() => scrollToSection(0)}
        />
        <NavItem
          to="#works"
          linkText="Works"
          title="Works"
          ref={worksRef}
          colorWorks={section[1]}
          onClick={() => scrollToSection(1)}
        />
        <NavItem
          to="#contact"
          linkText="Contact"
          title="Contact"
          ref={contactRef}
          colorContact={section[2]}
          onClick={() => scrollToSection(2)}
        />
      </NavList>
    </StyledNavbar>
  );
};

export default Navbar;

/*

<StyledNavbar
      colorHome={section[0]}
      colorWorks={section[1]}
      colorContact={section[2]}
    >
      <ul>
        <li ref={homeRef}>
          <Button as="a" navbar title="Home" onClick={() => scrollToSection(0)}>
            Home
          </Button>
        </li>
        <li ref={worksRef}>
          <Button
            as="a"
            navbar
            title="Works"
            onClick={() => scrollToSection(1)}
          >
            Works
          </Button>
        </li>
        <li ref={contactRef}>
          <Button
            as="a"
            navbar
            title="Contact"
            onClick={() => scrollToSection(2)}
          >
            Contact
          </Button>
        </li>
      </ul>
    </StyledNavbar>
*/
