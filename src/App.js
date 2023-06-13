import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route}
    from 'react-router-dom';
import NavbarElement from './components/mainnavbar/NavbarElement';
import HomePage from './pages';
import SalePage from './pages/SalePage';
import MarketingPage from './pages/MarketingPage';
import ServicePage from './pages/ServicePage';
import PaintPage from './pages/PaintPage';
import AboutUsPage from './pages/AboutUsPage';
import Pagenotfound from './pages/PageNotFound';
import ContactUsPage from './pages/ContactUsPage';
import JoinUsPage from './pages/JoinUsPage';
import ShopPage from './pages/ShopPage';
import ManagePage from './pages/ManagePage';
import LoginPage from './pages/LoginPage';
import SiginPage from './pages/SiginPage';
function App() {
  return (
    <BrowserRouter>
    <NavbarElement/>
    <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/Sale' element={<SalePage/>} />
        <Route exact path='/Marketing' element={<MarketingPage/>} />
        <Route exact path='/Service' element={<ServicePage/>} />
        <Route exact path='/Paint' element={<PaintPage/>} />
        <Route exact path='/Aboutus' element={<AboutUsPage/>} />
        <Route exact path='/Contactus' element={<ContactUsPage/>} />
        <Route exact path='/Joinus' element={<JoinUsPage/>} />
        <Route exact path='/Shop' element={<ShopPage/>} />
        <Route exact path='/Login' element={<LoginPage/>} />
        <Route exact path='/Sigin' element={<SiginPage/>} />
        <Route exact path='/Manage' element={<ManagePage/>} />
        <Route path='/Manage/:component' element={<ManagePage/>} />
        <Route path='*' element={<Pagenotfound/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;