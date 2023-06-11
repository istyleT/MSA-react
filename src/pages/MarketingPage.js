import React from "react";
import "./cssPage.css";
import News from "./ComponentPages/News.js";
import FooterElement from "../components/mainfooter/FooterElement";
import PopoverMessage from "./ComponentPages/PopoverMessage";
import PromotionCanvas from "./ComponentPages/PromotionCanvas";
const MarketingPage = () => {
                    return (
                              <main className="main-MarketingPage bg-light" style={{marginTop: 7 +'vh'}}>
                                 <News/>
                                 <PromotionCanvas/>
                                 <PopoverMessage/>
                                 <FooterElement/>
                              </main>
                    );
};
export default MarketingPage;