import React from "react";
import { Footer, FooterLink, FooterMenu, FooterLinkPage,TopicFooter } from "./FooterStyle";
  
const FooterElement = () => {
  return (
    <>
      <Footer>
         <img src="images/logomg.png" alt="logo" className="logo" style={{width:230 +'px', height:150 + 'px'}}/>
        <FooterMenu>
        <TopicFooter>เเผนที่ศูนย์บริการ</TopicFooter>
          <FooterLink  target="_blank" href="https://www.google.co.th/maps/place/%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%A1%E0%B8%88%E0%B8%B5+%E0%B9%81%E0%B8%AA%E0%B8%87%E0%B8%AD%E0%B8%B2%E0%B8%A3%E0%B8%B5+%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C+-+MG+Srinakarin/@13.6804219,100.6436309,17z/data=!3m1!4b1!4m6!3m5!1s0x311d5f41969edcc7:0x8a31b66b520e579f!8m2!3d13.6804219!4d100.6458196!16s%2Fg%2F11t7rbst1m?hl=th" >
            สาขาศรีนครินทร์
          </FooterLink>
          <FooterLink target="_blank" href="https://www.google.co.th/maps/place/%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%A1%E0%B8%88%E0%B8%B5+%E0%B9%81%E0%B8%AA%E0%B8%87%E0%B8%AD%E0%B8%B2%E0%B8%A3%E0%B8%B5+%E0%B8%AB%E0%B8%97%E0%B8%B1%E0%B8%A2%E0%B8%A3%E0%B8%B2%E0%B8%A9%E0%B8%8E%E0%B8%A3%E0%B9%8C+-+MG+HATHAIRAT/@13.8685081,100.7200109,17z/data=!3m1!4b1!4m6!3m5!1s0x311d7b11fa7a2981:0x2f75b068c6f3d0fd!8m2!3d13.8685081!4d100.7221996!16s%2Fg%2F11qnbmg2nh?hl=th" >
            สาขาหทัยราษฎร์
          </FooterLink>
          <FooterLink target="_blank" href="https://www.google.co.th/maps/place/%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%A1%E0%B8%88%E0%B8%B5+%E0%B9%81%E0%B8%AA%E0%B8%87%E0%B8%AD%E0%B8%B2%E0%B8%A3%E0%B8%B5+%E0%B8%A3%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B4%E0%B8%95+%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%87+4+-+MG+Rangsit+Khlong+4/@14.0030621,100.6909241,17z/data=!3m1!4b1!4m6!3m5!1s0x311d7f97fbed518d:0x8398bd2b62adf9d9!8m2!3d14.0030621!4d100.6931128!16s%2Fg%2F11n004z2z1?hl=th" >
            สาขารังสิต คลอง 4
          </FooterLink>
        </FooterMenu>
        {/* <FooterMenu>
       <TopicFooter>Facebook Page</TopicFooter>
          <FooterLink target="_blank" href="https://www.facebook.com/mgsrinakarin" >
          สาขาศรีนครินทร์
          </FooterLink>
          <FooterLink target="_blank" href="https://www.facebook.com/mghathairat2" >
          สาขาหทัยราษฎร์
          </FooterLink>
          <FooterLink target="_blank" href="https://www.facebook.com/mgrangsitkhlong4" >
          สาขารังสิต คลอง 4
          </FooterLink>
        </FooterMenu> */}
        <FooterMenu>
       <TopicFooter>LINE Official</TopicFooter>
          <FooterLink target="_blank" href="https://page.line.me/465zwbwo?openQrModal=true" >
          สาขาศรีนครินทร์
          </FooterLink>
          <FooterLink target="_blank" href="https://page.line.me/465zwbwo?openQrModal=true" >
          สาขาหทัยราษฎร์
          </FooterLink>
          <FooterLink target="_blank" href="https://page.line.me/294mktau?openQrModal=true" >
          สาขารังสิต คลอง 4
          </FooterLink>
        </FooterMenu>
        <FooterMenu>
        <TopicFooter>การติดต่อ</TopicFooter>
          <FooterLinkPage to="/Contactus">
          ติดต่อเรา
          </FooterLinkPage>
          <FooterLinkPage to="/Joinus">
          ร่วมงานกับเรา
          </FooterLinkPage>
        </FooterMenu>
      </Footer>
    </>
  );
};
  
export default FooterElement;