import React, { useState } from "react";
import Loading from "../../ui/Loading";
import { useQueryInit } from "../../hook/usequeryinit";
import { apiDeleteFunction } from "../../apiservice/apiCRUD";
import Swal from "sweetalert2";
import LoadingAction from "../../ui/LoadingAction";
import ActivityCre from "./formmanage/ActivityCre";
import ActivityEdit from "./formmanage/ActivityEdit";

export default function ActivityMan() {
  const [loadaction, setLoadaction] = useState(false);
  const [create, setCreate] = useState(false);
  const [edit, setEdit] = useState(false);
  const { loading, datainit } = useQueryInit("webnews");

  const handleCreate = () => {
    setCreate(!create);
  };
  const handleEdit = (data) => {
    setEdit(data);
  };

  async function onClickDelete(id) {
    try {
      setLoadaction(true);
      await apiDeleteFunction(id, "/webnews");
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
      {create && <ActivityCre onClickClose={handleCreate} />}
      {edit && (
        <ActivityEdit onClickClose={() => handleEdit(false)} data={edit} />
      )}
      <div
        className="w-100 position-relative w-100 py-2 d-flex flex-column  align-items-center"
        style={{ maxWidth: 1000 + "px" }}
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
            เพิ่ม Activity & News
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
                      src={`../${data.imgactivityurl}`}
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
                          ชื่อ Activity :
                        </span>{" "}
                        {data.topicactivity}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">รายละเอียด :</span>{" "}
                        {data.detailsactivity}
                      </span>
                      <span>
                        <span className="fw-bold text-dark">การจัดวาง :</span>{" "}
                        {data.reverse}
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
