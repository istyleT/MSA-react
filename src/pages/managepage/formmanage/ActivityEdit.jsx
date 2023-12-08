import React, { useState } from "react";
import Swal from "sweetalert2";
import FormEdit from "../../../utils/ui/FormEdit";
import LoadingAction from "../../../utils/ui/LoadingAction";
import { apiPutFunction } from "../../../services/apiCRUD";

export default function ActivityEdit({ onClickClose, data }) {
  const [dataedit, setDataedit] = useState(data);
  const [loadaction, setLoadaction] = useState(false);

  function handledataedit(dataname, value) {
    setDataedit({ ...dataedit, [dataname]: value });
  }

  async function onClickEdit(e, data) {
    try {
      e.preventDefault();
      setLoadaction(true);
      await apiPutFunction(data, `/webnews/${data._id}`);
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
          topic="ข่าวสารและกิจกรรม"
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
              defaultValue={dataedit.imgactivityurl}
              name="imgactivityurl"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              ชื่อกิจกรรม
            </label>
            <input
              type="text"
              defaultValue={dataedit.topicactivity}
              name="topicactivity"
              className="form-control"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              รายละเอียด
            </label>
            <textarea
              className="form-control"
              defaultValue={dataedit.detailsactivity}
              name="detailsactivity"
              rows="4"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
            ></textarea>
          </div>
          <div className="mb-1">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              การจัดวาง
            </label>
            <select
              className="form-control"
              defaultValue={dataedit.reverse}
              name="reverse"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
              class="form-select"
              aria-label="Default select example"
            >
              <option value="รูปชิดซ้าย">รูปชิดซ้าย</option>
              <option value="รูปชิดขวา">รูปชิดขวา</option>
            </select>
          </div>
        </FormEdit>
      )}
    </>
  );
}
