import React from "react";
import OverLay from "./OverLay";
import styled from "styled-components";

export default function FormCreate({ topic, close, submit, children }) {
  const styleform = {
    width: "90vw",
    maxWidth: "500px",
    borderRadius: "3px",
    border: "2px solid",
    padding: "0px 0px 0px 0px",
    borderColor: "green",
  };
  return (
    <OverLay>
      <form
        onSubmit={submit}
        method="POST"
        style={styleform}
        className="bg-light d-flex flex-column align-items-center position-absolute top-50 start-50 translate-middle"
      >
        <FormTopic className="text-center text-white bg-success fw-bold fst-italic py-1 w-100">
          เพิ่มข้อมูล {topic}
        </FormTopic>
        <div className="px-2 py-1 w-100 fw-normal">{children}</div>
        <div className="d-flex flex-column align-items-center justify-content-center my-2 w-75">
          <button
            type="submit"
            className="btn btn-outline-success fw-bold w-100 mb-2 rounded-pill w-100"
          >
            เพิ่มข้อมูลข้อมูล ✅
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
