import React from 'react';
import './HeaderText.css'; // Import external CSS for custom animation

const HeaderText = () => {
  return (
    <div className="flex items-center justify-center bg-black h-[7vh] w-screen overflow-hidden px-4">
      <p className="font-poppins text-white text-center text-sm font-extralight whitespace-nowrap max-w-full sm:animate-none animate-scroll">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%
      </p>
    </div>
  );
};

export default HeaderText;
