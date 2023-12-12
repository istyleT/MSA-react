import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Nav = styled.nav`
  background-color: white;
  width: 100vw;
  maxd-height: 4vh;
  display: flex;
  justify-content: center;
  padding: 0.1rem calc((100vw - 1000px) / 2);
`;

const NavLink = styled(Link)`
  color: black;
  margin-left: 5px;
  font-size: 1.0rem;
  background-color: transparent
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.20rem 0.5rem;
  cursor: pointer;
  transition:0.3s ;
  &.active {
    font-weight: bold;
    font-size: 1.10rem;
    @media screen and (min-width: 992px) {
         border-bottom: .15rem solid red;
    }
  }
  &:hover {
    color: black;
  }
`;

const MainNavLink = styled(Link)`
  background-color: transparent
  display: flex;
  align-items: center;
  padding: 0.10rem 1rem;
  cursor: pointer;

`;

export default function NavbarElement() {
  return (
    <Navbar
      expand="lg"
      className="fixed-top bg-light d-flex align-items-center justify-content-center w-100 "
    >
      <Container fluid>
        <MainNavLink to="/">
          <img
            src="../images/logonavbar-2.png"
            alt="logo"
            className="logo"
            style={{ width: 6 + "rem" }}
          />
        </MainNavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="fw-bold">
            <NavLink to="/Sale">
              <span className="">ฝ่ายขาย</span>
            </NavLink>
            <NavLink to="/Marketing">
              <span>ฝ่ายการตลาด</span>
            </NavLink>
            <NavLink to="/Service">
              <span>ศูนย์บริการ</span>
            </NavLink>
            <NavLink to="/Paint">
              <span>ศูนย์ซ่อมสีเเละตัวถัง</span>
            </NavLink>
            <NavLink to="/Aboutus">
              <span>เกี่ยวกับเรา</span>
            </NavLink>
            <NavLink to="/Shop">
              <span>PartsShop</span>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
