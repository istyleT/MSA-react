import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../style/cssPage.css";
import SaleBanner from "../components/comppage/SaleBanner";
import SaleSocial from "../components/comppage/SaleSocial";
import CatalogCar from "../components/comppage/CatalogCar";
import FooterElement from "../utils/ui/FooterElement";
import PopoverMessage from "../components/comppage/PopoverMessage";
import PromotionCanvas from "../components/comppage/PromotionCanvas";
import VideoElement from "../components/VideoElement";
import { useQueryInit } from "../hook/usequeryinit";
import Loading from "../utils/ui/Loading";
import LayoutPage from "./Layout/LayoutPage";

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
