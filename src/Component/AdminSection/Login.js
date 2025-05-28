import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    identifier: "",
    password: "",
    remember: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    navigate("/admin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-teal-200">
      <div className="flex bg-white rounded-xl shadow-2xl max-w-3xl w-full">
        {/* Left Side Image */}
        <div className="hidden md:flex items-center justify-center w-1/2 p-4">
          <img
            src="/images/bg11.webp"
            alt="Login Illustration"
            className="object-contain max-h-96 rounded-lg"
          />
        </div>
        {/* Right Side Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 p-8"
        >
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-8">
            Admin Login
          </h2>
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">
              Email or Phone Number
            </label>
            <input
              type="text"
              name="identifier"
              value={form.identifier}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Enter your email or phone number"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                className="mr-2 accent-teal-600"
              />
              <span className="text-gray-700">Remember me?</span>
            </label>
            <a
              href="#"
              className="text-teal-600 hover:underline font-semibold text-sm"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded-lg font-bold text-lg hover:bg-teal-700 transition duration-300"
          >
            Login
          </button>
          <div className="mt-4 text-center">
            <span className="text-gray-700 text-sm">
              Not registered?{" "}
              <a
                href="/register"
                className="text-teal-600 hover:underline font-semibold"
              >
                Register
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;