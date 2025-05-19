 import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto py-3 px-2">
        {/* Logo */}
        <Link to="/home" className="flex items-center">
          <img 
            src="/images/logo.webp" 
            className="h-16 md:h-20 transition-all duration-300 hover:scale-105" 
            alt="Logo"  
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="md:hidden p-2 w-10 h-10 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`w-full md:flex md:w-auto ${isMobileMenuOpen ? "block absolute top-full left-0 right-0 bg-gradient-to-r from-orange-100 to-green-50 shadow-lg p-4 z-50" : "hidden"}`}>
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            {[
              { to: "/home", label: "Home" }, 
              { to: "/about", label: "About" }, 
              { to: "/contact", label: "Contact" }, 
              { to: "/trusts", label: "Trusts" },
              { to: "/testimonials", label: "Testimonials" }
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-black font-serif text-lg hover:text-emerald-500 hover:scale-105 transition duration-200 relative group"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            {/* Login & Signup Links */}
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <Link
                to="/login"
                className="text-white font-serif text-lg bg-teal-500 rounded-xl px-6 py-2 hover:bg-teal-400 hover:shadow-lg transition duration-200"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-white font-serif text-lg bg-teal-500 rounded-xl px-6 py-2 hover:bg-teal-400 hover:shadow-lg transition duration-200"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
