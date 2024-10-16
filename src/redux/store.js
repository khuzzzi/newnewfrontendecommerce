import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';
import sellerDashboardReducers from "../redux/sellerSlice.js";
import homeProductsReducers from "./homeProductsSlice.js";
import clickedProductReducers from "./clickedProductSlice.js";
import checkoutProductsReducers from "./checkoutProductSlice.js";
import addToCartReducers from "./addToCartSlice.js";

// Create a persist configuration
const persistConfig = {
    key: 'root',
    storage,
};

// Combine your reducers
const rootReducer = combineReducers({
    sellerDashboard: sellerDashboardReducers,
    homeProducts: homeProductsReducers,
    clickedProducts: clickedProductReducers,
    checkoutProducts: checkoutProductsReducers,
    addToCart: addToCartReducers,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
const store = configureStore({
    reducer: persistedReducer,
});

// Create a persistor
export const persistor = persistStore(store);

export default store;
