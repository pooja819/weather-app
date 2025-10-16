// src/icons/SnowSVG.jsx
import React from 'react';

export default function SnowSVG({ className = 'w-28 h-20' }) {
  return (
    <svg className={className} viewBox="0 0 64 48" xmlns="http://www.w3.org/2000/svg">
      <g fill="#E2E8F0">
        <ellipse cx="20" cy="18" rx="14" ry="8" />
        <ellipse cx="36" cy="14" rx="12" ry="7" />
        <ellipse cx="46" cy="20" rx="10" ry="6" />
      </g>
      <g style={{ animation: 'fall 2s linear infinite' }} fill="#F8FAFC">
        <circle cx="18" cy="34" r="1.8" />
        <circle style={{ animationDelay: '0.5s' }} cx="28" cy="36" r="1.6" />
        <circle style={{ animationDelay: '1s' }} cx="38" cy="34" r="1.9" />
      </g>
      <style>{`
        @keyframes fall { 0% { transform: translateY(-2px); opacity: 0.9 } 100% { transform: translateY(10px); opacity: 0 } }
      `}</style>
    </svg>
  );
}