import React, { useState } from "react";
import FormCreate from "../../../utils/ui/FormCreate";
import LoadingAction from "../../../utils/ui/LoadingAction";
import { apiPostFunction } from "../../../services/apiCRUD";

export default function PartItemCre({ onClickClose }) {
  const [datacreate, setDatacreate] = useState({});
  const [loadaction, setLoadaction] = useState(false);

  function handledatacreate(dataname, value) {
    setDatacreate({ ...datacreate, [dataname]: value });
  }

  async function onClickCreate(e, data) {
    e.preventDefault();
    setLoadaction(true);
    await apiPostFunction(data, "/webpartitem");
    onClickClose();
    setLoadaction(false);
  }

  return (
    <>
      {loadaction && <LoadingAction />}
      {!loadaction && (
        <FormCreate
          close={onClickClose}
          topic="รายการอะไหล่"
          submit={(e) => onClickCreate(e, datacreate)}
        >
          <div className="mb-1">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Link รูปภาพ
            </label>
            <input
              type="text"
              className="form-control"
              name="partimageurl"
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              สถานะการจำหน่าย
            </label>
            <select
              className="form-select text-dark text-center"
              defaultValue={"พร้อมจำหน่าย"}
              name="status"
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
            >
              <option
                className="text-success text-center fw-bold"
                value="พร้อมจำหน่าย"
              >
                พร้อมจำหน่าย
              </option>
              <option
                className="text-danger text-center fw-bold"
                value="สินค้าหมด"
              >
                สินค้าหมด
              </option>
            </select>
          </div>
          <div className="input-group mb-1">
            <span className="input-group-text fw-bold bg-success text-light">
              ชื่อรายการ
            </span>
            <input
              type="text"
              name="partname"
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
              className="form-control"
            />
          </div>
          <div className="input-group mb-1">
            <span className="input-group-text fw-bold bg-success text-light">
              รุ่นรถยนต์ที่ใช้ได้
            </span>
            <input
              type="text"
              name="partmodel"
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
              className="form-control"
            />
          </div>
          <div className="input-group mb-1">
            <span className="input-group-text fw-bold bg-success text-light">
              ราคาปกติ/หน่วย
            </span>
            <input
              type="text"
              name="partprice"
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
              className="form-control"
            />
          </div>
          <div className="input-group mb-1">
            <span className="input-group-text fw-bold bg-success text-light">
              ส่วนลด %
            </span>
            <input
              type="Number"
              className="form-control"
              name="partdiscount"
              onChange={(e) =>
                handledatacreate(e.target.name, Number(e.target.value))
              }
            />
          </div>
        </FormCreate>
      )}
    </>
  );
}
