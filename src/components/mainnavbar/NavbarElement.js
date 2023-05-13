import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarStyle";
  
const NavbarElement = () => {
  return (
    <>
      <Nav className="fixed-top">
        <NavMenu>
           <img src="images/logonavbar-2.png" alt="logo" className="logo" style={{width:110 +'px'}}/>
          <NavLink to="/">
          หน้าหลัก
          </NavLink>
          <NavLink to="/Sale">
          ฝ่ายขาย
          </NavLink>
          <NavLink to="/Marketing">
          ฝ่ายการตลาด
          </NavLink>
          <NavLink to="/Service">
          ศูนย์บริการ
          </NavLink>
          <NavLink to="/Paint">
          ศูนย์ซ่อมสีเเละตัวถัง
          </NavLink>
          <NavLink to="/Aboutus">
          เกี่ยวกับเรา
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default NavbarElement;