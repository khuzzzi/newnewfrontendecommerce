import React from 'react'

const LeftSideBar = () => {
  return (
    <div className='mt-[15%] flex flex-col  h-[70%] font-poppins gap-8 '>
        <div className='flex flex-col gap-4 '>
            <h4 className='text-black font-medium'>Manage My Account</h4>
            <div className='flex flex-col justify-end gap-1 cursor-pointer'>
                <p className='text-[#545252] hover:text-black'>My Profile</p>
                <p className='text-[#545252] hover:text-black'>Address Book</p>
                <p className='text-[#545252] hover:text-black'>My Payment Options</p>
            </div>
        </div>
        <div className='flex flex-col gap-4 '>
            <h4 className='text-black font-medium '>Track Orders</h4>
            <div className='flex flex-col justify-end gap-1 cursor-pointer'>
                <p className='text-[#545252] hover:text-black'>My Returns</p>
                <p className='text-[#545252] hover:text-black'>My Cancellations</p>
            </div>
        </div>

        <div className='flex flex-col gap-4 '>
            <h4 className='text-black font-medium items-end'>My Wishlist</h4>
            
        </div>

        
    </div>
  )
}

export default LeftSideBar