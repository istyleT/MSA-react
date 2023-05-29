import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Formpromotioncard = () => {
  const [Datapromotion, setdatapromotion] = useState([]);
  const [id, setid] = useState("");
  const [imageurl, setimageurl] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [descriptiondetail, setdescriptiondetail] = useState("");
  const [processState, setprocessState] = useState("");
  useEffect(() => {
    fetch("https://test-web-api.herokuapp.com/promotioncard")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((resJson) => {
        setdatapromotion(resJson);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
   
console.log(processState);
  const PromotionCard = (props) => {
    const { datapromotion } = props;
    return (
      <div className="p-2 mb-2 border border-dark border-1">
        <p>
          <span className="text-danger fw-bold">Id:</span> {datapromotion.id}
        </p>
        <p>
          <span className="text-danger fw-bold">Link image:</span>{" "}
          {datapromotion.imageurl}{" "}
          <span className="text-danger fw-bold">Title:</span>{" "}
          {datapromotion.title}
        </p>
        <p>
          <span className="text-danger fw-bold">Description:</span>{" "}
          {datapromotion.description}
        </p>
        <p>
          <span className="text-danger fw-bold">Full description:</span>{" "}
          {datapromotion.descriptiondetail}
        </p>
      </div>
    );
  };
  // map data promotion
  const PromotionCardList = Datapromotion.map((datapromotion, index) => {
    return <PromotionCard key={index} datapromotion={datapromotion} />;
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      id: id,
      imageurl: imageurl,
      title: title,
      description: description,
      descriptiondetail: descriptiondetail,
    };
    if (processState === "create") {
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
    }
    if (processState === "edit") {
    fetch("https://test-web-api.herokuapp.com/promotioncard/update", {
      method: "PUT",
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
    }
    if (processState === "delete") {
    fetch("https://test-web-api.herokuapp.com/promotioncard/delete", {
      method: "DELETE",
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
    }
  };
  return (
    <div className="d-flex justify-content-center mt-3">
      <Form
        className="bg-light p-3 me-3"
        onSubmit={handleSubmit}
        style={{ width: 35 + "vw" }}
      >
        <h3>Form CRUD Promotioncard</h3>
        <Row className="mb-1 ">
        <Form.Group as={Col} md="12">
          <Form.Label>Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="id ใส่เฉพาะตอนเเก้ไขกับลบ"
            onChange={(e) => setid(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} md="12">
          <Form.Label>Link image</Form.Label>
          <Form.Control
            type="text"
            placeholder="imageurl"
            onChange={(e) => setimageurl(e.target.value)}
          />
        </Form.Group>
        </Row>
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
        <div className="m-3">
             <input className="me-1" type="radio" value="create" name="process" onClick={(e) => setprocessState(e.target.value)}/><span className="me-3">Create</span>
             <input className="me-1" type="radio" value="edit" name="process" onClick={(e) => setprocessState(e.target.value)}/><span className="me-3">Edit</span>
             <input className="me-1" type="radio" value="delete" name="process" onClick={(e) => setprocessState(e.target.value)}/><span className="me-3">Delete</span>
        </div>
        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
      <div className=" bg-light " style={{ height: 80 + "vh", width: 50 + "vw",overflowY: "scroll" }}>
        {PromotionCardList}
      </div>
    </div>
  );
};
export default Formpromotioncard;
