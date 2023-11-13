import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import useEffectOnce from "../../hook/useeffectonce";
function SaleBanner() {
  const [isLoading, setisLoading] = useState(true);
  const [databannersale, setdatabannersale] = useState(null);

  //เเก้ปัญหา fetch ออกมาช้ากว่าที่ return ทำงานทำให้อ่านข้อมูลไม่ได้ โดยการใช้การใช้ state isLoading เพื่อเช็คว่าข้อมูลเรียกมาเสร็จหรือยัง
  useEffectOnce(() => {
    fetch("https://servermsasalecar-ce20833080b1.herokuapp.com/bannersale")
      .then((res) => {
        return res.json();
      })
      .then((resJson) => {
        setdatabannersale(resJson);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <div className="bg-transparents"></div>;
  }

  return (
    <Carousel fade controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={databannersale[0].imagelink}
          alt={databannersale[0].remark}
          width="100%"
          height="100%"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={databannersale[1].imagelink}
          alt={databannersale[1].remark}
          width="100%"
          height="100%"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={databannersale[2].imagelink}
          alt={databannersale[2].remark}
          width="100%"
          height="100%"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={databannersale[3].imagelink}
          alt={databannersale[3].remark}
          width="100%"
          height="100%"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={databannersale[4].imagelink}
          alt={databannersale[4].remark}
          width="100%"
          height="100%"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default SaleBanner;
