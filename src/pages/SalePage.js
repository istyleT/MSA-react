import React from "react";
import './csspages/SalePage.css';
import SaleBanner from "./ComponentPages/SaleBanner";
import SaleSocial from "./ComponentPages/SaleSocial";
import CatalogCar from "./ComponentPages/CatalogCar";
import Carousel from 'react-bootstrap/Carousel';
import VideoElement from "./ComponentPages/SubComponents/VideoElement";
import FooterElement from "../components/mainfooter/FooterElement";
import PopoverMessage from "./ComponentPages/PopoverMessage";
import PromotionCanvas from "./ComponentPages/PromotionCanvas";
const SalePage = () => {
      function SaleVideoSlide() {
            return (
              <Carousel variant="dark" interval={null} >
                <Carousel.Item className="position-relative">
                <VideoElement
                   titlevdo = "ขายจริง แจกจริง กับ เอ็มจี แสงอารี ออโต้"
                   youtubeurl = "https://www.youtube.com/embed/y0v8h3MXrL4"
                 />
                </Carousel.Item>
                <Carousel.Item className="position-relative">
                <VideoElement
                   titlevdo = "ออกรถวันนี้ รับเงินกลับบ้านสูงสุด 100,000 บาท"
                   youtubeurl = "https://www.youtube.com/embed/QD2RWYQxyUA"
                 />
                </Carousel.Item>
                <Carousel.Item className="position-relative">
                <VideoElement
                   titlevdo = "เซลล์อดัมพาชมบูธรถยนต์MG ในงานMotorShow2023"
                   youtubeurl = "https://www.youtube.com/embed/V5E3f8LVPNY"
                 />
                </Carousel.Item>
                <Carousel.Item className="position-relative">
                <VideoElement
                  titlevdo = "MG5 แต่งเต็มรอบคัน พร้อมล้อแม็กขอบ 18"
                  youtubeurl = "https://www.youtube.com/embed/QYaBNCbKR2Q"
                />
                </Carousel.Item>
              </Carousel>
            );
          }
                    return (
                              <main className="main-SalePage " style={{marginTop: 7 +'vh'}}>
                                    <SaleBanner/>
                                    <div className="px-5">
                                    <SaleVideoSlide/>
                                    </div>
                                    <SaleSocial/>
                                    <div  style={{backgroundImage: "url(images/servicecenterhathairat.jpg)",backgroundRepeat: 'no-repeat', backgroundSize: 'cover',backgroundAttachment: 'fixed'}}>
                                    <CatalogCar/>
                                    </div>
                                    <PromotionCanvas/>
                                    <PopoverMessage/>
                                    <FooterElement/>
                              </main>
                    );
};
export default SalePage;