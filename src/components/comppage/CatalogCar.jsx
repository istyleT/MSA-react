import React from "react";
import { useQueryInit } from "../../hook/usequeryinit";
import Loading from "../../utils/ui/Loading";

export default function CatalogCar() {
  const { loading, datainit } = useQueryInit("webcarcard");

  return (
    <section className="sale-catagory" id="sale-catagory">
      <div className="container">
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 gx-2">
          {loading && <Loading />}
          {!loading &&
            datainit.map((data) => {
              return (
                <CardCar
                  key={data._id}
                  comingsoon={data.comingsoon}
                  URLimage={data.URLimage}
                  mainmodel={data.mainmodel}
                  detail1={data.detail1}
                  detail2={data.detail2}
                  detail3={data.detail3}
                  detail4={data.detail4}
                  detail5={data.detail5}
                  detail6={data.detail6}
                  linkto={data.linkto}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}

function CardCar({
  URLimage,
  comingsoon,
  mainmodel,
  detail1,
  detail2,
  detail3,
  detail4,
  detail5,
  detail6,
  linkto,
}) {
  const arraydetail = [detail1, detail2, detail3, detail4, detail5, detail6];
  const arraydetailList = arraydetail.filter((data) => data !== "");
  return (
    <div className="col d-flex justify-content-center">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front d-flex flex-column justify-content-center align-items-center">
            <img
              loading="lazy"
              src={URLimage}
              alt="carmodel"
              style={{
                width: 350 + "px",
                height: 250 + "px",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="flip-card-back p-2 d-flex flex-column justify-content-center align-items-center">
            <h5 className="text-danger fw-bold text-decoration-underline">
              {mainmodel}
            </h5>
            {comingsoon ? (
              <h5 className="text-dark mt-2 fw-bold">Coming Soon</h5>
            ) : (
              <p className="d-flex flex-column">
                <span className="font-monospace">{arraydetailList[0]}</span>
                <span className="font-monospace">{arraydetailList[1]}</span>
                <span className="font-monospace">{arraydetailList[2]}</span>
                <span className="font-monospace">{arraydetailList[3]}</span>
                <span className="font-monospace">{arraydetailList[4]}</span>
                <span className="font-monospace">{arraydetailList[5]}</span>
              </p>
            )}
            <a href={linkto}>ดูรายละเอียดเพิ่มเติม</a>
          </div>
        </div>
      </div>
    </div>
  );
}
