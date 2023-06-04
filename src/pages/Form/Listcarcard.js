import React, { useEffect, useState } from "react";
const Listcarcard = () => {
  const [Datacarcard, setdatacarcard] = useState([]);
  const [editcarcard, seteditcarcard] = useState(null);
  useEffect(() => {
    fetch("https://test-web-api.herokuapp.com/carcard")
      .then((res) => {
        return res.json();
      })
      .then((resJson) => {
        setdatacarcard(resJson);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onEditCarcardClose = () => {
    seteditcarcard(null);
  };

  const onClickDelete = (data) => {
    alert("Are you sure to delete this promotion card " + data.id + " ?");
    fetch("https://test-web-api.herokuapp.com/carcard/delete", {
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

  const onClickEdit = (id, imageurl, title, description, descriptiondetail) => {
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
        }
      });
  };

  const EditCarcard = (props) => {
    const { datacarcard, onClickEdit, onCloseClick } = props;
    const [URLimage, setURLimage] = useState(datacarcard.URLimage);
    const [mainmodel, setmainmodel] = useState(datacarcard.mainmodel);
    const [detail1, setdetail1] = useState(datacarcard.detail1);
    const [detail2, setdetail2] = useState(datacarcard.detail2);
    const [detail3, setdetail3] = useState(datacarcard.detail3);
    const [detail4, setdetail4] = useState(datacarcard.detail4);
    const [detail5, setdetail5] = useState(datacarcard.detail5);
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
          onSubmit={() => {
            onClickEdit(
              datacarcard.id,
              URLimage,
              mainmodel,
              detail1,
              detail2,
              detail3,
              detail4,
              detail5,
            );
          }}
          style={{ width: 40 + "vw" }}
        >
          <input
            className="mb-3 form-control"
            type="text"
            placeholder={datacarcard.URLimage}
            onChange={(e) =>  setURLimage(e.target.value)}
          />
          <input
            className="mb-3 form-control"
            type="text"
            placeholder={datacarcard.mainmodel}
            onChange={(e) => setmainmodel(e.target.value)}
          />
          <input
            className="mb-3 form-control"
            type="text"
            placeholder={datacarcard.detail1}
            onChange={(e) => setdetail1(e.target.value)}
          />
          <input
            className="mb-3 form-control"
            type="text"
            placeholder={datacarcard.detail2}
            onChange={(e) => setdetail2(e.target.value)}
          />
          <input
            className="mb-3 form-control"
            type="text"
            placeholder={datacarcard.detail3}
            onChange={(e) => setdetail3(e.target.value)}
          />
          <input
            className="mb-3 form-control"
            type="text"
            placeholder={datacarcard.detail4}
            onChange={(e) => setdetail4(e.target.value)}
          />
          <input
            className="mb-3 form-control"
            type="text"
            placeholder={datacarcard.detail5}
            onChange={(e) => setdetail5(e.target.value)}
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

  const CarCard = (props) => {
    const { datacarcard, onClickDelete } = props;
    return (
      <div className="p-2 mb-2 border border-secondary rounded-3 border-1" style={{width: 840+'px'}}>
        <p>
          <span className="text-danger fw-bold">Id: </span>
          <span className="me-3">{datacarcard.id}</span>
          <span className="text-danger fw-bold">Link รูปภาพ: </span>{" "}
          <span className="me-3">{datacarcard.URLimage}</span>
          <span className="text-danger fw-bold">รุ่นหลัก: </span>
          <span className="me-3">{datacarcard.mainmodel}</span>
        </p>
        <p>
          <span className="text-danger fw-bold">รุ่นย่อย/ราคา-1: </span>
          <span className="me-3">{datacarcard.detail1}</span>
          <span className="text-danger fw-bold">รุ่นย่อย/ราคา-2: </span>
          <span className="me-3">{datacarcard.detail2}</span>
        </p>
        <p>
          <span className="text-danger fw-bold">รุ่นย่อย/ราคา-3: </span>
          <span className="me-3">{datacarcard.detail3}</span>
          <span className="text-danger fw-bold">รุ่นย่อย/ราคา-4: </span>
          <span className="me-3">{datacarcard.detail4}</span>
        </p>
        <p>
          <span className="text-danger fw-bold">รุ่นย่อย/ราคา-5: </span>
          <span className="me-3">{datacarcard.detail5}</span>
        </p>
        <div className="d-flex justify-content-end">
          {/* <button
            className="btn btn-dark fw-bold me-2"
            onClick={() => {
              seteditcarcard(datacarcard);
            }}
          >
            Edit
          </button> */}
          <button
            className="btn btn-danger fw-bold"
            onClick={() => {
              onClickDelete(datacarcard);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  // map data promotion
  const CarCardList = Datacarcard.map((datacarcard, index) => {
    return (
      <CarCard
        key={index}
        datacarcard={datacarcard}
        onClickDelete={onClickDelete}
      />
    );
  });

  let editCarcard = null;
  if (!!editcarcard) {
    editCarcard = (
      <EditCarcard
        datacarcard={editcarcard}
        onClickEdit={onClickEdit}
        onCloseClick={onEditCarcardClose}
      />
    );
  }
  return (
    <div
      className="bg-white"
      style={{overflowY: "scroll" }}
    >
      {CarCardList}
      {editcarcard}
    </div>
  );
};
export default Listcarcard;