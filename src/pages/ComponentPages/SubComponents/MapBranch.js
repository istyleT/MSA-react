import React from "react";
const MapBranch = (props) => {
                    const {branchurlpic, namebranch, numberbranch, googlemapbranch} = props;
                    return (
          <div className="col d-flex justify-content-center" >
              <div className="card p-3 border-0 " style={{width: 300+'px', borderRadius:30+'px'}}>
                <img loading="eager" id="branchpic" src={branchurlpic} className="card-img-top rounded-circle p-1"  height="225" alt="map-HO" />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h6 className="text-center fw-semibold font-monospace fs-5 mb-1 border-secondary border-2 border-bottom pb-1">{namebranch}</h6>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group w-100">
                      <a  href={numberbranch} rel="noreferrer" type="button" className="popupho btn btn-md border border-0">
                        <img className="float-end" src="images/icons8-ringing-phone-96.png" alt="phone-service" loading="lazy" width="40px" height="40px"/>
                      </a>
                      <a target="_blank" rel="noreferrer" type="button" className="btn btn-md border border-0" href={googlemapbranch}>
                        <img className="float-start" src="images/icons8-map-64.png" alt="googlemap" loading="lazy" width="40px" height="40px"/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                    );
};
export default MapBranch;