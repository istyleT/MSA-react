import React from "react";
import LayoutPage from "./LayoutPage";
import {
  apiDeleteFunction,
  apiPutFunction,
  apiPostFunction,
} from "../apiservice/apiCRUD";
import Nav from "react-bootstrap/Nav";

function JustifiedExample() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default function ManagePage() {
  return (
    <LayoutPage>
      <div style={{ marginTop: 8 + "vh" }}>
        <JustifiedExample />
      </div>
    </LayoutPage>
  );
}

function ManageCard({ name, page }) {
  return (
    <div className="card mt-2">
      <div className="card-body">
        <h5 className="card-title">
          Content : {name} /Page Location : {page}
        </h5>
        <div className="w-95" style={{ height: 400 + "px" }}>
          <button
            className="btn btn-success fw-bold"
            onClick={() => {
              apiPostFunction(name, page);
            }}
          >
            เพิ่ม
          </button>
          <button
            className="btn btn-warning fw-bold"
            onClick={() => {
              apiPutFunction(name, page);
            }}
          >
            เเก้ไข
          </button>
          <button
            className="btn btn-danger fw-bold"
            onClick={() => {
              apiDeleteFunction(name, page);
            }}
          >
            ลบ
          </button>
        </div>
      </div>
    </div>
  );
}

const contentArray = [
  {
    name: "Promotion",
    page: "Home",
  },
  {
    name: "Branchcard",
    page: "Home",
  },
  {
    name: "Banner",
    page: "Sale",
  },
  {
    name: "Carcard",
    page: "Sale",
  },
  {
    name: "SaleSocial",
    page: "Sale",
  },
  {
    name: "Activity & News",
    page: "Marketing",
  },
  {
    name: "Service VDO",
    page: "Service",
  },
  {
    name: "Body & Paint VDO",
    page: "Body & Paint",
  },
  {
    name: "Part Item",
    page: "Shop",
  },
];
