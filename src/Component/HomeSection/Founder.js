import React, { useState } from "react";
import { FaQuoteLeft, FaQuoteRight, FaAward, FaUniversity, FaUsers, FaBrain, FaLinkedin } from "react-icons/fa";

const galleryImages = [
  {
    src: "/images/IMG-20250523-WA0031.jpg",
    alt: "Gallery 1",
    border: "border-teal-100",
  },
  {
    src: "/images/IMG-20250523-WA0035.jpg",
    alt: "Gallery 2",
    border: "border-blue-100",
  },
  {
    src: "/images/IMG-20250523-WA0037.jpg",
    alt: "Gallery 3",
    border: "border-purple-100",
  },
  {
    src: "/images/IMG-20250523-WA0039.jpg",
    alt: "Gallery 4",
    border: "border-pink-100",
  },
  {
    src: "/images/IMG-20250523-WA0042.jpg",
    alt: "Gallery 5",
    border: "border-yellow-100",
  },
  {
    src: "/images/IMG-20250523-WA0033.jpg",
    alt: "Gallery 6",
    border: "border-green-100",
  },
];

const Founder = () => {
  const [modalImg, setModalImg] = useState(null);
  const [current, setCurrent] = useState(0);

  // Slide handlers for mobile
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-50 to-blue-50 py-20 relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
            Co-Founder's Message
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mt-6 rounded-full"></div>
          <h2 className="mt-6 text-2xl font-medium text-teal-700">Going beyond therapy</h2>
        </div>

        {/* Main Content with enhanced styling */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image and credentials with enhanced styling */}
          <div className="w-full lg:w-2/5">
            <div className="relative group">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl transform rotate-3 group-hover:rotate-1 transition-transform duration-300"></div>
              <img 
                src="/images/IMG-20250523-WA0029.jpg" 
                alt="Dr. Suman Behmani" 
                className="relative z-10 w-full h-auto rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition-all duration-300"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/600x800/teal/white?text=Dr.+Suman+Behmani";
                }}
              />
              
              {/* Social media overlay */}
              <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
                <a 
                  href="https://linkedin.com/in/dr-suman-behmani-57899a229" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white/80 hover:bg-white p-2 rounded-full text-blue-600 hover:text-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={20} />
                </a>
                
              </div>
            </div>
            
            <div className="mt-8 bg-white rounded-xl shadow-lg p-6 transform -translate-y-4 relative z-20 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-teal-700 mb-2">Dr. Suman Behmani</h3>
              <p className="text-gray-600 font-medium">Co-Founder, Reset Yourself</p>
              <p className="mt-2 text-gray-700">Relationship Psychologist</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2 text-teal-600">
                  <FaAward />
                  <span>10+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Biography content with enhanced styling */}
          <div className="w-full lg:w-3/5">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 relative hover:shadow-2xl transition-all duration-300 border border-white/50">
              <FaQuoteLeft className="absolute top-6 left-6 text-4xl text-teal-100" />
              
              <div className="space-y-6 relative z-10">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Dr. Suman Behmani is a seasoned Relationship Psychologist with a decade of experience in mental health enhancement and counseling. Together with her team, they aim to provide a supportive environment for individuals to navigate the mental and emotional challenges of their professional journey.
                </p>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  Dr. Behmani is a compassionate and highly skilled psychologist specializing in one-on-one personal sessions. With a wealth of experience and a deep understanding of human behaviour, she is dedicated to helping individuals overcome challenges, improve their mental well-being, and reach their full potential.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-teal-50 p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-teal-400">
                    <div className="flex items-center mb-3">
                      <FaUniversity className="text-teal-600 mr-3 text-xl" />
                      <h4 className="font-bold text-teal-700">Experience</h4>
                    </div>
                    <p className="text-gray-700">A decade of experience in private practice, offering individual therapy and counselling services in clinical settings with diverse populations.</p>
                  </div>
                  
                  <div className="bg-blue-50 p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-blue-400">
                    <div className="flex items-center mb-3">
                      <FaUsers className="text-blue-600 mr-3 text-xl" />
                      <h4 className="font-bold text-blue-700">Speaking</h4>
                    </div>
                    <p className="text-gray-700">Delivered lectures at prominent institutions, including the BAR Council, Hisar Army Cantonment, and Banking sector.</p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  These experiences have allowed me to share my expertise in psychology and engage with diverse audiences. My approach to lectures involves blending theoretical knowledge with practical applications, fostering an interactive and enriching learning environment. I am committed to contributing to the intellectual growth of individuals and organizations.
                </p>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="font-bold text-teal-700 flex items-center mb-4 text-lg">
                    <FaBrain className="mr-2" /> Therapeutic Modalities
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {["Cognitive-Behavioural Therapy (CBT)", "Mindfulness-Based Stress Reduction", 
                      "Psychodynamic Therapy", "Solution-Focused Therapy", 
                      "Acceptance and Commitment Therapy (ACT)"].map((therapy, index) => (
                      <span key={index} className="bg-gradient-to-r from-teal-100 to-blue-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:from-teal-200 hover:to-blue-200 transform hover:scale-105">
                        {therapy}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <FaQuoteRight className="absolute bottom-6 right-6 text-4xl text-teal-100" />
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-20 mb-8">
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-8">Gallery</h2>
          {/* Mobile slider */}
          <div className="block md:hidden relative">
            <div className="flex items-center justify-center">
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow z-10"
                aria-label="Previous"
              >
                &#8592;
              </button>
              <img
                src={galleryImages[current].src}
                alt={galleryImages[current].alt}
                className={`w-full h-80 object-contain rounded-xl shadow-lg border-4 ${galleryImages[current].border} bg-white cursor-pointer`}
                onClick={() => setModalImg(galleryImages[current])}
              />
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow z-10"
                aria-label="Next"
              >
                &#8594;
              </button>
            </div>
            <div className="flex justify-center mt-2 gap-2">
              {galleryImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-2 h-2 rounded-full ${idx === current ? "bg-teal-600" : "bg-gray-300"}`}
                />
              ))}
            </div>
          </div>
          {/* Grid for tablet/desktop */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.alt}
                className={`w-full h-80 object-contain rounded-xl shadow-lg border-4 ${img.border} bg-white cursor-pointer transition-transform duration-200 hover:scale-105`}
                onClick={() => setModalImg(img)}
              />
            ))}
          </div>
        </div>

        {/* Modal for enlarged image */}
        {modalImg && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setModalImg(null)}
          >
            <img
              src={modalImg.src}
              alt={modalImg.alt}
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl border-8 border-white"
              onClick={e => e.stopPropagation()}
            />
          </div>
        )}

      </div>
      
      {/* Animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Founder;




