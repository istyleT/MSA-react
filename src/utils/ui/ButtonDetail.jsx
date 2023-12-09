import React from "react";

export default function ButtonDetail({ onClickDetail }) {
  return (
    <button
      type="button"
      className="mx-1 btn p-0 rounded-circle border-0"
      onClick={onClickDetail}
    >
      <img
        src="../images/icon-btn/icons8-details-100.png"
        style={{ width: 42 + "px" }}
        alt="btn-detail"
      />
    </button>
  );
}
