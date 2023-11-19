import React from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import DataSocialBranch from "../datapage/datasocialbranch";

const datapagebranch = DataSocialBranch.map((datapage, index) => {
  return (
    <div className="d-flex flex-column align-items-start mb-2" key={index}>
      <h6 className="fw-bold  fs-6 border-bottom border-danger border-1 py-1 ">
        {datapage.head}
      </h6>
      <div className="d-flex align-items-center">
        <img
          src="images/icons8-facebook-100.png"
          alt="facebooklogo"
          className="me-1"
          style={{ width: 30 + "px", height: 30 + "px" }}
          loading="eager"
        />
        <a
          className="fw-normal text-decoration-none text-primary fs-6 w-100"
          target="_blank"
          rel="noreferrer"
          key={index}
          href={datapage.linkfacebook}
        >
          Facebook Page
        </a>
      </div>
      <div className="d-flex align-items-center">
        <img
          src="images/icons8-line-48.png"
          alt="linelogo"
          className="me-1"
          style={{ width: 30 + "px", height: 30 + "px" }}
          loading="eager"
        />
        <a
          className="fw-normal  text-decoration-none text-success fs-6 w-100"
          target="_blank"
          rel="noreferrer"
          key={index}
          href={datapage.linkline}
        >
          Line Official
        </a>
      </div>
    </div>
  );
});

const popover = (
  <Popover id="popover-basic">
    <Popover.Header
      as="h3"
      className="fw-bold text-center bg-primary text-light fs-5"
    >
      Contact Us
    </Popover.Header>
    <Popover.Body className="d-flex flex-column px-3 py-1">
      {datapagebranch}
    </Popover.Body>
  </Popover>
);

const PopoverMessage = () => (
  <OverlayTrigger trigger="click" placement="top" overlay={popover}>
    <Button
      variant="light"
      className="position-fixed bottom-0 end-0 me-4 mb-3 rounded-circle shadow"
    >
      <img
        className=" rounded-circle"
        style={{ zInde: 9999 }}
        src="images/icons8-message-48.png"
        width="48"
        height="48"
        alt="icon-message"
      />
    </Button>
  </OverlayTrigger>
);

export default PopoverMessage;
