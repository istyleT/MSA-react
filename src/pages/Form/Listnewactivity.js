import React, { useState } from "react";
import Swal from "sweetalert2";
import useEffectOnce from "../../hook/useeffectonce";
const Listnewactivity = () => {
  const [Datanewactivity, setdatanewactivity] = useState([]);
  const [editnewactivity, seteditnewactivity] = useState(null);
  useEffectOnce(() => {
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

  async function onClickDelete(data) {
    await Swal.fire({
      title: "Are you sure?",
      text: "delete this activity " + data.topicactivity + " ?",
      icon: "question",
      confirmButtonText: "OK",
      showDenyButton: true,
      denyButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("https://test-web-api.herokuapp.com/newsactivity/delete", {
          method: "DELETE",
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
                title: "Deleted!",
                text: result["message"],
                icon: "success",
                showConfirmButton: false,
              });
              setTimeout(() => {window.location.href = "/Manage/activity"}, 2000);
            }
          });
      } else if (result.isDenied) {
        Swal.fire("No change", "", "info");
      }
    });
  }

  const onClickEdit = (
    e,
    id,
    topicactivity,
    detailsactivity,
    imgactivityurl,
    reverse
  ) => {
    e.preventDefault();
    const data = {
      id: id,
      topicactivity: topicactivity,
      detailsactivity: detailsactivity,
      imgactivityurl: imgactivityurl,
      reverse: reverse,
    };
    fetch("https://test-web-api.herokuapp.com/newsactivity/update", {
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
            title: "Complete",
            text: result["message"],
            icon: "success",
            showConfirmButton: false,
          });
          setTimeout(() => {window.location.href = "/Manage/activity"}, 2000);
        }
      });
  };

  const Editnewactivity = (props) => {
    const { datanewactivity, onClickEdit, onCloseClick } = props;
    const id = datanewactivity.id;
    const [topicactivity, settopicactivity] = useState(
      datanewactivity.topicactivity
    );
    const [detailsactivity, setdetailsactivity] = useState(
      datanewactivity.detailsactivity
    );
    const [imgactivityurl, setimgactivityurl] = useState(
      datanewactivity.imgactivityurl
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
          onSubmit={(e) => {
            onClickEdit(e, id, topicactivity, detailsactivity, imgactivityurl);
          }}
          style={{ width: 40 + "vw" }}
        >
          <input
            className="mb-3 form-control text-center"
            type="text"
            placeholder={datanewactivity.topicactivity}
            onChange={(e) => settopicactivity(e.target.value)}
          />
          <input
            className="mb-3 form-control text-center"
            type="text"
            placeholder={datanewactivity.detailsactivity}
            onChange={(e) => setdetailsactivity(e.target.value)}
          />
          <input
            className="mb-3 form-control text-center"
            type="text"
            placeholder={datanewactivity.imgactivityurl}
            onChange={(e) => setimgactivityurl(e.target.value)}
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
    const { datanewactivity, onClickDelete } = props;
    let fomatreverse = "";
    let reverse = datanewactivity.reverse;
    if (reverse) {
      fomatreverse = "รูปชิดซ้าย";
    } else {
      fomatreverse = "รูปชิดขวา";
    }

    return (
      <div
        className="p-3 mb-3 bg-light shadow border border-dark rounded-3 border-2 font-monospace"
        style={{ width: 840 + "px" }}
      >
        <p>
          <span className="text-danger fw-bold">Id: </span>
          <span className="me-3">{datanewactivity.id}</span>
          <span className="text-danger fw-bold">Topic: </span>{" "}
          <span className="me-3">{datanewactivity.topicactivity}</span>
          <span className="text-danger fw-bold">Row-reverse: </span>
          <span className="me-3"> {fomatreverse}</span>
        </p>
        <p>
          <span className="text-danger fw-bold">Details: </span>
          <span className="me-3">{datanewactivity.detailsactivity}</span>
        </p>
        <p>
          <span className="text-danger fw-bold">Images: </span>
          <span className="me-3">{datanewactivity.imgactivityurl}</span>
        </p>

        <div className="d-flex justify-content-end">
          <button
            className="btn btn-dark fw-bold me-2"
            onClick={() => {
              seteditnewactivity(datanewactivity);
            }}
          >
            Edit
          </button>
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
    <div className="bg-light" style={{ overflowY: "scroll" }}>
      {NewActivityList}
      {editPromotion}
    </div>
  );
};
export default Listnewactivity;
