import React, { useState } from "react";
import Swal from "sweetalert2";
import FormCreate from "../../../ui/FormCreate";
import LoadingAction from "../../../ui/LoadingAction";
import { apiPostFunction } from "../../../apiservice/apiCRUD";

export default function PromotionCre({ onClickClose }) {
  const [datacreate, setDatacreate] = useState({});
  const [loadaction, setLoadaction] = useState(false);

  function handledatacreate(dataname, value) {
    setDatacreate({ ...datacreate, [dataname]: value });
  }

  async function onClickCreate(e, data) {
    try {
      e.preventDefault();
      setLoadaction(true);
      await apiPostFunction(data, "/webpromotion");
      onClickClose();
    } catch (err) {
      await Swal.fire({
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
      {loadaction && <LoadingAction />}
      {!loadaction && (
        <FormCreate
          close={onClickClose}
          topic="Promotion"
          submit={(e) => onClickCreate(e, datacreate)}
        >
          <div className="mb-1">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label fw-"
            >
              Link รูปภาพ
            </label>
            <input
              type="text"
              className="form-control"
              name="imageurl"
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              ชื่อ Promotion
            </label>
            <input
              type="text"
              name="title"
              className="form-control"
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              รายละเอียดเเบบย่อ
            </label>
            <textarea
              className="form-control"
              name="description"
              rows="2"
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
            ></textarea>
          </div>
          <div className="mb-1">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              รายละเอียดทั้งหมด
            </label>
            <textarea
              className="form-control"
              name="descriptiondetail"
              rows="5"
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
            ></textarea>
          </div>
        </FormCreate>
      )}
    </>
  );
}
