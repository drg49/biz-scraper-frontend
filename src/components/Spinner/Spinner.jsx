// Spinner.js
import React from 'react';
import './Spinner.css'; // Add CSS styles for the spinner

const Spinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Spinner;
