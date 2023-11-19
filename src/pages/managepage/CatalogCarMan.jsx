import React, { useState } from "react";
import Loading from "../../ui/Loading";
import { useQueryInit } from "../../hook/usequeryinit";
import { apiDeleteFunction } from "../../apiservice/apiCRUD";
import Swal from "sweetalert2";
import LoadingAction from "../../ui/LoadingAction";
import CatalogCarCre from "./formmanage/CatalogCarCre";
import CatalogCarEdit from "./formmanage/CatalogCarEdit";

export default function CatalogCarMan() {
  const [loadaction, setLoadaction] = useState(false);
  const [create, setCreate] = useState(false);
  const [edit, setEdit] = useState(false);
  const { loading, datainit } = useQueryInit("webcarcard");

  const handleCreate = () => {
    setCreate(!create);
  };
  const handleEdit = (data) => {
    setEdit(data);
  };

  async function onClickDelete(id) {
    try {
      setLoadaction(true);
      await apiDeleteFunction(id, "/webcarcard");
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: `${err}`,
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setLoadaction(false);
    }
  }

  return (
    <>
      {create && <CatalogCarCre onClickClose={handleCreate} />}
      {edit && (
        <CatalogCarEdit onClickClose={() => handleEdit(false)} data={edit} />
      )}
      <div
        className="position-relative w-100 flex-column py-2 d-flex   align-items-center"
        style={{ maxWidth: 800 + "px" }}
      >
        {loadaction && <LoadingAction />}
        <div className="w-100 mb-3">
          <button
            className="btn btn-lg btn-success fw-bold"
            type="button"
            onClick={() => {
              handleCreate();
            }}
          >
            เพิ่มรายการรถใหม่
          </button>
        </div>
        {loading && <Loading />}
        {!loading &&
          datainit.map((data, index) => {
            return (
              <div className="w-100 card p-2 mb-3" key={index}>
                <div className="d-flex">
                  <div style={{ width: 50 + "%" }}>
                    <img
                      src={data.URLimage}
                      loading="eager"
                      className="card-img"
                      style={{ height: 15 + "rem" }}
                      alt="..."
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
                        <span className="fw-bold text-dark">รุ่นหลัก :</span>{" "}
                        {data.mainmodel}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">รุ่นย่อย :</span>{" "}
                        {data.detail1}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">รุ่นย่อย :</span>{" "}
                        {data.detail2}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">รุ่นย่อย :</span>{" "}
                        {data.detail3}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">รุ่นย่อย :</span>{" "}
                        {data.detail4}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">รุ่นย่อย :</span>{" "}
                        {data.detail5}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">รุ่นย่อย :</span>{" "}
                        {data.detail6}
                      </span>
                    </div>
                    <div className="position-absolute bottom-0 start-50 translate-middle-x d-flex justify-content-center">
                      <button
                        className=" mx-1 btn btn-dark fw-bold"
                        onClick={() => {
                          handleEdit(data);
                        }}
                      >
                        เเก้ไข
                      </button>
                      <button
                        className="mx-1 btn btn-danger fw-bold"
                        onClick={() => onClickDelete(data._id)}
                      >
                        ลบข้อมูล
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
