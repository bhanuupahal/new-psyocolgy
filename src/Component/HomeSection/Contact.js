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
          <div className="w-32 h-1 bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-white leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            We're here to help you on your journey to better mental health
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="bg-white rounded-2xl shadow-xl p-8 -mt-20 relative z-10 border-t border-l border-white/80">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-xl">
              <h2 className="text-2xl font-serif font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Contact Information</h2>
              
              <div className="space-y-6">
                {/* Appointment Booking - New Section */}
                <div className="bg-white/70 p-4 rounded-lg border-l-4 border-teal-500 shadow-md">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-teal-400 to-blue-500 rounded-full p-3 mr-4 shadow-md">
                      <FaCalendarAlt className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 text-lg">Book Your Appointment Now</h3>
                      <p className="text-teal-700 font-medium">Call us at +91-74047-94451</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-teal-400 to-blue-500 rounded-full p-3 mr-4 shadow-md">
                    <FaPhone className="text-white" />
                  </div>
                  
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-teal-400 to-blue-500 rounded-full p-3 mr-4 shadow-md">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Email</h3>
                    <p className="text-teal-700">dr.suman@mentalhealth.com</p>
                  </div>
                </div>
                
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
                <p className="text-sm text-gray-600">Sunday: Closed</p>
              </div>
            </div>
            
            {/* Form */}
            <div>
              <h2 className="text-2xl font-serif font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Send a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block mb-1 text-gray-700">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-300 focus:border-teal-500 outline-none transition" 
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-300 focus:border-teal-500 outline-none transition" 
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-300 focus:border-teal-500 outline-none transition" 
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Message</label>
                  <textarea 
                    className="w-full p-3 border border-gray-200 rounded-lg h-32 focus:ring-2 focus:ring-teal-300 focus:border-teal-500 outline-none transition" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 px-6 rounded-lg hover:from-teal-400 hover:to-blue-400 transition shadow-md flex items-center justify-center">
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


