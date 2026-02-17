import React from 'react';
import '@/components/atoms/LoadingSpinner.css';

const LoadingSpinner = () => {
    return (
        <div className="spinner-container">
            <div className="spinner"></div>
        </div>
    );
};

export default LoadingSpinner;
