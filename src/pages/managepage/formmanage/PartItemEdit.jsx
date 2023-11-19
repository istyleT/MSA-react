import React, { useState } from "react";
import Swal from "sweetalert2";
import FormEdit from "../../../ui/FormEdit";
import LoadingAction from "../../../ui/LoadingAction";
import { apiPutFunction } from "../../../apiservice/apiCRUD";

export default function PartItemEdit({ onClickClose, data }) {
  const [dataedit, setDataedit] = useState(data);
  const [loadaction, setLoadaction] = useState(false);

  function handledataedit(dataname, value) {
    setDataedit({ ...dataedit, [dataname]: value });
  }

  async function onClickEdit(e, data) {
    try {
      e.preventDefault();
      setLoadaction(true);
      await apiPutFunction(data, `/webpartitem/${data._id}`);
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
              สถานะ
            </label>
            <select
              className="form-control"
              defaultValue={dataedit.status}
              name="status"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
              class="form-select"
              aria-label="Default select example"
            >
              <option value="1">พร้อมจำหน่าย</option>
              <option value="2">สินค้าหมด</option>
            </select>
          </div>
          <div class="input-group mb-1">
            <span class="input-group-text" id="inputGroup-sizing-default">
              ชื่อรายการ
            </span>
            <input
              type="text"
              defaultValue={dataedit.partname}
              name="partname"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div class="input-group mb-1">
            <span class="input-group-text" id="inputGroup-sizing-default">
              รุ่นรถยนต์ที่ใช้ได้
            </span>
            <input
              type="text"
              defaultValue={dataedit.partmodel}
              name="partmodel"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div class="input-group mb-1">
            <span class="input-group-text" id="inputGroup-sizing-default">
              ราคา/หน่วย
            </span>
            <input
              type="text"
              defaultValue={dataedit.partprice}
              name="partprice"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div class="input-group mb-1">
            <span class="input-group-text" id="inputGroup-sizing-default">
              ส่วนลด %
            </span>
            <input
              type="text"
              defaultValue={dataedit.partdiscount}
              name="partdiscount"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </FormEdit>
      )}
    </>
  );
}
