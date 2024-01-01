import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isLoggedIn: false,
  status: 'idle',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
});

// Action creators are generated for each case reducer function

export const fetchUser = (state) => state.auth.user;
export const fetchLoginStatus = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;
