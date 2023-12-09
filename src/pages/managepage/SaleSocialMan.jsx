import React, { useState } from "react";
import Loading from "../../utils/ui/Loading";
import { useQueryInit } from "../../hook/usequeryinit";
import SaleSocialEdit from "./formmanage/SaleSocialEdit";
import LayoutManagePage1 from "../Layout/LayoutManagePage1";
import CardManageNormal from "../../utils/ui/CardManageNormal";

export default function SaleSocialMan() {
  const [edit, setEdit] = useState(false);
  const { loading, datainit } = useQueryInit("websalesocial");

  const handleEdit = (data) => {
    setEdit(data);
  };

  return (
    <>
      {edit && (
        <SaleSocialEdit onClickClose={() => handleEdit(false)} data={edit} />
      )}
      <LayoutManagePage1>
        {loading && <Loading />}
        {!loading &&
          datainit.map((data) => {
            return (
              <CardManageNormal
                data={data}
                accessedit={true}
                fnedit={handleEdit}
                key={data._id}
              >
                <span>
                  <span className="fw-bold text-dark fst-italic fst-italic">
                    ชื่อสาขา ‣
                  </span>{" "}
                  {data.head}
                </span>
                <span>
                  <span className="fw-bold text-dark fst-italic">
                    🔵 facebook ‣
                  </span>{" "}
                  {data.namefacebook}
                </span>
                <span>
                  <span className="fw-bold text-dark fst-italic">
                    Link facebook ‣
                  </span>{" "}
                  {data.linkfacebook}
                </span>
                <span>
                  <span className="fw-bold text-dark fst-italic">
                    🟢 Line ‣
                  </span>{" "}
                  {data.nameline}
                </span>
                <span>
                  <span className="fw-bold text-dark fst-italic">
                    Link line ‣
                  </span>{" "}
                  {data.linkline}
                </span>
                <span>
                  <span className="fw-bold text-dark fst-italic">
                    ⚫ Tiktok ‣
                  </span>{" "}
                  {data.nametiktok}
                </span>
                <span>
                  <span className="fw-bold text-dark fst-italic">
                    Link Tiktok ‣
                  </span>{" "}
                  {data.linktiktok}
                </span>
              </CardManageNormal>
            );
          })}
      </LayoutManagePage1>
    </>
  );
}
