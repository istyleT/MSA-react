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
import FooterElement from './components/mainfooter/FooterElement';
import ContactUsPage from './pages/ContactUsPage';
import JoinUsPage from './pages/JoinUsPage';
import PolicyCanvas from './pages/ComponentPages/PolicyCanvas';
import PopoverMessage from './pages/ComponentPages/PopoverMessage';
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
        <Route path='*' element={<Pagenotfound/>} />
    </Routes>
    <PolicyCanvas/>
    <PopoverMessage/>
    <FooterElement/>
    </BrowserRouter>
  );
}

export default App;