// src/icons/StormSVG.jsx
import React from 'react';

export default function StormSVG({ className = 'w-28 h-20' }) {
  return (
    <svg className={className} viewBox="0 0 64 48" xmlns="http://www.w3.org/2000/svg">
      <g fill="#9CA3AF">
        <ellipse cx="20" cy="18" rx="14" ry="8" />
        <ellipse cx="36" cy="14" rx="12" ry="7" />
        <ellipse cx="46" cy="20" rx="10" ry="6" />
      </g>
      <g style={{ animation: 'flash 1.2s linear infinite' }} fill="#FACC15">
        <path d="M30 30 L26 38 L32 38 L28 46 L40 34 L34 34 L38 30 Z" />
      </g>
      <style>{`
        @keyframes flash { 0% { opacity: 0 } 40% { opacity: 1 } 60% { opacity: 0.4 } 100% { opacity: 0 } }
      `}</style>
    </svg>
  );
}