import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    gender: "",
    password: "",
    confirmPassword: "",
    agree: false,
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
    // Registration logic here
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-teal-200">
      <div className="flex bg-white rounded-xl shadow-2xl max-w-3xl w-full">
        {/* Left Side Image */}
        <div className="hidden md:flex items-center justify-center w-1/2 p-4">
          <img
            src="/images/booking_png.avif"
            alt="Register Illustration"
            className="object-contain max-h-96 rounded-lg"
          />
        </div>
        {/* Right Side Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 p-6"
        >
          <h2 className="text-2xl font-bold text-center text-teal-700 mb-6">
            Register
          </h2>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
              required
            />
          </div>
          <div className="mb-3">
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
              required
            >
              <option value="">Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
              placeholder="Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mr-2 accent-teal-600"
              required
            />
            <span className="text-gray-700 text-xs">
              I agree to the{" "}
              <a
                href="/terms"
                className="text-teal-600 hover:underline font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="text-teal-600 hover:underline font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded-lg font-bold text-base hover:bg-teal-700 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;