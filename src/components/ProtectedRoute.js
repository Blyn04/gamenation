import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
          color: 'white',
          fontSize: '1.2rem',
        }}
      >
        Loading...
      </div>
    );
  }

  // If not authenticated, show message instead of page
  if (!isAuthenticated) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
          color: 'white',
          flexDirection: 'column',
        }}
      >
        <h2>You have to log in first</h2>
        <p style={{ opacity: 0.8 }}>Please log in to access this page.</p>
      </div>
    );
  }

  // If logged in, render the protected content
  return children;
};

export default ProtectedRoute;
