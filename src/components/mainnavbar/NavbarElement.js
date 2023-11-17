import React from "react";
import { NavLink, MainNavLink, ShopLink } from "./NavbarStyle";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarElement = () => {
  return (
    <Navbar
      expand="lg"
      className="fixed-top bg-light align-items-center w-100 "
    >
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
            <NavLink to="/Sale">
              <span className="fw-bold">ฝ่ายขาย</span>
            </NavLink>
            <NavLink to="/Marketing">
              <span className="fw-bold">ฝ่ายการตลาด</span>
            </NavLink>
            <NavLink to="/Service">
              <span className="fw-bold">ศูนย์บริการ</span>
            </NavLink>
            <NavLink to="/Paint">
              <span className="fw-bold">ศูนย์ซ่อมสีเเละตัวถัง</span>
            </NavLink>
            <NavLink to="/Aboutus">
              <span className="fw-bold">เกี่ยวกับเรา</span>
            </NavLink>
            <ShopLink to="/Shop">
              <span className="fw-bold">PartsShop</span>
            </ShopLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarElement;
