import React from "react";
import { Link } from "react-router-dom";
import { FaLock, FaCheckSquare, FaQuoteLeft } from "react-icons/fa";
import { FaBoltLightning, FaIdBadge } from "react-icons/fa6";
import Hero from "./Hero";
import Reset from "./Reset";
import About from "./About"; // Import the About component
import Contact from "./Contact"; // Import the Contact component
import Testimonials from "./Testimonials"; // Import the Testimonials component
import FAQ from "./FAQ"; // Import the FAQ component

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      <Reset />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
