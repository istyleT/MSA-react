import React, { useState } from "react";
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
    e.preventDefault();
    setLoadaction(true);
    await apiPutFunction(data, `/webnews/${data._id}`);
    onClickClose();
    setLoadaction(false);
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
              rows="5"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
            ></textarea>
          </div>
          <div className="mb-1">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              การจัดวาง
            </label>
            <select
              defaultValue={dataedit.reverse}
              name="reverse"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
              className="form-select text-center"
              aria-label="Default select example"
            >
              <option className="text-center" value={false}>
                รูปชิดซ้าย
              </option>
              <option className="text-center" value={true}>
                รูปชิดขวา
              </option>
            </select>
          </div>
        </FormEdit>
      )}
    </>
  );
}
