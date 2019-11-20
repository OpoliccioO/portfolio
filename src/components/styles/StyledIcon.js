import styled from "styled-components";

const StyledIcon = styled.span.attrs(props => ({
  href: props.to ? props.to : null,
  target: props.target ? props.target : null
}))`
  margin: 0.7vw 0;

  & svg {
    font-size: ${props =>
      !props.size
        ? "inherit"
        : props.size === "small"
        ? "1.5vw"
        : props.size === "medium"
        ? "2vw"
        : "2.7vw"};
  }
`;

export default StyledIcon;
