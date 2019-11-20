import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import TitleSection from "../TitleSection";

const ContactFooter = () => {
  return (
    <footer>
      <TitleSection title="Contact" />
      <Contact />
      <Footer />
    </footer>
  );
};

export default ContactFooter;
