import React, { useRef, useState } from "react";

const Admin = () => {
  const [photo, setPhoto] = useState(null);
  const fileInputRef = useRef();

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  const handleUpdateClick = () => {
    fileInputRef.current.click();
  };

  const handleDeleteClick = () => {
    setPhoto(null);
    fileInputRef.current.value = null;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-teal-200">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md flex flex-col items-center">
        <h2 className="text-2xl font-bold text-teal-700 mb-6">Admin Panel</h2>
        <div className="mb-6 flex flex-col items-center">
          <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mb-4 border-2 border-teal-400">
            {photo ? (
              <img src={photo} alt="Profile" className="object-cover w-full h-full" />
            ) : (
              <span className="text-gray-400 text-4xl">+</span>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handlePhotoChange}
          />
          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleUpdateClick}
              className="bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-700 transition"
            >
              {photo ? "Update Photo" : "Upload Photo"}
            </button>
            {photo && (
              <button
                type="button"
                onClick={handleDeleteClick}
                className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
              >
                Delete Photo
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;