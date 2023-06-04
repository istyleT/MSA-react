import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formnewactivity = () => {
  const [topicactivity, settopicactivity] = useState("");
  const [detailsactivity, setdetailsactivity] = useState("");
  const [imgactivityurl, setimgactivityurl] = useState("");
  const [reverse, setreverse] = useState("");

  const handleSubmitactivity = (event) => {
    event.preventDefault();
    var data = {
      topicactivity: topicactivity,
      detailsactivity: detailsactivity,
      imgactivityurl: imgactivityurl,
      reverse: reverse,
    };
    fetch("https://test-web-api.herokuapp.com/newsactivity/create", {
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
      onSubmit={handleSubmitactivity}
      style={{ width: 30 + "vw" }}
    >
      <h3>Create New & Activity</h3>
      <Form.Group className="mb-1">
        <Form.Label>Topic</Form.Label>
        <Form.Control
          type="text"
          placeholder="หัวข้อกิจกรรม เเละ ข่าวสาร"
          onChange={(e) => settopicactivity(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-1">
        <Form.Label>Images</Form.Label>
        <Form.Control
          type="text"
          placeholder="Images URL"
          onChange={(e) => setimgactivityurl(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-1">
        <Form.Label>Row-reverse</Form.Label>
        <Form.Select  aria-label="Default select example"
          onChange={(e) => setreverse(e.target.value)}
        >
          <option ngValue="true" selected>รูปชิดขวา</option>
          <option ngValue="false">รูปชิดซ้าย</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-1">
        <Form.Label>Details</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="รายละเอียดกิจกรรม เเละ ข่าวสาร"
          Rows={4}
          onChange={(e) => setdetailsactivity(e.target.value)}
        />
      </Form.Group>
      
      
      <Button className="w-100 mt-3" variant="success" type="submit">
        <span className="fw-bold">Create</span>
      </Button>
    </Form>
  );
};
export default Formnewactivity;