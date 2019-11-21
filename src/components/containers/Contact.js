import React from "react";
import TitleSection from "../TitleSection";
import StyledContact from "../styles/StyledContact";
import TextBox from "../TextBox";
import ContactInfo from "./ContactInfo";

const ContactFooter = () => {
  return (
    <StyledContact>
      <TitleSection title="Contact" />
      <TextBox contact>
        <p>
          Puedes contactar conmigo a traves de mi cuenta de github, linkedin o
          mi correo electronico
        </p>
        <ContactInfo />
      </TextBox>
    </StyledContact>
  );
};

export default ContactFooter;
