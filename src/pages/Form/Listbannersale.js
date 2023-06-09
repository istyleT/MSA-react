import React, { useState } from "react";
import Swal from 'sweetalert2'
import useEffectOnce from "../../hook/useeffectonce";
const Listbannersale = () => {
  const [Databannersale, setdatabannersale] = useState([]);
  const [editbannersale, seteditbannersale] = useState(null);
  useEffectOnce(() => {
    fetch("https://test-web-api.herokuapp.com/bannersale")
      .then((res) => {
        return res.json();
      })
      .then((resJson) => {
        setdatabannersale(resJson);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onEditBannerSaleClose = () => {
    seteditbannersale(null);
  };

  const onClickEdit = (e, order, imagelink, remark) => {
    e.preventDefault();
    const data = {
      order: order,
      imagelink: imagelink,
      remark: remark,
    };
    fetch("https://test-web-api.herokuapp.com/bannersale/update", {
      method: "PUT",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result["status"] === "ok") {
          Swal.fire({
            title: 'Complete',
            text: result["message"],
            icon: 'success',
            confirmButtonText: 'OK',
          });
        }
      });
  };

  const Editbannersale = (props) => {
    const { databannersale, onClickEdit, onCloseClick } = props;
    const order = databannersale.order;
    const [imagelink, setimagelink] = useState(databannersale.imagelink);
    const [remark, setremark] = useState(databannersale.remark);
    return (
      <div
        className="bg-transparent position-fixed top-0 start-0"
        style={{
          width: 100 + "vw",
          height: 100 + "vh",
          backdropFilter: "blur( 8px)",
        }}
      >
        <form
          className="p-3 bg-light d-flex flex-column align-items-center border border-dark border-2 rounded-3 position-absolute top-50 start-50 translate-middle"
          onSubmit={(e) => {
            onClickEdit(e, order, imagelink, remark);
          }}
          style={{ width: 40 + "vw" }}
        >
          <input
            className="mb-3 form-control text-center"
            type="text"
            placeholder={databannersale.remark}
            onChange={(e) => setremark(e.target.value)}
          />
          <input
            className="mb-3 form-control text-center"
            type="text"
            placeholder={databannersale.imagelink}
            onChange={(e) => setimagelink(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-dark fw-bold me-2 w-100 mb-3"
          >
            Edit
          </button>
          <button
            className="btn btn-outline-danger fw-bold me-2 w-100"
            onClick={onCloseClick}
          >
            Close
          </button>
        </form>
      </div>
    );
  };

  const BannerSaleCard = (props) => {
    const { databannersale } = props;
    return (
      <div
        className="p-3 mb-3 bg-light shadow border border-dark rounded-3 border-2 font-monospace"
        style={{ width: 840 + "px" }}
      >
        <p>
          <span className="text-danger fw-bold">Order: </span>
          <span className="me-3">{databannersale.order}</span>
          <span className="text-danger fw-bold">Remark: </span>
          <span className="me-3">{databannersale.remark}</span>
        </p>
        <p>
          <span className="text-danger fw-bold">Imagelink: </span>{" "}
          <span className="me-3">{databannersale.imagelink}</span>
        </p>

        <div className="d-flex justify-content-end">
          <button
            className="btn btn-dark fw-bold me-2"
            onClick={() => {
              seteditbannersale(databannersale);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    );
  };
  // map data promotion
  const BannerSaleList = Databannersale.map((databannersale, index) => {
    return <BannerSaleCard key={index} databannersale={databannersale} />;
  });

  let editBannerSale = null;
  if (!!editbannersale) {
    editBannerSale = (
      <Editbannersale
        databannersale={editbannersale}
        onClickEdit={onClickEdit}
        onCloseClick={onEditBannerSaleClose}
      />
    );
  }
  return (
    <div className="bg-light" style={{ overflowY: "scroll" }}>
      {BannerSaleList}
      {editBannerSale}
    </div>
  );
};
export default Listbannersale;
