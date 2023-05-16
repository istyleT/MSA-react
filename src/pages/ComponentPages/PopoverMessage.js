import React from "react";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const popover = (
  <Popover id="popover-basic" >
    <Popover.Header as="h3">Messager</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);

const PopoverMessage = () => (
  <OverlayTrigger trigger="click" placement="top" overlay={popover}>
    <Button variant="light" className="position-fixed bottom-0 end-0 me-3 mb-3 rounded-circle shadow">
       <img className=' rounded-circle' style={{zInde: 9999}} src='images/icons8-message-48.png'  alt='icon-message'/> 
    </Button>
  </OverlayTrigger>
);

export default PopoverMessage;