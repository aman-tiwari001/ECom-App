import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

import { loginUser } from './authApi';

const token = localStorage.getItem('login_token');
let decodedUser = null;

try {
  if (token) { // decoding the token to get user payload
    decodedUser = jwtDecode(token);
  }
} catch (error) {
  // decoding error or invalid token
  console.error('Error decoding or processing token:', error);
  decodedUser = null;
}

const initialState = {
  user: decodedUser,
  status: 'idle',
};

export const loginUserAsync = createAsyncThunk(
  'auth/loginUser',
  async (credentials) => {
    const response = await loginUser(credentials);
    return response;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function

export const fetchUser = (state) => state.auth.user;

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
