import { createSlice } from "@reduxjs/toolkit";

const addToCart = createSlice({
    name: "addToCart",
    initialState: {
        addToCartProduct: []
    },
    reducers: {
        setAddToCartProduct: (state, action) => {
            // Push the new product to the existing array
            state.addToCartProduct.push(action.payload);
        },
    }
});

export const { setAddToCartProduct } = addToCart.actions;
export default addToCart.reducer;
