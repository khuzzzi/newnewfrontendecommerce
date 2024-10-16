import React from 'react';
import HeaderText from './HeaderText';
import Header from './Header';
import mobileWithCart from "../public/mobile-with-filters.jpg";
import { FcGoogle } from "react-icons/fc";
import Footer from './Footer';

const Login = () => {
  return (
    <>
      <Header />
      <div className="signuppage flex flex-col lg:flex-row justify-center items-center gap-4 w-screen flex-wrap p-4 lg:p-0">
        {/* Left Container */}
        <div className="left hidden lg:block w-full lg:w-[40%] flex justify-center">
          <img src={mobileWithCart} alt="Mobile with cart" className="w-full h-auto mt-[4%] max-w-full" />
        </div>

        {/* Right Container */}
        <div className="right flex flex-col gap-6 w-full lg:w-[50%] h-auto sm:h-[70vh]  justify-center items-start  p-6 lg:p-8 rounded-md">
          <h1 className='font-roboto text-[6vw] lg:text-[3vw] text-left w-full text-black sm:text-3xl'>Log in to Exclusive</h1>
          <p className='font-poppins text-3xl lg:text-sm text-left w-full text-black sm:text-3xl'>Enter your details below</p>
          
          <div className="form flex flex-col gap-4 w-full lg:w-[80%]">
            
            <input 
              type="text" 
              className='border-b-2 border-gray-200 outline-none h-[8vh] lg:h-[6vh] p-4 font-poppins text-[4vw] lg:text-base' 
              placeholder='Email or Phone Number' 
            />
            <input 
              type="text" 
              className='border-b-2 border-gray-200 outline-none h-[8vh] lg:h-[6vh] p-4 font-poppins text-[4vw] lg:text-base' 
              placeholder='Password' 
            />
            
            <div className="buttons flex gap-4  lg:w-[58%] mt-[2vh] items-end sm:flex-col md:flex-col">
              <button className='bg-[#DB4444] h-[10vh] w-full lg:h-[8vh] text-[4vw] lg:text-base font-poppins text-white hover:bg-[#ac3030] transition-all'>
                Log in
              </button>
              
              <span className='font-poppins text-red-600  w-full'>Forgot Password?</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className=''>
      <Footer />
      </div>
    </>
  );
}

export default Login;
