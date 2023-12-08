import React, { useState } from "react";
import Loading from "../../utils/ui/Loading";
import { useQueryInit } from "../../hook/usequeryinit";
import BranchCardEdit from "./formmanage/BranchCardEdit";

export default function BranchCardMan() {
  const [edit, setEdit] = useState(false);
  const { loading, datainit } = useQueryInit("webbranchcard");

  const handleEdit = (data) => {
    setEdit(data);
  };

  return (
    <>
      {edit && (
        <BranchCardEdit onClickClose={() => handleEdit(false)} data={edit} />
      )}
      <div
        className="position-relative w-100 py-2 d-flex flex-column  align-items-center"
        style={{ maxWidth: 1000 + "px" }}
      >
        {loading && <Loading />}
        {!loading &&
          datainit.map((data, index) => {
            return (
              <div className="w-100 card p-2 mb-3" key={index}>
                <div className="d-flex">
                  <div style={{ width: 50 + "%" }}>
                    <img
                      src={`../${data.branchurlpic}`}
                      className="w-100"
                      style={{ height: 20 + "rem" }}
                      alt="BranchCard"
                    />
                  </div>
                  <div
                    className="position-relative px-2"
                    style={{ width: 50 + "%" }}
                  >
                    <div className="d-flex flex-column">
                      <span>
                        <span className="fw-bold text-success">ObjectId :</span>{" "}
                        {data._id}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">ชื่อสาขา :</span>{" "}
                        {data.namebranch}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">เบอร์ติดต่อ :</span>{" "}
                        {data.numberbranch}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">เบอร์โทร :</span>{" "}
                        {data.popupnumber}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">ที่ตั้ง :</span>{" "}
                        {data.popuplocation}
                      </span>
                      {/* <span>
                        <span className="fw-bold text-dark">
                          Link เเผนที่ :
                        </span>{" "}
                        {data.googlemapbranch}
                      </span> */}
                    </div>
                    <div className="position-absolute bottom-0 start-50 translate-middle-x d-flex justify-content-center">
                      <button
                        className=" mx-1 btn btn-dark fw-bold"
                        onClick={() => {
                          handleEdit(data);
                        }}
                      >
                        เเก้ไขข้อมูล
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
