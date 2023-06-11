import React, {useState } from "react";
import Swal from "sweetalert2";
import useEffectOnce from "../../hook/useeffectonce";
const Listvideosale = () => {
  const [Datavideosale, setdatavideosale] = useState([]);
  const [editvideosale, seteditvideosale] = useState(null);
  useEffectOnce(() => {
    fetch("https://test-web-api.herokuapp.com/salevdo")
      .then((res) => {
        return res.json();
      })
      .then((resJson) => {
         setdatavideosale(resJson);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onEditVideoSaleClose = () => {
         seteditvideosale(null);
  };

  const onClickEdit = (e, order,vdolink,title) => {
    e.preventDefault();
    const data = {
      order: order,
      vdolink: vdolink,
      title: title,
    };
    fetch("https://test-web-api.herokuapp.com/salevdo/update", {
      method: "PUT",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("accessToken"),
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

  const Editvideosale = (props) => {
    const { datavideosale, onClickEdit, onCloseClick } = props;
    const order = datavideosale.order;
    const [vdolink, setvdolink] = useState(datavideosale.vdolink);
    const [title, settitle] = useState(datavideosale.title);
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
            onClickEdit(e, order, vdolink, title);
          }}
          style={{ width: 40 + "vw" }}
        >
          <input
            className="mb-3 form-control text-center"
            type="text"
            placeholder={datavideosale.title}
            onChange={(e) => settitle(e.target.value)}
          />
          <input
            className="mb-3 form-control text-center"
            type="text"
            placeholder={datavideosale.vdolink}
            onChange={(e) => setvdolink(e.target.value)}
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

  const VideoSaleCard = (props) => {
    const { datavideosale } = props;
    return (
      <div
        className="p-3 mb-3 bg-light shadow border border-dark rounded-3 border-2 font-monospace"
        style={{ width: 840 + "px" }}
      >
        <p>
          <span className="text-danger fw-bold">Order: </span>
          <span className="me-3">{datavideosale.order}</span>
          <span className="text-danger fw-bold">Title: </span>
          <span className="me-3">{datavideosale.title}</span>
        </p>
        <p>
          <span className="text-danger fw-bold">VDO Link: </span>{" "}
          <span className="me-3">{datavideosale.vdolink}</span>
        </p>

        <div className="d-flex justify-content-end">
          <button
            className="btn btn-dark fw-bold me-2"
            onClick={() => {
               seteditvideosale(datavideosale);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    );
  };
  // map data promotion
  const VideoSaleList = Datavideosale.map((datavideosale, index) => {
    return <VideoSaleCard key={index} datavideosale={datavideosale} />;
  });

  let editVideoSale = null;
  if (!!editvideosale) {
     editVideoSale = (
      <Editvideosale
        datavideosale={editvideosale}
        onClickEdit={onClickEdit}
        onCloseClick={onEditVideoSaleClose}
      />
    );
  }
  return (
    <div className="bg-light" style={{ overflowY: "scroll" }}>
      {VideoSaleList}
      {editVideoSale}
    </div>
  );
};
export default Listvideosale;