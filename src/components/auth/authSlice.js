import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { loginUser } from './authApi';

const initialState = {
  user: null,
  status: 'idle',
};

export const loginUserAsync = createAsyncThunk(
  'auth/loginUser',
  async (credentials) => {
    const response = await loginUser(credentials);
    return response;
  }
);

export const logoutUserAsync = createAsyncThunk(
  'auth/logoutUser',
  async () => {
    return null;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload;
      })
      .addCase(logoutUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logoutUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = null;
      });
  },
});

// Action creators are generated for each case reducer function

export const fetchUser = (state) => state.auth.user;

export default authSlice.reducer;
