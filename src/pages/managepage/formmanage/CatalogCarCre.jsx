import React, { useState } from "react";
import Swal from "sweetalert2";
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
    try {
      e.preventDefault();
      setLoadaction(true);
      await apiPostFunction(data, "/webcarcard");
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
          topic="รุ่นรถยนต์"
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
          <div class="input-group mb-2">
            <span class="input-group-text" id="inputGroup-sizing-default">
              รุ่นย่อย-1
            </span>
            <input
              type="text"
              name="detail1"
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div class="input-group mb-2">
            <span class="input-group-text" id="inputGroup-sizing-default">
              รุ่นย่อย-2
            </span>
            <input
              type="text"
              name="detail2"
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div class="input-group mb-2">
            <span class="input-group-text" id="inputGroup-sizing-default">
              รุ่นย่อย-3
            </span>
            <input
              type="text"
              name="detail3"
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div class="input-group mb-2">
            <span class="input-group-text" id="inputGroup-sizing-default">
              รุ่นย่อย-4
            </span>
            <input
              type="text"
              name="detail4"
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div class="input-group mb-2">
            <span class="input-group-text" id="inputGroup-sizing-default">
              รุ่นย่อย-5
            </span>
            <input
              type="text"
              name="detail5"
              onChange={(e) => handledatacreate(e.target.name, e.target.value)}
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div class="input-group mb-2">
            <span class="input-group-text" id="inputGroup-sizing-default">
              รุ่นย่อย-6
            </span>
            <input
              type="text"
              name="detail6"
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
