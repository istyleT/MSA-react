import React from "react";
const History = () => {
                    return (
<section className="section-aboutus" id="sec-aboutus">
    <div className="px-4 pt-5 text-center border-bottom bg-white">
      <h4 className="display-6 fw-bold">History</h4>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
        Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      </div>
      <div className="col-lg-6 mx-auto">
        <div className="px-4">
          <h5 className="text-danger fw-bold pb-2 border-bottom border-secondary">วิสัยทัศน์</h5>
          <p className="lead mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, ut!</p>
        </div>
        <div className="px-4">
          <h5 className="text-danger fw-bold pb-2 border-bottom border-secondary">เป้าหมาย</h5>
          <p className="lead mb-4">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="px-4">
          <h5  className="text-danger fw-bold pb-2 border-bottom border-secondary">สโลเเกน</h5>
          <p className="lead mb-4">Saengaree **** Sales and Services.</p>
        </div>
      </div>
      <div className="overflow-hidden" >
        <div className="container px-3">
          <img  style={{objectFit: 'cover'}} loading="lazy" src="images/aboutus-1.jpeg" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example" width="700px" height="300px" />
        </div>
      </div>
    </div>
  </section>
                    );
};
export default History;