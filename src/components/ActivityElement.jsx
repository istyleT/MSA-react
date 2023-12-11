import React from "react";
const ActivityElement = ({
  topicactivity,
  detailsactivity,
  imgactivityurl,
}) => {
  return (
    <div
      className="d-flex align-items-center featurete my-5"
      id="ActivityElement"
    >
      <div className="col-md-7 me-5">
        <h2 className="fw-bold text-center border-bottom border-danger py-1 border-1">
          {topicactivity}
        </h2>
        <p className="lead px-5 fst-italic">{detailsactivity}</p>
      </div>
      <div className="col-md-5">
        <img
          className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded-3"
          src={imgactivityurl}
          alt="picactivity"
          width="500"
          height="500"
        />
      </div>
    </div>
  );
};
export default ActivityElement;
