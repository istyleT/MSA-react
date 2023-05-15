import React from "react";
const MainHome = () => {

                    return (
                                <section className="bg-white">
                                        <div id="loadingline1" className="bg-danger rounded-pill  mb-3"></div>
                                        <div id="sale-box" className="d-flex justify-content-around align-items-center">
                                            <div id="saledoor-pic" className=" p-3 ">
                                                <img src="images/reward-1.jpeg" alt="sale" width="350px" height="250px" className="rounded-3 " loading="eager"/>
                                            </div>
                                            <div id="sale-content" className="d-flex flex-column justify-content-center align-items-start gap-2 px-5 ">
                                                <h3 >Saengaree Sales</h3>
                                                <div id="sale-line"></div>
                                                <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, et.
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, et.
                                                </p>
                                                {/* <a id="sale-button" href="/bookdrive" target="_blank" className="fw-bold btn btn-danger rounded-pill">จองคิวทดลองขับ</a> */}
                                            </div>
                                        </div>
                                        <div id="service-box" className="d-flex justify-content-around align-items-center">
                                            <div  id="service-content" className="d-flex flex-column justify-content-center align-items-end gap-2 px-5 float-start">
                                                <h3 >Saengaree Service</h3>
                                                <div id="service-line"></div>
                                                <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, et.
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, et.
                                                </p>
                                                {/* <a id="service-button" href="/bookgs" target="_blank" className="fw-bold btn btn-danger rounded-pill">นัดหมายรับบริการ</a> */}
                                            </div>
                                            <div id="servicedoor-pic" className=" p-3 ">
                                                <img src="images/service-1.jpg" alt="service" width="350px" height="250px" className="rounded-3 float-end" loading="eager"/>
                                            </div>
                                        </div>
                                        <div id="body-box" className="d-flex justify-content-around align-items-center">
                                            <div id="bodydoor-pic" className=" p-3 ">
                                                <img src="images/service-2.jpg" alt="body" width="350px" height="250px" className="rounded-3 float-start" loading="eager"/>
                                            </div>
                                            <div  id="body-content" className="d-flex flex-column justify-content-center align-items-start gap-2 px-5 float-end">
                                                <h3 >Saengaree Body & Paint</h3>
                                                <div id="body-line"></div>
                                                <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, et.
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, et.
                                                </p>
                                                {/* <a id="body-button" href="/bookbp" target="_blank" className="fw-bold btn btn-danger rounded-pill">นัดหมายซ่อมสีตัวถัง</a> */}
                                            </div>
                                        </div>
                                    </section>           
                    );
};
export default MainHome;