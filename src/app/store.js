import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../components/product-list/productListSlice';
import authReducer from '../components/auth/authSlice';
import cartReducer from '../components/cart/cartSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});

export default store;
