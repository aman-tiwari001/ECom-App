import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../components/product-list/productListSlice';

const store = configureStore({
    reducer: {
        product: productReducer
    },
});

export default store;
