import React from "react";

const Trusts = () => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-orange-100 to-green-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-serif font-bold mb-6">Our Trusted Partners</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Partner cards */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold mb-2">Partner 1</h3>
            <p>Description of partnership and benefits</p>
          </div>
          {/* Add more partner cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Trusts;