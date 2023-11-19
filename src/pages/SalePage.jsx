import React from "react";
import "./cssPage.css";
import SaleBanner from "./ComponentPages/SaleBanner";
import SaleSocial from "./ComponentPages/SaleSocial";
import CatalogCar from "./ComponentPages/CatalogCar";
import FooterElement from "../components/mainfooter/FooterElement";
import PopoverMessage from "./ComponentPages/PopoverMessage";
import PromotionCanvas from "./ComponentPages/PromotionCanvas";
import VideoElement from "./ComponentPages/SubComponents/VideoElement";
import Carousel from "react-bootstrap/Carousel";
import { useQueryInit } from "../hook/usequeryinit";
import Loading from "../ui/Loading";
import LayoutPage from "./LayoutPage";

export default function SalePage() {
  const { loading, datainit } = useQueryInit("websalevdo");
  return (
    <LayoutPage>
      <main className="main-SalePage " style={{ marginTop: 7 + "vh" }}>
        <SaleBanner />
        <div className="px-5">
          {loading && <Loading />}
          {!loading && (
            <Carousel variant="dark" interval={null}>
              {datainit.map((data) => {
                return (
                  <Carousel.Item key={data.order} className="position-relative">
                    <VideoElement
                      titlevdo={data.title}
                      youtubeurl={data.vdolink}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          )}
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
    </LayoutPage>
  );
}
