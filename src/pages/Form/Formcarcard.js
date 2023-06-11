import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Swal from 'sweetalert2'

const Formcarcard = () => {
  const [URLimage, setURLimage] = useState("-");
  const [mainmodel, setmainmodel] = useState("-");
  const [detail1, setdetail1] = useState("-");
  const [detail2, setdetail2] = useState("-");
  const [detail3, setdetail3] = useState("-");
  const [detail4, setdetail4] = useState("-");
  const [detail5, setdetail5] = useState("-");

  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      id: Date.now(),
      URLimage: URLimage,
      mainmodel: mainmodel,
      detail1: detail1,
      detail2: detail2,
      detail3: detail3,
      detail4: detail4,
      detail5: detail5,
    };
    fetch("https://test-web-api.herokuapp.com/carcard/create", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result["status"] === "ok") {
          Swal.fire({
            title: 'Complete',
            text: result["message"],
            icon: 'success',
            confirmButtonText: 'OK',
          });
        }
      });
  };
  return (
    <Form
      className="p-3 bg-white border border-dark rounded-3 border-3 font-monospace"
      onSubmit={handleSubmit}
      style={{ width: 30 + "vw" }}
    >
      <Row className="mb-1">
        <h3 className="pb-2 border-bottom border-danger border-2 text-center fw-bold">Create Carcard</h3>
      </Row>
      <Row className="mb-1">
        <Form.Group as={Col} md="6">
          <Form.Label>Link รูปภาพ</Form.Label>
          <Form.Control
            type="text"
            placeholder="images/xxxx.xxx"
            onChange={(e) => setURLimage(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>รุ่นหลัก</Form.Label>
          <Form.Control
            type="text"
            placeholder="xxxx"
            onChange={(e) => setmainmodel(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-1">
        <Form.Group as={Col} md="6">
          <Form.Label>รุ่นย่อย/ราคา-1</Form.Label>
          <Form.Control
            type="text"
            placeholder="xxxx / xxx,xxx"
            onChange={(e) => setdetail1(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>รุ่นย่อย/ราคา-2</Form.Label>
          <Form.Control
            type="text"
            placeholder="xxxx / xxx,xxx"
            onChange={(e) => setdetail2(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-1">
        <Form.Group as={Col} md="6">
          <Form.Label>รุ่นย่อย/ราคา-3</Form.Label>
          <Form.Control
            type="text"
            placeholder="xxxx / xxx,xxx"
            onChange={(e) => setdetail3(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>รุ่นย่อย/ราคา-4</Form.Label>
          <Form.Control
            type="text"
            placeholder="xxxx / xxx,xxx"
            onChange={(e) => setdetail4(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-1">
        <Form.Group as={Col} md="6">
          <Form.Label>รุ่นย่อย/ราคา-5</Form.Label>
          <Form.Control
            type="text"
            placeholder="xxxx / xxx,xxx"
            onChange={(e) => setdetail5(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Button className="w-100 mt-3" variant="success" type="submit">
        <span className="fw-bold">Create</span>
      </Button>
    </Form>
  );
};
export default Formcarcard;
