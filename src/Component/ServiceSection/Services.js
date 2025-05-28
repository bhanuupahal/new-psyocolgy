import React from "react";
import { useNavigate } from "react-router-dom";

const serviceNames = [
  "Marriage Counseling",
  "Separtion Anxiety Counseling",
  "Stress",
  "Pre and Pro Pregnancy Counseling",
  "Family Therapy",
  "Divorce Cases Counseling",
  "Couple Counseling",
  "Long Lasting Relationship",
];

const colors = [
  "from-teal-100 to-teal-300 border-teal-400 text-teal-700",
  "from-blue-100 to-blue-300 border-blue-400 text-blue-700",
  "from-purple-100 to-purple-300 border-purple-400 text-purple-700",
  "from-pink-100 to-pink-300 border-pink-400 text-pink-700",
  "from-yellow-100 to-yellow-300 border-yellow-400 text-yellow-700",
  "from-green-100 to-green-300 border-green-400 text-green-700",
  "from-orange-100 to-orange-300 border-orange-400 text-orange-700",
  "from-indigo-100 to-indigo-300 border-indigo-400 text-indigo-700",
];

const Services = () => {
  const navigate = useNavigate();

  // Split the services into two arrays of 4
  const firstRow = serviceNames.slice(0, 4);
  const secondRow = serviceNames.slice(4, 8);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 mb-10 drop-shadow-lg">
        Our Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {serviceNames.map((name, idx) => (
          <div
            key={idx}
            onClick={() => {
              if (name === "Marriage") navigate("/services/marriage");
              if (name === "Separation") navigate("/services/separation");
              if (name === "Stress") navigate("/services/stress");
              if (name === "Pregnancy") navigate("/services/pregancy");
              if (name === "Family") navigate("/services/family");
              if (name === "Divorce") navigate("/services/divorce");
              if (name === "Couple") navigate("/services/couple");
            }}
            className={`bg-gradient-to-br ${colors[idx]} rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center text-xl font-semibold border-l-8 transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
          >
            <span className="tracking-wide">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;