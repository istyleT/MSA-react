import React from "react";
import './csspages/MarketingPage.css';
import News from "./ComponentPages/News.js";
const MarketingPage = () => {
                    return (
                              <main className="main-MarketingPage bg-light" style={{marginTop: 7 +'vh'}}>
                                 <News/>
                              </main>
                    );
};
export default MarketingPage;