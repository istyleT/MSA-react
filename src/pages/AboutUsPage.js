import React from "react";
import './csspages/AboutUsPage.css';
import Reward from "./ComponentPages/Reward";
import History from "./ComponentPages/History";
const AboutUsPage = () => {
                    return (
                              <main className="main-AboutUsPage" style={{marginTop: 7 +'vh', backgroundImage: "url(images/servicecenterhathairat.jpg)"}}>
                                  <Reward/>
                                  <History/>
                              </main>
                    );
};
export default AboutUsPage;