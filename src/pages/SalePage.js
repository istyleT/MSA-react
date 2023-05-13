import React from "react";
import './csspages/SalePage.css';
import SaleBanner from "./ComponentPages/SaleBanner";
import SaleSocial from "./ComponentPages/SaleSocial";
import CatalogCar from "./ComponentPages/CatalogCar";
import VideoSaleAlbum from "./ComponentPages/VideoSaleAlbum";
const SalePage = () => {
                    return (
                              <main className="main-SalePage" style={{marginTop: 7 +'vh', backgroundImage: "url(images/servicecenterhathairat.jpg)" }}>
                                    <SaleBanner/>
                                    <VideoSaleAlbum/>
                                    <SaleSocial/>
                                    <CatalogCar/>
                              </main>
                    );
};
export default SalePage;