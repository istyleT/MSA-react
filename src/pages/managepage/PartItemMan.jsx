import React, { useState } from "react";
import Loading from "../../utils/ui/Loading";
import { useQueryInit } from "../../hook/usequeryinit";
import { apiDeleteFunction } from "../../services/apiCRUD";
import Swal from "sweetalert2";
import LoadingAction from "../../utils/ui/LoadingAction";
import PartItemCre from "./formmanage/PartItemCre";
import PartItemEdit from "./formmanage/PartItemEdit";

export default function PartItemMan() {
  const [loadaction, setLoadaction] = useState(false);
  const [create, setCreate] = useState(false);
  const [edit, setEdit] = useState(false);
  const { loading, datainit } = useQueryInit("webpartitem");

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
      {create && <PartItemCre onClickClose={handleCreate} />}
      {edit && (
        <PartItemEdit onClickClose={() => handleEdit(false)} data={edit} />
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
            เพิ่มรายการอะไหล่ใหม่
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
                      src={`../${data.partimageurl}`}
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
                        <span className="fw-bold text-dark">ชื่อรายการ :</span>{" "}
                        {data.partname}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">รุ่นรถยนต์ :</span>{" "}
                        {data.partmodel}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">ราคา/หน่วย :</span>{" "}
                        {data.partprice} บาท
                      </span>
                      <span>
                        <span className="fw-bold text-dark">ส่วนลด :</span>{" "}
                        {data.partdiscount} %
                      </span>
                      <span>
                        <span className="fw-bold text-dark">สถานะ :</span>{" "}
                        {data.status}
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
