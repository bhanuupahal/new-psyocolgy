import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaHandsHelping } from 'react-icons/fa';

const Marriage = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Marriage Counseling
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>

        {/* Benefits Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <FaHeart className="text-3xl text-rose-500 mr-4" />
              <h2 className="text-3xl font-semibold text-gray-900">Benefits of Marriage Counseling</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Marriage counseling offers a wide range of benefits that can significantly improve the quality of a relationship. One of the most crucial advantages is the enhancement of communication between partners. Through counseling, couples learn to express their emotions, needs, and concerns more openly and honestly, which fosters a deeper understanding and stronger connection.
              </p>
              <p>
                Additionally, marriage counseling provides couples with effective conflict resolution strategies, helping them navigate disagreements and conflicts in a healthy manner. This reduces the likelihood of recurring arguments and promotes a more peaceful and supportive home environment.
              </p>
              <p>
                Furthermore, counseling can help couples address specific issues that may be causing strain in their relationship, such as financial stress, intimacy problems, or differing expectations, allowing them to find mutually satisfying solutions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Outcomes Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <FaHandsHelping className="text-3xl text-blue-500 mr-4" />
              <h2 className="text-3xl font-semibold text-gray-900">Outcomes of Marriage Counseling</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The outcomes of marriage counseling can be profound and transformative for many couples. Those who engage in counseling often report a renewed sense of closeness and intimacy, feeling more connected and attuned to each other's needs and desires.
              </p>
              <p>
                They tend to develop better coping mechanisms for dealing with stress and conflict, leading to a more harmonious and stable relationship. Additionally, marriage counseling can help rebuild trust and reinforce commitment, especially if the relationship has been affected by issues such as infidelity or major life changes.
              </p>
              <p>
                Couples also gain valuable insights into their patterns of interaction, enabling them to break negative cycles and cultivate healthier dynamics. Overall, marriage counseling can result in a stronger, more resilient partnership, with couples feeling more confident in their ability to face future challenges together.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:-translate-y-1">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Marriage;