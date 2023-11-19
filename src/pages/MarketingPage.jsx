import React from "react";
import "./cssPage.css";
import News from "./ComponentPages/News";
import FooterElement from "../components/mainfooter/FooterElement";
import PopoverMessage from "./ComponentPages/PopoverMessage";
import PromotionCanvas from "./ComponentPages/PromotionCanvas";
import LayoutPage from "./LayoutPage";
const MarketingPage = () => {
  return (
    <LayoutPage>
      <main
        className="main-MarketingPage bg-light"
        style={{ marginTop: 7 + "vh" }}
      >
        <News />
        <PromotionCanvas />
        <PopoverMessage />
        <FooterElement />
      </main>
    </LayoutPage>
  );
};
export default MarketingPage;
