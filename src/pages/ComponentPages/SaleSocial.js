import React from "react";
import { useQueryInit } from "../../hook/usequeryinit";
import Loading from "../../ui/Loading";

export default function SaleSocial() {
  const { loading, datainit } = useQueryInit("websalesocial");

  return (
    <div className="sale-contact bg-white" id="sale-promotion">
      <div className="container px-4 py-5" id="hanging-icons">
        <h4 className="pb-2 border-bottom fw-bold font-monospace border-danger border-2">
          MSA Sale Contact
        </h4>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 ">
          {loading && <Loading />}
          {!loading &&
            datainit.map((data) => {
              return (
                <SocialBranch
                  key={data.id}
                  head={data.head}
                  linkfacebook={data.linkfacebook}
                  linkline={data.linkline}
                  linktiktok={data.linktiktok}
                  namefacebook={data.namefacebook}
                  nameline={data.nameline}
                  nametiktok={data.nametiktok}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

function SocialBranch({
  head,
  linkfacebook,
  linkline,
  linktiktok,
  namefacebook,
  nameline,
  nametiktok,
}) {
  return (
    <div className="col d-flex flex-column align-items-center">
      <div className=" d-flex icon-square bg-white text-dark flex-shrink-0 me-3 m-1 align-items-center">
        <h4 className="px-2 pb-2 border-bottom fw-bold font-monospace border-danger border-2">
          {head}
        </h4>
      </div>
      <div className=" d-flex icon-square bg-white text-dark flex-shrink-0 me-3 m-1 align-items-center">
        <img
          loading="lazy"
          src="images/icons8-facebook-64.png"
          alt="facebook-logo"
          className="me-4"
          width="50"
          height="50"
        />
        <a
          href={linkfacebook}
          rel="noreferrer"
          target="_blank"
          className="text-decoration-none"
        >
          <button
            id="show-large-button"
            className="btn btn-primary fw-bold border border-2 border-primary rounded-pill"
            style={{ width: 200 + "px" }}
          >
            {namefacebook}
          </button>
        </a>
      </div>
      <div className=" d-flex icon-square bg-white text-dark flex-shrink-0 me-3 m-1 align-items-center">
        <img
          loading="lazy"
          src="images/icons8-line-64.png"
          className="me-4"
          alt="facebook-logo"
          width="50"
          height="50"
        />
        <a
          href={linkline}
          rel="noreferrer"
          target="_blank"
          className="text-decoration-none"
        >
          <button
            id="show-large-button"
            className="btn btn-success fw-bold border border-2 border-success rounded-pill"
            style={{ width: 200 + "px" }}
          >
            {nameline}
          </button>
        </a>
      </div>
      <div className=" d-flex icon-square bg-white text-dark flex-shrink-0 me-3 m-1 align-items-center">
        <img
          loading="lazy"
          src="images/icons8-tiktok-64.png"
          className="me-4"
          alt="facebook-logo"
          width="50"
          height="50"
        />
        <a
          href={linktiktok}
          rel="noreferrer"
          target="_blank"
          className="text-decoration-none"
        >
          <button
            id="show-large-button"
            className="btn btn-danger fw-bold border border-2 border-danger rounded-pill"
            style={{ width: 200 + "px" }}
          >
            {nametiktok}
          </button>
        </a>
      </div>
    </div>
  );
}
