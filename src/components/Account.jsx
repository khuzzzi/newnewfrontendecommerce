import React from 'react'
import Header from "./Header"
import LeftSideBar from './LeftSideBar'
import Footer from './Footer'

const Account = () => {
    return (
        <>
            <Header />
            <div className='w-screen h-screen flex justify-center'>
                {/* Main Container */}
                <div className="secondcontainer w-[80%] mt-[4%] flex gap-10">
                    {/* Sidebar */}
                    <div className="w-[30%]">
                        <LeftSideBar />
                    </div>

                    {/* Right-side content */}
                    <div className="w-[70%] flex flex-col">
                        {/* Top Section */}
                        <div className="top flex justify-between items-center font-poppins mb-6">
                            <p className='text-[#545252]'>
                                Home / <span className='text-black text-sm font-medium'>My Account</span>
                            </p>
                            <p>
                                Welcome! <span className='text-red-600'>Md Rimel</span>
                            </p>
                        </div>

                        {/* Profile Form or Right Content */}
                        <div className="w-full  p-8 shadow-lg font-poppins ">
                            <div className="top">
                                <h3 className='text-red-600 text-2xl font-medium'>Edit Your Profile</h3>
                            </div>
                            <div className="mid flex justify-between mt-[4%]">
                                <div className="flex flex-col gap-1 min-w-[40%]">
                                    <label className='text-black'>First Name</label>
                                    <input type="text" className='bg-[#F2F2F2] h-[7vh] text-[#a7a5a5] p-4' placeholder='Md'/>
                                </div>
                                <div className="flex flex-col gap-1 min-w-[40%]">
                                    <label className='text-black'>Last Name</label>
                                    <input type="text" className='bg-[#F2F2F2] h-[7vh] text-[#a7a5a5] p-4' placeholder='Rimel'/>
                                </div>
                            </div>

                            <div className="mid flex justify-between mt-[4%]">
                                <div className="flex flex-col gap-1 min-w-[40%]">
                                    <label className='text-black'>Email</label>
                                    <input type="text" className='bg-[#F2F2F2] h-[7vh] text-[#a7a5a5] p-4' placeholder='rimel123@gmail.com'/>
                                </div>
                                <div className="flex flex-col gap-1 min-w-[40%]">
                                    <label className='text-black'>Address</label>
                                    <input type="text" className='bg-[#F2F2F2] h-[7vh] text-[#a7a5a5] p-4' placeholder='Rimel'/>
                                </div>
                            </div>
                            <div className="bottom flex flex-col gap-3 mt-[4%]">
                                <label>Password Changes</label>
                                <input type="text" className='w-full p-4 bg-[#F2F2F2]' placeholder='Current Password'/>
                                <input type="text" className='w-full p-4 bg-[#F2F2F2]' placeholder='New Password'/>
                                <input type="text" className='w-full p-4 bg-[#F2F2F2]' placeholder='Confirm New Password'/>
                            </div>
                            <div className="flex justify-end gap-4 mt-[2%]">
                                <button>Cancel</button>
                                <button className='min-w-[25%] bg-[#DD4444] h-[7vh] font-poppins text-white hover:bg-[#a13131] transition-all'>Apply Coupon</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Account
