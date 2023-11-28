import React from "react";
import NavbarElement from "../ui/NavbarElement";

export default function LayoutPage({ children }) {
  return (
    <>
      <NavbarElement />
      <main className="w-100 h-100">{children}</main>
    </>
  );
}
