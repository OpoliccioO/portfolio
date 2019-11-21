import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "./Header";
import SocialNavbar from "./SocialNavbar";
import Navbar from "./Navbar";
import Works from "./Works";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Header />
      <SocialNavbar />
      <Navbar />
      <Works />
      <Contact />
      <GlobalStyles />
    </>
  );
}

export default App;
