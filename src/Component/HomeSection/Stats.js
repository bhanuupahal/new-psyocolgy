// StatsCard.jsx
import React from "react";
import { FaUsers, FaAward, FaHandshake } from "react-icons/fa";

const stats = [
  { number: "+2466", label: "Sessions", icon: <FaUsers /> },
  { number: "+16", label: "Awards", icon: <FaAward /> },
  { number: "+3158", label: "Clients Base", icon: <FaHandshake /> },
];

const StatsCard = () => (
  <div className="bg-gradient-to-r from-blue-200 via-pink-300 to-purple-400 py-12 px-6 rounded-2xl shadow-2xl my-10">
    <h2 className="text-3xl font-extrabold text-white text-center mb-8 tracking-wide drop-shadow-lg">
      Our Achievements
    </h2>
    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center bg-white/10 rounded-xl p-8 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <div className="text-5xl mb-4 text-white drop-shadow-lg animate-bounce">
            {stat.icon}
          </div>
          <div className="text-4xl font-bold text-white drop-shadow">{stat.number}</div>
          <div className="text-lg mt-2 text-green-100 tracking-wide font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
);

export default StatsCard;

// Note: The command `npm install react-icons` is not included in the file as it's a terminal command and not part of the code. Please run it in your terminal to install the required package.
