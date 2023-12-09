import React, { useState } from "react";
import FormEdit from "../../../utils/ui/FormEdit";
import LoadingAction from "../../../utils/ui/LoadingAction";
import { apiPutFunction } from "../../../services/apiCRUD";

export default function PartItemEdit({ onClickClose, data }) {
  const [dataedit, setDataedit] = useState(data);
  const [loadaction, setLoadaction] = useState(false);

  function handledataedit(dataname, value) {
    setDataedit({ ...dataedit, [dataname]: value });
  }

  async function onClickEdit(e, data) {
    e.preventDefault();
    setLoadaction(true);
    await apiPutFunction(data, `/webpartitem/${data._id}`);
    onClickClose();
    setLoadaction(false);
  }

  return (
    <>
      {loadaction && <LoadingAction />}
      {!loadaction && (
        <FormEdit
          close={onClickClose}
          topic="รายการอะไหล่"
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
              defaultValue={dataedit.partimageurl}
              name="partimageurl"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label fw-"
            >
              สถานะการจำหน่าย
            </label>
            <select
              className="form-select text-dark text-center"
              defaultValue={dataedit.status}
              name="status"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
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
            <span className="input-group-text fw-bold bg-secondary text-light">
              ชื่อรายการ
            </span>
            <input
              type="text"
              defaultValue={dataedit.partname}
              name="partname"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
              className="form-control"
            />
          </div>
          <div className="input-group mb-1">
            <span className="input-group-text fw-bold bg-secondary text-light">
              รุ่นรถยนต์ที่ใช้ได้
            </span>
            <input
              type="text"
              defaultValue={dataedit.partmodel}
              name="partmodel"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
              className="form-control"
            />
          </div>
          <div className="input-group mb-1">
            <span className="input-group-text fw-bold bg-secondary text-light">
              ราคาปกติ/หน่วย
            </span>
            <input
              type="text"
              defaultValue={dataedit.partprice}
              name="partprice"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
              className="form-control"
            />
          </div>
          <div className="input-group mb-1">
            <span className="input-group-text fw-bold bg-secondary text-light">
              ส่วนลด %
            </span>
            <input
              type="Number"
              className="form-control"
              defaultValue={dataedit.partdiscount}
              name="partdiscount"
              onChange={(e) =>
                handledataedit(e.target.name, Number(e.target.value))
              }
            />
          </div>
        </FormEdit>
      )}
    </>
  );
}
