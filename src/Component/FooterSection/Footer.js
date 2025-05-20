import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-900 to-blue-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6 text-teal-300">A SOULFUL JOURNEY</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Reset Yourself listens to people's hearts and guides them towards a better life. 
              We wish to render our services online while getting paid, providing you with the 
              right place for mental wellness and growth.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 transition duration-300">
                <FaFacebook className="text-white" />
              </a>
              <a href="https://youtube.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 transition duration-300">
                <FaYoutube className="text-white" />
              </a>
              <a href="https://twitter.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 transition duration-300">
                <FaTwitter className="text-white" />
              </a>
              <a href="https://instagram.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 transition duration-300">
                <FaInstagram className="text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Site Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6 text-teal-300">Site</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/home" className="text-gray-300 hover:text-teal-300 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-teal-300 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-teal-300 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Important Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6 text-teal-300">Important Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-teal-300 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-teal-300 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-teal-300 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-teal-300 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-teal-300 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Logo and Follow Us */}
          <div>
            <div className="mb-6">
              <img 
                src="/images/logo.webp" 
                alt="Reset Yourself Logo" 
                className="h-20 bg-white/10 p-2 rounded-lg"
              />
            </div>
            <h3 className="text-xl font-serif font-bold mb-4 text-teal-300">Follow Us</h3>
            <div className="grid grid-cols-2 gap-3">
              <a href="https://facebook.com" className="flex items-center space-x-2 text-gray-300 hover:text-teal-300 transition duration-300">
                <FaFacebook /> <span>Facebook</span>
              </a>
              <a href="https://youtube.com" className="flex items-center space-x-2 text-gray-300 hover:text-teal-300 transition duration-300">
                <FaYoutube /> <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black/20 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              Copyright ©2024 Reset Yourself Pvt Ltd. All Rights Reserved | 
              <Link to="/legal" className="hover:text-teal-300 transition duration-300 ml-1">
                Legal Notice
              </Link>
            </div>
            <div className="text-gray-400 text-sm">
              Promoted with <span className="text-teal-300">mind</span> by 
              <a href="https://meharetech.com" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-white transition duration-300 ml-1">
                MeharEtech
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
