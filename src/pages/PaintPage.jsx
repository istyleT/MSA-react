import React from "react";
import "../style/cssPage.css";
import VideoElement from "../components/VideoElement";
import ContentBranch from "../components/ContentBranch";
import Carousel from "react-bootstrap/Carousel";
import PopoverMessage from "../components/comppage/PopoverMessage";
import PromotionCanvas from "../components/comppage/PromotionCanvas";
import FooterElement from "../utils/ui/FooterElement";
import { useQueryInit } from "../hook/usequeryinit";
import LayoutPage from "./Layout/LayoutPage";
import Loading from "../utils/ui/Loading";

export default function PaintPage() {
  const { loading, datainit } = useQueryInit("webbodyvdo");

  return (
    <LayoutPage>
      <main className="main-PaintPage" style={{ marginTop: 7 + "vh" }}>
        <ContentBranch
          contenturl="images/service-center-rangsit.jpg"
          topiccontent="ศูนย์ซ่อมสีและตัวถัง"
          detailcontent="Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                                    Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins."
        />
        {loading && <Loading />}
        {!loading && (
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
        )}
        <PromotionCanvas />
        <PopoverMessage />
        <FooterElement />
      </main>
    </LayoutPage>
  );
}

// function PaintVideoSlide() {
//   return (
//     <Carousel variant="dark" interval={null}>
//       <Carousel.Item className="position-relative">
//         <VideoElement
//           titlevdo={databodyvdo[0].title}
//           youtubeurl={databodyvdo[0].vdolink}
//         />
//       </Carousel.Item>
//       <Carousel.Item className="position-relative">
//         <VideoElement
//           titlevdo={databodyvdo[1].title}
//           youtubeurl={databodyvdo[1].vdolink}
//         />
//       </Carousel.Item>
//       <Carousel.Item className="position-relative">
//         <VideoElement
//           titlevdo={databodyvdo[2].title}
//           youtubeurl={databodyvdo[2].vdolink}
//         />
//       </Carousel.Item>
//     </Carousel>
//   );
// }
