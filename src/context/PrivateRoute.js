import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './authContext';

const PrivateRoute = ({ element, requiredRole }) => {
  const { user } = useContext(AuthContext);

  if (!user || user.role !== requiredRole) {
    return <Navigate to="/login" />;
  }

  return <Route element={element} />;
};

export default PrivateRoute;

