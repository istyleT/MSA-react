import React, { useState } from "react";
import Loading from "../../utils/ui/Loading";
import { useQueryInit } from "../../hook/usequeryinit";
import SaleVDOEdit from "./formmanage/SaleVDOEdit";
import LayoutManagePage1 from "../Layout/LayoutManagePage1";
import CardManageIframe from "../../utils/ui/CardManageIframe";

export default function SaleVDOMan() {
  const [edit, setEdit] = useState(false);
  const { loading, datainit } = useQueryInit("websalevdo");

  const handleEdit = (data) => {
    setEdit(data);
  };

  return (
    <>
      {edit && (
        <SaleVDOEdit onClickClose={() => handleEdit(false)} data={edit} />
      )}
      <LayoutManagePage1>
        {loading && <Loading />}
        {!loading &&
          datainit.map((data) => {
            return (
              <CardManageIframe
                data={data}
                vdolink={data.vdolink}
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
                    Title VDO ‣
                  </span>{" "}
                  {data.title}
                </span>
                <span>
                  <span className="fw-bold text-dark fst-italic">
                    Link VDO ‣
                  </span>{" "}
                  {data.vdolink}
                </span>
              </CardManageIframe>
            );
          })}
      </LayoutManagePage1>
    </>
  );
}
