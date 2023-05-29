import React, {useState} from "react";
import Formpromotioncard from "./Form/Formpromotioncard";
import Form from 'react-bootstrap/Form';
import Formcarcard from "./Form/Formcarcard";
const ManagePage = () => {
  const [formmanage, setformmanage] = useState(null);

  function handleform () {
    const formselectmanage = document.getElementById("formselect-manage").value;
    setformmanage(formselectmanage);
    return 
  }

  let formmanagePost = null;
  if (formmanage === "promotioncard") {
    formmanagePost = <Formpromotioncard />
  }
  if (formmanage === "carcard") {
    formmanagePost = <Formcarcard/>
  }



  return (
    <main className="container  p-1" style={{ marginTop: 8 + "vh" }}>
      <Form.Select  id="formselect-manage" aria-label="Default select example" onChange={handleform}>
        <option select value="-">เลือกข้อมูลที่จะเเก้ไข</option>
        <option value="promotioncard">Promotioncard</option>
        <option value="bannersale">Bannersale</option>
        <option value="carcard">Carcard</option>
        <option value="activity">Activity</option>
        <option value="partitem">Partitem</option>
      </Form.Select>
      <div className="d-felx mt-3">
         {formmanagePost}
      </div>
    </main>
  );
};
export default ManagePage;
