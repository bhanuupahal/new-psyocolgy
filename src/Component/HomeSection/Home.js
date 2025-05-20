import React from "react";
import { Link } from "react-router-dom";
import { FaLock, FaCheckSquare, FaQuoteLeft } from "react-icons/fa";
import { FaBoltLightning, FaIdBadge } from "react-icons/fa6";
import Hero from "./Hero";
import Reset from "./Reset";
import About from "./About";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import MentalHealth from "./MentalHealth"; // Import the new MentalHealth component

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      <Reset />
    
      <About />
      <Testimonials />
        <MentalHealth /> 
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
