import React from "react";

export default function OverLay({ children }) {
  return (
    <section
      className="bg-transparent position-fixed top-0 start-0"
      style={{
        marginTop: 5.5 + "vh",
        width: 100 + "vw",
        height: 100 + "vh",
        backdropFilter: "blur(10px)",
        zIndex: 100,
      }}
    >
      {children}
    </section>
  );
}
