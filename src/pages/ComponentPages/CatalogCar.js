import React from "react";
import DataCardCar from "../datapage/datacardcar" ;
import CardCar from "./SubComponents/CardCar";
const CatalogCar = () => {
  const datacardcarList = DataCardCar.map((datacardcar, index) => {
    return (
      <CardCar
          key={index}
          URLimage={datacardcar.URLimage}
          mainmodel={datacardcar.mainmodel}
          detail1={datacardcar.detail1}
          detail2={datacardcar.detail2}
          detail3={datacardcar.detail3}
          detail4={datacardcar.detail4}
          detail5={datacardcar.detail5}
      />
    );
});
                    return (
                                      <section className="sale-catagory" id="sale-catagory">
                                        <div className="container">
                                         <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 gx-2">
                                              {datacardcarList}
                                         </div>
                                       </div>
                                      </section>
                    );
};
export default CatalogCar;