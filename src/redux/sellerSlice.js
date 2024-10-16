import { createSlice } from "@reduxjs/toolkit";

const sellerSlice = createSlice({
    name : "sellerSlice",
    initialState :  {
        productImages : [],
        otherProductDetails : null
    },
    reducers : {
        // actions
        setProductImages : (state,action)=>{
            state.productImages = action.payload
        },
        setOtherProductDetails : (state,action)=>{
            state.otherProductDetails = action.payload
        }
    },
    
})

export const {setOtherProductDetails,setProductImages} = sellerSlice.actions
export default sellerSlice.reducer