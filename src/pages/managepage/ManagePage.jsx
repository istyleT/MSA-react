import React from "react";
import { Outlet } from "react-router-dom";
import LayoutPage from "../Layout/LayoutPage";
import SelectBarManage from "../../components/comppage/SelectBarManage";

export default function ManagePage() {
  return (
    <LayoutPage>
      <div
        className="d-flex flex-column jusitify-content-center align-items-center w-100"
        style={{ marginTop: 8 + "vh" }}
      >
        <SelectBarManage />
        <section className="d-flex flex-column jusitify-content-center align-items-center w-100">
          <Outlet />
        </section>
      </div>
    </LayoutPage>
  );
}
