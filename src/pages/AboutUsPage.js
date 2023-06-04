import React from "react";
import "./csspages/AboutUsPage.css";
import Reward from "./ComponentPages/Reward";
import History from "./ComponentPages/History";
import PopoverMessage from "./ComponentPages/PopoverMessage";
import PromotionCanvas from "./ComponentPages/PromotionCanvas";
import FooterElement from "../components/mainfooter/FooterElement";
const AboutUsPage = () => {
  return (
    <main
      className="main-AboutUsPage"
      style={{
        marginTop: 7 + "vh",
        backgroundImage: "url(images/servicecenterhathairat.jpg)",
      }}
    >
      <Reward />
      <History />
      <PromotionCanvas />
      <PopoverMessage />
      <FooterElement />
    </main>
  );
};
export default AboutUsPage;
