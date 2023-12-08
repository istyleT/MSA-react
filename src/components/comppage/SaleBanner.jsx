import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useQueryInit } from "../../hook/usequeryinit";

export default function SaleBanner() {
  const { loading, datainit } = useQueryInit("webbannersale");

  if (loading) {
    return <div className="bg-transparents"></div>;
  }

  return (
    <Carousel fade controls={false}>
      {datainit.map((data, index) => {
        return (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={data.imagelink}
              alt={data.remark}
              width="100%"
              height="100%"
            />
          </Carousel.Item>
        );
      })}
      ;
    </Carousel>
  );
}
