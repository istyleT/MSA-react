import React from "react";
import DataActivity from "../datapage/dataactivity";
import ActivityElement from "./SubComponents/ActivityElement";
const News = () => {
  const DataActivityList = DataActivity.map((dataactivity, index) => {
    return (
      <ActivityElement
          key={index}
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