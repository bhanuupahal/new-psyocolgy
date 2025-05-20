import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle, FaRegLightbulb } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "1. What is the Refund Policy of Reset Yourself?",
      answer: "Once you have made the payment, money will not be refunded in any case. Please make sure before making payments."
    },
    {
      question: "2. Is a counsellor different from a psychologist?",
      answer: "Psychologists are highly trained to treat mental illness, while counsellors generally focus on therapy for everyday issues."
    },
    {
      question: "3. What is the difference between a counsellor, therapist, and psychologist?",
      answer: "A counsellor helps with day-to-day issues, a therapist addresses more complex problems, and a psychologist is trained to treat mental health disorders with behavioral interventions. Depending on the severity of your condition, you may be directed to a different professional."
    },
    {
      question: "4. Do therapists prescribe medication?",
      answer: "Therapists don't prescribe medications on Reset Yourself. However, psychiatrists on Reset Yourself can prescribe medications depending on your situation, with your consent."
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-r from-teal-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full shadow-lg">
            <FaQuestionCircle className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600">Frequently Asked Questions</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our services, policies, and mental health care approach.</p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300 transform ${openIndex === index ? 'scale-102' : ''}`}
            >
              <button
                className={`w-full px-8 py-5 text-left flex justify-between items-center focus:outline-none ${openIndex === index ? 'bg-gradient-to-r from-teal-50 to-blue-50' : ''}`}
                onClick={() => toggleQuestion(index)}
              >
                <span className={`font-medium text-lg ${openIndex === index ? 'text-teal-700' : 'text-gray-800'}`}>{faq.question}</span>
                <div className={`w-8 h-8 flex items-center justify-center rounded-full ${openIndex === index ? 'bg-gradient-to-r from-teal-400 to-blue-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {openIndex === index ? 
                    <FaChevronUp className="text-sm" /> : 
                    <FaChevronDown className="text-sm" />
                  }
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <div className="px-8 pb-6 pt-2">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <FaRegLightbulb className="text-teal-500" />
                    </div>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Still have questions? We're here to help.</p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform transition hover:-translate-y-1"
          >
            Contact Us
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Add this to your global CSS or tailwind.config.js */}
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
        .scale-102 {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default FAQ;

