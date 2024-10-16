import React from 'react';
import Header from "./Header";
import Footer from './Footer';
import Item from './Item';

const Wishlist = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen"> {/* Flex container to manage footer position */}
        <Header />
        
        <div className="flex flex-col justify-center items-center flex-grow"> {/* Added flex-grow for centering */}
          <div className="top w-[90%] h-12 ml-[5%] mt-[2%] flex items-center justify-between p-4">
            <h1 className='text-xl font-poppins font-semibold'>Wishlist (4)</h1>
            <button className='flex items-center justify-center max-sm:min-w-[50%] min-w-[20%] h-12 hover:bg-[#DD4444] border-black border-2 text-black hover:text-white hover:transition-all hover:border-none font-poppins'>
              Return To Shop
            </button>
          </div> 
          <div className="items w-[90%] h-auto ml-[5%] mt-[4%] flex justify-evenly flex-wrap gap-4 max-sm:justify-center max-sm:w-[80%] max-sm:items-center max-sm:ml-[5%]">
            <Item itemname="Gucci duffle bag" itemprice="$960"/>
            <Item itemname="RGB liquid CPU Cooler" itemprice="$1960"/>
            <Item itemname="GP11 Shooter USB Gamepad" itemprice="$550"/>
            <Item itemname="Quilted Satin Jacket" itemprice="$750"/>
          </div>

          {/* Just for you section */}
          <div className="w-[90%] min-h-16 flex justify-between items-center max-sm:w-[80%] max-sm:flex-col max-sm:gap-4 mt-4 mx-auto">
            <p className='font-roboto ml-4 max-sm:ml-0 text-2xl max-sm:text-3xl px-2'>
              Just For You
            </p>
            <button className='bg-white border border-black hover:bg-[#DD4444] hover:transition-all hover:border-none hover:text-white font-poppins text-black font-light h-10 w-[10%] max-sm:w-full mt-2'> 
              See All
            </button>
          </div>

          <div className="items w-[90%] h-auto ml-[5%] mt-[4%] flex justify-evenly flex-wrap gap-4 max-sm:justify-center max-sm:w-[80%] max-sm:items-center max-sm:ml-[5%]">
            <Item itemname="Gucci duffle bag" itemprice="$960" />
            <Item itemname="RGB liquid CPU Cooler" itemprice="$1960"/>
            <Item itemname="GP11 Shooter USB Gamepad" itemprice="$550"/>
            <Item itemname="Quilted Satin Jacket" itemprice="$750"/>
          </div>
        </div>

        <Footer /> {/* Footer will be at the bottom */}
      </div>
    </>
  );
};

export default Wishlist;
