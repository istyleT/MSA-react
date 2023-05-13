import React from "react";

const Reward = () => {
                    return (
<section className="section-reward p-4 bg-white" id="sec-reward">
    <h1 className="d-flex justify-content-center p-4 fw-bold lh-1 font-monospace">Reward & Archiement</h1>
    <div className="row featurette">
      <div className="col-md-7 d-flex flex-column justify-content-center p-5">
        <h6 className="featurette-heading border-bottom border-danger pb-2">การบริการเเละเทคนิคงานซ่อม.</h6>
        <p className="lead">บริษัท เอ็มจี แสงอารี ออโต้ จำกัด ขอแสดงความยินดีกับพนักงาน ที่ได้รับรางวัลรองชนะเลิศอันดับที่ 1 ประจำปี 2566 ในการแข่งขันทักษะการบริการ ด้านเทคนิคและงานซ่อม</p>
      </div>
      <div className="col-md-5 my-1">
        <img loading="lazy" src="images/msa-reward-1.jpg" className="featurette-image img-fluid mx-auto border border-light  rounded-circle" width="400" height="400"/>
      </div>
    </div>
    <div className="row featurette">
      <div className="col-md-7 order-md-2 d-flex flex-column justify-content-center p-5">
        <h6 className="featurette-heading border-bottom border-danger pb-2">Secondary Reward Name.</h6>
        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis reprehenderit odio enim quibusdam similique?</p>
      </div>
      <div className="col-md-5 order-md-1 my-1">
        <img loading="lazy" src="images/reward-1.jpeg" className="featurette-image img-fluid mx-auto border border-light  rounded-circle" width="400" height="400"/>      
      </div>
    </div>
    <div className="row featurette">
      <div className="col-md-7 d-flex flex-column justify-content-center p-5">
        <h6 className="featurette-heading border-bottom border-danger pb-2">Thrid Reward Name.</h6>
        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis praesentium quia quibusdam officia, tenetur mollitia!.</p>
      </div>
      <div className="col-md-5 order-md-1 my-1">
        <img loading="lazy" src="images/reward-3.jpg" className="featurette-image img-fluid mx-auto border border-light rounded-circle" width="400" height="400"/>
      </div>
    </div>
  </section>
                    );
};
export default Reward;