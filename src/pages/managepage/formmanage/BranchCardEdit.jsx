import React, { useState } from "react";
import FormEdit from "../../../utils/ui/FormEdit";
import LoadingAction from "../../../utils/ui/LoadingAction";
import { apiPutFunction } from "../../../services/apiCRUD";

export default function BranchCardEdit({ onClickClose, data }) {
  const [dataedit, setDataedit] = useState(data);
  const [loadaction, setLoadaction] = useState(false);

  function handledataedit(dataname, value) {
    setDataedit({ ...dataedit, [dataname]: value });
  }

  async function onClickEdit(e, data) {
    e.preventDefault();
    setLoadaction(true);
    await apiPutFunction(data, `/webbranchcard/${data._id}`);
    onClickClose();
    setLoadaction(false);
  }

  return (
    <>
      {loadaction && <LoadingAction />}
      {!loadaction && (
        <FormEdit
          close={onClickClose}
          topic="รายละเอียดสาขา"
          submit={(e) => onClickEdit(e, dataedit)}
        >
          <div className="mb-1">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              ชื่อสาขา
            </label>
            <input
              type="text"
              name="namebranch"
              defaultValue={dataedit.namebranch}
              className="form-control"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              เบอร์ติดต่อ
            </label>
            <input
              type="text"
              name="numberbranch"
              defaultValue={dataedit.numberbranch}
              className="form-control"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              ที่ตั้ง
            </label>
            <textarea
              name="popuplocation"
              rows="2"
              defaultValue={dataedit.popuplocation}
              className="form-control"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
            ></textarea>
          </div>
          <div className="mb-1">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Link เเผนที่
            </label>
            <textarea
              className="form-control"
              defaultValue={dataedit.googlemapbranch}
              name="googlemapbranch"
              rows="3"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
            ></textarea>
          </div>
        </FormEdit>
      )}
    </>
  );
}
