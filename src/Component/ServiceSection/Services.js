import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    name: "Marriage Counseling",
    route: "/services/marriage",
    bg: "/images/marriage.webp",
    textColor: "text-teal-700",
  },
  {
    name: "Separtion Anxiety Counseling",
    route: "/services/separation",
    bg: "/images/seperation.webp",
    textColor: "text-blue-700",
  },
  {
    name: "Stress",
    route: "/services/stress",
    bg: "/images/stress.webp",
    textColor: "text-purple-700",
  },
  {
    name: "Pre and Pro Pregnancy Counseling",
    route: "/services/pregancy",
    bg: "/images/pregnancy.webp",
    textColor: "text-pink-700",
  },
  {
    name: "Family Therapy",
    route: "/services/family",
    bg: "/images/family.webp",
    textColor: "text-yellow-700",
  },
  {
    name: "Divorce Cases Counseling",
    route: "/services/divorce",
    bg: "/images/divorce.webp",
    textColor: "text-green-700",
  },
  {
    name: "Couple Counseling",
    route: "/services/couple",
    bg: "/images/couple.webp",
    textColor: "text-orange-700",
  },
  {
    name: "Long Lasting Relationship",
    route: "/services/longlasting",
    bg: "/images/longlasting.webp",
    textColor: "text-indigo-700",
  },
];

const colors = [
  "from-teal-100 to-teal-300 border-teal-400",
  "from-blue-100 to-blue-300 border-blue-400",
  "from-purple-100 to-purple-300 border-purple-400",
  "from-pink-100 to-pink-300 border-pink-400",
  "from-yellow-100 to-yellow-300 border-yellow-400",
  "from-green-100 to-green-300 border-green-400",
  "from-orange-100 to-orange-300 border-orange-400",
  "from-indigo-100 to-indigo-300 border-indigo-400",
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 mb-10 drop-shadow-lg">
        Our Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div key={service.name} className="flex flex-col items-center w-full">
            <div
              onClick={() => navigate(service.route)}
              className={`bg-gradient-to-br ${colors[idx]} rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center border-l-8 transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer w-full`}
              style={{
                backgroundImage: `url('${service.bg}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "350px",
                width: "100%",
                maxWidth: "600px",
              }}
            >
              {/* No text inside the image */}
            </div>
            <span className={`tracking-wide text-2xl font-semibold mt-6 ${service.textColor}`}>
              {service.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;