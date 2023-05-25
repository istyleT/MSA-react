import React, {useState} from "react";
const TestPage = () => {
                    const [modelcolor, setmodelcolor] = useState([]);
                    const [regiscost, setregiscost] = useState([]);

                    function viewcolor() {
                        fetch("https://test-web-api.herokuapp.com/color")
                        .then(res=> {
                                        return res.json();
                         })
                         .then(resJson => {
                                        setmodelcolor(resJson);
                    });
                    };

                    function viewregis() {
                        fetch("https://test-web-api.herokuapp.com/regiscost")
                        .then(res=> {
                                        return res.json();
                                        })
                                        .then(resJson => {
                                            setregiscost(resJson);
                                        });
                                        };

                    const colorElement = modelcolor.map(color => {
                    return(
                          <h3 key={color.id} className="text-dark">{color.submodel} / {color.color}</h3>            
                    )});
                    const regiscostElement = regiscost.map(regis => {
                    return(
                          <h3 key={regis.id} className="text-dark">{regis.regis_code} / {regis.regis_company} / {regis.regis_personal} </h3>            
                    )});

   return (
                    <div className=" bg-light position-absolute top-50 start-50 translate-middle ">
                       {colorElement}    
                       {regiscostElement}
                       <button className="btn btn-primary" onClick={viewcolor} >color</button>    
                       <button className="btn btn-primary" onClick={viewregis} >regiscost</button>    
                    </div>
   );
}
export default TestPage;