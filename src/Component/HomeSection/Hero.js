import React from "react";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-8 sm:px-12 lg:px-24 bg-white">
      {/* Text Section */}
      <div className="max-w-xl text-xl sm:text-2xl lg:text-3xl text-center lg:text-left lg:w-1/2">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-serif font-bold capitalize mb-8 sm:mb-10 text-teal-800">
          Instant Mental Health Support
        </h1>
        <p className="text-base sm:text-lg lg:text-xl mb-8 text-gray-700">
          Reset Yourself. Work on helping you find the triggers and finding solutions to coping with the triggers and anxiety.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
          <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white text-lg font-semibold rounded-full shadow-xl hover:scale-105 transition transform">Get Appointment</button>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white text-lg font-semibold rounded-full shadow-xl hover:scale-105 transition transform">Find Specialist</button>
        </div>
      </div>
      
        {/* Centered image in the yellow div */}
        <div className="w-96 h-96 sm:w-[28rem] sm:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full overflow-hidden border-4 mx-auto lg:mr-24">
          <img src="/images/bg11.webp" alt="Background" className="w-full h-full object-cover" />
        </div>
      </div>
    // </div>
  );
};

export default Hero;


