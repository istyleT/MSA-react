import React from "react";
const SocialBranch = (props) => {
                    const {head, linkfacebook, linkline, linktiktok, namefacebook, nameline, nametiktok} = props;
                    return (
                      <div className="col d-flex flex-column align-items-center">
                        <div className=" d-flex icon-square bg-white text-dark flex-shrink-0 me-3 m-1 align-items-center">
                          <h4 className="px-2 pb-2 border-bottom fw-bold font-monospace border-danger border-2">{head}</h4>
                        </div>
                        <div className=" d-flex icon-square bg-white text-dark flex-shrink-0 me-3 m-1 align-items-center">
                          <img loading="lazy" src="images/icons8-facebook-64.png" alt="facebook-logo" className="me-4"  width="50" height="50"/>
                          <a href={linkfacebook} rel="noreferrer" target="_blank" className="text-decoration-none"><button id="show-large-button" className="btn btn-primary fw-bold border border-2 border-primary" style={{width:230+'px'}}>{namefacebook}</button></a> 
                        </div>
                        <div className=" d-flex icon-square bg-white text-dark flex-shrink-0 me-3 m-1 align-items-center">
                          <img loading="lazy" src="images/icons8-line-64.png" className="me-4" alt="facebook-logo"  width="50" height="50"/>
                          <a href={linkline} rel="noreferrer" target="_blank" className="text-decoration-none"><button id="show-large-button" className="btn btn-success fw-bold border border-2 border-success" style={{width:230+'px'}}>{nameline}</button></a>
                        </div>
                        <div className=" d-flex icon-square bg-white text-dark flex-shrink-0 me-3 m-1 align-items-center">
                          <img loading="lazy" src="images/icons8-tiktok-64.png" className="me-4" alt="facebook-logo"  width="50" height="50"/>
                          <a href={linktiktok} rel="noreferrer" target="_blank" className="text-decoration-none"><button id="show-large-button" className="btn btn-secondary fw-bold border border-2 border-secondary" style={{width:230+'px'}}>{nametiktok}</button></a> 
                        </div>
                      </div>             
                    );
};
export default SocialBranch;