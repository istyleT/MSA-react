import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Formpartitem = () => {
  const [partimageurl, setpartimageurl] = useState("-");
  const [partname, setpartname] = useState("-");
  const [partmodel, setpartmodel] = useState("-");
  const [partprice, setpartprice] = useState("-");
  const [partdiscount, setpartdiscount] = useState("-");
  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      id: Date.now(),
      partimageurl: partimageurl,
      partname: partname,
      partmodel: partmodel,
      partprice: partprice,
      partdiscount: partdiscount,
    };
    fetch("https://test-web-api.herokuapp.com/partitem/create", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Create success");
        if (result["status"] === "ok") {
          window.location.href = "/Manage";
        }
      });
  };
  return (
    <Form
      className="p-3"
      onSubmit={handleSubmit}
      style={{ width: 30 + "vw" }}
    >
      <Row className="mb-1">
        <h3>Create PartsItem</h3>
      </Row>
      <Row className="mb-1">
        <Form.Group as={Col} md="6">
          <Form.Label>รูปสินค้า</Form.Label>
          <Form.Control
            type="text"
            placeholder="images/xxxx.xxx"
            onChange={(e) => setpartimageurl(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>รุ่นรถ</Form.Label>
          <Form.Control
            type="text"
            placeholder="xxxx"
            onChange={(e) => setpartmodel(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-1">
        <Form.Group as={Col} md="12">
          <Form.Label>ชื่อสินค้า</Form.Label>
          <Form.Control
            type="text"
            placeholder="xxxxxxx"
            onChange={(e) => setpartname(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-1">
        <Form.Group as={Col} md="6">
          <Form.Label>ราคาปกติ</Form.Label>
          <Form.Control
            type="number"
            placeholder="xxxx"
            onChange={(e) => setpartprice(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>ส่วนลดพิเศษ</Form.Label>
          <Form.Control
            type="number"
            placeholder="xx %"
            onChange={(e) => setpartdiscount(e.target.value)}
          />
        </Form.Group>
      </Row>
      
      <Button className="w-100 mt-3" variant="success" type="submit">
        <span className="fw-bold">Create</span>
      </Button>
    </Form>
  );
};
export default Formpartitem;