import React from "react";
import "../style/cssPage.css";
import Reward from "../components/comppage/Reward";
import History from "../components/comppage/History";
import PopoverMessage from "../components/comppage/PopoverMessage";
import PromotionCanvas from "../components/comppage/PromotionCanvas";
import FooterElement from "../utils/ui/FooterElement";
import LayoutPage from "./Layout/LayoutPage";
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
