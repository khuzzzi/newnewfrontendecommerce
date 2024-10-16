import { createSlice } from "@reduxjs/toolkit";


const clickedProductSlice = createSlice({
    name: "clickedProductSlice",
    initialState: {
        clickedProduct: null
    },
    reducers: {
        // actions
       setClickedProduct: (state, action) => {
            state.clickedProduct = action.payload;
        },
    } 
}); 

export const { setClickedProduct } = clickedProductSlice.actions;
export default clickedProductSlice.reducer;
