import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from 'sweetalert2'

const Formpromotioncard = () => {
  
  const [imageurl, setimageurl] = useState("-");
  const [title, settitle] = useState("-");
  const [description, setdescription] = useState("-");
  const [descriptiondetail, setdescriptiondetail] = useState("-");

  
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
        <h3 className="pb-2 border-bottom border-danger border-2 text-center fw-bold">Create Promotioncard</h3>
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
            as = "textarea"
            rows={4}
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
