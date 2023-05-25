import React from "react";
import './csspages/ShopPage.css';
import Card from 'react-bootstrap/Card';
import DataPartShop from "./datapage/datapartshop";
import { useState } from "react";
import SearchInput from "./ComponentPages/SearchInput";

const ShopPage = () => {
  const [postpartitem, setPostpartitem] = useState(null);
  const [searchtext, setSearchtext] = useState("");


  const onPartItemClick = (thePartItem) => {
    console.log(thePartItem);
    setPostpartitem(thePartItem);
  }

  const onPartItemClose = () => {
    setPostpartitem(null);
  }


                      // card รายการอะไหล่เเสดงในหน้าร้านค้า
                      const PartItem = (props) => {
                        const {datapartshop,onPartItemClick} = props;
                                          return (
                                                <Card className="me-3 mb-3 p-1 border border-light" style={{ width: '20rem' }}>
                                                  <Card.Img onClick={()=>onPartItemClick(datapartshop)} variant="top" src={datapartshop.partimageurl} className="border-0" style={{width: 100 +'%', height: 250 + 'px', cursor:'ne-resize'}} />
                                                  <Card.Body>
                                                    <Card.Title className="border-bottom border-danger border-1 py-1">{datapartshop.partname}</Card.Title>
                                                    <Card.Text className="text-start">
                                                      <p>รุ่น : <small>{datapartshop.partmodel}</small>  ราคา : <small>{datapartshop.partprice}</small> บาท</p>
                                                      <p>ส่วนลด : <small className="text-success fw-bold">{datapartshop.partdiscount}</small> %  ราคาสุทธิ : <small className="text-danger fw-bold">{datapartshop.partpricenet}</small> บาท</p>
                                                      <div className="float-end"><span className="text-muted fw-lighter fst-italic" style={{fontSize: 12 + 'px'}}>เงื่อนไขเป็นไปตามที่บริษัทกำหนด</span><button type="button" className="text-white btn btn-primary ms-2">ใส่ตะกร้า</button></div>
                                                    </Card.Text>
                                                  </Card.Body>
                                                </Card>
                                          );
                      };


                    // partitem Post เเสดงเมื่อมีการคลิกเลือกอะไหล่
                    const PartItemPost = (props) => {
                      const {partitem, onBgClick} = props;
                      return (
                        <div onClick={onBgClick} className="position-fixed top-0 end-0 bottom-0 start-0 d-flex justify-content-center align-items-center bg-transparent" style={{width: 100 + 'vw', height: 100 + 'vh', backdropFilter: "blur(10px)"}}>
                          <img src={partitem.partimageurl} style={{width: 35 +'rem', height: 35 +'rem'}} alt="..." />
                        </div>
                      );
                    };
    
                    // map ข้อมูลอะไหล่จาก data
                    const PartItemList = DataPartShop.filter((datapartshop) => {
                      return datapartshop.partname.includes(searchtext);
                    }).map((datapartshop, index) => {
                      return (
                        <PartItem
                            key={index}
                            datapartshop={datapartshop}
                            onPartItemClick={onPartItemClick}
                        />
                      );
                    })

  let partitemPost = null;
  if (!!postpartitem) {
    partitemPost = <PartItemPost partitem={postpartitem} onBgClick={onPartItemClose} />
  }

    return (
                        <section className="main-ShopPage" style={{backgroundImage: "url(images/mainwallpaperhome.png)",marginTop: 7 +'vh'}}>
                          <SearchInput value={searchtext} onValueChange={setSearchtext} />
                          <div className="parts-item-gird p-3">
                               {PartItemList}
                          </div>
                          {partitemPost}
                        </section>                 
    );
};

export default ShopPage;