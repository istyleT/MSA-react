import React from "react";
// import { Nav, NavLink, NavMenu, MainNavLink, ShopLink } from "./NavbarStyle";
import { NavLink, MainNavLink, ShopLink } from "./NavbarStyle";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarElement = () => {
  return (
    // <>
    //   <Nav className="fixed-top">
    //     <NavMenu>
    //       <MainNavLink to="/">
    //       <img src="../images/logonavbar-2.png" alt="logo" className="logo" style={{width:110 +'px'}}/>
    //       </MainNavLink>
    //       <NavLink to="/Sale">
    //       ฝ่ายขาย
    //       </NavLink>
    //       <NavLink to="/Marketing">
    //       ฝ่ายการตลาด
    //       </NavLink>
    //       <NavLink to="/Service">
    //       ศูนย์บริการ
    //       </NavLink>
    //       <NavLink to="/Paint">
    //       ศูนย์ซ่อมสีเเละตัวถัง
    //       </NavLink>
    //       <NavLink to="/Aboutus">
    //       เกี่ยวกับเรา
    //       </NavLink>
    //       <ShopLink to="/Shop">
    //        Shop
    //       </ShopLink>
    //     </NavMenu>
    //   </Nav>
    // </>
    <Navbar expand="lg" className="fixed-top bg-light align-items-center w-100">
      <Container fluid>
        <MainNavLink to="/">
          <img
            src="../images/logonavbar-2.png"
            alt="logo"
            className="logo"
            style={{ width: 110 + "px" }}
          />
        </MainNavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 bg-light">
            <NavLink to="/Sale">ฝ่ายขาย</NavLink>
            <NavLink to="/Marketing">ฝ่ายการตลาด</NavLink>
            <NavLink to="/Service">ศูนย์บริการ</NavLink>
            <NavLink to="/Paint">ศูนย์ซ่อมสีเเละตัวถัง</NavLink>
            <NavLink to="/Aboutus">เกี่ยวกับเรา</NavLink>
            <ShopLink to="/Shop">Shop</ShopLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarElement;
