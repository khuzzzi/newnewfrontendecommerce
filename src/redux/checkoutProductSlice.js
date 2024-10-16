import { createSlice } from "@reduxjs/toolkit"
const checkoutProduct = createSlice({
    name : "checkoutProduct",
    initialState : {
        checkoutProduct : null
    },
    reducers : {
        setCheckoutProduct : (state,action)=>{
            state.checkoutProduct = action.payload
        }
    }
})

export const {setCheckoutProduct} = checkoutProduct.actions
export default checkoutProduct.reducer