import React from 'react';
import { useNavigate } from 'react-router-dom';

const Thanks = () => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center min-h-screen flex-col text-2xl font-black bg-gray-100">
      <h1>We have sent you an email</h1>
      <h1>Thanks For Shopping</h1>

      <div className="mt-3">
        <button className="p-3 bg-red-600 text-white hover:bg-red-700 transition-colors duration-300" onClick={()=>navigate("/")}>
          Return To Shopping
        </button>
      </div>
    </div>
  );
};

export default Thanks;
