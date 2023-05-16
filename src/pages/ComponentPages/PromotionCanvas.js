import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


function PromotionCanvas() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='d-flex justify-content-center'>
      <Button variant="light" className='position-fixed bottom-0 start-0 ms-3 mb-3 rounded-circle' style={{boxShadow: '0px 0px 10px 5px crimson'}}  onClick={handleShow}>
        <img className='rounded-circle' style={{zInde: 9999}} src='images/icons8-promotion-64.png' width="50" height="50" alt='icon-Promotion'/>
      </Button>

      <Offcanvas show={show} placement='start' onHide={handleClose} style={{zIndex: 9999}}>
        <Offcanvas.Header closeButton closeVariant="white" className='bg-danger font-monospace fst-italic'>
          <Offcanvas.Title className='text-light fst-italic fw-bold'>MG Saengaree Auto Promotion</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='d-flex'>
          content privacy policy
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default PromotionCanvas;
