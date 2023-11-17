import React from "react";
import NavbarElement from "../components/mainnavbar/NavbarElement";

export default function LayoutPage({ children }) {
  return (
    <>
      <NavbarElement />
      <main className="w-100 h-100">{children}</main>
    </>
  );
}
