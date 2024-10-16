import React from 'react'
import Header from './Header'
import { FaPhone } from "react-icons/fa6";
import Footer from './Footer';
import { CiMail } from "react-icons/ci";

const Contact = () => {
    return (
        <div>
            <Header />
            {/* Home/contact area */}
            <div className="container flex flex-col justify-center items-center w-screen mt-10 gap-4">
                
                {/* Left div is hidden on small screens and displayed on large screens */}
                <div className="hidden lg:block left flex flex-col lg:w-[20%] min-h-[60vh] shadow-lg">
                    <div className="top flex p-6 items-center gap-5">
                        <FaPhone className='text-white bg-[#DD4444] rounded-full h-10 w-10 p-3' />
                        <span className='text-black font-poppins'>Call To Us</span>
                    </div>
                    <div className='flex flex-col gap-4 font-poppins text-black p-4'>
                        <p className='text-sm'>We are available 24/7, 7 days a week</p>
                        <p className='text-sm'>Phone : +92-123456-789</p>
                    </div>
                    <div className='border-b-2 border-[#DD4444] p-4 w-[80%] ml-4'></div>

                    <div className="top flex p-6 items-center gap-5">
                        <CiMail className='text-white bg-[#DD4444] rounded-full h-10 w-10 p-3' />
                        <span className='text-black font-poppins'>Write To Us</span>
                    </div>
                    <div className='flex flex-col gap-4 font-poppins text-black p-4'>
                        <p className='text-sm'>Fill out our form and we will contact you within 24 hours.</p>
                        <p className='text-sm'>Email: customer@exclusive.com</p>
                        <p className='text-sm'>Email: support@exclusive.com</p>
                    </div>
                </div>

                {/* Right div (Form) */}
                <div className="right flex flex-col min-w-[50%] h-auto shadow-lg p-5">
                <h1 className='block sm:hidden text-3xl font-bold font-poppins mb-2'>Write To Us.</h1>
                    <div className="top flex flex-col gap-4">
                        <input type="text" className='bg-[#F5F5F5] p-3 font-poppins w-full' placeholder='Your Name*' />
                        <input type="text" className='bg-[#F5F5F5] p-3 font-poppins w-full' placeholder='Your Email*' />
                        <input type="text" className='bg-[#F5F5F5] p-3 font-poppins w-full' placeholder='Your Phone*' />
                    </div>
                    <div className="end mt-5 flex-grow">
                        <textarea className='w-full h-[200px] bg-[#f5f5f5] p-4 font-poppins resize-none' placeholder='Your Message*'></textarea>
                    </div>
                    <button className=' bg-[#DD4444] p-4 font-poppins lg:w-[40%] text-white mt-4 hover:bg-[#852424] transition-all sm:w-full'>Send Message</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;
