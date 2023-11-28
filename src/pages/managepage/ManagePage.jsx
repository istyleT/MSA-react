import React from "react";
import { Outlet } from "react-router-dom";
import LayoutPage from "../LayoutPage";
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

const navitems = [
  { tab: "Promotion", path: "/Manage/Promotion" },
  { tab: "Branch", path: "/Manage/Branchcard" },
  { tab: "SaleBanner", path: "/Manage/Salebanner" },
  { tab: "Catalog", path: "/Manage/Carcard" },
  { tab: "Social", path: "/Manage/Salesocial" },
  { tab: "Activity", path: "/Manage/News" },
  { tab: "SaleVDO", path: "/Manage/Salevdo" },
  { tab: "ServiceVDO", path: "/Manage/Servicevdo" },
  { tab: "PaintVDO", path: "/Manage/Bodyvdo" },
  { tab: "Parts", path: "/Manage/Partitem" },
];
