import React, { useState } from "react";
import Loading from "../../utils/ui/Loading";
import { useQueryInit } from "../../hook/usequeryinit";
import BranchCardEdit from "./formmanage/BranchCardEdit";
import CardManageImgTop from "../../utils/ui/CardManageImgTop";
import LayoutManagePage1 from "../Layout/LayoutManagePage1";

export default function BranchCardMan() {
  const [edit, setEdit] = useState(false);
  const { loading, datainit } = useQueryInit("webbranchcard");

  const handleEdit = (data) => {
    setEdit(data);
  };

  return (
    <>
      {edit && (
        <BranchCardEdit onClickClose={() => handleEdit(false)} data={edit} />
      )}
      <LayoutManagePage1>
        {loading && <Loading />}
        {!loading &&
          datainit.map((data) => {
            return (
              <CardManageImgTop
                data={data}
                heightimg={450}
                accessedit={true}
                fnedit={handleEdit}
                key={data._id}
              >
                <span>
                  <span className="fw-bold text-dark fst-italic">
                    ชื่อสาขา ‣{" "}
                  </span>{" "}
                  {data.namebranch}
                </span>
                <span>
                  <span className="fw-bold text-dark fst-italic">
                    เบอร์ติดต่อ ‣{" "}
                  </span>{" "}
                  {data.numberbranch}
                </span>
                <span>
                  <span className="fw-bold text-dark fst-italic">
                    ที่ตั้ง ‣{" "}
                  </span>{" "}
                  {data.popuplocation}
                </span>
                <span>
                  <span className="fw-bold text-dark fst-italic">
                    Google Map ‣{" "}
                  </span>{" "}
                  <span className="text-break">{data.googlemapbranch}</span>
                </span>
              </CardManageImgTop>
            );
          })}
      </LayoutManagePage1>
    </>
  );
}
