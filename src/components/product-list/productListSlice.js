import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchAllProducts,
  fetchAllProductsByFilter,
} from './productListApi.js';

const initialState = {
  products: [],
  status: 'idle',
};

export const fetchAllProductsAsync = createAsyncThunk(
  'product/fetchAllProducts',
  async () => {
    const response = await fetchAllProducts();
    return response.products;
  }
);

export const fetchAllProductsByFilterAsync = createAsyncThunk(
  'product/fetchAllProductsByFilter',
  async (filterObj) => {
    const response = await fetchAllProductsByFilter(filterObj);
    return response.data;
  }
);

export const productListSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state) => {
      state.products += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchAllProductsByFilterAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsByFilterAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment } = productListSlice.actions;

export const selectAllProducts = (state) => state.product.products;

export default productListSlice.reducer;
