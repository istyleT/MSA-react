import React, { useState } from "react";
import Loading from "../../utils/ui/Loading";
import { useQueryInit } from "../../hook/usequeryinit";
import SaleBannerEdit from "./formmanage/SaleBannerEdit";
import CardManageImgTop from "../../utils/ui/CardManageImgTop";
import LayoutManagePage1 from "../Layout/LayoutManagePage1";

export default function SaleBannerMan() {
  const [edit, setEdit] = useState(false);
  const { loading, datainit } = useQueryInit("webbannersale");

  const handleEdit = (data) => {
    setEdit(data);
  };

  return (
    <>
      {edit && (
        <SaleBannerEdit onClickClose={() => handleEdit(false)} data={edit} />
      )}
      <LayoutManagePage1>
        {loading && <Loading />}
        {!loading &&
          datainit.map((data) => {
            return (
              <CardManageImgTop
                data={data}
                imagelink={data.imagelink}
                heightimg={320}
                accessedit={true}
                fnedit={handleEdit}
                key={data._id}
              >
                <span>
                  <span className="fw-bold text-dark fst-italic">
                    ลำดับการเเสดง ‣
                  </span>{" "}
                  {data.order}
                  <span className="ms-4 fw-bold text-dark fst-italic">
                    เกี่ยวกับรูปภาพ ‣
                  </span>{" "}
                  {data.remark}
                </span>
                <span>
                  <span className="fw-bold text-dark fst-italic">
                    Link รูปภาพ ‣
                  </span>{" "}
                  {data.imagelink}
                </span>
              </CardManageImgTop>
            );
          })}
      </LayoutManagePage1>
    </>
  );
}
