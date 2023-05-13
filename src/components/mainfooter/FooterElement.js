import React from "react";
import { Footer, FooterLink, FooterMenu, TopicFooter } from "./FooterStyle";
  
const FooterElement = () => {
  return (
    <>
      <Footer>
         <img src="images/logomg.png" alt="logo" className="logo" style={{width:230 +'px', height:150 + 'px'}}/>
        <FooterMenu>
        <TopicFooter>สาขาศูนย์บริการ</TopicFooter>
          <FooterLink to="/">
            สาขาศรีนครินทร์
          </FooterLink>
          <FooterLink to="/Sale">
            สาขาหทัยราษฎร์
          </FooterLink>
          <FooterLink to="/Sale">
            สาขารังสิต คลอง 4
          </FooterLink>
        </FooterMenu>
        <FooterMenu>
       <TopicFooter>ฝ่ายขาย</TopicFooter>
          <FooterLink to="/">
          รุ่นรถทั้งหมด
          </FooterLink>
          <FooterLink to="/Sale">
          โปรโมชั่น
          </FooterLink>
        </FooterMenu>
        <FooterMenu>
       <TopicFooter>ฝ่ายการตลาด</TopicFooter>
          <FooterLink to="/">
          กิจกรรม
          </FooterLink>
          <FooterLink to="/Sale">
          ข่าวสาร
          </FooterLink>
        </FooterMenu>
        <FooterMenu>
        <TopicFooter>ฝ่ายการตลาด</TopicFooter>
          <FooterLink to="/">
           รางวัลเเละความสำเร็จ
          </FooterLink>
          <FooterLink to="/">
           ประวัติความเป็นมา
          </FooterLink>
          <FooterLink to="/Sale">
          ร่วมงานกับเรา
          </FooterLink>
        </FooterMenu>
      </Footer>
    </>
  );
};
  
export default FooterElement;