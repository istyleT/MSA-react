import React from "react";
import "../style/cssPage.css";
import News from "../components/comppage/News";
import FooterElement from "../utils/ui/FooterElement";
import PopoverMessage from "../components/comppage/PopoverMessage";
import PromotionCanvas from "../components/comppage/PromotionCanvas";
import LayoutPage from "./Layout/LayoutPage";
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
