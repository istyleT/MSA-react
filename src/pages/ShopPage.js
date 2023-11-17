import React, { useState } from "react";
import "./cssPage.css";
import Card from "react-bootstrap/Card";
import SearchInput from "./ComponentPages/SearchInput";
import PopoverMessage from "./ComponentPages/PopoverMessage";
import LayoutPage from "./LayoutPage";
import Loading from "../ui/Loading";
import { useQueryInit } from "../hook/usequeryinit";

export default function ShopPage() {
  const [searchtext, setSearchtext] = useState("");
  const { loading, datainit } = useQueryInit("webpartitem");

  return (
    <LayoutPage>
      <section
        className="main-ShopPage"
        style={{
          backgroundImage: "url(images/mainwallpaperhome.png)",
          marginTop: 7 + "vh",
          width: 100 + "vw",
        }}
      >
        <SearchInput value={searchtext} onValueChange={setSearchtext} />
        {loading && <Loading />}
        {!loading && (
          <div className="bg-transparents p-3 parts-item-gird rounded-3 ">
            {datainit.map((datapartshop, index) => {
              return <PartItem key={index} datapartshop={datapartshop} />;
            })}
          </div>
        )}

        <PopoverMessage />
      </section>
    </LayoutPage>
  );
}

function PartItem({ datapartshop, onPartItemClick }) {
  return (
    <Card
      className="me-3 mb-3 p-1 border border-dark shadow rounded-3"
      style={{ width: "20rem", height: 400 + "px" }}
    >
      <Card.Img
        onClick={() => onPartItemClick(datapartshop)}
        variant="top"
        src={datapartshop.partimageurl}
        className="border-0"
        style={{ width: 100 + "%", height: 250 + "px", cursor: "ne-resize" }}
      />
      <Card.Body>
        <Card.Title className="border-bottom border-danger border-1 py-1">
          {datapartshop.partname}
        </Card.Title>
        <Card.Text className="d-flex flex-column  text-center">
          <span className="mb-1">
            รุ่น : <small>{datapartshop.partmodel}</small> ราคา :{" "}
            <small>
              {datapartshop.partprice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </small>{" "}
            บาท
          </span>
          <span className="mb-1">
            ส่วนลด :{" "}
            <small className="text-success fw-bold">
              {datapartshop.partdiscount}
            </small>{" "}
            % ราคาสุทธิ :{" "}
            <small className="text-danger fw-bold">
              {parseInt(
                datapartshop.partprice *
                  ((100 - datapartshop.partdiscount) / 100)
              )
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </small>{" "}
            บาท
          </span>
          <span
            className="text-muted fw-lighter fst-italic"
            style={{ fontSize: 12 + "px" }}
          >
            เงื่อนไขเป็นไปตามที่บริษัทกำหนด
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
