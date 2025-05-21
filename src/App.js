import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Component/NavbarSection/Nav";
import Home from "./Component/HomeSection/Home";
import About from "./Component/HomeSection/About";
import Contact from "./Component/HomeSection/Contact";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import Footer from "./Component/FooterSection/Footer";
import Founder from "./Component/HomeSection/Founder";

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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;





