import React from 'react';
import { Outlet, Navigate, useSelector } from 'react-router-dom';
import { fetchLoginStatus } from '../components/auth/authSlice';

const ProtectedRoutes = () => {
  const isLoggedIn = useSelector(fetchLoginStatus);
  return auth.isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
