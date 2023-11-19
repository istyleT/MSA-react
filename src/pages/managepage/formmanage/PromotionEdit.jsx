import React, { useState } from "react";
import Swal from "sweetalert2";
import FormEdit from "../../../ui/FormEdit";
import LoadingAction from "../../../ui/LoadingAction";
import { apiPutFunction } from "../../../apiservice/apiCRUD";

export default function PromotionEdit({ onClickClose, data }) {
  const [dataedit, setDataedit] = useState(data);
  const [loadaction, setLoadaction] = useState(false);

  function handledataedit(dataname, value) {
    setDataedit({ ...dataedit, [dataname]: value });
  }

  async function onClickEdit(e, data) {
    try {
      e.preventDefault();
      setLoadaction(true);
      await apiPutFunction(data, `/webpromotion/${data._id}`);
      onClickClose();
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
      {loadaction && <LoadingAction />}
      {!loadaction && (
        <FormEdit
          close={onClickClose}
          topic="Promotion"
          submit={(e) => onClickEdit(e, dataedit)}
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
              defaultValue={dataedit.imageurl}
              name="imageurl"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              ชื่อ Promotion
            </label>
            <input
              type="text"
              name="title"
              defaultValue={dataedit.title}
              className="form-control"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              รายละเอียดเเบบย่อ
            </label>
            <textarea
              className="form-control"
              defaultValue={dataedit.description}
              name="description"
              rows="2"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
            ></textarea>
          </div>
          <div className="mb-1">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              รายละเอียดทั้งหมด
            </label>
            <textarea
              className="form-control"
              defaultValue={dataedit.descriptiondetail}
              name="descriptiondetail"
              rows="7"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
            ></textarea>
          </div>
        </FormEdit>
      )}
    </>
  );
}
