import styled from "styled-components";

const StyledNavbar = styled.nav`
  position: fixed;
  top: 40%;
  left: 0.5%;
  transform: rotate(90deg);
  transform-origin: 18% -25%;
  z-index: 1000;

  /*& ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  & ul > li {
    transform: rotate(180deg);
    margin: 0 8%;
  }

  & ul a[title="Home"] {
    color: ${props => (props.colorHome === "home" ? "#fff" : "#333")};
  }

  & ul a[title="Works"] {
    color: ${props => (props.colorWorks === "home" ? "#fff" : "#333")};
  }

  & ul a[title="Contact"] {
    color: ${props => (props.colorContact === "home" ? "#fff" : "#333")};
  }*/
  @media screen and (max-width: 1023px) {
    & {
      display: none;
    }
  }
`;

export default StyledNavbar;
