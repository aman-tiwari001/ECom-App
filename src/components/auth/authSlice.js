import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

const token = localStorage.getItem('login_token');
let decodedUser = null;

try {
  if (token) {
    // decoding the token to get user payload
    decodedUser = jwtDecode(token);
  }
} catch (error) {
  // decoding error or invalid token
  console.error('Error decoding or processing token:', error);
  decodedUser = null;
}

const initialState = {
  user: decodedUser,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
    },
    loginUserReducer: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const fetchUser = (state) => state.auth.user;
export const { logoutUser, loginUserReducer } = authSlice.actions;
export default authSlice.reducer;
