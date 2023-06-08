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
import PromotionCanvas from "./ComponentPages/PromotionCanvas";
import Listbannersale from "./Form/Listbannersale";
const ManagePage = () => {
  const [formmanage, setformmanage] = useState(null);

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

  return (
    <section className="bg-dark">
      <main className="container  p-2" style={{ marginTop: 7 + "vh" }}>
        <Form.Select
          id="formselect-manage"
          aria-label="Default select example"
          className="fw-bold text-center text-danger "
          onChange={handleform}
        >
          <option className="fw-bold  text-center text-dark" selected disabled>
            ----- เลือกข้อมูล -----
          </option>
          <option
            className="fw-bold  text-center text-dark"
            value="promotioncard"
          >
            Promotioncard-เเถบโปรโมชั่น
          </option>
          <option className="fw-bold  text-center text-dark" value="bannersale">
            Bannersale-รูปเเบนเนอร์หน้าฝ่ายขาย
          </option>
          <option className="fw-bold  text-center text-dark" value="carcard">
            Carcard-รุ่นรถหน้าฝ่ายขาย
          </option>
          <option className="fw-bold  text-center text-dark" value="activity">
            Activity-ข่าวสารเเละกิจกรรมหน้าฝ่ายการตลาด
          </option>
          <option className="fw-bold  text-center text-dark" value="partitem">
            Partitem-อะไหล่เเละอุปกรณ์ตกเเต่งหน้าShop
          </option>
        </Form.Select>
        <div className="d-flex justify-content-center mt-3">
          <div
            className="p-1 bg-white rounded-2 me-2 d-flex justify-content-center "
            style={{ width: 400 + "px", height: 67 + "vh" }}
          >
            {formmanagePost}
          </div>
          <div
            className="p-1 bg-light rounded-3  d-flex justify-content-center "
            style={{ width: 870 + "px", height: 83.7 + "vh" }}
          >
            {listdataPost}
          </div>
        </div>
      </main>
      <PromotionCanvas />
    </section>
  );
};
export default ManagePage;
