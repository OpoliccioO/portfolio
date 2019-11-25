import styled from "styled-components";

const StyledWorkDescription = styled.div`
  /*width: 40%;*/
  width: 36%;
  padding: 2% 8px 0 3%;
  overflow-y: auto;

  /* width */
  ::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #fff;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  @media screen and (max-width: 1023px) {
    width: 100%;
    padding: 5% 3% 0 3%;
  }

  @media screen and (max-width: 500px) {
    height: 60%;
    z-index: 10;
    padding: 8% 6% 0 6%;
    background: #fff;
  }
`;

export default StyledWorkDescription;
