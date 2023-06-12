import React, { useState } from "react";
import Formpromotioncard from "./Form/Formpromotioncard";
import Form from "react-bootstrap/Form";
import Formcarcard from "./Form/Formcarcard";
import Listpromotioncard from "./Form/Listpromotioncard";
import Formnewactivity from "./Form/Formactivity";
import Listnewactivity from "./Form/Listnewactivity";
import Listcarcard from "./Form/Listcarcard";
import Formpartitem from "./Form/Formpartitem";
import Listpartitem from "./Form/Listpartitem";
import Listbannersale from "./Form/Listbannersale";
import Listvideosale from "./Form/Listvideosale";
import Listvideoservice from "./Form/Listvideoservice";
import Listvideopaint from "./Form/Listvideopaint";
import useEffectOnce from "../hook/useeffectonce";
const ManagePage = () => {
  const [formmanage, setformmanage] = useState("promotioncard");
  const [isLoading, setisLoading] = useState(true);

  useEffectOnce(() => {
    fetch("https://test-web-api.herokuapp.com/check_authen", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === "authenticated") {

        } else {
          window.location.href = "/login";
        }
      })
      .then(() => {
        setisLoading(false);
      });
  });

  function handleform() {
    const formselectmanage = document.getElementById("formselect-manage").value;
    setformmanage(formselectmanage);
    return;
  }

  let formmanagePost = null;
  let listdataPost = null;
  if (formmanage === "promotioncard") {
    formmanagePost = <Formpromotioncard />;
    listdataPost = <Listpromotioncard />;
  }
  if (formmanage === "carcard") {
    formmanagePost = <Formcarcard />;
    listdataPost = <Listcarcard />;
  }
  if (formmanage === "activity") {
    formmanagePost = <Formnewactivity />;
    listdataPost = <Listnewactivity />;
  }
  if (formmanage === "partitem") {
    formmanagePost = <Formpartitem />;
    listdataPost = <Listpartitem />;
  }
  if (formmanage === "bannersale") {
    formmanagePost = null;
    listdataPost = <Listbannersale />;
  }
  if (formmanage === "vdosale") {
    formmanagePost = null;
    listdataPost = <Listvideosale />;
  }
  if (formmanage === "vdoservice") {
    formmanagePost = null;
    listdataPost = <Listvideoservice />;
  }
  if (formmanage === "vdopaint") {
    formmanagePost = null;
    listdataPost = <Listvideopaint />;
  }

  if (isLoading) {
    return <div className="bg-transparents"></div>;
  }

  return (
    <section className="bg-dark" style={{ height: 93 + "vh" }}>
      <main className="container  p-2" style={{ marginTop: 7 + "vh" }}>
        <Form.Select
          id="formselect-manage"
          aria-label="Default select example"
          className="fw-bold text-center text-danger "
          onChange={handleform}
        >
          <option className="fw-bold  text-center text-success" disabled>
            ----- เนื้อหาในการ์ด -----
          </option>
          <option
            className="fw-bold  text-center text-dark"
            value="promotioncard"
          >
            Promotioncard-เเถบโปรโมชั่น
          </option>
          <option className="fw-bold  text-center text-dark" value="carcard">
            Carcard-รุ่นรถหน้าฝ่ายขาย
          </option>
          <option className="fw-bold  text-center text-dark" value="partitem">
            Partitem-อะไหล่เเละอุปกรณ์ตกเเต่งหน้าShop
          </option>
          <option className="fw-bold  text-center text-primary" disabled>
            ----- เนื่อหาในหน้า -----
          </option>
          <option className="fw-bold  text-center text-dark" value="bannersale">
            Bannersale-รูปเเบนเนอร์หน้าฝ่ายขาย
          </option>
          <option className="fw-bold  text-center text-dark" value="activity">
            Activity-ข่าวสารเเละกิจกรรมหน้าฝ่ายการตลาด
          </option>
          <option className="fw-bold  text-center text-warning" disabled>
            ----- วีดีโอต่างๆ -----
          </option>
          <option className="fw-bold  text-center text-dark" value="vdosale">
            VideoSale-วีดีโอหน้าฝ่ายขาย
          </option>
          <option className="fw-bold  text-center text-dark" value="vdoservice">
            VideoService-วีดีโอหน้าฝ่ายบริการ
          </option>
          <option className="fw-bold  text-center text-dark" value="vdopaint">
            VideoPaint-วีดีโอหน้าฝ่ายพ่นสี
          </option>
        </Form.Select>
        <div className="d-flex justify-content-center mt-3">
          <div>
            <div
              className="p-1 bg-white rounded-2 me-2 d-flex justify-content-center "
              style={{ width: 400 + "px", height: 68 + "vh" }}
            >
              {formmanagePost}
            </div>
            <button className=" position-absolute bottom-0 start-0 btn btn-secondary fw-bold font-monospace p-2 ms-3 mb-3"
            onClick={()=>{
              localStorage.removeItem("accessToken");
              window.location.href = "/";
            }}>
              Logout
            </button>
          </div>
          <div
            className="p-1 bg-light rounded-3  d-flex justify-content-center "
            style={{ width: 870 + "px", height: 83.7 + "vh" }}
          >
            {listdataPost}
          </div>
        </div>
      </main>
    </section>
  );
};
export default ManagePage;
