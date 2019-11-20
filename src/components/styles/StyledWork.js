import styled from "styled-components";

const StyledWork = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: normal;
  text-align: justify;
  z-index: 3;

  @media screen and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
  }
`;

export default StyledWork;
