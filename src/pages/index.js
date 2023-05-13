import React from "react";
import './csspages/HomePage.css';
import Branch from "./ComponentPages/Branch.js";
import BannerHome from "./ComponentPages/BannerHome";
import MainHome from "./ComponentPages/MainHome";
import VideoBranchAlbum from "./ComponentPages/VideoBranchAlbum";
const HomePage = () => {
                    return (
                              <main className="main-HomePage" style={{marginTop: 7 +'vh', backgroundImage: "url(images/servicecenterhathairat.jpg)" }}>
                                    <BannerHome/>
                                    <MainHome/>
                                    <VideoBranchAlbum/>
                                    <Branch/>
                              </main>
                    );
};
export default HomePage;