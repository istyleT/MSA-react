import React, { useState } from "react";
import "./cssPage.css";
import VideoElement from "./ComponentPages/SubComponents/VideoElement";
import ContentBranch from "./ComponentPages/SubComponents/ContentBranch";
import Carousel from "react-bootstrap/Carousel";
import PopoverMessage from "./ComponentPages/PopoverMessage";
import PromotionCanvas from "./ComponentPages/PromotionCanvas";
import FooterElement from "../components/mainfooter/FooterElement";
import useEffectOnce from "../hook/useeffectonce";
const PaintPage = () => {
  const PaintVideoSlide = () => {
    const [isLoading, setisLoading] = useState(true);
    const [databodyvdo, setdatabodyvdo] = useState(null);

    //เเก้ปัญหา fetch ออกมาช้ากว่าที่ return ทำงานทำให้อ่านข้อมูลไม่ได้ โดยการใช้การใช้ state isLoading เพื่อเช็คว่าข้อมูลเรียกมาเสร็จหรือยัง
    useEffectOnce(() => {
      fetch("https://servermsasalecar-ce20833080b1.herokuapp.com/bodyvdo")
        .then((res) => {
          return res.json();
        })
        .then((resJson) => {
          setdatabodyvdo(resJson);
          setisLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    if (isLoading) {
      return <div className="bg-transparents"></div>;
    }

    return (
      <Carousel variant="dark" interval={null}>
        <Carousel.Item className="position-relative">
          <VideoElement
            titlevdo={databodyvdo[0].title}
            youtubeurl={databodyvdo[0].vdolink}
          />
        </Carousel.Item>
        <Carousel.Item className="position-relative">
          <VideoElement
            titlevdo={databodyvdo[1].title}
            youtubeurl={databodyvdo[1].vdolink}
          />
        </Carousel.Item>
        <Carousel.Item className="position-relative">
          <VideoElement
            titlevdo={databodyvdo[2].title}
            youtubeurl={databodyvdo[2].vdolink}
          />
        </Carousel.Item>
      </Carousel>
    );
  };
  return (
    <main className="main-PaintPage" style={{ marginTop: 7 + "vh" }}>
      <ContentBranch
        contenturl="images/service-center-rangsit.jpg"
        topiccontent="ศูนย์ซ่อมสีและตัวถัง"
        detailcontent="Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                                    Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins."
      />
      <div className="px-5">
        <PaintVideoSlide />
      </div>
      <PromotionCanvas />
      <PopoverMessage />
      <FooterElement />
    </main>
  );
};
export default PaintPage;
