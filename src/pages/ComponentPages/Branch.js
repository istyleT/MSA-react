import React from "react";
import MapBranch from "./SubComponents/MapBranch";
import "./maincomponent.css";
import { useQueryInit } from "../../hook/usequeryinit";
import Loading from "../../ui/Loading";
export default function Branch() {
  const { loading, datainit } = useQueryInit("webbranchcard");
  return (
    <div
      id="MSAbranch"
      className=" d-flex align-items-center ablum px-2 py-4 bg-light"
    >
      <div className="container ">
        <div
          id="databranchlist"
          className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 gy-3 gx-2 "
        >
          {loading && <Loading />}
          {!loading &&
            datainit.map((data, index) => {
              return (
                <MapBranch
                  key={index}
                  branchurlpic={data.branchurlpic}
                  namebranch={data.namebranch}
                  numberbranch={data.numberbranch}
                  googlemapbranch={data.googlemapbranch}
                  popupnumber={data.popupnumber}
                  popuplocation={data.popuplocation}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
