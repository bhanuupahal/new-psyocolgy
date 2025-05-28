import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Component/NavbarSection/Nav";
import Home from "./Component/HomeSection/Home";
import About from "./Component/HomeSection/About";
import Contact from "./Component/HomeSection/Contact";
import Footer from "./Component/FooterSection/Footer";
import Founder from "./Component/HomeSection/Founder";
import OurProcesses from "./Component/HomeSection/OurProcess";
import Services from "./Component/ServiceSection/Services";
import Marriage from "./Component/ServiceSection/Marriage";
import Separation from "./Component/ServiceSection/Separation";
import Stress from "./Component/ServiceSection/Stress";
import Pregancy from "./Component/ServiceSection/Pregancy";
import Family from "./Component/ServiceSection/Family";
import Divorce from "./Component/ServiceSection/Divorce";
import Couple from "./Component/ServiceSection/Couple";
import Admin from "./Component/AdminSection/Admin";
import Login from "./Component/AdminSection/Login";
import Register from "./Component/AdminSection/Register";
import StatsCard from "./Component/HomeSection/Stats";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/OurProcess" element={<OurProcesses />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/marriage" element={<Marriage />} />
        <Route path="/services/separation" element={<Separation />} />
        <Route path="/services/stress" element={<Stress />} />
        <Route path="/services/pregancy" element={<Pregancy />} />
        <Route path="/services/family" element={<Family />} />
        <Route path="/services/divorce" element={<Divorce />} />
        <Route path="/services/couple" element={<Couple />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Stats" element={<StatsCard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;





