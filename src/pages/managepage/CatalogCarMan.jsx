import React, { useState } from "react";
import Loading from "../../utils/ui/Loading";
import { useQueryInit } from "../../hook/usequeryinit";
import { apiDeleteFunction } from "../../services/apiCRUD";
import LoadingAction from "../../utils/ui/LoadingAction";
import CatalogCarCre from "./formmanage/CatalogCarCre";
import CatalogCarEdit from "./formmanage/CatalogCarEdit";
import LayoutManagePage1 from "../Layout/LayoutManagePage1";
import CardManageImgSide from "../../utils/ui/CardManageImgSide";

export default function CatalogCarMan() {
  const [loadaction, setLoadaction] = useState(false);
  const [create, setCreate] = useState(false);
  const [edit, setEdit] = useState(false);
  const { loading, datainit } = useQueryInit("webcarcard");

  const handleCreate = () => {
    setCreate(!create);
  };
  const handleEdit = (data) => {
    setEdit(data);
  };

  async function onClickDelete(id) {
    setLoadaction(true);
    await apiDeleteFunction(id, "/webcarcard");
    setLoadaction(false);
  }

  return (
    <>
      {create && <CatalogCarCre onClickClose={handleCreate} />}
      {edit && (
        <CatalogCarEdit onClickClose={() => handleEdit(false)} data={edit} />
      )}
      <LayoutManagePage1>
        <button
          className="btn btn-success w-75 rounded-3 fw-bold"
          onClick={handleCreate}
        >
          Create New Carmodel
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
                imagelink={data.URLimage}
              >
                <span>
                  <span className="fw-bold text-dark fst-italic">
                    Mainmodel ‣
                  </span>{" "}
                  {data.mainmodel}
                </span>
                {data.comingsoon ? (
                  <span className="mt-3 fs-4 fw-bold text-center text-warning">
                    Coming Soon
                  </span>
                ) : (
                  <>
                    <span>
                      <span className="fw-bold text-dark fst-italic">
                        Submodel-1 ‣
                      </span>{" "}
                      {data.detail1}
                    </span>
                    <span>
                      <span className="fw-bold text-dark fst-italic">
                        Submodel-2 ‣
                      </span>{" "}
                      {data.detail2}
                    </span>
                    <span>
                      <span className="fw-bold text-dark fst-italic">
                        Submodel-3 ‣
                      </span>{" "}
                      {data.detail3}
                    </span>
                    <span>
                      <span className="fw-bold text-dark fst-italic">
                        Submodel-4 ‣
                      </span>{" "}
                      {data.detail4}
                    </span>
                    <span>
                      <span className="fw-bold text-dark fst-italic">
                        Submodel-5 ‣
                      </span>{" "}
                      {data.detail5}
                    </span>
                    <span>
                      <span className="fw-bold text-dark fst-italic">
                        Submodel-6 ‣
                      </span>{" "}
                      {data.detail6}
                    </span>
                  </>
                )}
              </CardManageImgSide>
            );
          })}
      </LayoutManagePage1>
    </>
  );
}
