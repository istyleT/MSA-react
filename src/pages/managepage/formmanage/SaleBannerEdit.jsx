import React, { useState } from "react";
import Swal from "sweetalert2";
import FormEdit from "../../../utils/ui/FormEdit";
import LoadingAction from "../../../utils/ui/LoadingAction";
import { apiPutFunction } from "../../../services/apiCRUD";

export default function SaleBannerEdit({ onClickClose, data }) {
  const [dataedit, setDataedit] = useState(data);
  const [loadaction, setLoadaction] = useState(false);

  function handledataedit(dataname, value) {
    setDataedit({ ...dataedit, [dataname]: value });
  }

  async function onClickEdit(e, data) {
    try {
      e.preventDefault();
      setLoadaction(true);
      await apiPutFunction(data, `/webbannersale/${data._id}`);
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
          topic="Banner ฝ่ายขาย"
          submit={(e) => onClickEdit(e, dataedit)}
        >
          <div className="mb-1">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label fw-"
            >
              ลำดับ
            </label>
            <select
              className="form-control"
              defaultValue={dataedit.order}
              name="order"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
              class="form-select"
              aria-label="Default select example"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3">4</option>
              <option value="3">5</option>
            </select>
          </div>
          <div className="mb-1">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              หมายเหตุ
            </label>
            <input
              type="text"
              name="remark"
              defaultValue={dataedit.remark}
              className="form-control"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Link รูปภาพ
            </label>
            <textarea
              className="form-control"
              defaultValue={dataedit.imagelink}
              name="imagelink"
              rows="2"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
            ></textarea>
          </div>
        </FormEdit>
      )}
    </>
  );
}
