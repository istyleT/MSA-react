import React from "react";
import '../CssComponents/maincomponent.css';
const ContentBranch = (props) => {
                    const {contenturl, topiccontent, detailcontent, } = props;
                    return (
                                     <div className="row flex-lg-row-reverse align-items-center g-5 py-5 px-5 bg-white">
                                        <div className="col-10 col-sm-8 col-lg-6">
                                          <img src={contenturl} className="place-content d-block mx-lg-auto" alt="placecontent" width="700px" height="500px" loading="eager"/>
                                        </div>
                                        <div className="col-lg-6">
                                          <h1 className="display-5 fw-bold lh-1 mb-3 border-bottom border-danger border-2 py-3">{topiccontent}</h1>
                                          <p className="lead fst-italic">{detailcontent}</p>
                                        </div>
                                      </div>              
                    );
};
export default ContentBranch;