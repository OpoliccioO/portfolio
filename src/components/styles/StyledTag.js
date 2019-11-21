import styled from "styled-components";

const StyledTag = styled.span`
  margin: 0 1.5% 2% 0;
  background: #333;
  color: #fff;
  padding: 0.3vw 0.8vw 0.3vw 0.8vw;
  /*padding: 5px 10px 5px 22px;*/
  border-radius: 0.3vw;
  font-size: 0.95vw;
  position: relative;

  @media screen and (max-width: 1023px) {
    font-size: 1.7vw;
    border-radius: 0.5vw;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.55vh;
    padding: 0.5vw 1.2vw 0.5vw 1.2vw;
  }
`;

export default StyledTag;
