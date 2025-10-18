import React from 'react';
import '../styles/componentsStyle/LoadingSpinner.css';

const LoadingSpinner = ({ size = 'medium', color = '#3b82f6', text = '' }) => {
  return (
    <div className={`loading-spinner ${size}`}>
      <div className="spinner" style={{ borderTopColor: color }}>
        <div className="spinner-inner"></div>
      </div>
      {text && <span className="loading-text">{text}</span>}
    </div>
  );
};

export default LoadingSpinner;
