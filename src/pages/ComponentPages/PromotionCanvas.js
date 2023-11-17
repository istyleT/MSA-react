import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useQueryInit } from "../../hook/usequeryinit";
import Loading from "../../ui/Loading";

function PromotionCanvas() {
  const { loading, datainit } = useQueryInit("webpromotion");
  const [show, setShow] = useState(false);
  const [postpromotion, setPostpromotion] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onPromotionClick = (thePromotion) => {
    setPostpromotion(thePromotion);
  };

  const onPromotionClose = () => {
    setPostpromotion(null);
  };

  // post promotion item
  const PromotionPost = (props) => {
    const { promotion, onBgClick } = props;
    return (
      <div
        onClick={onBgClick}
        className="bg-transparent position-fixed top-0 start-0"
        style={{
          width: 100 + "vw",
          height: 100 + "vh",
          backdropFilter: "blur( 8px)",
        }}
      >
        <div
          className="card rounded-3"
          style={{
            width: 35 + "rem",
            position: "absolute",
            top: 15 + "%",
            left: 40 + "%",
          }}
        >
          <img
            src={promotion.imageurl}
            loading="eager"
            className="card-img-top"
            style={{ width: 100 + "%", height: 25 + "rem" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title border-bottom border-danger border-2 py-1 fw-bold font-monospace">
              {promotion.title}
            </h5>
            <p className="card-text fst-italic">
              {promotion.descriptiondetail}
            </p>
          </div>
        </div>
      </div>
    );
  };

  let promotionPost = null;
  if (!!postpromotion) {
    promotionPost = (
      <PromotionPost promotion={postpromotion} onBgClick={onPromotionClose} />
    );
  }

  return (
    <div className="d-flex justify-content-center">
      <Button
        variant="light"
        className="position-fixed bottom-0 start-0 ms-3 mb-3 rounded-circle"
        style={{ boxShadow: "0px 0px 10px 5px crimson" }}
        onClick={handleShow}
      >
        <img
          className="rounded-circle"
          style={{ zIndex: 9999 }}
          src="images/icons8-promotion-64.png"
          width="50"
          height="50"
          alt="icon-Promotion"
        />
      </Button>
      <Offcanvas
        show={show}
        placement="start"
        onHide={handleClose}
        scroll={false}
        backdrop={false}
        style={{ zIndex: 9999 }}
      >
        <Offcanvas.Header
          closeButton
          closeVariant="white"
          className="bg-danger font-monospace fst-italic"
        >
          <Offcanvas.Title className="text-light fst-italic fw-bold">
            MG Saengaree Auto Promotion
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column">
          {loading && <Loading />}
          {!loading &&
            datainit.map((data) => {
              return (
                <PromotionCard
                  key={data.id}
                  datapromotion={data}
                  onPromotionClick={onPromotionClick}
                />
              );
            })}
        </Offcanvas.Body>
      </Offcanvas>
      {promotionPost}
    </div>
  );
}

export default PromotionCanvas;

// card promotion item

const PromotionCard = ({ datapromotion, onPromotionClick }) => {
  return (
    <div className="card p-1 mb-2">
      <div className="row g-1">
        <div className="col-md-4">
          <img
            src={datapromotion.imageurl}
            className="img-fluid rounded-start"
            style={{ width: 100 + "%", height: 100 + "%" }}
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h6 className="card-title font-monospace fw-bold border-bottom border-1 border-danger py-1">
              {datapromotion.title}
            </h6>
            <p className="card-text">
              <small>{datapromotion.description}</small>
            </p>
            <span
              className="float-end"
              style={{ cursor: "pointer" }}
              onClick={() => {
                onPromotionClick(datapromotion);
              }}
            >
              <small className="card-text text-primary">รายละเอียด....</small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
