import { createSlice } from "@reduxjs/toolkit";

const wishlistedProduct= createSlice({
    name: "wishlistedProduct",
    initialState: {
        wishlistedProduct: null
    },
    reducers: {
        // actions
        setWishlistedProduct: (state, action) => {
            state.wishlistedProduct = action.payload;
        },
    } 
}); 

export const { setWishlistedProduct } = wishlistedProduct.actions;
export default wishlistedProduct.reducer;
