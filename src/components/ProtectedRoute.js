import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useModal } from '../contexts/ModalContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const { openLoginModal } = useModal();
  const location = useLocation();

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
        color: 'white',
        fontSize: '1.2rem'
      }}>
        Loading...
      </div>
    );
  }

  // If not authenticated, redirect to home and open login modal
  if (!isAuthenticated) {
    // Store the attempted location for redirect after login
    localStorage.setItem('redirectAfterLogin', location.pathname);
    openLoginModal();
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
