import React, { useState } from "react";
import Loading from "../../utils/ui/Loading";
import { useQueryInit } from "../../hook/usequeryinit";
import { apiDeleteFunction } from "../../services/apiCRUD";
import PromotionCre from "./formmanage/PromotionCre";
import PromotionEdit from "./formmanage/PromotionEdit";
import LoadingAction from "../../utils/ui/LoadingAction";
import LayoutManagePage1 from "../Layout/LayoutManagePage1";
import CardManageImgSide from "../../utils/ui/CardManageImgSide";

export default function PromotionMan() {
  const [loadaction, setLoadaction] = useState(false);
  const [create, setCreate] = useState(false);
  const [edit, setEdit] = useState(false);
  const { loading, datainit } = useQueryInit("webpromotion");

  const handleCreate = () => {
    setCreate(!create);
  };
  const handleEdit = (data) => {
    setEdit(data);
  };

  async function onClickDelete(_id) {
    setLoadaction(true);
    await apiDeleteFunction(_id, "/webpromotion");
    setLoadaction(false);
  }

  return (
    <>
      {create && <PromotionCre onClickClose={handleCreate} />}
      {edit && (
        <PromotionEdit onClickClose={() => handleEdit(false)} data={edit} />
      )}
      <LayoutManagePage1>
        {loadaction && <LoadingAction />}
        <button
          className="btn btn-success w-75 rounded-3 fw-bold"
          onClick={handleCreate}
        >
          Create New Promotion
        </button>
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
                imagelink={data.imageurl}
              >
                <span>
                  <span className="fw-bold text-dark fst-italic">
                    ชื่อ Promotion ‣
                  </span>{" "}
                  {data.title}
                </span>
                <span>
                  <span className="fw-bold text-dark fst-italic">
                    รายละเอียดเเบบย่อ ‣
                  </span>{" "}
                  {data.description}
                </span>
                <span>
                  <span className="fw-bold text-dark fst-italic">
                    รายละเอียดทั้งหมด ‣
                  </span>{" "}
                  {data.descriptiondetail}
                </span>
              </CardManageImgSide>
            );
          })}
      </LayoutManagePage1>
    </>
  );
}
