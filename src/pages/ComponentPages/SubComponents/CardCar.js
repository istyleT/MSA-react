import React from "react";
const CardCar = (props) => {
                    const {URLimage, mainmodel, detail1, detail2, detail3, detail4, detail5} = props;
                    return (
                                     <div className="col d-flex justify-content-center">
                                        <div className="flip-card">
                                          <div className="flip-card-inner">
                                            <div className="flip-card-front d-flex flex-column justify-content-center align-items-center">
                                              <img loading="lazy" src={URLimage} alt="Avatar" style={{width:250+'px',height:250+'px'}}/>
                                            </div>
                                            <div className="flip-card-back p-2 d-flex flex-column justify-content-center align-items-center">
                                              <h5 className="text-danger fw-bold text-decoration-underline">{mainmodel}</h5>  
                                               <p className="font-monospace">{detail1}</p> 
                                               <p className="font-monospace">{detail2}</p> 
                                               <p className="font-monospace">{detail3}</p> 
                                               <p className="font-monospace">{detail4}</p> 
                                               <p className="font-monospace">{detail5}</p> 
                                            </div>
                                          </div>
                                        </div>
                                      </div>   
                    );
};
export default CardCar;