import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function VideoCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='d-flex justify-content-center'>
      <Button variant="danger" className='fw-bold mb-4' style={{width: 200 +'px'}} onClick={handleShow}>
        More Video
      </Button>

      <Offcanvas show={show} placement='bottom' onHide={handleClose}>
        <Offcanvas.Header closeButton className='bg-danger'>
          <Offcanvas.Title className='text-white'>Video List</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='d-flex'>
          loren ipsum
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default VideoCanvas;