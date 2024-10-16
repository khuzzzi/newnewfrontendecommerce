import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiShoppingCartThin } from "react-icons/pi";
import { useLocation, useNavigate } from 'react-router-dom';

const Item = ({ itemname, itempicsrc, itemprice, itemId }) => {
    const navigate = useNavigate()
    const params = useLocation()
    
    



    return (
        <div className='max-w-[23%] cursor-pointer min-h-[40vh] bg-[#F2F2F2] p-4 max-sm:w-full flex flex-col rounded-lg shadow-lg overflow-hidden ' onClick={()=>navigate(`/details/${itemId}`)}>
            <div className="flex justify-between mb-2">
                <div className='badge w-14 h-6 rounded-sm bg-[#DD4444] text-white font-poppins flex items-center justify-center'>-35%</div>
                {
                    params.pathname === "/" ? (
                        null
                    ) : (
                        <RiDeleteBin6Line className='text-xl text-gray-600 cursor-pointer hover:text-red-600 transition-colors' />

                    )
                }
            </div>

            <div className="flex items-center justify-center h-full">
                <img
                    src={itempicsrc}
                    alt={itemname}
                    className='h-[50%] w-full' // Ensure image takes full height and width while maintaining aspect ratio
                    style={{ margin: '10px', padding: '10px' }} // Added padding for better spacing
                />
            </div>

            <div className="flex items-center justify-between w-full bg-black h-10 mt-4 rounded-lg hover:bg-[#1d1c1c]">
                <PiShoppingCartThin className='text-xl text-white ml-2' />
                <button className='font-poppins text-white w-full h-full flex items-center justify-center '>Add To Cart</button>
            </div>
            <div className="flex flex-col gap-1 mt-2 font-poppins">
                <h1 className='font-medium text-lg'>{itemname}</h1>
                <h3 className='text-red-600 font-semibold'>$ {itemprice}</h3>
            </div>
        </div>
    );
};

export default Item;
