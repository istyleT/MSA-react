import React from "react";
import styled from "styled-components";
import OverLay from "./OverLay";

export default function FormEdit({ topic, close, submit, children }) {
  const styleform = {
    width: "90vw",
    maxWidth: "500px",
    borderRadius: "5px",
    border: "2px solid",
    padding: "0px 0px 5px 0px",
    borderColor: "black",
  };
  return (
    <OverLay>
      <form
        onSubmit={submit}
        method="POST"
        style={styleform}
        className="bg-light d-flex flex-column align-items-center position-absolute top-50 start-50 translate-middle"
      >
        <FormTopic className="text-center text-white bg-dark fw-bold fst-italic py-1 w-100">
          เเก้ไขข้อมูล {topic}
        </FormTopic>
        <div className="px-2 py-1 w-100 fw-normal">{children}</div>
        <div className="d-flex flex-column align-items-center justify-content-center my-2 w-75">
          <button
            type="submit"
            className="btn btn-outline-dark fw-bold w-100 mb-2 rounded-pill w-100"
          >
            เเก้ไขข้อมูล ✒️
          </button>
          <button
            type="button"
            className="btn btn-outline-danger fw-bold w-100 rounded-pill"
            onClick={close}
          >
            ยกเลิก ❌
          </button>
        </div>
      </form>
    </OverLay>
  );
}

const FormTopic = styled.div`
  border: none;
`;
