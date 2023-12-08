import React from "react";
import { navitems } from "../../data/componentitem";
import { Outlet } from "react-router-dom";
import LayoutPage from "../Layout/LayoutPage";
import Nav from "react-bootstrap/Nav";

export default function ManagePage() {
  return (
    <LayoutPage>
      <div style={{ marginTop: 8 + "vh" }}>
        <Nav justify variant="tabs">
          {navitems.map((item, index) => {
            return (
              <Nav.Item key={index}>
                <Nav.Link
                  href={item.path}
                  className="text-dark fst-italic fw-bold"
                >
                  {item.tab}
                </Nav.Link>
              </Nav.Item>
            );
          })}
        </Nav>
        <section className="d-flex flex-column jusitify-content-center align-items-center w-100">
          <Outlet />
        </section>
      </div>
    </LayoutPage>
  );
}
