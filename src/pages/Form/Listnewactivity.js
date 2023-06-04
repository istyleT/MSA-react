import React, { useEffect, useState } from "react";
const Listnewactivity = () => {
  const [Datanewactivity, setdatanewactivity] = useState([]);
  const [editnewactivity, seteditnewactivity] = useState(null);
  useEffect(() => {
    fetch("https://test-web-api.herokuapp.com/newsactivity")
      .then((res) => {
        return res.json();
      })
      .then((resJson) => {
        setdatanewactivity(resJson);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onEditNewactivityClose = () => {
    seteditnewactivity(null);
  };

  const onClickDelete = (data) => {
    alert("Are you sure to delete this activity " + data.id + " ?");
    fetch("https://test-web-api.herokuapp.com/newsactivity/delete", {
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

  const Editnewactivity = (props) => {
    const { datanewactivity, onClickEdit, onCloseClick } = props;
    const [imageurl, setimageurl] = useState(datanewactivity.imageurl);
    const [title, settitle] = useState(datanewactivity.title);
    const [description, setdescription] = useState(datanewactivity.description);
    const [descriptiondetail, setdescriptiondetail] = useState(
      datanewactivity.descriptiondetail
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
          onSubmit={() => {
            onClickEdit(
              datanewactivity.id,
              imageurl,
              title,
              description,
              descriptiondetail
            );
          }}
          style={{ width: 40 + "vw" }}
        >
          <input
            className="mb-3 form-control"
            type="text"
            placeholder={datanewactivity.imageurl}
            onChange={(e) => setimageurl(e.target.value)}
          />
          <input
            className="mb-3 form-control"
            type="text"
            placeholder={datanewactivity.title}
            onChange={(e) => settitle(e.target.value)}
          />
          <input
            className="mb-3 form-control"
            type="text"
            placeholder={datanewactivity.description}
            onChange={(e) => setdescription(e.target.value)}
          />
          <textarea
            rows="3"
            className="mb-3 form-control"
            type="text"
            placeholder={datanewactivity.descriptiondetail}
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

  const NewActivityCard = (props) => {
    const {  datanewactivity, onClickDelete } = props;
    let fomatreverse = "";
    let reverse = datanewactivity.reverse;
    if (reverse) {
      fomatreverse = "รูปชิดซ้าย";
    }
    else {
      fomatreverse = "รูปชิดขวา";
    };
    
    return (
      <div className="p-2 mb-2 border border-secondary rounded-3 border-1" style={{width: 840+'px'}}>
        <p>
          <span className="text-danger fw-bold">Id: </span>
          <span className="me-3">{ datanewactivity.id}</span>
          <span className="text-danger fw-bold">Topic: </span>{" "}
          <span className="me-3">{ datanewactivity.topicactivity}</span>
          <span className="text-danger fw-bold">Images: </span>
          <span className="me-3">{ datanewactivity.imgactivityurl}</span>
          <span className="text-danger fw-bold">Row-reverse: </span>
          <span className="me-3"> {fomatreverse}</span>
        </p>
        <p>
          <span className="text-danger fw-bold">Details: </span>
          <span className="me-3">{ datanewactivity.detailsactivity}</span>
        </p>

        <div className="d-flex justify-content-end">
          {/* <button
            className="btn btn-dark fw-bold me-2"
            onClick={() => {
            seteditnewactivity(datanewactivity);
            }}
          >
            Edit
          </button> */}
          <button
            className="btn btn-danger fw-bold"
            onClick={() => {
              onClickDelete(datanewactivity);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  // map data promotion
  const NewActivityList = Datanewactivity.map((datanewactivity, index) => {
    return (
      <NewActivityCard
        key={index}
        datanewactivity={datanewactivity}
        onClickDelete={onClickDelete}
      />
    );
  });

  let editPromotion = null;
  if (!!editnewactivity) {
    editPromotion = (
      <Editnewactivity
      datanewactivity={editnewactivity}
        onClickEdit={onClickEdit}
        onCloseClick={onEditNewactivityClose}
      />
    );
  }
  return (
    <div
      className="bg-light"
      style={{ overflowY: "scroll" }}
    >
      {NewActivityList}
      {editPromotion}
    </div>
  );
};
export default Listnewactivity;
