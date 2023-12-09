import React, { useState } from "react";
import FormCreate from "../../../utils/ui/FormCreate";
import LoadingAction from "../../../utils/ui/LoadingAction";
import { apiPostFunction } from "../../../services/apiCRUD";

export default function ActivityCre({ onClickClose }) {
  const [datacreate, setDatacreate] = useState({});
  const [loadaction, setLoadaction] = useState(false);

  function handledatacreate(dataname, value) {
    setDatacreate({ ...datacreate, [dataname]: value });
  }

  async function onClickCreate(e, data) {
    e.preventDefault();
    setLoadaction(true);
    await apiPostFunction(data, "/webnews");
    onClickClose();
    setLoadaction(false);
  }

  return (
    <>
      {loadaction && <LoadingAction />}
      {!loadaction && (
        <FormCreate
          close={onClickClose}
          topic="ข่าวสาร & กิจกรรม"
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
              name="imgactivityurl"
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              ชื่อกิจกรรม/ข่าวสาร
            </label>
            <input
              type="text"
              name="topicactivity"
              className="form-control"
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              รายละเอียด
            </label>
            <textarea
              className="form-control"
              name="detailsactivity"
              rows="4"
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
            ></textarea>
          </div>
          <div className="mb-1">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              การจัดวางรูป
            </label>
            <select
              name="reverse"
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
              className="form-select text-center"
              defaultValue={false}
            >
              <option className="text-center" value={false}>
                รูปชิดซ้าย
              </option>
              <option className="text-center" value={true}>
                รูปชิดขวา
              </option>
            </select>
          </div>
        </FormCreate>
      )}
    </>
  );
}
