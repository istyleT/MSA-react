import React from "react";
import JoinUs from "../components/comppage/JoinUs";
import FooterElement from "../utils/ui/FooterElement";
import LayoutPage from "./Layout/LayoutPage";
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
