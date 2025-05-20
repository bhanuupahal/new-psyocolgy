import React from "react";
import { Link } from "react-router-dom";
import { FaLock, FaCheckSquare, FaQuoteLeft } from "react-icons/fa";
import { FaBoltLightning, FaIdBadge } from "react-icons/fa6";

const Reset = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 to-green-50">
      {/* Hero Section */}
      <div className="relative py-20 bg-cover bg-center" 
           style={{ backgroundImage: "url('/images/Reset_png.avif')" }}>
        <div className="absolute inset-0 "></div>
        
      </div>
      <div className="text-center py-8">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-black mb-4">Why Choose Reset Yourself?</h1>
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-lg text-black leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Begin your journey to mental wellness with our comprehensive assessment and personalized therapy plans.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Section One - Left content and right image */}
        <div className="mb-16">
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Content on left side */}
            <div className="w-full md:w-2/3 flex flex-col items-start space-y-4">
              <div className="flex items-center px-6 py-4 w-full md:w-auto rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 duration-300 border border-l-4 border-teal-400 border-opacity-50">
                <div className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mr-3">
                  <span className="text-black text-xs font-bold">•</span>
                </div>
                <h3 className="text-lg font-bold text-black">Top Online Therapy Platform</h3>
              </div>
              
              <div className="flex items-center px-6 py-4 w-full md:w-auto rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 duration-300 border border-l-4 border-blue-400 border-opacity-50">
                <div className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mr-3">
                  <span className="text-black text-xs font-bold">•</span>
                </div>
                <h3 className="text-lg font-bold text-black">Best Online Therapy for You</h3>
              </div>
              
              <div className="flex items-center px-6 py-4 w-full md:w-auto rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 duration-300 border border-l-4 border-indigo-400 border-opacity-50">
                <div className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mr-3">
                  <span className="text-black text-xs font-bold">•</span>
                </div>
                <h3 className="text-lg font-bold text-black">24*7 Support from Our Team</h3>
              </div>
            </div>
            
            {/* Image on right side */}
            <div className="w-full md:w-1/3">
              <img 
                src="/images/choose1.webp" 
                alt="Choose therapy" 
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
        
        {/* Section Two - Left image and right content */}
        <div className="mb-16">
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Image on left side */}
            <div className="w-full md:w-1/3 order-2 md:order-1">
              <img 
                src="/images/choose2.webp" 
                alt="Choose therapy" 
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            
            {/* Content on right side */}
            <div className="w-full md:w-2/3 flex flex-col items-start space-y-4 order-1 md:order-2">
              <div className="flex items-center px-6 py-4 w-full md:w-auto rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 duration-300 border border-l-4 border-purple-400 border-opacity-50">
                <div className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mr-3">
                  <span className="text-black text-xs font-bold">•</span>
                </div>
                <h3 className="text-lg font-bold text-black">Get started with a free assessment</h3>
              </div>
              
              <div className="flex items-center px-6 py-4 w-full md:w-auto rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 duration-300 border border-l-4 border-pink-400 border-opacity-50">
                <div className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mr-3">
                  <span className="text-black text-xs font-bold">•</span>
                </div>
                <h3 className="text-lg font-bold text-black">Help you and your family live a healthier, happier life</h3>
              </div>
              
              <div className="flex items-center px-6 py-4 w-full md:w-auto rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 duration-300 border border-l-4 border-green-400 border-opacity-50">
                <div className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mr-3">
                  <span className="text-black text-xs font-bold">•</span>
                </div>
                <h3 className="text-lg font-bold text-black">Reset Yourself is the best therapy platform available today</h3>
              </div>
            </div>
          </div>
        </div>
        
        {/* About Reset Yourself Section */}
        <div className="mb-16">
          <div className="relative mt-6 p-8  rounded-xl shadow-xl border border-teal-100 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100 rounded-full opacity-20 -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-100 rounded-full opacity-20 -ml-8 -mb-8"></div>
            
            {/* Decorative line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-teal-400 via-blue-400 to-purple-400 rounded-full"></div>
            
            <div className="relative">
              {/* Header with enhanced styling */}
              <div className="flex items-center mb-5">
                <div className="bg-gradient-to-r from-teal-400 to-blue-500 p-3 rounded-full shadow-md mr-4">
                  <FaQuoteLeft className="text-white text-xl" />
                </div>
                <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                  About Reset Yourself
                </h4>
              </div>
              
              {/* Content with enhanced styling */}
              <div className="ml-4 pl-4 border-l-2 border-teal-100">
                <p className="text-gray-700 leading-relaxed text-lg transition transform">
                  Reset Yourself is a counselling platform for mental health issues and it has been designed to help you cope with 
                  <span className="font-medium text-teal-700"> depression, anxiety, stress </span> 
                  and other psychological conditions. At Reset Yourself, we believe that 
                  <span className="font-medium text-blue-700"> mental health is a vital part of personal fitness</span>. 
                  Reset Yourself provides the best services for mental health ranging from depression, anxiety counselling to child counselling and more.
                </p>
              </div>
              
              {/* Decorative bottom element */}
              <div className="mt-6 flex justify-end">
                <div className="h-1 w-32 bg-gradient-to-r from-teal-300 to-blue-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Reset;










