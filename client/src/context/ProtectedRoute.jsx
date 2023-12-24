import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export const ProtectedRoute = ({ element, ...props }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Route
      {...props}
      element={isLoggedIn ? element : <Navigate to="/" replace />}
    />
  );
};
