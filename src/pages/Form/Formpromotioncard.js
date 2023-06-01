import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const Formpromotioncard = () => {
  
  const [imageurl, setimageurl] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [descriptiondetail, setdescriptiondetail] = useState("");

  
  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      imageurl: imageurl,
      title: title,
      description: description,
      descriptiondetail: descriptiondetail,
    };
    fetch("https://test-web-api.herokuapp.com/promotioncard/create", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") {
          window.location.href = "/Manage";
        }
      });


  };
  return (
      <Form
        className="p-3 "
        onSubmit={handleSubmit}
        style={{ width: 30 + "vw" }}
      >
        <h3>Create Promotioncard</h3>
        <Form.Group className="mb-1">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="imageurl"
            onChange={(e) => setimageurl(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="title"
            onChange={(e) => settitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="description"
            onChange={(e) => setdescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Label>Full description</Form.Label>
          <Form.Control
            type="text"
            placeholder="descriptiondetail"
            onChange={(e) => setdescriptiondetail(e.target.value)}
          />
        </Form.Group>
        <Button className="w-100 mt-3" variant="success" type="submit">
          <span className="fw-bold">Create</span>
        </Button>
      </Form>
  );
};
export default Formpromotioncard;
