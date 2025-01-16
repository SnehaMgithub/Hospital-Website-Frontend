import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

const Sucess = () => {
  
  const navigate =useNavigate();
  // Function to handle the button click
  const handleBackToHome = () => {
    navigate("/")
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 relative">
      {/* Main Container */}
      
        <div className="p-6 max-w-lg text-center bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
          <p className="text-lg text-gray-700 mb-6">
          🎉 Your registration is successfully confirmed! A receptionist will contact you soon to provide details about your appointment time. Thank you for choosing us!
          </p>
          <button
            onClick={handleBackToHome}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Back to Home
          </button>
        </div>
      
    </div>
  );
};

export default Sucess;
