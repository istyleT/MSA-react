import React, { useState } from "react";
import Loading from "../../ui/Loading";
import { useQueryInit } from "../../hook/usequeryinit";
import SaleVDOEdit from "./formmanage/SaleVDOEdit";

export default function SaleVDOMan() {
  const [edit, setEdit] = useState(false);
  const { loading, datainit } = useQueryInit("websalevdo");

  const handleEdit = (data) => {
    setEdit(data);
  };

  return (
    <>
      {edit && (
        <SaleVDOEdit onClickClose={() => handleEdit(false)} data={edit} />
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
                    <iframe
                      src={data.vdolink}
                      title={data.title}
                      className="w-100"
                      style={{ height: 20 + "rem" }}
                      alt="vdoserivce"
                    ></iframe>
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
                        <span className="fw-bold text-dark">ลำดับ :</span>{" "}
                        {data.order}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">ชื่อ VDO :</span>{" "}
                        {data.title}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">Link VDO :</span>{" "}
                        {data.vdolink}
                      </span>
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
