import React from 'react';
import Header from "./Header";
import Footer from './Footer';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { addToCartProduct } = useSelector((state) => state.addToCart);
    const navigate = useNavigate()
    return (
        <>
            <Header />
            <div className="w-full h-[10vh]"></div>

            <div className="wholemaincontainer w-screen h-screen ">
                <div className="secondcontainer w-[80%] h-full flex flex-col items-center gap-10 ">
                    <div className="sec1 flex justify-around font-poppins font-medium w-[80%] h-[10%] shadow-md items-center ml-[20%] max-sm:min-w-full max-sm:items-center max-sm:justify-evenly max-sm:h-[7vh]">
                        <p>Product</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </div>

                    {addToCartProduct.map((item) => (
                        <div key={item.id} className="sec2 flex justify-around font-poppins font-medium w-[80%] h-[15%] shadow-md items-center ml-[20%] max-sm:min-w-full max-sm:p-2">
                            <div className='flex gap-3 items-center justify-start'>
                                <img src={item.productImages[0]} className="w-16" alt="" />
                                <span className='text-black font-poppins text-sm font-medium'>{item.productName}</span>
                            </div>
                            <p>${item.price}</p>
                            <input type="number" className='w-12 h-8 focus:outline-1 border border-gray-300 text-center' defaultValue={1} />
                            <p>${item.price}</p>
                        </div>
                    ))}

                    <div className="sec3 flex justify-between w-[80%] ml-[20%] max-sm:flex-col max-md:flex-col max-sm:gap-3 max-md:gap-3 max-md:items-center max-md:justify-center">
                        <button className='flex items-center justify-center min-w-[20%] h-12 hover:bg-[#DD4444] max-sm:w-[100%] max-md:min-w-full border-black border-2 text-black hover:text-white hover:transition-all hover:border-none font-poppins' onClick={()=>navigate("/")}>Return To Shop</button>
                        <button className='flex items-center justify-center min-w-[20%] h-12 hover:bg-[#DD4444] max-sm:w-[100%] max-md:min-w-full border-black border-2 text-black hover:text-white hover:transition-all hover:border-none font-poppins'>Update Cart</button>
                    </div>

                    <div className="sec4 flex justify-between w-[80%] ml-[20%] mt-[4%] max-sm:flex-col max-sm:items-center max-sm:justify-center max-md:min-w-full max-md:flex-col max-sm:w-full max-sm:gap-3">
                        <div className="left flex gap-3 w-[60%] max-sm:flex-col max-md:flex-col max-sm:w-full">
                            <input type="text" className='border border-black min-w-[60%] h-12 text-[#282828] font-poppins p-3' placeholder='Coupon Code' />
                            <button className='flex items-center justify-center min-w-[40%] h-12 bg-[#DD4444] hover:bg-[#842626] transition-all text-white font-poppins'>Apply Coupon</button>
                        </div>
                        <div className="right w-[34%] flex flex-col h-[35vh] gap-3 border-2 border-black font-poppins font-medium p-4 max-sm:min-w-full">
                            <p>Cart Total</p>
                            <div className='flex justify-between font-light text-sm items-center'>
                                <p>Subtotal:</p>
                                <span>${addToCartProduct.reduce((total, item) => total + item.price, 0)}</span>
                            </div>
                            <div className='flex justify-between font-light text-sm'>
                                <p>Shipping:</p>
                                <span>Free</span>
                            </div>
                            <div className='flex justify-between font-light text-sm'>
                                <p>Total:</p>
                                <span>${addToCartProduct.reduce((total, item) => total + item.price, 0)}</span>
                            </div>
                            <button className='flex items-center justify-center min-w-[40%] h-12 bg-[#DD4444] hover:bg-[#842626] transition-all text-white font-poppins mt-4' onClick={()=>navigate("/checkout")}>Proceed To Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Cart;
