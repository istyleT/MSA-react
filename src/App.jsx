import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SalePage from "./pages/SalePage";
import MarketingPage from "./pages/MarketingPage";
import ServicePage from "./pages/ServicePage";
import PaintPage from "./pages/PaintPage";
import AboutUsPage from "./pages/AboutUsPage";
import Pagenotfound from "./pages/PageNotFound";
import ContactUsPage from "./pages/ContactUsPage";
import JoinUsPage from "./pages/JoinUsPage";
import ShopPage from "./pages/ShopPage";
import ManagePage from "./pages/managepage/ManagePage";
import LoginPage from "./pages/LoginPage";
import PromotionMan from "./pages/managepage/PromotionMan";
import CatalogCarMan from "./pages/managepage/CatalogCarMan";
import BranchCardMan from "./pages/managepage/BranchCardMan";
import ServiceVDOMan from "./pages/managepage/ServiceVDOMan";
import PaintVDOMan from "./pages/managepage/PaintVDOMan";
import SaleVDOMan from "./pages/managepage/SaleVDOMan";
import SaleBannerMan from "./pages/managepage/SaleBannerMan";
import SaleSocialMan from "./pages/managepage/SaleSocialMan";
import PartItemMan from "./pages/managepage/PartItemMan";
import ActivityMan from "./pages/managepage/ActivityMan";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/Sale" element={<SalePage />} />
        <Route exact path="/Marketing" element={<MarketingPage />} />
        <Route exact path="/Service" element={<ServicePage />} />
        <Route exact path="/Paint" element={<PaintPage />} />
        <Route exact path="/Aboutus" element={<AboutUsPage />} />
        <Route exact path="/Contactus" element={<ContactUsPage />} />
        <Route exact path="/Joinus" element={<JoinUsPage />} />
        <Route exact path="/Shop" element={<ShopPage />} />
        <Route exact path="/Login" element={<LoginPage />} />
        <Route exact path="/Manage" element={<ManagePage />}>
          <Route exact path="Promotion" element={<PromotionMan />} />
          <Route exact path="Carcard" element={<CatalogCarMan />} />
          <Route exact path="Branchcard" element={<BranchCardMan />} />
          <Route exact path="Servicevdo" element={<ServiceVDOMan />} />
          <Route exact path="Bodyvdo" element={<PaintVDOMan />} />
          <Route exact path="Salevdo" element={<SaleVDOMan />} />
          <Route exact path="Salebanner" element={<SaleBannerMan />} />
          <Route exact path="Salesocial" element={<SaleSocialMan />} />
          <Route exact path="Partitem" element={<PartItemMan />} />
          <Route exact path="News" element={<ActivityMan />} />
        </Route>
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
