import React, { useState } from "react";
import Loading from "../../utils/ui/Loading";
import { useQueryInit } from "../../hook/usequeryinit";
import SaleBannerEdit from "./formmanage/SaleBannerEdit";

export default function SaleBannerMan() {
  const [edit, setEdit] = useState(false);
  const { loading, datainit } = useQueryInit("webbannersale");

  const handleEdit = (data) => {
    setEdit(data);
  };

  return (
    <>
      {edit && (
        <SaleBannerEdit onClickClose={() => handleEdit(false)} data={edit} />
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
                <div className="d-flex flex-column">
                  <div style={{ width: 100 + "%" }}>
                    <img
                      src={data.imagelink}
                      className="w-100"
                      style={{ height: 25 + "rem" }}
                      alt="BranchCard"
                    />
                  </div>
                  <div
                    className="position-relative px-2"
                    style={{ width: 100 + "%" }}
                  >
                    <div className="d-flex flex-column">
                      <span>
                        <span className="fw-bold text-primary">ObjectId :</span>{" "}
                        {data._id}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">ลำดับ :</span>{" "}
                        {data.order}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">หมายเหตุ :</span>{" "}
                        {data.remark}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">Link รูปภาพ :</span>{" "}
                        {data.imagelink}
                      </span>
                    </div>
                    <div className="position-absolute bottom-0 end-0 d-flex justify-content-center">
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
