import React from "react";
import Carousel from 'react-bootstrap/Carousel';
function SaleBanner() {
  return (
    <Carousel fade controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/banner1.jpg"
          alt="First slide"
          width="100%" height="100%"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/baner-1.png"
          alt="First slide"
          width="100%" height="100%"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/baner-2.png"
          alt="Second slide"
          width="100%" height="100%"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/baner-3.jpeg"
          alt="Third slide"
          width="100%" height="100%"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/baner-4.jpeg"
          alt="Third slide"
          width="100%" height="100%"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default SaleBanner;