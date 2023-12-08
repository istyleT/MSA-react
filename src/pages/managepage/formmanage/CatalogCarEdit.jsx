import React, { useState } from "react";
import Swal from "sweetalert2";
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
    try {
      e.preventDefault();
      setLoadaction(true);
      await apiPutFunction(data, `/webcarcard/${data._id}`);
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
          <div class="input-group mb-2">
            <span class="input-group-text" id="inputGroup-sizing-default">
              รุ่นย่อย-1
            </span>
            <input
              type="text"
              defaultValue={dataedit.detail1}
              name="detail1"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
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
              defaultValue={dataedit.detail2}
              name="detail2"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
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
              defaultValue={dataedit.detail3}
              name="detail3"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
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
              defaultValue={dataedit.detail4}
              name="detail4"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
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
              defaultValue={dataedit.detail5}
              name="detail5"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
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
              defaultValue={dataedit.detail6}
              name="detail6"
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
