import React, { useState } from "react";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredTestimonials = filter === "all" 
    ? testimonials 
    : testimonials.slice(0, 5);

  // Custom arrow components for the slider
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button 
        className="absolute left-0 z-10 top-1/2 -translate-y-1/2 -ml-5 bg-white/80 p-2 rounded-full shadow-md hover:bg-teal-500 hover:text-white transition"
        onClick={onClick}
      >
        <FaChevronLeft />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button 
        className="absolute right-0 z-10 top-1/2 -translate-y-1/2 -mr-5 bg-white/80 p-2 rounded-full shadow-md hover:bg-teal-500 hover:text-white transition"
        onClick={onClick}
      >
        <FaChevronRight />
      </button>
    );
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    rtl: true, // Right to left animation
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Change slides every 3 seconds
    pauseOnHover: true, // Pause autoplay when hovering
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div 
      className="min-h-screen p-4 sm:p-8 bg-cover bg-center bg-fixed"
      style={{ 
        backgroundImage: "url('/images/psychologist_png.avif'), linear-gradient(to right, rgba(94, 234, 212, 0.8), rgba(59, 130, 246, 0.8))",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="max-w-6xl mx-auto backdrop-blur-sm bg-white/30 p-6 sm:p-10 rounded-xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4 sm:mb-8 text-center text-gray-800">
          What Our Clients Say
        </h1>
        
        <div className="mb-8 flex justify-center">
          <div className="bg-white/80 p-3 rounded-full shadow-md flex space-x-2">
            <button 
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full transition ${filter === "all" ? "bg-teal-500 text-white" : "hover:bg-teal-100"}`}
            >
              All Reviews
            </button>
            <button 
              onClick={() => setFilter("recent")}
              className={`px-4 py-2 rounded-full transition ${filter === "recent" ? "bg-teal-500 text-white" : "hover:bg-teal-100"}`}
            >
              Recent Reviews
            </button>
          </div>
        </div>
        
        <div className="relative px-8">
          <Slider {...settings}>
            {filteredTestimonials.map((testimonial, index) => (
              <div key={index} className="px-2">
                <div className="bg-white/90 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 duration-300 backdrop-blur-sm h-full">
                  <div className="flex justify-between items-start mb-4">
                    <FaQuoteLeft className="text-teal-500 text-xl sm:text-2xl" />
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                  <p className="mb-4 italic text-gray-700 text-sm sm:text-base">{testimonial.quote}</p>
                  <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
                    <div className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-xs text-gray-500">Satisfied Client</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
        {filter !== "all" && (
          <div className="text-center mt-8">
            <button 
              onClick={() => setFilter("all")}
              className="inline-block px-6 py-3 bg-teal-500 text-white font-semibold rounded-full shadow-lg hover:bg-teal-400 transition transform hover:scale-105"
            >
              View All Testimonials
            </button>
          </div>
        )}

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-8 mt-16">
          <a href="https://www.facebook.com/sumni.dear" target="_blank" rel="noopener noreferrer"
            className="border-4 border-blue-600 rounded-full p-4 hover:bg-blue-600 hover:text-white transition text-blue-600 text-4xl">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/dr_suman_behmani?igsh=Z284dWVsY2FmNHE1" target="_blank" rel="noopener noreferrer"
            className="border-4 border-pink-500 rounded-full p-4 hover:bg-pink-500 hover:text-white transition text-pink-500 text-4xl">
            <FaInstagram />
          </a>
          <a href="https://youtu.be/TF9EFA2P2Zk?si=Gu2PCICGMzoODqEX" target="_blank" rel="noopener noreferrer"
            className="border-4 border-red-600 rounded-full p-4 hover:bg-red-600 hover:text-white transition text-red-600 text-4xl">
            <FaYoutube />
          </a>
          <a href="https://linkedin.com/in/dr-suman-behmani-57899a229" target="_blank" rel="noopener noreferrer"
            className="border-4 border-blue-800 rounded-full p-4 hover:bg-blue-800 hover:text-white transition text-blue-800 text-4xl">
            <FaLinkedin />
          </a>
        </div>

        {/* Logo Section */}
        <div className="flex justify-center mt-10">
          <img
            src="/images/logo (2).webp"
            alt="Logo"
            className="w-40 h-40 object-contain rounded-full shadow-xl border-4 border-teal-200 bg-white"
          />
        </div>
      </div>
    </div>
  );
};

// Testimonial data
const testimonials = [
  {
    name: "Romit k.",
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
  },
  {
    name: "Rajesh W.",
    quote: "I've seen many counselors over the years, but Dr. Suman stands out with her genuine care and expert knowledge. She helped me work through anger and conflict in a way that has positively changed my life."
  },
  {
    name: "Maya H.",
    quote: "Dr. Behmani is a wonderful psychologist. Her understanding of mental health issues is deep, and her approach is always warm and non-judgmental. I feel much more confident and content thanks to her guidance."
  },
  {
    name: "Arjun J.",
    quote: "Dr. Suman has been instrumental in my journey towards better mental health. Her ability to listen and provide tailored advice has made a significant difference in how I handle stress and anxiety."
  },
  {
    name: "Lakshmi B.",
    quote: "I was struggling with severe depression, and Dr. Behmani's counseling was a turning point for me. Her empathetic approach and practical strategies have helped me reclaim my life. I can't recommend her enough."
  }
];

export default Testimonials;