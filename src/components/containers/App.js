import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "./Header";
import SocialNavbar from "./SocialNavbar";
import Navbar from "./Navbar";
import Works from "./Works";
import ContactFooter from "./ContactFooter";

function App() {
  return (
    <>
      <Header />
      <SocialNavbar />
      <Navbar />
      <Works />
      <ContactFooter />
      <GlobalStyles />
    </>
  );
}

export default App;
