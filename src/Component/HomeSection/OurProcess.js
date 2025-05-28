import React from 'react';
import { FaClipboardList, FaHandsHelping, FaCalendarCheck, FaYoutube, FaQuoteLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Add this import

const OurProcesses = () => {
  return (
    <div className="bg-gradient-to-r from-white to-blue-50/70 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section with refined styling */}
        <div className="text-center mb-14">

          <h1 className="text-3xl md:text-5xl font-bold font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-blue-700 mb-3">Our Processes</h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-teal-300 to-blue-300 mx-auto mb-5 rounded-full"></div>
          <p className="text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
            At <span className="font-medium text-teal-600">Reset Yourself</span>, we follow a very simple method of letting our clients do the booking.
            Follow these steps:
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Side - Text Section with refined styling */}
          <div className="lg:w-2/5">
            {/* Steps with calmer styling */}
            <div className="space-y-6">
              {[
                {
                  number: 1,
                  icon: <FaClipboardList className="text-white text-lg" />,
                  title: "Fill The Questionnaire",
                  desc: "The first step involves filling a basic questionnaire which involves writing about your mandatory information.",
                  color: "from-teal-400/90 to-teal-500/90"
                },
                {
                  number: 2,
                  icon: <FaHandsHelping className="text-white text-lg" />,
                  title: "Pick The Services",
                  desc: "We offer multiple services, and as per your needs you can choose the most apt one.",
                  color: "from-blue-400/90 to-blue-500/90"
                },
                {
                  number: 3,
                  icon: <FaCalendarCheck className="text-white text-lg" />,
                  title: "Book The Session",
                  desc: "The last step is to book your appointment with the Best as per your convenience time.",
                  color: "from-purple-400/90 to-purple-500/90"
                },
              ].map((step) => {
                const card = (
                  <div
                    className="bg-white/90 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col sm:flex-row group cursor-pointer"
                  >
                    <div className={`bg-gradient-to-br ${step.color} p-5 sm:p-6 flex items-center justify-center sm:rounded-l-lg group-hover:scale-102 transition-transform duration-300`}>
                      <div className="flex flex-col items-center sm:items-center">
                        <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center mb-1.5 shadow-inner">
                          {step.icon}
                        </div>
                        <span className="text-white text-xl font-bold">{step.number}</span>
                      </div>
                    </div>
                    <div className="p-5 flex-1">
                      <h3 className="font-bold text-lg mb-2 text-gray-700 group-hover:text-teal-600 transition-colors duration-300">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                );
                // Only wrap step 2 in a Link
                if (step.number === 2) {
                  return (
                    <div key={step.number}>
                      <Link to="/services" style={{ textDecoration: "none" }}>
                        {card}
                      </Link>
                    </div>
                  );
                }
                return <div key={step.number}>{card}</div>;
              })}
            </div>

            {/* Footer Text with calmer styling */}
            <div className="mt-8 p-5 bg-gradient-to-r from-teal-50/80 to-blue-50/80 rounded-lg border-l-3 border-teal-400/70 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex">
                <FaQuoteLeft className="text-teal-300/80 text-2xl mr-3 flex-shrink-0" />
                <p className="text-gray-600 italic text-sm leading-relaxed">
                  We at <span className="font-medium text-teal-600">Reset Yourself</span> work on helping you find the triggers and finding solutions to coping with the triggers and anxiety.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - YouTube Video with refined styling */}
          <div className="lg:w-3/5 flex justify-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-2xl transform hover:-translate-y-1 transition-all duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/30 to-blue-400/30 rounded-xl blur opacity-30 animate-pulse"></div>
              <div className="relative aspect-video w-full bg-black rounded-lg overflow-hidden shadow-lg border border-white/50">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/JjOcQE3yg7I?si=aGhcH2sFayQwmEzu"
                  title="Reset Yourself Process"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* YouTube Link Button with calmer styling */}
                <a 
                  href="https://youtu.be/JjOcQE3yg7I?si=aGhcH2sFayQwmEzu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-red-500/90 hover:bg-red-600 text-white px-3 py-1.5 rounded-full flex items-center space-x-1.5 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-102 text-sm"
                >
                  <FaYoutube className="text-lg" />
                  <span>Watch on YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcesses;
