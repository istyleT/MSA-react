import React, { useState } from "react";
import FormEdit from "../../../utils/ui/FormEdit";
import LoadingAction from "../../../utils/ui/LoadingAction";
import { apiPutFunction } from "../../../services/apiCRUD";

export default function SaleSocialEdit({ onClickClose, data }) {
  const [dataedit, setDataedit] = useState(data);
  const [loadaction, setLoadaction] = useState(false);

  function handledataedit(dataname, value) {
    setDataedit({ ...dataedit, [dataname]: value });
  }

  async function onClickEdit(e, data) {
    e.preventDefault();
    setLoadaction(true);
    await apiPutFunction(data, `/websalesocial/${data._id}`);
    onClickClose();
    setLoadaction(false);
  }

  return (
    <>
      {loadaction && <LoadingAction />}
      {!loadaction && (
        <FormEdit
          close={onClickClose}
          topic="Social Contact"
          submit={(e) => onClickEdit(e, dataedit)}
        >
          <div className="mb-1">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              ชื่อสาขา
            </label>
            <input
              type="text"
              name="title"
              defaultValue={dataedit.head}
              className="form-control"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
            />
          </div>
          <div className="input-group mb-1">
            <span className="input-group-text" id="inputGroup-sizing-default">
              ชื่อ Facebook
            </span>
            <input
              type="text"
              defaultValue={dataedit.namefacebook}
              name="namefacebook"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-1">
            <span className="input-group-text" id="inputGroup-sizing-default">
              link Facebook
            </span>
            <input
              type="text"
              defaultValue={dataedit.linkfacebook}
              name="linkfacebook"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-1">
            <span className="input-group-text" id="inputGroup-sizing-default">
              ชื่อ Line
            </span>
            <input
              type="text"
              defaultValue={dataedit.nameline}
              name="nameline"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-1">
            <span className="input-group-text" id="inputGroup-sizing-default">
              link Line
            </span>
            <input
              type="text"
              defaultValue={dataedit.linkline}
              name="linkline"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-1">
            <span className="input-group-text" id="inputGroup-sizing-default">
              ชื่อ TikTok
            </span>
            <input
              type="text"
              defaultValue={dataedit.nametiktok}
              name="nametiktok"
              onChange={(e) => handledataedit(e.target.name, e.target.value)}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-1">
            <span className="input-group-text" id="inputGroup-sizing-default">
              link TikTok
            </span>
            <input
              type="text"
              defaultValue={dataedit.linktiktok}
              name="linktiktok"
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
