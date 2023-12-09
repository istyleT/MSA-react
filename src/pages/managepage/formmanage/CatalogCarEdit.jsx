import React, { useState } from "react";
import FormEdit from "../../../utils/ui/FormEdit";
import LoadingAction from "../../../utils/ui/LoadingAction";
import { apiPutFunction } from "../../../services/apiCRUD";

export default function CatalogCarEdit({ onClickClose, data }) {
  const [dataedit, setDataedit] = useState(data);
  const [loadaction, setLoadaction] = useState(false);

  function handledataedit(dataname, value) {
    setDataedit({ ...dataedit, [dataname]: value });
  }

  async function onClickEdit(e, data) {
    e.preventDefault();
    setLoadaction(true);
    await apiPutFunction(data, `/webcarcard/${data._id}`);
    onClickClose();
    setLoadaction(false);
  }

  return (
    <>
      {loadaction && <LoadingAction />}
      {!loadaction && (
        <FormEdit
          close={onClickClose}
          topic="รุ่นรถยนต์"
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
              defaultValue={dataedit.URLimage}
              name="URLimage"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              รุ่นหลัก
            </label>
            <input
              type="text"
              name="mainmodel"
              defaultValue={dataedit.mainmodel}
              className="form-control"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
            />
          </div>
          <div className="input-group mb-1">
            <span className="input-group-text fw-bold text-dark bg-warning">
              Coming soon
            </span>
            <select
              className="form-select text-center"
              defaultValue={dataedit.comingsoon}
              name="comingsoon"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
              aria-label="Default select example"
            >
              <option className="text-center" value={false}>
                ไม่ใช่
              </option>
              <option className="text-center" value={true}>
                ใช่
              </option>
            </select>
          </div>
          <div className="input-group mb-1">
            <span className="input-group-text fw-bold text-light bg-primary">
              รุ่นย่อย-1
            </span>
            <input
              type="text"
              name="detail1"
              defaultValue={dataedit.detail1}
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-1">
            <span className="input-group-text fw-bold text-light bg-primary">
              รุ่นย่อย-2
            </span>
            <input
              type="text"
              name="detail2"
              defaultValue={dataedit.detail2}
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-1">
            <span className="input-group-text fw-bold text-light bg-primary">
              รุ่นย่อย-3
            </span>
            <input
              type="text"
              name="detail3"
              defaultValue={dataedit.detail3}
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-1">
            <span className="input-group-text fw-bold text-light bg-primary">
              รุ่นย่อย-4
            </span>
            <input
              type="text"
              name="detail4"
              defaultValue={dataedit.detail4}
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-1">
            <span className="input-group-text fw-bold text-light bg-primary">
              รุ่นย่อย-5
            </span>
            <input
              type="text"
              name="detail5"
              defaultValue={dataedit.detail5}
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-1">
            <span className="input-group-text fw-bold text-light bg-primary">
              รุ่นย่อย-6
            </span>
            <input
              type="text"
              name="detail6"
              defaultValue={dataedit.detail6}
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </FormEdit>
      )}
    </>
  );
}
