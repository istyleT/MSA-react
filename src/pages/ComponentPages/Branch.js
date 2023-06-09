import React ,{useState}from "react";
import MapBranch from "./SubComponents/MapBranch";
import './maincomponent.css';
import useEffectOnce from "../../hook/useeffectonce";
const Branch = () => {
  const [DataBranch, setDataBranch] = useState([]);

  useEffectOnce(() => {
    fetch('https://test-web-api.herokuapp.com/branchcard')
    .then(res => {
      return res.json()})
    .then(resJson => {setDataBranch(resJson)})
    .catch(err => {console.log(err)})
  },[])
  
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
})
    return (
     <div id="MSAbranch" className=" d-flex align-items-center ablum px-2 py-4 bg-light">
        <div className="container ">
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 gy-3 gx-2">
             {DataBranchList}
          </div>
        </div>
      </div>
                    );
}

export default Branch;