import React, { useEffect, useState } from "react";
const Listpromotioncard = () => {
  const [Datapromotion, setdatapromotion] = useState([]);
  const [editpromotion, seteditpromotion] = useState(null);
  useEffect(() => {
    fetch("https://test-web-api.herokuapp.com/promotioncard")
      .then((res) => {
        return res.json();
      })
      .then((resJson) => {
        setdatapromotion(resJson);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onEditPromotionClose = () => {
    seteditpromotion(null);
  };

  const onClickDelete = (data) => {
    alert("Are you sure to delete this promotion card " + data.id + " ?");
    fetch("https://test-web-api.herokuapp.com/promotioncard/delete", {
      method: "DELETE",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") {
          window.location.href = "/Manage";
        }
      });
  };

  const onClickEdit = (id,imageurl,title,description,descriptiondetail) => {
    var dataedit = {
      id: id,
      imageurl: imageurl,
      title: title,
      description: description,
      descriptiondetail: descriptiondetail,
    };
    alert(JSON.stringify(dataedit));
    fetch("https://test-web-api.herokuapp.com/promotioncard/update", {
      method: "PUT",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataedit),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") {
          window.location.href = "/Manage";
          console.log(imageurl);
          console.log(title);
          console.log(description);
          console.log(descriptiondetail);
        }
      });
  };

  const Editpromotioncard = (props) => {
    const { datapromotion, onClickEdit, onCloseClick } = props;
    const [imageurl, setimageurl] = useState(datapromotion.imageurl);
    const [title, settitle] = useState(datapromotion.title);
    const [description, setdescription] = useState(datapromotion.description);
    const [descriptiondetail, setdescriptiondetail] = useState(
      datapromotion.descriptiondetail
    );
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
          onSubmit={()=>{onClickEdit(datapromotion.id,imageurl,title,description,descriptiondetail)}}
          style={{ width: 40 + "vw" }}
        >
          <input
            className="mb-3 form-control"
            type="text"
            placeholder={datapromotion.imageurl}
            onChange={(e) => setimageurl(e.target.value)}
          />
          <input
            className="mb-3 form-control"
            type="text"
            placeholder={datapromotion.title}
            onChange={(e) => settitle(e.target.value)}
          />
          <input
            className="mb-3 form-control"
            type="text"
            placeholder={datapromotion.description}
            onChange={(e) => setdescription(e.target.value)}
          />
          <textarea
            rows="3"
            className="mb-3 form-control"
            type="text"
            placeholder={datapromotion.descriptiondetail}
            onChange={(e) => setdescriptiondetail(e.target.value)}
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

  const PromotionCard = (props) => {
    const { datapromotion, onClickDelete } = props;
    return (
      <div className="p-2 mb-2 border border-secondary rounded-3 border-1">
        <p>
          <span className="text-danger fw-bold">Id: </span>
          <span className="me-3">{datapromotion.id}</span>
          <span className="text-danger fw-bold">Link image: </span>{" "}
          {datapromotion.imageurl}
        </p>
        <p>
          <span className="text-danger fw-bold">Title: </span>
          <span className="me-3">{datapromotion.title}</span>
          <span className="text-danger fw-bold">Description: </span>
          {datapromotion.description}
        </p>
        <p>
          <span className="text-danger fw-bold">Full description: </span>
          {datapromotion.descriptiondetail}
        </p>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-dark fw-bold me-2"
            onClick={() => {
              seteditpromotion(datapromotion);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger fw-bold"
            onClick={() => {
              onClickDelete(datapromotion);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  // map data promotion
  const PromotionCardList = Datapromotion.map((datapromotion, index) => {
    return (
      <PromotionCard
        key={index}
        datapromotion={datapromotion}
        onClickDelete={onClickDelete}
      />
    );
  });

  let editPromotion = null;
  if (!!editpromotion) {
    editPromotion = (
      <Editpromotioncard
        datapromotion={editpromotion}
        onClickEdit={onClickEdit}
        onCloseClick={onEditPromotionClose}
      />
    );
  }
  return (
    <div
      className=" bg-light "
      style={{overflowY: "scroll" }}
    >
      {PromotionCardList}
      {editPromotion}
    </div>
  );
};
export default Listpromotioncard;
