import React from "react";
import './csspages/PaintPage.css';
import VideoElement from "./ComponentPages/SubComponents/VideoElement";
import ContentBranch from "./ComponentPages/SubComponents/ContentBranch";
const PaintPage = () => {
                    return (
                              <main className="main-PaintPage" style={{marginTop: 7 +'vh'}}>
                                    <ContentBranch
                                    contenturl="images/service-center-rangsit.jpg" 
                                    topiccontent="ศูนย์ซ่อมสีและตัวถัง"
                                    detailcontent="Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                                    Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins."
                                    />
                                    <VideoElement 
                                    titlevdo="ศูนย์ซ่อมสีและตัวถัง เอ็มจี แสงอารี รังสิต คลอง4" 
                                    youtubeurl="https://www.youtube.com/embed/xu46SU-Xsj8"
                                    />
                              </main>
                    );
};
export default PaintPage;