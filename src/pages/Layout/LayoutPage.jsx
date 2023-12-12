import React from "react";
import NavbarElement from "../../utils/ui/NavbarElement";

export default function LayoutPage({ children }) {
  return (
    <>
      <NavbarElement />
      <main className="bg-transparent">{children}</main>
    </>
  );
}
