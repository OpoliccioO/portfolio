import styled, { css } from "styled-components";
import ComputerBricks from "../../assets/computer_brickwall.jpg";

const OverlayBackground = styled.div`
  display: ${props => (props.works ? "none" : "block")};
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  background-color: ${props =>
    props.works ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.45)"};
  -webkit-filter: blur(0.7px);
  filter: blur(0.7px);

  ${props =>
    props.works &&
    css`
      top: 0;
    `};
`;

export default OverlayBackground;
