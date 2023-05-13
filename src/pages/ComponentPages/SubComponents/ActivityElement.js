import React from "react";
const ActivityElement = (props) => {
                    const {topicactivity, detailsactivity, imgactivityurl} = props;
                    return (
                                      <div className="row featurette my-5">
                                        <div className="col-md-7">
                                          <h2 className="fw-bold text-center">{topicactivity}</h2>
                                          <p className="lead px-5">{detailsactivity}</p>
                                        </div>
                                        <div className="col-md-5">
                                          <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={imgactivityurl} alt="picactivity" width="500" height="500"  />
                                        </div>
                                      </div>
                    );
};
export default ActivityElement;