import React, { useState } from "react";
import FormCreate from "../../../utils/ui/FormCreate";
import LoadingAction from "../../../utils/ui/LoadingAction";
import { apiPostFunction } from "../../../services/apiCRUD";

export default function CatalogCarCre({ onClickClose }) {
  const [datacreate, setDatacreate] = useState({});
  const [loadaction, setLoadaction] = useState(false);

  function handledatacreate(dataname, value) {
    setDatacreate({ ...datacreate, [dataname]: value });
  }

  async function onClickCreate(e, data) {
    e.preventDefault();
    setLoadaction(true);
    await apiPostFunction(data, "/webcarcard");
    onClickClose();
    setLoadaction(false);
  }

  return (
    <>
      {loadaction && <LoadingAction />}
      {!loadaction && (
        <FormCreate
          close={onClickClose}
          topic="รุ่นรถยนต์"
          submit={(e) => onClickCreate(e, datacreate)}
        >
          <div className="mb-1">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Link รูปภาพ
            </label>
            <input
              type="text"
              className="form-control"
              name="URLimage"
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              รุ่นหลัก
            </label>
            <input
              type="text"
              name="mainmodel"
              className="form-control"
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
            />
          </div>
          <div className="input-group mb-1">
            <span className="input-group-text fw-bold text-dark bg-warning">
              Coming soon
            </span>
            <select
              className="form-select text-center"
              defaultValue={false}
              name="comingsoon"
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
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
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
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
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
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
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
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
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
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
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
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
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </FormCreate>
      )}
    </>
  );
}
