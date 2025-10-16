// src/components/LoadingSpinner.jsx
import React from 'react';

export default function LoadingSpinner({ size = 28 }) {
  return (
    <div className="spinner-row" style={{fontSize: size}}>
      <svg width={size} height={size} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="20" stroke="#e6eef7" strokeWidth="5" fill="none" opacity="0.9" />
        <path d="M45 25a20 20 0 0 1-20 20" stroke="#0ea5e9" strokeWidth="5" strokeLinecap="round" fill="none">
          <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite"/>
        </path>
      </svg>
    </div>
  );
}