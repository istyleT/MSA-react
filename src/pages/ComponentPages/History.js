import React from "react";
const History = () => {
                    return (
<section className= "d-flex align-items-center px-4 py-4 bg-transparents">
    <div className="d-flex w-80 text-center border border-5 border-danger rounded-3">
      <div className="mx-auto bg-light">
      <h4 className="display-6 fw-bold">History</h4>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins</p>
      </div>
        <div className="px-4">
          <h5 className="text-danger fw-bold pb-2 border-bottom border-1 border-secondary">วิสัยทัศน์</h5>
          <p className="lead mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, ut!</p>
        </div>
        <div className="px-4">
          <h5 className="text-danger fw-bold pb-2 border-bottom border-1 border-secondary">เป้าหมาย</h5>
          <p className="lead mb-4">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="px-4">
          <h5  className="text-danger fw-bold pb-2 border-bottom border-1 border-secondary">สโลเเกน</h5>
          <p className="lead mb-4">Saengaree **** Sales and Services.</p>
        </div>
      </div>
      <div className="d-flex align-items-center bg-light px-2" >
          <img  style={{objectFit: 'cover'}} loading="lazy" src="images/aboutus-1.jpeg" className="img-fluid rounded-3" alt="Example" width="700px" height="400px" />
      </div>
    </div>
  </section>
                    );
};
export default History;