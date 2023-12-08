import React from "react";
import "../style/cssPage.css";
import ContactUs from "../components/comppage/ContactUs";
import FooterElement from "../utils/ui/FooterElement";
const ContactUsPage = () => {
  return (
    <main
      className="main-ContactUsPage"
      style={{
        marginTop: 7 + "vh",
        backgroundImage: "url(images/servicecenterhathairat.jpg)",
      }}
    >
      <ContactUs />
      <FooterElement />
    </main>
  );
};
export default ContactUsPage;
