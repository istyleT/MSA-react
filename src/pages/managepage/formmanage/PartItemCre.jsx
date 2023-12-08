import React, { useState } from "react";
import Swal from "sweetalert2";
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
    try {
      e.preventDefault();
      setLoadaction(true);
      await apiPostFunction(data, "/webpartitem");
      onClickClose();
    } catch (err) {
      await Swal.fire({
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
        <FormCreate
          close={onClickClose}
          topic="รายการอะไหล่"
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
              name="partimageurl"
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
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
              name="status"
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
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
              name="partname"
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
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
              name="partmodel"
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
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
              name="partprice"
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
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
              name="partdiscount"
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </FormCreate>
      )}
    </>
  );
}
