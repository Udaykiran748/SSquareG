import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock check for existing session
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role') || 'user';
    if (token) {
      setIsAuthenticated(true);
      setUser({ name: role === 'admin' ? 'Admin User' : 'Standard User', email: 'user@ssquareg.com', role });
    }
    setLoading(false);
  }, []);

  const login = (email, password, role = 'user') => {
    // Mock login logic
    localStorage.setItem('token', 'dummy-jwt-token');
    localStorage.setItem('role', role);
    setIsAuthenticated(true);
    setUser({ name: role === 'admin' ? 'Admin User' : 'Standard User', email, role });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
