import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    email: '',
    phone: '',
    password: ''
  });git remote add origin https://github.com/veena1vr/Form-Fronted.git

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4000/", formData);
      console.log("Form submitted successfully");
      // Optionally clear the form or provide feedback
    } catch (error) {
      console.log("Error submitting form:", error);
      // Optionally provide user feedback
    }
  };

  return (
    <div className='bg-black min-h-screen w-screen flex items-center justify-center p-4'>
      <div className='bg-white shadow-md shadow-yellow-700 p-4 rounded-lg w-full max-w-md hover:p-5'>
        <h1 className='text-3xl font-bold mb-4 text-center text-gray-800'>
          Contact <span className='text-yellow-600'>Me</span>
        </h1>
        <form onSubmit={handleSubmit} className='space-y-3'>
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleChange}
            className='w-full p-2 border border-yellow-600 rounded-md focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 hover:border-yellow-800 transition duration-300'
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className='w-full p-2 border border-yellow-600 rounded-md focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 hover:border-yellow-800 transition duration-300'
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className='w-full p-2 border border-yellow-600 rounded-md focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 hover:border-yellow-800 transition duration-300'
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className='w-full p-2 border border-yellow-600 rounded-md focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 hover:border-yellow-800 transition duration-300'
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className='w-full p-2 border border-yellow-600 rounded-md focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 hover:border-yellow-800 transition duration-300'
            required
          />
          <button
            type="submit"
            className='w-full py-3 px-4 bg-yellow-600 text-black font-semibold rounded-md hover:bg-yellow-700 shadow-md shadow-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-300'
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
