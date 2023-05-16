import React from "react";
import DataActivity from "../datapage/dataactivity";
import styled from "styled-components";
const News = () => {
   
  const Activityelement = styled.div`
   display: flex;
   align-items: center;
   margin-top: 5vh;
   margin-bottom: 5vh;
   flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
   `

  const ActivityElement = (props) => {
    const {topicactivity, detailsactivity, imgactivityurl, reverse} = props;
    return (
                      <Activityelement reverse={reverse} >
                        <div className="col-md-7 me-5">
                          <h2 className="fw-bold text-center border-bottom border-danger py-1 border-1">{topicactivity}</h2>
                          <p className="lead px-5 fst-italic">{detailsactivity}</p>
                        </div>
                        <div className="col-md-5">
                          <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded-3" src={imgactivityurl} alt="picactivity" width="500" height="500"  />
                        </div>
                      </Activityelement>
    );
};

  const DataActivityList = DataActivity.map((dataactivity, index) => {
    return (
      <ActivityElement
          key={index}
          reverse={dataactivity.reverse}
          topicactivity={dataactivity.topicactivity}
          detailsactivity={dataactivity.detailsactivity}
          imgactivityurl={dataactivity.imgactivityurl}
      />
    );
});
    return (
    <div className="container marketing bg-light">
          <header className="pb-2 mb-1 border-3 border-bottom border-secondary">
              <h2 className="fw-bold font-monospace">Activity & News</h2>
          </header>
          {DataActivityList}
    </div>
                    );
};
export default News;