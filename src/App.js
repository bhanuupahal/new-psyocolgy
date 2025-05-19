import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Component/Nav";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Trusts from "./Component/Trusts";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import Testimonials from "./Component/Testimonials";

function App() {
  return (
    <div className="bg-gradient-to-r from-orange-100 to-green-50">
       <Router>
        <Nav/>
          <Routes>
           <Route path="/home" element={<Home/>} />
           <Route path="/about" element={<About/>} />
           <Route path="/contact" element={<Contact/>} />
           <Route path="/trusts" element={<Trusts/>} />
           <Route path="/testimonials" element={<Testimonials/>} />
           <Route path="/login" element={<Login/>} />
           <Route path="/signup" element={<Signup/>} />
           <Route path="/" element={<Home/>} />
         </Routes>
         </Router>
     </div>
  );
}

export default App;
