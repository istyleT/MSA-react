import React, { useState } from "react";
import Loading from "../../utils/ui/Loading";
import { useQueryInit } from "../../hook/usequeryinit";
import { apiDeleteFunction } from "../../services/apiCRUD";
import LoadingAction from "../../utils/ui/LoadingAction";
import ActivityCre from "./formmanage/ActivityCre";
import ActivityEdit from "./formmanage/ActivityEdit";
import LayoutManagePage1 from "../Layout/LayoutManagePage1";
import CardManageImgSide from "../../utils/ui/CardManageImgSide";

export default function ActivityMan() {
  const [loadaction, setLoadaction] = useState(false);
  const [create, setCreate] = useState(false);
  const [edit, setEdit] = useState(false);
  const { loading, datainit } = useQueryInit("webnews");

  const handleCreate = () => {
    setCreate(!create);
  };
  const handleEdit = (data) => {
    setEdit(data);
  };

  async function onClickDelete(id) {
    setLoadaction(true);
    await apiDeleteFunction(id, "/webnews");
    setLoadaction(false);
  }

  return (
    <>
      {create && <ActivityCre onClickClose={handleCreate} />}
      {edit && (
        <ActivityEdit onClickClose={() => handleEdit(false)} data={edit} />
      )}
      <LayoutManagePage1>
        <button
          className="btn btn-success w-75 rounded-3 fw-bold"
          onClick={handleCreate}
        >
          Create New Activity & News
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
                imagelink={data.imgactivityurl}
              >
                <span>
                  <span className="fw-bold text-dark">
                    ชื่อข่าวสาร/กิจกกรม ‣
                  </span>{" "}
                  {data.topicactivity}
                </span>
                <span>
                  <span className="fw-bold text-dark">รายละเอียด ‣</span>{" "}
                  {data.detailsactivity}
                </span>
                <span>
                  <span className="fw-bold text-dark">การจัดวางรูป ‣</span>{" "}
                  {data.reverse ? "จัดวางรูปชิดซ้าย" : "จัดวางรูปชิดขวา"}
                </span>
              </CardManageImgSide>
            );
          })}
      </LayoutManagePage1>
    </>
  );
}
