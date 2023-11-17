import React from "react";
import "./cssPage.css";
import Reward from "./ComponentPages/Reward";
import History from "./ComponentPages/History";
import PopoverMessage from "./ComponentPages/PopoverMessage";
import PromotionCanvas from "./ComponentPages/PromotionCanvas";
import FooterElement from "../components/mainfooter/FooterElement";
import LayoutPage from "./LayoutPage";
const AboutUsPage = () => {
  return (
    <LayoutPage>
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
    </LayoutPage>
  );
};
export default AboutUsPage;
