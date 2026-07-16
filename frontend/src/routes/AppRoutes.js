import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import ForgotPassword from '../pages/ForgotPassword';
import AdminLogin from '../pages/AdminLogin';
import AdminDashboard from '../pages/AdminDashboard';
import Contact from '../pages/Contact';
import Aboutus from '../pages/Aboutus';
import TermsAndConditions from '../pages/TermsAndConditions';
import Services from '../pages/Services';
import Pricing from '../pages/Pricing';
import Products from '../pages/Products';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/products" element={<Products />} />
      <Route path="/bpo-services" element={<Services />} />
      <Route path="/erp-solutions" element={<Services />} />
      <Route path="/development" element={<Services />} />
      <Route path="/cloud-infra" element={<Services />} />
      <Route path="/it-consulting" element={<Services />} />

      {/* Public Routes */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <AdminLogin />
          </PublicRoute>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <PublicRoute>
            <ForgotPassword />
          </PublicRoute>
        }
      />

      {/* Private Routes */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute requiredRole="user">
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/admindashboard"
        element={
          <PrivateRoute requiredRole="admin">
            <AdminDashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
