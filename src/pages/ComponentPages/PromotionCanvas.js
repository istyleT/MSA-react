import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import DataPromotion from '../datapage/datapromotion.js';

function PromotionCanvas() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  // card promotion
  const PromotionCard = (props) => {
    const {imageurl, title, description} = props;
    return (
      <div class="card p-2 mb-3" >
        <div class="row g-2">
          <div class="col-md-4">
            <img src={imageurl} class="img-fluid rounded-start" width="200" height="200" alt="..."/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title border-bottom border-secondary border-1 py-1">{title}</h5>
              <p class="card-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }


  // map promotion
  const PromotionCardList = DataPromotion.map((datapromotion, index) => {
    return (
      <PromotionCard
          key={index}
          imageurl={datapromotion.imageurl}
          title={datapromotion.title}
          description={datapromotion.description}
      />
    );
  })




  return (
    <div className='d-flex justify-content-center'>
      <Button variant="light" className='position-fixed bottom-0 start-0 ms-3 mb-3 rounded-circle' style={{boxShadow: '0px 0px 10px 5px crimson'}}  onClick={handleShow}>
        <img className='rounded-circle' style={{zIndex: 9999}} src='images/icons8-promotion-64.png' width="50" height="50" alt='icon-Promotion'/>
      </Button>
      <Offcanvas show={show} placement='start' onHide={handleClose} style={{zIndex: 9999}}>
        <Offcanvas.Header closeButton closeVariant="white" className='bg-danger font-monospace fst-italic'>
          <Offcanvas.Title className='text-light fst-italic fw-bold'>MG Saengaree Auto Promotion</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='d-flex flex-column'>
          {PromotionCardList}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default PromotionCanvas;
