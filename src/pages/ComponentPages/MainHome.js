import React from "react";
const MainHome = () => {

                    return (
                                <section className="d-flex flex-column align-items-center bg-white">
                                        <div id="sale-box" className="d-flex justify-content-evenly align-items-center">
                                            <div id="saledoor-pic" className=" p-3 ">
                                                <img src="images/reward-1.jpeg" alt="sale" width="450px" height="250px" className="rounded-3 " loading="eager"/>
                                            </div>
                                            <div id="sale-content" className="d-flex flex-column justify-content-center align-items-start gap-2 px-5 ">
                                                <h3 >Saengaree Sales</h3>
                                                <div id="sale-line"></div>
                                                <p className="text-wrap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, et.
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, et.
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, et.
                                                </p>
                                            </div>
                                        </div>
                                        <div id="service-box" className="d-flex justify-content-evenly align-items-center">
                                            <div  id="service-content" className="d-flex flex-column justify-content-center align-items-start gap-2 px-5 ">
                                                <h3 >Saengaree Service</h3>
                                                <div id="service-line"></div>
                                                <p className="text-wrap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, et.
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, et.
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, et.
                                                </p>
                                            </div>
                                            <div id="servicedoor-pic" className=" p-3 ">
                                                <img src="images/service-1.jpg" alt="service" width="450px" height="250px" className="rounded-3 " loading="eager"/>
                                            </div>
                                        </div>
                                        <div id="body-box" className="d-flex justify-content-evenly align-items-center">
                                            <div id="bodydoor-pic" className=" p-3 ">
                                                <img src="images/service-2.jpg" alt="body" width="450px" height="250px" className="rounded-3 " loading="eager"/>
                                            </div>
                                            <div  id="body-content" className="d-flex flex-column justify-content-center align-items-start gap-2 px-5 ">
                                                <h3 >Saengaree Body & Paint</h3>
                                                <div id="body-line"></div>
                                                <p className="text-wrap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, et.
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, et.
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, et.
                                                </p>
                                            </div>
                                        </div>
                                    </section>           
                    );
};
export default MainHome;