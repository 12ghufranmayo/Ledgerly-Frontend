import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
  const isAuthenticated = true; // Replace with actual authentication logic

  return isAuthenticated ? <Outlet /> : <Navigate  to="/login" replace />;
}

export default PrivateRoutes