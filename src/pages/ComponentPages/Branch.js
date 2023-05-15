import React from "react";
import MapBranch from "./SubComponents/MapBranch";
import  DataBranch from "../datapage/databranch";
import './CssComponents/maincomponent.css';
// import './maincomponent.js';
const Branch = () => {
  const DataBranchList = DataBranch.map((databranch, index) => {
    return (
      <MapBranch
          key={index}
          branchurlpic={databranch.branchurlpic}
          namebranch={databranch.namebranch}
          numberbranch={databranch.numberbranch}
          googlemapbranch={databranch.googlemapbranch}
          popupnumber={databranch.popupnumber}
          popuplocation={databranch.popuplocation}
      />
    );
});
    return (
     <div id="MSAbranch" className="ablum px-2 py-4 bg-transparent">
        <div className="container">
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 gy-3 gx-2">
             {DataBranchList}
          </div>
        </div>
      </div>
                    );
}

export default Branch;