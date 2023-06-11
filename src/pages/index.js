import React from "react";
import "./cssPage.css";
import Branch from "./ComponentPages/Branch.js";
import BannerHome from "./ComponentPages/BannerHome";
import MainHome from "./ComponentPages/MainHome";
import VideoElement from "./ComponentPages/SubComponents/VideoElement";
import Carousel from "react-bootstrap/Carousel";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import PopoverMessage from "./ComponentPages/PopoverMessage";
import PromotionCanvas from "./ComponentPages/PromotionCanvas";
const HomePage = () => {
  function BranchVideoSlide() {
    return (
      <Carousel
        variant="dark"
        interval={null}
        className="bg-light branch-home-vdo p-1"
      >
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
    <>
      <Parallax
        className="main-HomePage"
        pages={4}
        style={{
          top: "0",
          left: "0",
          backgroundImage: "url(images/sky-sights.jpg)",
        }}
      >
        <ParallaxLayer offset={0} speed={0.8} style={{ opacity: 1.0 }}>
          <BannerHome />
        </ParallaxLayer>
        <ParallaxLayer offset={1.2} speed={0.8} style={{ opacity: 1.0 }}>
          <img
            src="images/LineUp2022.png"
            style={{ width: 100 + "vw", height: 25 + "vh" }}
            alt="carlineup"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-1.0} style={{ opacity: 1.0 }}>
          <img src="images/logomsa.png" id="textname" alt="name" />
        </ParallaxLayer>
        <ParallaxLayer offset={1.8} speed={0.8} style={{ opacity: 1.0 }}>
          <MainHome />
        </ParallaxLayer>
        <ParallaxLayer offset={2.7} speed={0.8} style={{ opacity: 1.0 }}>
          <BranchVideoSlide />
        </ParallaxLayer>
        <ParallaxLayer offset={3.0} speed={0.8} className="d-flex justify-content-center" style={{ opacity: 1.0 }}>
          <Branch />
        </ParallaxLayer>
      </Parallax>
      <PopoverMessage />
      <PromotionCanvas />
    </>
  );
};
export default HomePage;
