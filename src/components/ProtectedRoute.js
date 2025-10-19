import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useModal } from '../contexts/ModalContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const { openLoginModal } = useModal();
  const location = useLocation();
  const [isSigningOut, setIsSigningOut] = useState(false);

  // Check if user is signing out by monitoring authentication state changes
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      // Check if this is a signout by looking at the current path
      // If we're on a protected route and user becomes unauthenticated, 
      // it's likely a signout, not an unauthorized access
      const protectedRoutes = ['/profile', '/account-settings'];
      if (protectedRoutes.includes(location.pathname)) {
        setIsSigningOut(true);
        // Clear the signout flag after a short delay
        setTimeout(() => setIsSigningOut(false), 100);
      }
    }
  }, [isAuthenticated, isLoading, location.pathname]);

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

  // If not authenticated, redirect to home
  if (!isAuthenticated) {
    // Only open login modal if this is not a signout
    if (!isSigningOut) {
      // Store the attempted location for redirect after login
      localStorage.setItem('redirectAfterLogin', location.pathname);
      openLoginModal();
    }
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
