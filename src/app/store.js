import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../components/product-list/productListSlice';
import authReducer from '../components/auth/authSlice';

const store = configureStore({
    reducer: {
        product: productReducer,
        auth: authReducer,
    },
});

export default store;
