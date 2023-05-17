import React from "react";
import './csspages/ServicePage.css';
import VideoElement from "./ComponentPages/SubComponents/VideoElement";
import ContentBranch from "./ComponentPages/SubComponents/ContentBranch";
import Carousel from 'react-bootstrap/Carousel';
import FooterElement from "../components/mainfooter/FooterElement";
const ServicePage = () => {

      function ServiceVideoSlide() {
            return (
              <Carousel variant="dark" interval={null}>
                <Carousel.Item className="position-relative">
                <VideoElement 
                  titlevdo="ตัวเลขบนแก้มยาง...บอกอะไร?" 
                  youtubeurl="https://www.youtube.com/embed/HWPiD9TyXaI"
                  />
                </Carousel.Item>
                <Carousel.Item className="position-relative">
                <VideoElement 
                  titlevdo="วิธีใช้งานชุดเครื่องมือปะยางฉุกเฉิน ในรถยนต์ MG" 
                  youtubeurl="https://www.youtube.com/embed/EWIpefcYLD0"
                  />
                </Carousel.Item>
                <Carousel.Item className="position-relative">
                <VideoElement 
                  titlevdo="เช็คระยะรถยนต์ New MG HS 40,000 กม." 
                  youtubeurl="https://www.youtube.com/embed/dN2k-1pqV0o"
                  />
                </Carousel.Item>
              </Carousel>
            );
          }

                    return (
                              <main className="main-ServicePage" style={{marginTop: 7 +'vh'}}>
                                     <ContentBranch
                                    contenturl="images/servicecenterhathairat.jpg" 
                                    topiccontent="ศูนย์บริการ เอ็มจี แสงอารี ออโต้"
                                    detailcontent="Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                                    Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins."
                                    />
                                    <div className="px-5">
                                    <ServiceVideoSlide/>
                                    </div>
                                    <FooterElement/>
                              </main>
                    );
};
export default ServicePage;







