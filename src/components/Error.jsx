import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()
  return (
    <>
    <Header/>
        
    <div className='flex items-center justify-center mt-5 flex-col gap-2 '>
        <h1 className='font-poppins text-5xl font-semibold mt-4'>404 Not Found</h1>
        <p className='max-w-screen-sm text-[3vw] lg:text-2xl font-poppins'>Your visited page not found. you may go home page.</p>
        <div className='mt-5'>
            <button className='bg-[#DB4444] p-4 text-white font-poppins transition-all hover:bg-[#852626]' onClick={()=>navigate("/login")}>Back to home page</button>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Error