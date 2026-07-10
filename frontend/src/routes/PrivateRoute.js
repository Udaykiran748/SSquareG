import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, user } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to={requiredRole === 'admin' ? "/" : "/login"} replace />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    // If they are logged in but have the wrong role, redirect to their own dashboard
    return <Navigate to={user?.role === 'admin' ? "/admindashboard" : "/dashboard"} replace />;
  }

  return children;
};

export default PrivateRoute;
