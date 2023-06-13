import React, {useState } from "react";
import Swal from 'sweetalert2';
import useEffectOnce from "../../hook/useeffectonce";
const Listvideoservice = () => {
  const [Datavideoservice, setdatavideoservice] = useState([]);
  const [editvideoservice, seteditvideoservice] = useState(null);
  useEffectOnce(() => {
    fetch("https://test-web-api.herokuapp.com/servicevdo")
      .then((res) => {
        return res.json();
      })
      .then((resJson) => {
         setdatavideoservice(resJson);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onEditVideoserviceClose = () => {
         seteditvideoservice(null);
  };

  const onClickEdit = (e, order,vdolink,title) => {
    e.preventDefault();
    const data = {
      order: order,
      vdolink: vdolink,
      title: title,
    };
    fetch("https://test-web-api.herokuapp.com/servicevdo/update", {
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
            showConfirmButton: false,
          });
          setTimeout(() => {window.location.href = "/Manage/vdoservice"}, 2000);
        }
      });
  };

  const Editvideoservice = (props) => {
    const { datavideoservice, onClickEdit, onCloseClick } = props;
    const order = datavideoservice.order;
    const [vdolink, setvdolink] = useState(datavideoservice.vdolink);
    const [title, settitle] = useState(datavideoservice.title);
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
            placeholder={datavideoservice.title}
            onChange={(e) => settitle(e.target.value)}
          />
          <input
            className="mb-3 form-control text-center"
            type="text"
            placeholder={datavideoservice.vdolink}
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

  const VideoserviceCard = (props) => {
    const { datavideoservice } = props;
    return (
      <div
        className="p-3 mb-3 bg-light shadow border border-dark rounded-3 border-2 font-monospace"
        style={{ width: 840 + "px" }}
      >
        <p>
          <span className="text-danger fw-bold">Order: </span>
          <span className="me-3">{datavideoservice.order}</span>
          <span className="text-danger fw-bold">Title: </span>
          <span className="me-3">{datavideoservice.title}</span>
        </p>
        <p>
          <span className="text-danger fw-bold">VDO Link: </span>{" "}
          <span className="me-3">{datavideoservice.vdolink}</span>
        </p>

        <div className="d-flex justify-content-end">
          <button
            className="btn btn-dark fw-bold me-2"
            onClick={() => {
               seteditvideoservice(datavideoservice);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    );
  };
  // map data promotion
  const VideoserviceList = Datavideoservice.map((datavideoservice, index) => {
    return <VideoserviceCard key={index} datavideoservice={datavideoservice} />;
  });

  let editVideoservice = null;
  if (!!editvideoservice) {
     editVideoservice = (
      <Editvideoservice
        datavideoservice={editvideoservice}
        onClickEdit={onClickEdit}
        onCloseClick={onEditVideoserviceClose}
      />
    );
  }
  return (
    <div className="bg-light" style={{ overflowY: "scroll" }}>
      {VideoserviceList}
      {editVideoservice}
    </div>
  );
};
export default Listvideoservice;