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

// Handling asynchronous actions in redux using async thunk

export const fetchAllProductsAsync = createAsyncThunk(
  'product/fetchAllProducts',
  async (maxprice) => {
    const response = await fetchAllProducts();
    if (maxprice === '1500') {
      return {
        ...response,
        products: response.products.filter(
          (product) => product.price > maxprice
        ),
      };
    } else if (maxprice) {
      return {
        ...response,
        products: response.products.filter(
          (product) => product.price < maxprice
        ),
      };
    }
    return response;
  }
);

export const fetchAllProductsByFilterAsync = createAsyncThunk(
  'product/fetchAllProductsByFilter',
  async (filter) => {
    const response = await fetchAllProductsByFilter(filter);
    return response;
  }
);

export const fetchNewPageAsync = createAsyncThunk(
  'product/fetchNewPage',
  async (skip) => {
    const response = await fetchAllProducts(skip);
    return response;
  }
);

export const productListSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload.products;
        state.totalProducts = action.payload.total;
      })
      .addCase(fetchAllProductsByFilterAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsByFilterAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload.products;
        state.totalProducts = action.payload.total;
      })
      .addCase(fetchNewPageAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNewPageAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload.products;
        state.totalProducts = action.payload.total;
      });
  },
});

// Action creators are generated for each case reducer function

export const selectAllProducts = (state) => state.product.products;
export const selectTotalProducts = (state) => state.product.totalProducts;

export default productListSlice.reducer;
