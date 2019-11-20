import styled from "styled-components";

const StyledContactInfo = styled.div`
  margin: 10% 5% 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 500px) {
    margin: 20% 5% 5%;
  }
`;

export default StyledContactInfo;
