import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import '../styles/componentsStyle/LoadingImage.css';

const LoadingImage = ({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc = null,
  showSkeleton = true,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`loading-image-container ${className}`}>
      {isLoading && showSkeleton && (
        <div className="image-skeleton">
          <LoadingSpinner size="small" text="Loading..." />
        </div>
      )}
      
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          style={{ 
            display: isLoading ? 'none' : 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          {...props}
        />
      ) : (
        <div className="image-error">
          <div className="error-icon">📷</div>
          <span>Failed to load</span>
        </div>
      )}
    </div>
  );
};

export default LoadingImage;
