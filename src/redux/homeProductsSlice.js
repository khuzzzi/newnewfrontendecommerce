import { createSlice } from "@reduxjs/toolkit";

const homeProductsSlice = createSlice({
    name: "homeProductsSlice",
    initialState: {
        homeProducts: []  // Initialize as an empty array
    },
    reducers: {
        // actions
        setHomeProducts: (state, action) => {
            state.homeProducts = action.payload;  // Expecting an array in action.payload
        },
    } 
}); 

export const { setHomeProducts } = homeProductsSlice.actions;
export default homeProductsSlice.reducer;
