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
                    <img
                      src="/images/IMG-20250523-WA0041.jpg"
                      alt="Dr. Suman Behmani"
                      className="h-full w-auto object-cover rounded-2xl shadow-lg"
                    />
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
                Dr. Suman Behmani is a Psychologist and Family Therapist Specializing in Mental Health Treatment and Counseling across various life stages. Offering a safe, Supportive, and Confidential Environment, Dr. Suman helps individuals manage their Thoughts, Feelings, and Behaviors while learning new skills to manage Stress, Anxiety, Depression, Anger, Conflict, Communication Issues and More.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Committed to enhancing well-being and improving relationships, Dr. Suman aims to help individuals live more fulfilling lives and develop skills that will benefit their personal and professional growth.
              </p>
            </div>
          </div>
          
          
        </div>
      </div>

      

      {/* Approach Section */}
      <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Our Approach</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-t border-l border-white/80 hover:shadow-blue-100 transition-all duration-300 transform hover:-translate-y-1">
            <p className="text-gray-700 leading-relaxed mb-8 text-lg border-l-4 border-teal-400 pl-6 py-2 italic">
              Dr. Suman creates a safe, supportive, and confidential environment where clients can freely express themselves without judgment. Through evidence-based practices and personalized treatment plans, clients learn valuable skills to manage their mental health challenges effectively.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-teal-400">
                <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-full p-3 mr-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-teal-800 text-xl">Personalized Care</h3>
                  <p className="text-teal-700">Tailored treatment plans addressing your specific needs and goals.</p>
                </div>
              </div>
              
              <div className="flex items-start bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-blue-400">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-full p-3 mr-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-blue-800 text-xl">Evidence-Based</h3>
                  <p className="text-blue-700">Using proven therapeutic techniques backed by research.</p>
                </div>
              </div>
              
              <div className="flex items-start bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-purple-400">
                <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-full p-3 mr-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-purple-800 text-xl">Confidential</h3>
                  <p className="text-purple-700">Your privacy is respected and protected at all times.</p>
                </div>
              </div>
              
              <div className="flex items-start bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-pink-400">
                <div className="bg-gradient-to-br from-pink-400 to-pink-600 rounded-full p-3 mr-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-pink-800 text-xl">Supportive Environment</h3>
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


