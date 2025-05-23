import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-100 to-green-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-serif font-bold mb-6 text-center">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Email</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input type="password" className="w-full p-2 border rounded" />
          </div>
          <button className="w-full bg-teal-500 text-white py-2 rounded-xl hover:bg-teal-400">
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account? <Link to="/signup" className="text-teal-500">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;