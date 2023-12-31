import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchAllProducts,
  fetchAllProductsByFilter,
} from './productListApi.js';

const initialState = {
  products: [],
  totalProducts: 0,
  status: 'idle',
};

export const fetchAllProductsAsync = createAsyncThunk(
  'product/fetchAllProducts',
  async (maxprice) => {
    const response = await fetchAllProducts(maxprice);
    if (maxprice === 1500) {
      return response.products.filter((product) => product.price > maxprice);
    } else if (maxprice) {
      return response.products.filter((product) => product.price < maxprice);
    }
    return response.products;
  }
);

export const fetchAllProductsByFilterAsync = createAsyncThunk(
  'product/fetchAllProductsByFilter',
  async (filter) => {
    const response = await fetchAllProductsByFilter(filter);
    return response.products;
  }
);

export const fetchNewPageAsync = createAsyncThunk(
  'product/fetchNewPage',
  async (skip) => {
    const response = await fetchAllProducts(skip);
    return response.products;
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
      })
      .addCase(fetchNewPageAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNewPageAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment } = productListSlice.actions;

export const selectAllProducts = (state) => state.product.products;

export default productListSlice.reducer;
