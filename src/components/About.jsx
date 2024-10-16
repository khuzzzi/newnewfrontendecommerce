import React from 'react';
import Header from "./Header";
import Footer from './Footer';
import aboutpic from "./public/images/istockphoto-1217550622-612x612.svg";
import { CiShop } from "react-icons/ci";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import { GiShoppingBag } from "react-icons/gi";
import { FcMoneyTransfer } from "react-icons/fc";
import { TbTruckDelivery } from "react-icons/tb";
import { FaHeadphonesAlt } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const About = () => {
  return (
    <>
      <Header />
      {/* middle section main about section */}
      <div className="middle flex flex-col gap-5 justify-center items-center min-h-screen">
        <div className="sec1 flex w-full">
          <div className='flex flex-col gap-4 w-[50%] p-[8vw] ml-[5vw]'>
            <h1 className='text-[2vw] font-poppins text-black font-bold'>Our Story</h1>
            <p className='font-poppins text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo inventore optio
              reiciendis fugit sed ad, assumenda aliquam, natus quibusdam, repudiandae rerum voluptatibus.
              Nihil fuga, labore inventore modi magnam quas maxime obcaecati repellat mollitia aspernatur
              quam veritatis error voluptatum deserunt molestias odit voluptates temporibus optio vel
              unde eum, exercitationem dicta et!
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora dolores neque quisquam
              quis saepe mollitia nostrum debitis eos aspernatur distinctio.
            </p>
          </div>
          <img src={aboutpic} alt="" className='w-[30%] h-full mt-6' />
        </div>

        <div className="sec2 flex gap-5  items-center justify-center ">
          <div className="box1 w-[15vw] h-[25vh] border-2 border-gray-300 flex flex-col gap-3 items-center justify-center flex-wrap">
            <div className='w-[4vw] h-[8vh] rounded-full bg-[#DD4444] flex items-center justify-center'>
              <CiShop className='text-white text-4xl' />
            </div>
            <h1 className='text-black font-poppins font-bold text-2xl'>10.5k</h1>
            <p className='font-light font-poppins text-sm'>Sellers active on our site</p>
          </div>

          <div className="box1 w-[15vw] h-[25vh] border-2 bg-[#DD4444] flex flex-col gap-3 items-center justify-center">
            <div className='w-[4vw] h-[8vh] rounded-full bg-white flex items-center justify-center'>
              <PiCurrencyDollarSimpleFill className='text-black text-4xl' />
            </div>
            <h1 className='text-white font-poppins font-bold text-2xl'>33k</h1>
            <p className='font-light font-poppins text-sm text-white'>Monthly Product Sell</p>
          </div>

          <div className="box1 w-[15vw] h-[25vh] border-2 border-gray-300 flex flex-col gap-3 items-center justify-center">
            <div className='w-[4vw] h-[8vh] rounded-full bg-[#DD4444] flex items-center justify-center'>
              <GiShoppingBag className='text-white text-4xl' />
            </div>
            <h1 className='text-black font-poppins font-bold text-2xl'>44k</h1>
            <p className='font-light font-poppins text-sm'>Monthly Buyers</p>
          </div>
          <div className="box1 w-[15vw] h-[25vh] border-2 bg-[#DD4444] flex flex-col gap-3 items-center justify-center">
            <div className='w-[4vw] h-[8vh] rounded-full bg-[white] flex items-center justify-center'>
              <FcMoneyTransfer className='text-4xl' />
            </div>
            <h1 className='text-white font-poppins font-bold text-2xl'>25k</h1>
            <p className='font-light text-white font-poppins text-[1vw]'>Annual Gross Sale</p>
          </div>
        </div>
        
        <div className="sec3 flex gap-8 mt-[5%] w-screen items-center justify-center ">
          <div className='flex flex-col gap-5 min-w-[23%] h-[35vh]  items-center justify-center'>
            <div className='flex items-center justify-center bg-black h-[12vh] w-[8vw] rounded-full'>
            <TbTruckDelivery className='text-white text-[3vw] '/>
            </div>
            <p className='text-sm font-bold font-poppins'>FREE AND FAST DELIVERY</p>
            <p className='font-poppins'>Free delivery for all orders above 150$</p>
            <p></p>
          </div>

          <div className='flex flex-col gap-5 w-[23%] h-[35vh]  items-center justify-center'>
            <div className='flex items-center justify-center bg-black h-[12vh] w-[8vw] rounded-full'>
            <FaHeadphonesAlt className='text-white text-[3vw] '/>
            </div>
            <p className='text-sm font-bold font-poppins'>24/7 CUSTOMER SERVICE</p>
            <p className='font-poppins'>Friendly customer support</p>
            <p></p>
          </div>

          <div className='flex flex-col gap-5 w-[23%] h-[35vh]  items-center justify-center'>
            <div className='flex items-center justify-center bg-black h-[12vh] w-[8vw] rounded-full'>
            <IoShieldCheckmarkOutline className='text-white text-[3vw] '/>
            </div>
            <p className='text-sm font-bold font-poppins'>MONEY BACK GURANTEE</p>
            <p className='font-poppins '>We return money within 30 days</p>
            <p></p>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
