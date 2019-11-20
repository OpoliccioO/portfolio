import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-size: 10px;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";;
    /*height: 100vh;
    overflow: hidden;*/

  }
  #root {
    width: 100%;
    height: 100%;
    /*overflow-y: scroll;*/
  }

  header, section, footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100vh;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #888;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 2px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media screen and (min-width: 1024px) {
    header, section, footer {
      min-height:700px;
    }
  }
`;

export default GlobalStyles;
