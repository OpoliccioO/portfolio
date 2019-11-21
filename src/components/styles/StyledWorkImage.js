import styled from "styled-components";

const StyledImg = styled.div`
  position: relative;
  width: 60%;
  /*background: url(${props => props.image}) no-repeat center center/cover;
  background-size: 100% 100%;*/
  & img {
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 1024px) {
    &:hover > a {
      display: flex;
    }

    &:hover > div {
      display: block;
    }
  }

  @media screen and (max-width: 1023px) {
    width: 100%;
    height: 50%;
  }

  @media screen and (max-width: 500px) {
    height: 40%;
  }
`;

export default StyledImg;
