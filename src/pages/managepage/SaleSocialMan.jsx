import React, { useState } from "react";
import Loading from "../../utils/ui/Loading";
import { useQueryInit } from "../../hook/usequeryinit";
import SaleSocialEdit from "./formmanage/SaleSocialEdit";

export default function SaleSocialMan() {
  const [edit, setEdit] = useState(false);
  const { loading, datainit } = useQueryInit("websalesocial");

  const handleEdit = (data) => {
    setEdit(data);
  };

  return (
    <>
      {edit && (
        <SaleSocialEdit onClickClose={() => handleEdit(false)} data={edit} />
      )}
      <div
        className="position-relative w-100 py-2 d-flex flex-column  align-items-center"
        style={{ maxWidth: 800 + "px" }}
      >
        {loading && <Loading />}
        {!loading &&
          datainit.map((data, index) => {
            return (
              <div className="w-100 card p-2 mb-3" key={index}>
                <div className="d-flex">
                  <div className=" w-100 position-relative px-2">
                    <div className="d-flex flex-column">
                      <span>
                        <span className="fw-bold text-primary">ObjectId :</span>{" "}
                        {data._id}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">ชื่อสาขา :</span>{" "}
                        {data.head}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">
                          ชื่อ facebook :
                        </span>{" "}
                        {data.facebookname}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">
                          Link facebook :
                        </span>{" "}
                        {data.linkfacebook}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">ชื่อ Line :</span>{" "}
                        {data.nameline}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">Link line :</span>{" "}
                        {data.linkline}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">ชื่อ Tiktok :</span>{" "}
                        {data.nametiktok}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">Link Tiktok :</span>{" "}
                        {data.linktiktok}
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
