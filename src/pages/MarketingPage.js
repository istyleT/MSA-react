import React from "react";
import './csspages/MarketingPage.css';
import News from "./ComponentPages/News.js";
import FooterElement from "../components/mainfooter/FooterElement";
const MarketingPage = () => {
                    return (
                              <main className="main-MarketingPage bg-light" style={{marginTop: 7 +'vh'}}>
                                 <News/>
                                 <FooterElement/>
                              </main>
                    );
};
export default MarketingPage;