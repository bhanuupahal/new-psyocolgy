import React from "react";
import { FaUserMd, FaHeart, FaComments, FaBrain, FaStar, FaAward, FaCertificate, FaGraduationCap } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-20 bg-cover bg-center" 
           style={{ backgroundImage: "url('/images/psychologist_png.avif')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 via-teal-800/50 to-blue-900/60"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-8 py-2 rounded-full mb-4">
            <span className="text-white font-medium tracking-wider">Professional Psychologist</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white drop-shadow-lg">About Dr. Suman Behmani</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-teal-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-white leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Dedicated to improving mental health and well-being through compassionate care and evidence-based practices.
          </p>
        </div>
      </div> 

      {/* Introduction Section */}
      <div className="max-w-5xl mx-auto px-6 py-28">
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-8 -mt-20 relative z-10 border-t border-l border-white/80">
          <div className="absolute -top-5 -left-5 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg font-bold px-6 py-2 rounded-full shadow-lg">
            Meet Dr. Suman
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600 pt-4">Introduction</h2>
          <div className="md:flex items-center gap-8">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-30"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="h-64 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                    <FaUserMd className="text-white text-7xl" />
                  </div>
                  <div className="p-4 text-center">
                    <div className="flex justify-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                    <p className="font-medium text-gray-800">10+ Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Dr. Suman Behmani is a psychologist and family therapist specializing in mental health treatment and counseling across various life stages. Offering a safe, supportive, and confidential environment, Dr. Suman helps individuals manage their thoughts, feelings, and behaviors while learning new skills to manage stress, anxiety, depression, anger, conflict, communication issues and more.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Committed to enhancing well-being and improving relationships, Dr. Suman aims to help individuals live more fulfilling lives and develop skills that will benefit their personal and professional growth.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-xl text-center">
              <div className="bg-pink-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaAward className="text-pink-600 text-xl" />
              </div>
              <p className="font-medium text-pink-800">Certified Expert</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center">
              <div className="bg-purple-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaCertificate className="text-purple-600 text-xl" />
              </div>
              <p className="font-medium text-purple-800">Licensed Therapist</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center">
              <div className="bg-blue-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaGraduationCap className="text-blue-600 text-xl" />
              </div>
              <p className="font-medium text-blue-800">PhD in Psychology</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-4 rounded-xl text-center">
              <div className="bg-teal-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaHeart className="text-teal-600 text-xl" />
              </div>
              <p className="font-medium text-teal-800">Compassionate Care</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">WHAT WE OFFER</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-600">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-teal-400 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-2 duration-300 border border-purple-100">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <FaBrain className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-purple-800">Mental Health Treatment</h3>
            <p className="text-purple-700 text-center">Comprehensive treatment for various mental health conditions.</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-2 duration-300 border border-blue-100">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <FaComments className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-blue-800">Family Therapy</h3>
            <p className="text-blue-700 text-center">Resolving conflicts and improving communication within families.</p>
          </div>
          
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-2 duration-300 border border-teal-100">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <FaUserMd className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-teal-800">Individual Counseling</h3>
            <p className="text-teal-700 text-center">Personalized support for your unique mental health journey.</p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-2 duration-300 border border-pink-100">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <FaHeart className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-pink-800">Relationship Counseling</h3>
            <p className="text-pink-700 text-center">Building stronger, healthier relationships through effective communication.</p>
          </div>
        </div>
      </div>

      {/* Approach Section */}
      <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">OUR METHODOLOGY</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Our Approach</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t border-l border-white/80">
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              Dr. Suman creates a safe, supportive, and confidential environment where clients can freely express themselves without judgment. Through evidence-based practices and personalized treatment plans, clients learn valuable skills to manage their mental health challenges effectively.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start bg-gradient-to-br from-teal-50 to-teal-100 p-4 rounded-xl">
                <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-full p-3 mr-4 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-teal-800">Personalized Care</h3>
                  <p className="text-teal-700">Tailored treatment plans addressing your specific needs and goals.</p>
                </div>
              </div>
              
              <div className="flex items-start bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-full p-3 mr-4 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-blue-800">Evidence-Based</h3>
                  <p className="text-blue-700">Using proven therapeutic techniques backed by research.</p>
                </div>
              </div>
              
              <div className="flex items-start bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl">
                <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-full p-3 mr-4 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-purple-800">Confidential</h3>
                  <p className="text-purple-700">Your privacy is respected and protected at all times.</p>
                </div>
              </div>
              
              <div className="flex items-start bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-xl">
                <div className="bg-gradient-to-br from-pink-400 to-pink-600 rounded-full p-3 mr-4 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-pink-800">Supportive Environment</h3>
                  <p className="text-pink-700">A safe space to express yourself without judgment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

