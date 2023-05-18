import React from "react";
import './csspages/ShopPage.css';
import FooterElement from "../components/mainfooter/FooterElement";

const ShopPage = () => {
                    const Partitem = (props) => {
                                        return (
                                        //                
                                                       <div className="card m-3" style={{width: 18 + 'rem'}}>
                                                          <img src="images/mgvshevx200.png" className="card-img-top" alt="..." />
                                                          <div className="card-body">
                                                            <h5 className="card-title">Card title</h5>
                                                            <p className="card-text">ประเภท:..... รุ่นรถ:.... </p>
                                                            <p className="card-text">ราคา:.... </p>
                                                            <button className="btn btn-danger">view</button>
                                                          </div>
                                                        </div>
                                        );
                    };
                    return (
                                        <section className="main-ShopPage" style={{backgroundImage: "url(images/servicecenterhathairat.jpg)",marginTop: 7 +'vh'}}>
                                             <Partitem/>
                                             <FooterElement/>
                                        </section>                 
                    );
};

export default ShopPage;