import React from "react";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import DataSocialBranch from "../datapage/datasocialbranch" ;

const datapagebranch = DataSocialBranch.map((datapage, index) => {
  return (
    <a className="fw-normal font-monospace text-decoration-none text-dark fs-6" key={index} href={datapage.linkfacebook}>{datapage.namefacebook}</a>
  );
})

const popover = (
  <Popover id="popover-basic" >
    <Popover.Header as="h3" className="fw-bold bg-primary text-white fs-6">Facebook Page</Popover.Header>
    <Popover.Body className="d-flex flex-column">
        {datapagebranch}
    </Popover.Body>
  </Popover>
);

const PopoverMessage = () => (
  <OverlayTrigger trigger="click" placement="top" overlay={popover}>
    <Button variant="light" className="position-fixed bottom-0 end-0 me-3 mb-3 rounded-circle p-0 shadow"  >
       <img className=' rounded-circle' style={{zInde: 9999}} src='images/icons8-facebook-100.png' width="60" height="60" alt='icon-message'/> 
    </Button>
  </OverlayTrigger>
);

export default PopoverMessage;