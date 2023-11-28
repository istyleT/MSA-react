import React, { useState } from "react";
import Loading from "../../ui/Loading";
import { useQueryInit } from "../../hook/usequeryinit";
import { apiDeleteFunction } from "../../apiservice/apiCRUD";
import Swal from "sweetalert2";
import PromotionCre from "./formmanage/PromotionCre";
import PromotionEdit from "./formmanage/PromotionEdit";
import LoadingAction from "../../ui/LoadingAction";

export default function PromotionMan() {
  const [loadaction, setLoadaction] = useState(false);
  const [create, setCreate] = useState(false);
  const [edit, setEdit] = useState(false);
  const { loading, datainit } = useQueryInit("webpromotion");

  const handleCreate = () => {
    setCreate(!create);
  };
  const handleEdit = (data) => {
    setEdit(data);
  };

  async function onClickDelete(id) {
    try {
      setLoadaction(true);
      await apiDeleteFunction(id, "/webpromotion");
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
      {create && <PromotionCre onClickClose={handleCreate} />}
      {edit && (
        <PromotionEdit onClickClose={() => handleEdit(false)} data={edit} />
      )}
      <div
        className="bg-light position-relative w-100 p-2 d-flex flex-column align-items-center"
        style={{ maxWidth: 1000 + "px" }}
      >
        {loadaction && <LoadingAction />}
        <div className="w-100 mb-3">
          <button
            className="btn btn-md btn-success fw-bold"
            type="button"
            onClick={() => {
              handleCreate();
            }}
          >
            เพิ่ม Promotion ใหม่
          </button>
        </div>
        {loading && <Loading />}
        {!loading &&
          datainit.map((data, index) => {
            return (
              <div className="card p-2 mb-3" key={index}>
                <div className="d-flex">
                  <div style={{ width: 50 + "%" }}>
                    <img
                      src={`../${data.imageurl}`}
                      loading="eager"
                      className="card-img"
                      style={{ height: 20 + "rem" }}
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
                        <span className="fw-bold text-dark">
                          ชื่อ Promotion :
                        </span>{" "}
                        {data.title}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">
                          รายละเอียดเเบบย่อ :
                        </span>{" "}
                        {data.description}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">
                          รายละเอียดทั้งหมด :
                        </span>{" "}
                        {data.descriptiondetail}
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
