import React from "react";
import JoinUs from "./ComponentPages/JoinUs";
import FooterElement from "../components/mainfooter/FooterElement";
import LayoutPage from "./LayoutPage";
const JoinUsPage = () => {
  return (
    <LayoutPage>
      <main className="main-JoinUsPage" style={{ marginTop: 7 + "vh" }}>
        <JoinUs />
        <FooterElement />
      </main>
    </LayoutPage>
  );
};
export default JoinUsPage;
