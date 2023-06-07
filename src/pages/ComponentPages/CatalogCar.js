import React , {useState, useEffect} from "react";

const CatalogCar = () => {

  const [datacardcar, setdatacardcar] = useState([]);
  
  useEffect(() => {
    fetch('https://test-web-api.herokuapp.com/carcard')
    .then(res => {
      console.log(res)
      return res.json()})
    .then(resJson => {setdatacardcar(resJson)})
    .catch(err => {console.log(err)})
  },[])


  const CardCar = (props) => {
    const {URLimage, mainmodel, detail1, detail2, detail3, detail4, detail5} = props;
    const arraydetail = [detail1, detail2, detail3, detail4, detail5];
    const arraydetailList = arraydetail.map(convertNullValue)

    function convertNullValue(detail) {
      if (detail === "-") {
        return " ";
      } else {
        return detail;
      }
    }
    return (
                     <div className="col d-flex justify-content-center">
                        <div className="flip-card">
                          <div className="flip-card-inner">
                            <div className="flip-card-front d-flex flex-column justify-content-center align-items-center">
                              <img loading="lazy" src={URLimage} alt="carmodel" style={{width:350+'px',height:250+'px',objectFit:"contain" }}/>
                            </div>
                            <div className="flip-card-back p-2 d-flex flex-column justify-content-center align-items-center">
                              <h5 className="text-danger fw-bold text-decoration-underline">{mainmodel}</h5>  
                               <p className="font-monospace">{arraydetailList[0]}</p> 
                               <p className="font-monospace">{arraydetailList[12]}</p> 
                               <p className="font-monospace">{arraydetailList[2]}</p> 
                               <p className="font-monospace">{arraydetailList[3]}</p> 
                               <p className="font-monospace">{arraydetailList[4]}</p> 
                            </div>
                          </div>
                        </div>
                      </div>   
    );
};

  const datacardcarList = datacardcar.map((datacardcar, index) => {
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