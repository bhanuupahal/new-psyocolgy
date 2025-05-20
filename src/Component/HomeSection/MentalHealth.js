import React from "react";
import { FaBrain, FaHeartbeat, FaHandsHelping, FaUserMd } from "react-icons/fa";

const MentalHealth = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md">MENTAL WELLNESS</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Why Mental Health is Important?</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Content after hero section - combined section */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 border-t border-l border-white/80">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-3/5">
                <h2 className="text-2xl font-bold mb-6 text-teal-700">Why Mental Health is Important? How Reset Yourself is helping people!</h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Mental health is a state of well-being in which every individual realizes his or her own potential, can cope with the normal stresses of life, can work productively and fruitfully, and is able to make a contribution to her or his community. It further implies that individuals have the capacity to seek help from others and can access such help when needed.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Poor mental health can affect your physical health by lowering your immune system and Reset Yourself helps to work on the same.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Working towards achieving goals that give meaning to life such as becoming a better parent, spouse or friend and Reset Yourself helps to achieve the goal.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Reset Yourself helps in getting involved in social activities that help build self-esteem and meet new people.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  You can schedule an appointment at a time that suits you best. Sessions are also typically shorter than traditional therapy sessions so you don't have to commit to as many appointments per week with us.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Our mental health therapy is convenient and flexible. You have complete control over when and where you receive sessions - from home, work or school!
                </p>
              </div>
              
              <div className="w-full md:w-2/5 flex items-center justify-center">
                <img 
                  src="/images/mental-health.webp" 
                  alt="Mental Health" 
                  className="w-full h-auto object-cover rounded-2xl shadow-md transform hover:scale-105 transition-transform duration-300"
                  style={{ maxHeight: "500px" }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/600x800?text=Mental+Health+Image";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Join Reset Yourself Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 border border-teal-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Join Reset Yourself</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-2/3">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  If you feel you can listen to people or guide them towards a better life or you are already a therapist & wishes to render your services online while getting paid, then you are at the right place.
                </p>
                
               
              </div>
              
              <div className="w-full md:w-1/3">
                <img 
                  src="/images/join-brain.webp" 
                  alt="Join as Therapist" 
                  className="w-full h-auto rounded-2xl shadow-md"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/400x300?text=Join+Our+Team";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default MentalHealth;







