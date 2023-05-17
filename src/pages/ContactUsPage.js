import React from "react";
import './csspages/ContactUsPage.css';
import ContactUs from "./ComponentPages/ContactUs";
import FooterElement from "../components/mainfooter/FooterElement";
const ContactUsPage = () => {
                    return (
                                 <main className="main-ContactUsPage" style={{marginTop: 7 +'vh',backgroundImage: "url(images/servicecenterhathairat.jpg)"}}>
                                     <ContactUs/> 
                                     <FooterElement/> 
                                 </main>
                    );
};
export default ContactUsPage;