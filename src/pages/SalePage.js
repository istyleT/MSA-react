import React ,{useState,useEffect} from "react";
import "./csspages/SalePage.css";
import SaleBanner from "./ComponentPages/SaleBanner";
import SaleSocial from "./ComponentPages/SaleSocial";
import CatalogCar from "./ComponentPages/CatalogCar";
import Carousel from "react-bootstrap/Carousel";
import VideoElement from "./ComponentPages/SubComponents/VideoElement";
import FooterElement from "../components/mainfooter/FooterElement";
import PopoverMessage from "./ComponentPages/PopoverMessage";
import PromotionCanvas from "./ComponentPages/PromotionCanvas";

const SalePage = () => {
  const SaleVideoSlide = () => {
    const [isLoading, setisLoading] = useState(true);
    const [datasalevdo, setdatasalevdo] = useState(null);

    //เเก้ปัญหา fetch ออกมาช้ากว่าที่ return ทำงานทำให้อ่านข้อมูลไม่ได้ โดยการใช้การใช้ state isLoading เพื่อเช็คว่าข้อมูลเรียกมาเสร็จหรือยัง
    useEffect(() => {
      fetch("https://test-web-api.herokuapp.com/salevdo")
        .then((res) => {
          return res.json();
        })
        .then((resJson) => {
          setdatasalevdo(resJson);
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
            titlevdo={datasalevdo[0].title}
            youtubeurl={datasalevdo[0].vdolink}
          />
        </Carousel.Item>
        <Carousel.Item className="position-relative">
          <VideoElement
            titlevdo={datasalevdo[1].title}
            youtubeurl={datasalevdo[1].vdolink}
          />
        </Carousel.Item>
        <Carousel.Item className="position-relative">
          <VideoElement
            titlevdo={datasalevdo[2].title}
            youtubeurl={datasalevdo[2].vdolink}
          />
        </Carousel.Item>
        <Carousel.Item className="position-relative">
          <VideoElement
            titlevdo={datasalevdo[3].title}
            youtubeurl={datasalevdo[3].vdolink}
          />
        </Carousel.Item>
      </Carousel>
    );
  };
  return (
    <main className="main-SalePage " style={{ marginTop: 7 + "vh" }}>
      <SaleBanner />
      <div className="px-5">
        <SaleVideoSlide />
      </div>
      <SaleSocial />
      <div
        style={{
          backgroundImage: "url(images/servicecenterhathairat.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <CatalogCar />
      </div>
      <PromotionCanvas />
      <PopoverMessage />
      <FooterElement />
    </main>
  );
};
export default SalePage;
