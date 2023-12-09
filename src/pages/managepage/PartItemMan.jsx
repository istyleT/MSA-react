import React, { useState } from "react";
import Loading from "../../utils/ui/Loading";
import { useQueryInit } from "../../hook/usequeryinit";
import { apiDeleteFunction } from "../../services/apiCRUD";
import LoadingAction from "../../utils/ui/LoadingAction";
import PartItemCre from "./formmanage/PartItemCre";
import PartItemEdit from "./formmanage/PartItemEdit";
import LayoutManagePage1 from "../Layout/LayoutManagePage1";
import CardManageImgSide from "../../utils/ui/CardManageImgSide";

export default function PartItemMan() {
  const [loadaction, setLoadaction] = useState(false);
  const [create, setCreate] = useState(false);
  const [edit, setEdit] = useState(false);
  const { loading, datainit } = useQueryInit("webpartitem");

  const handleCreate = () => {
    setCreate(!create);
  };
  const handleEdit = (data) => {
    setEdit(data);
  };

  async function onClickDelete(_id) {
    setLoadaction(true);
    await apiDeleteFunction(_id, `/webpartitem`);
    setLoadaction(false);
  }

  return (
    <>
      {create && <PartItemCre onClickClose={handleCreate} />}
      {edit && (
        <PartItemEdit onClickClose={() => handleEdit(false)} data={edit} />
      )}
      <LayoutManagePage1>
        <button
          className="btn btn-success w-75 rounded-3 fw-bold"
          onClick={handleCreate}
        >
          Create New Partitems
        </button>
        {loadaction && <LoadingAction />}
        {loading && <Loading />}
        {!loading &&
          datainit.map((data) => {
            return (
              <CardManageImgSide
                data={data}
                accessedit={true}
                accessdelete={true}
                fnedit={handleEdit}
                fndelete={onClickDelete}
                key={data._id}
                imagelink={data.partimageurl}
              >
                <span>
                  <span className="fw-bold text-dark fst-italic">
                    ชื่อรายการ ‣
                  </span>{" "}
                  {data.partname}
                </span>
                <span>
                  <span className="fw-bold text-dark fst-italic">
                    รุ่นรถยนต์ ‣
                  </span>{" "}
                  {data.partmodel}
                </span>
                <span>
                  <span className="fw-bold text-dark fst-italic">
                    ราคาปกติ/หน่วย ‣
                  </span>{" "}
                  <span className="text-primary fw-bold">
                    {Number(data.partprice)
                      .toFixed(0)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>{" "}
                  บาท
                </span>
                <span>
                  <span className="fw-bold text-dark fst-italic">ส่วนลด ‣</span>{" "}
                  <span className="text-danger fw-bold">
                    {data.partdiscount}
                  </span>{" "}
                  %
                </span>
                <span>
                  <span className="fw-bold text-dark fst-italic">สถานะ ‣</span>{" "}
                  {data.status}
                </span>
                <span>
                  <span className="fw-bold text-dark fst-italic">
                    ราคาสุทธิ(+Vat 7%) ‣
                  </span>{" "}
                  <span className="fw-bold text-success">
                    {Number(
                      Number(data.partprice) *
                        (Number(100 - Number(data.partdiscount)) / 100) *
                        1.07
                    )
                      .toFixed(0)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>{" "}
                  บาท
                </span>
              </CardManageImgSide>
            );
          })}
      </LayoutManagePage1>
    </>
  );
}
