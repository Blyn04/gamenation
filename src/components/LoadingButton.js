import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import '../styles/componentsStyle/LoadingButton.css';

const LoadingButton = ({ 
  children, 
  loading = false, 
  loadingText = 'Loading...',
  disabled = false,
  className = '',
  size = 'medium',
  variant = 'primary',
  ...props 
}) => {
  return (
    <button 
      className={`loading-button ${className} ${size} ${variant} ${loading ? 'loading' : ''}`}
      disabled={disabled || loading}
      {...props}
    >
      <span className="button-content">
        {children}
      </span>
      {loading && (
        <div className="button-loading-overlay">
          <LoadingSpinner size="small" color="currentColor" />
          {loadingText && <span className="loading-text">{loadingText}</span>}
        </div>
      )}
    </button>
  );
};

export default LoadingButton;
