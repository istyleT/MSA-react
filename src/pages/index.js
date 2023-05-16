import React from "react";
import './csspages/HomePage.css';
import Branch from "./ComponentPages/Branch.js";
import BannerHome from "./ComponentPages/BannerHome";
import MainHome from "./ComponentPages/MainHome";
import VideoElement from "./ComponentPages/SubComponents/VideoElement";
import Carousel from 'react-bootstrap/Carousel';
const HomePage = () => {
      function BranchVideoSlide() {
            return (
              <Carousel variant="dark" interval={null}>
                <Carousel.Item className="position-relative">
                <VideoElement 
                  titlevdo="พาเปิดบ้าน! กับ... เอ็มจี แสงอารี ออโต้ สาขาหทัยราษฎร์" 
                  youtubeurl="https://www.youtube.com/embed/JmU61hu-OgQ"
                  />
                </Carousel.Item>
                <Carousel.Item className="position-relative">
                <VideoElement 
                  titlevdo="พาเปิดบ้าน! กับ... เอ็มจี แสงอารี ออโต้ สาขาหทัยราษฎร์" 
                  youtubeurl="https://www.youtube.com/embed/JmU61hu-OgQ"
                  />
                </Carousel.Item>
                <Carousel.Item className="position-relative">
                <VideoElement 
                  titlevdo="พาเปิดบ้าน! กับ... เอ็มจี แสงอารี ออโต้ สาขาหทัยราษฎร์" 
                  youtubeurl="https://www.youtube.com/embed/JmU61hu-OgQ"
                  />
                </Carousel.Item>
              </Carousel>
            );
          }
                    return (
                              <main className="main-HomePage" style={{marginTop: 7 +'vh', backgroundImage: "url(images/servicecenterhathairat.jpg)" }}>
                                <BannerHome/>
                                <MainHome/>
                                <div className="px-5 bg-white">
                                   <BranchVideoSlide/>
                                </div>
                                <Branch/>
                              </main>
                    );
};
export default HomePage;