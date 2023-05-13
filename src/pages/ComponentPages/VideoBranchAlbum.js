import React from "react";
import DataVdoBranch from "../datapage/datavdobranch";
import VideoElement from "./SubComponents/VideoElement";
const VideoBranchAlbum = () => {
  const dataalbumvdobranch = DataVdoBranch.map((datavdobranch, index) => {
    return (
      <VideoElement
          key={index}
          titlevdo={datavdobranch.titlevdo}
          youtubeurl={datavdobranch.youtubeurl}
      />
    );
});
                    return (
                      <div id="carouselExampleControls" className="carousel slide bg-white p-3 ">
                        <div className="carousel-inner px-5">
                            {dataalbumvdobranch}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon bg-danger rounded-circle" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                          <span className="carousel-control-next-icon bg-danger rounded-circle" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                    );
};
export default VideoBranchAlbum;