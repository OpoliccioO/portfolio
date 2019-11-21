import styled, { css } from "styled-components";

const StyledLink = styled.a.attrs(props => ({
  href: props.href,
  target: props.target
}))`
  display: none;
  text-decoration: none;
  flex-direction: column;
  align-items: center;
  background: transparent;
  position: absolute;
  border: none;
  font-size: 1vw;
  letter-spacing: 2px;
  color: #fff;
  font-weight: 400;
  bottom: 15%;
  left: ${props => (props.demo ? "30%" : "55%")};
  transform: scale(0.9);
  transition: transform 0.2s linear;
  will-change: transform;
  z-index: 500;

  ${props =>
    props.href !== "#"
      ? css`
          &:hover {
            transform: scale(1);
          }
        `
      : css`
          & {
            cursor: default;
            color: #888 !important;
            pointer-events: none;
          }
        `}

  @media screen and (max-width: 1023px) {
    &.description-work {
      transform: scale(1);
      display: inline-table;
      bottom: 0;
      top: -5px;
      left: ${props => (props.demo ? "83%" : "95%")};
      color: #333;
    }

    &.description-work svg {
      font-size: 3vw;
    }
  }

  @media screen and (max-width: 500px) {
    &.description-work svg {
      font-size: 3.5vw;
    }
  }
`;

export default StyledLink;
