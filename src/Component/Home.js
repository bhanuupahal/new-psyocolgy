import React from "react";
import { Link } from "react-router-dom";
import { FaLock, FaCheckSquare, FaQuoteLeft } from "react-icons/fa";
import { FaBoltLightning, FaIdBadge } from "react-icons/fa6";
//import doc from "./doc1.png";
// Remove the incorrect import

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-evenly space-y-12 lg:space-x-20 lg:space-y-0 p-6 sm:p-8 lg:p-20 bg-white">
        {/* Text Section */}
        <div className="max-w-lg text-lg sm:text-xl lg:text-2xl text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-serif font-semibold capitalize mb-8 sm:mb-10">
            Instant Mental Health Support
          </h1>
          <p className="text-sm sm:text-base lg:text-lg mb-6">
            Reset Yourself. Work on helping you find the triggers and finding solutions to coping with the triggers and anxiety.
          </p>

          <div className="flex space-x-4 mb-6">
            <button className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition transform">Get Appointment</button>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition transform">Find Specialist</button>
          </div>
        </div>

        {/* Image Section with bg11 on the right */}
        {/* <div className="relative w-72 sm:w-80 lg:w-96 h-auto bg-gradient-to-b from-white to-blue-50 rounded-lg shadow-md"> */}
          {/* <img src={doc} alt="Platform Features" className="w-full h-[400px] sm:h-[450px] lg:h-[500px] object-cover rounded-lg" /> */}
          
          {/* bg11 image on the right side - using public path */}
          <div className="absolute right-32 top- transform -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg border-4 border-white">
            <img src=".//images/bg11.webp" alt="Background" className="w-full h-full object-cover" />
          </div>

          {/* Testimonial Section */}
          <div className="absolute top-6 sm:top-10 -left-6 sm:-left-20 flex items-center bg-white shadow-lg p-2 sm:p-3 rounded-xl space-x-2 sm:space-x-3">
            <FaBoltLightning className="text-teal-500 text-xl sm:text-3xl" />
            <h1 className="text-base sm:text-lg font-semibold">Complete in <br /> just 15 minutes</h1>
          </div>

          <div className="absolute bottom-32 sm:bottom-40 rotate-12 -left-2 sm:-left-6 h-10 sm:h-12 w-10 sm:w-12 flex items-center justify-center bg-teal-400 rounded-lg shadow-md">
            <FaLock className="text-white text-lg sm:text-xl" />
          </div>

          <div className="absolute bottom-4 sm:bottom-9 -right-4 sm:-right-16 flex items-center justify-center w-auto px-4 sm:px-6 py-2 sm:py-3 border-2 border-gray-300 rounded-md bg-white text-black shadow-md">
            <FaIdBadge className="text-teal-400 h-10 w-10 text-base sm:text-lg mr-2" />
            <span className="font-medium text-sm sm:text-base">With Expert<br /> Guidance</span>
          </div>

          <div className="absolute top-6 sm:top-10 right-6 sm:-right-5 rotate-12 flex items-end bg-yellow-700 shadow-lg p-2 sm:p-3 rounded-xl">
            <FaCheckSquare className="text-white" />
          </div>
        {/* </div> */}
      </div>

      {/* About Section */}
      <div className="p-8 bg-gradient-to-r from-orange-100 to-green-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-serif font-bold mb-6">About Us</h1>
          <p className="mb-4">
            We are dedicated to improving mental health through accessible and effective solutions.
          </p>
          {/* Add more content as needed */}
        </div>
      </div>

      {/* Testimonials Section */}
      <div 
        className="p-8 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/images/psychologist_png.avif')"
        }}
      >
        <div className="max-w-5xl mx-auto backdrop-blur-sm bg-white/30 p-6 sm:p-10 rounded-xl shadow-lg">
          <h1 className="text-3xl font-serif font-bold mb-8 text-center text-gray-800">What Our Clients Say</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 duration-300">
                <FaQuoteLeft className="text-teal-500 mb-4 text-xl" />
                <p className="mb-4 italic text-gray-700">{testimonial.quote}</p>
                <div className="font-bold">{testimonial.name}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/testimonials" className="inline-block px-6 py-3 bg-teal-500 text-white font-semibold rounded-full shadow-lg hover:bg-teal-400 transition transform hover:scale-105">
              View All Testimonials
            </Link>
          </div>
        </div>
      </div>

      {/* Trusts Section */}
      <div className="p-8 bg-gradient-to-r from-blue-100 to-teal-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-serif font-bold mb-6">Our Trusted Partners</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Partner cards */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold mb-2">Partner 1</h3>
              <p>Description of partnership and benefits</p>
            </div>
            {/* Add more partner cards as needed */}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="p-8 bg-gradient-to-r from-orange-100 to-green-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-serif font-bold mb-6">Contact Us</h1>
          <form className="space-y-4">
            <div>
              <label className="block mb-1">Name</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input type="email" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block mb-1">Message</label>
              <textarea className="w-full p-2 border rounded h-32"></textarea>
            </div>
            <button className="bg-teal-500 text-white px-6 py-2 rounded-xl hover:bg-teal-400">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Testimonial data
const testimonials = [
  {
    name: "Rohit M.",
    quote: "Dr. Suman Behmani has been a life-changer for me. Her compassionate approach and insightful guidance helped me navigate through a very tough period in my life. I highly recommend her services."
  },
  {
    name: "Aisha L.",
    quote: "Dr. Behmani's expertise in psychology is evident from the first session. She creates a safe space where I felt comfortable sharing my deepest concerns. Her strategies for managing anxiety have truly transformed my life."
  },
  {
    name: "Vikram T.",
    quote: "Working with Dr. Suman has been an incredible experience. Her professional yet empathetic demeanor makes it easy to open up, and her practical advice has been invaluable for my personal growth."
  },
  {
    name: "Priya R.",
    quote: "Dr. Behmani's counseling has greatly improved my relationships. She taught me effective communication techniques that have strengthened my connection with my partner and family. I am so grateful for her help."
  },
  {
    name: "Anil S.",
    quote: "I can't thank Dr. Suman enough for her support and guidance. She has a unique ability to understand complex emotional issues and provide clear, actionable solutions. Her impact on my mental health has been profound."
  },
  {
    name: "Neha K.",
    quote: "Dr. Behmani's sessions are always insightful and empowering. She has helped me develop coping mechanisms for stress and depression that I can rely on every day. Her support has been a lifeline."
  }
];

export default Home;
