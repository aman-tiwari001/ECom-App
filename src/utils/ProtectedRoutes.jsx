import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchUser } from '../components/auth/authSlice';

const ProtectedRoutes = () => {
  const user = useSelector(fetchUser);
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
