import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Component/NavbarSection/Nav";
import Home from "./Component/HomeSection/Home";
import About from "./Component/HomeSection/About";
import Contact from "./Component/HomeSection/Contact";

import Footer from "./Component/FooterSection/Footer";
import Founder from "./Component/HomeSection/Founder";
import OurProcesses from "./Component/HomeSection/OurProcess";

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
        
        <Route path="/OurProcess" element={<OurProcesses/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;





