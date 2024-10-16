import React, { useState } from 'react';
import HeaderText from './HeaderText';
import { CiSearch } from 'react-icons/ci';
import { RiMenu3Line } from "react-icons/ri";
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Use useLocation
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { FaBox } from "react-icons/fa6";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [signedIn, setSignedIn] = useState(true);
    const [isAccountMenuOpen , setIsAccountMenuOpen] = useState(false)

    const navigate = useNavigate();
    const location = useLocation(); // Get current location
    const pathname = location.pathname; // Use pathname from useLocation
    const [isSeller , setIsSeller] = useState(false)
    const iconsAndNames = [{
        name : "Manage My Account",
        icon :  <CiUser/>,
        navigate : "/account"
    },
    {
        name : "My Orders",
        icon : <FaBox/>,
       
    },
    {
        name : "Switch To Seller Account",
        icon : <HiOutlineSwitchHorizontal/>,
        navigate : isSeller === false ? "/sellerLogin" : null
    }
]

    return (
        <>
            <HeaderText />

            {/* Large Screen Header */}
            <div className="header lg:flex justify-around mt-8 items-center w-screen hidden">
                <div className="left">
                    <h1 className='text-2xl font-bold font-poppins sm:text-3xl'>Exclusive</h1>
                </div>
                <div className="mid font-poppins flex gap-12 cursor-pointer">
                    {
                        pathname === "/dashboard" ? (
                            <span className='text-3xl' onClick={()=>navigate("/")}>Go To Buying Area</span>
                        ) : (
                            <>
                            <span onClick={() => navigate("/")}>Home</span>
                            <span onClick={() => navigate("/contact")}>Contact</span>
                            <span onClick={() => navigate("/about")}>About</span>
                            <span className='border-b-2 border-black' onClick={() => navigate("/signup")}>Sign Up</span>
                            </>
                        )
                    }
                </div>
                <div className="right flex items-center">
                    <div className="flex items-center bg-gray-200 w-[250px] p-1">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="bg-gray-200 p-2 pl-4 w-full font-poppins"
                        />
                        <CiSearch className="text-gray-500 mr-2" />
                    </div>
                    {
                        signedIn === true ? (
                            <div className='flex gap-4 ml-5'>
                                <CiHeart className='text-3xl cursor-pointer' />
                                <IoCartOutline className='text-3xl font-light cursor-pointer' onClick={() => navigate("/cart")} />
                                <div>
                                <RiAccountCircleLine className='text-3xl cursor-pointer' onClick={()=> setIsAccountMenuOpen(prevState => !prevState )} />
                                {
                                isAccountMenuOpen ? (
                                    <>
                                    <div className='flex flex-col font-poppins  text-white font-light w-[16vw] min-h-[30vh] bg-gradient-to-l from-gray-800 to-[#424242] absolute top-[20%] right-[5%] z-10'>
                                        {
                                            iconsAndNames.map((item)=>
                                                <div onClick={()=>navigate(item.navigate)} className='flex gap-3 items-center mt-2 p-3 w-full h-[20%]  hover:bg-gray-600 hover:transition-all hover:cursor-pointer'>
                                                {/* <CiUser className='text-white text-4xl' /> */}
                                                <span className='text-2xl'>{item.icon}</span>
                                                <span className=''>{item.name}</span>
                                                </div>

                                            )
                                        }

                                        
                                        

                                        
                                        

                                        
                                    </div>
                                    </>
                                ) : (
                                    null
                                )
                            }
                                </div>
                            </div>
                        ) : (
                            null
                        )
                    }
                            

                </div>
            </div>
            <hr className='border border-gray mt-[1%]' />

            {/* Small Screen Menu Icon */}
            <div className="lg:hidden flex justify-between items-center w-full p-4 bg-gray-200">
                <h1 className="text-xl font-bold font-poppins">Exclusive</h1>
                <RiMenu3Line
                    className="text-3xl cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
            </div>

            {/* Small Screen Menu */}
            {isMenuOpen && (
                <div className="bg-gray-200 p-4 font-poppins flex flex-col gap-4">
                    {
                        pathname === '/dashboard' ? ( // Check the pathname
                            <>
                                <span className='cursor-pointer'>Go To Buying Area</span>
                            </>
                        ) : (
                            <>
                                <span className='cursor-pointer' onClick={() => navigate("/")}>Home</span>
                                <span className='cursor-pointer' onClick={() => navigate("/contact")}>Contact</span>
                                <span className='cursor-pointer' onClick={() => navigate("/about")}>About</span>
                                <Link to="/signup"><span className='border-b-2 border-black cursor-pointer'>Sign Up</span></Link>
                                <div className="flex items-center bg-gray-200 w-full p-1">
                                    <input
                                        type="text"
                                        placeholder="What are you looking for?"
                                        className="bg-gray-200 p-2 pl-4 w-full font-poppins"
                                    />
                                    <CiSearch className="text-gray-500 mr-2" />
                                </div>
                            </>
                        )
                    }
                </div>
            )}
        </>
    );
};

export default Header;
