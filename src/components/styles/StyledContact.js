import styled from "styled-components";

const StyledContact = styled.section`
  & > div {
    width: 80%;
    height: 80%;
  }
  @media screen and (max-width: 500px) {
    & > div {
      width: 100%;
      height: 90%;
    }
  }
`;

export default StyledContact;
