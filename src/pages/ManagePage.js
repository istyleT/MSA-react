import React, {useState} from "react";
import Formpromotioncard from "./Form/Formpromotioncard";
import Form from 'react-bootstrap/Form';
import Formcarcard from "./Form/Formcarcard";
import Listpromotioncard from "./Form/Listpromotioncard";
import Formnewactivity from "./Form/Formactivity";
import Listnewactivity from "./Form/Listnewactivity";
import Listcarcard from "./Form/Listcarcard";
const ManagePage = () => {
  const [formmanage, setformmanage] = useState(null);

  function handleform () {
    const formselectmanage = document.getElementById("formselect-manage").value;
    setformmanage(formselectmanage);
    return 
  }

  let formmanagePost = null;
  let listdataPost = null;
  if (formmanage === "promotioncard") {
    formmanagePost = <Formpromotioncard />
    listdataPost= <Listpromotioncard />
  }
  if (formmanage === "carcard") {
    formmanagePost = <Formcarcard/>
    listdataPost= <Listcarcard />
  }
  if (formmanage === "activity") {
    formmanagePost = <Formnewactivity/>
    listdataPost= <Listnewactivity />
  }



  return (
    <section style={{ backgroundImage: "url(images/mainwallpaperhome.png)"}}>
    <main className="container  p-2" style={{marginTop: 8 + "vh" }}>
      <Form.Select  id="formselect-manage" aria-label="Default select example" className="fw-bold text-center text-danger" onChange={handleform}>
        <option className="fw-bold  text-center text-dark" select value="-">เลือกข้อมูล</option>
        <option className="fw-bold  text-center text-dark" value="promotioncard">Promotioncard</option>
        {/* <option className="fw-bold  text-center text-dark" value="bannersale">Bannersale</option> */}
        <option className="fw-bold  text-center text-dark" value="carcard">Carcard</option>
        <option className="fw-bold  text-center text-dark" value="activity">Activity</option>
        {/* <option className="fw-bold  text-center text-dark" value="partitem">Partitem</option> */}
      </Form.Select>
      <div className="d-flex justify-content-center mt-3">
        <div className="p-1 bg-white rounded-2 me-2 d-flex justify-content-center" style={{ width: 400 + "px",height: 66 + "vh" }}>
         {formmanagePost}
        </div>
        <div className="p-1 bg-white rounded-3  d-flex justify-content-center" style={{width: 870 + "px",height: 82.5 + "vh"}}>
           {listdataPost}
        </div>
         
      </div>
    </main>
    </section>
  );
};
export default ManagePage;
