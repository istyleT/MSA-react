import React from "react";
import styled from "styled-components";
import "../../style/maincomponent.css";
import { useQueryInit } from "../../hook/usequeryinit";
import Loading from "../../utils/ui/Loading";

export default function News() {
  const { loading, datainit } = useQueryInit("webnews");

  return (
    <div className="container marketing bg-light">
      <header className="pb-2 mb-1 border-3 border-bottom border-secondary">
        <h2 className="fw-bold font-monospace">Activity & News</h2>
      </header>
      <div>
        {loading && <Loading />}
        {!loading &&
          datainit.map((data, index) => {
            return (
              <ActivityElement
                key={index}
                reverse={data.reverse}
                topicactivity={data.topicactivity}
                detailsactivity={data.detailsactivity}
                imgactivityurl={data.imgactivityurl}
              />
            );
          })}
      </div>
    </div>
  );
}

const ActivityElement = ({
  topicactivity,
  detailsactivity,
  imgactivityurl,
  reverse,
}) => {
  const Activityelement = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5vh;
    margin-bottom: 5vh;
    flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  `;
  return (
    <Activityelement reverse={reverse} id="activityelement">
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
    </Activityelement>
  );
};
