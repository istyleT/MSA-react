import React from "react";
import "../style/cssPage.css";
import Carousel from "react-bootstrap/Carousel";
import VideoElement from "../components/VideoElement";
import ContentBranch from "../components/ContentBranch";
import FooterElement from "../utils/ui/FooterElement";
import PopoverMessage from "../components/comppage/PopoverMessage";
import PromotionCanvas from "../components/comppage/PromotionCanvas";
import LayoutPage from "./Layout/LayoutPage";
import Loading from "../utils/ui/Loading";
import { useQueryInit } from "../hook/usequeryinit";

export default function ServicePage() {
  const { loading, datainit } = useQueryInit("webservicevdo");
  return (
    <LayoutPage>
      <main className="main-ServicePage" style={{ marginTop: 7 + "vh" }}>
        <ContentBranch
          contenturl="images/servicecenterhathairat.jpg"
          topiccontent="ศูนย์บริการ เอ็มจี แสงอารี ออโต้"
          detailcontent="Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                                    Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins."
        />
        {loading && <Loading />}
        {!loading && (
          <div style={{ height: 700 + "px" }}>
            <Carousel variant="dark" interval={null}>
              {datainit.map((data) => {
                return (
                  <Carousel.Item key={data.id} className="position-relative">
                    <VideoElement
                      titlevdo={data.title}
                      youtubeurl={data.vdolink}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        )}
        <PromotionCanvas />
        <PopoverMessage />
        <FooterElement />
      </main>
    </LayoutPage>
  );
}
