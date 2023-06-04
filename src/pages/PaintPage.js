import React from "react";
import './csspages/PaintPage.css';
import VideoElement from "./ComponentPages/SubComponents/VideoElement";
import ContentBranch from "./ComponentPages/SubComponents/ContentBranch";
import Carousel from 'react-bootstrap/Carousel';
import PopoverMessage from "./ComponentPages/PopoverMessage";
import PromotionCanvas from "./ComponentPages/PromotionCanvas";
import FooterElement from "../components/mainfooter/FooterElement";
const PaintPage = () => {
      function PaintVideoSlide() {
            return (
              <Carousel variant="dark" interval={null}>
                <Carousel.Item className="position-relative">
                <VideoElement 
                  titlevdo="ศูนย์ซ่อมสีและตัวถัง เอ็มจี แสงอารี รังสิต คลอง4" 
                  youtubeurl="https://www.youtube.com/embed/xu46SU-Xsj8"
                  />
                </Carousel.Item>
                <Carousel.Item className="position-relative">
                <VideoElement 
                  titlevdo="ศูนย์ซ่อมสีและตัวถัง เอ็มจี แสงอารี รังสิต คลอง4" 
                  youtubeurl="https://www.youtube.com/embed/xu46SU-Xsj8"
                  />
                </Carousel.Item>
              </Carousel>
            );
          }
                    return (
                              <main className="main-PaintPage" style={{marginTop: 7 +'vh'}}>
                                    <ContentBranch
                                    contenturl="images/service-center-rangsit.jpg" 
                                    topiccontent="ศูนย์ซ่อมสีและตัวถัง"
                                    detailcontent="Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                                    Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins."
                                    />
                                    <div className="px-5">
                                    <PaintVideoSlide />
                                    </div>
                                    <PromotionCanvas/>
                                    <PopoverMessage/>
                                    <FooterElement/>
                              </main>
                    );
};
export default PaintPage;