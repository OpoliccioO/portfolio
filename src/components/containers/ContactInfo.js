import React from "react";
import StyledContactInfo from "../styles/StyledContactInfo";
import ContactInfoItem from "../ContactInfoItem";

const ContactInfo = () => {
  return (
    <StyledContactInfo>
      <ContactInfoItem
        icon="at"
        to="mailto:pol.martin28@gmail.com"
        size="medium"
        text="pol.martin28@gmail.com"
      />
      <ContactInfoItem
        icon={["fab", "github"]}
        to="https://github.com/OpoliccioO"
        target="_blank"
        size="medium"
        text="Github"
      />
      <ContactInfoItem
        icon={["fab", "linkedin"]}
        to="https://www.linkedin.com/in/pol-martin-colome-210bab16b/"
        target="_blank"
        size="medium"
        text="LinkedIn"
      />
    </StyledContactInfo>
  );
};

export default ContactInfo;
