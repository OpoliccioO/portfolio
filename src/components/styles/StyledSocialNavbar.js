import styled from "styled-components";

const StyledSocialNavbar = styled.div`
  position: fixed;
  top: 5%;
  right: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: ${props => (props.display === "hide" ? "none" : "flex")};

  & span[title="Github"] > svg,
  a[title="Github"] > svg {
    color: ${props => (props.colorGit === "home" ? "#fff" : "#333")};
  }
  & span[title="Linkedin"] > svg,
  a[title="Linkedin"] > svg {
    color: ${props => (props.colorLink === "home" ? "#fff" : "#333")};
  }

  @media screen and (max-width: 1023px) {
    & {
      display: none;
    }
  }
`;

export default StyledSocialNavbar;
