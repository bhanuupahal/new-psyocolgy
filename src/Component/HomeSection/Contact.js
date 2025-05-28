import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCalendarAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-16 bg-cover bg-center" 
           style={{ backgroundImage: "url('/images/contactus_png.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/60 via-blue-800/50 to-purple-900/60"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white drop-shadow-lg">Get In Touch</h1>
          <div className="w-32 h-1  mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-white leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            We're here to help you on your journey to better mental health
          </p>
        </div>
      </div>
      
      <div className="flex justify-center">
        <div className="inline-block text-center p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 mb-6 border-2 border-white">
          <h3 className="font-extrabold text-green-600 text-3xl md:text-5xl mb-4 drop-shadow-md">Book Your Appointment Now</h3>
          
        </div>
      </div>
      
      {/* Contact Form Section */}
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="bg-white rounded-2xl shadow-xl p-8 -mt-20 relative z-10 border-t border-l border-white/80">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Map on left side */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-xl">
              <h2 className="text-2xl font-serif font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Our Location</h2>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.5!2d75.7!3d29.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391237f467e7a7a7%3A0x7f82e5e2aa5a8c0!2sDSS-50%2C%20Sector%2015%2C%20Hisar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1625661234567!5m2!1sen!2sin" 
                width="100%" 
                height="400" 
                style={{ border: 0, borderRadius: '0.5rem' }}
                allowFullScreen="" 
                loading="lazy"
                className="shadow-md mb-6"
              ></iframe>
              
              
            </div>
            
            
              
              <div className="space-y-6 mt-8 bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-serif font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Contact Information</h3>
                
                {/* Appointment Booking */}
                <div className="bg-white/70 p-4 rounded-lg border-l-4 border-teal-500 shadow-md">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-teal-400 to-blue-500 rounded-full p-3 mr-4 shadow-md">
                      <FaCalendarAlt className="text-white" />
                    </div>
                    <div>
                      
                      <p className="text-teal-700 font-medium">Call us at +91-74047-94451,9468224451</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/70 p-4 rounded-lg border-l-4 border-teal-500 shadow-md">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-teal-400 to-blue-500 rounded-full p-3 mr-4 shadow-md">
                      <FaEnvelope className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Email</h3>
                      <p className="text-teal-700 break-words">behmanisuman@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/70 p-4 rounded-lg border-l-4 border-teal-500 shadow-md">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-teal-400 to-blue-500 rounded-full p-3 mr-4 shadow-md">
                      <FaMapMarkerAlt className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Office</h3>
                      <p className="text-teal-700">DSS-50 KAMRI ROAD SEC 15 HISAR HARYANA, INDIA</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-white/70 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Office Hours</h3>
                <p className="text-sm text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-sm text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-sm text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default Contact;


