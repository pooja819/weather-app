// src/icons/CloudSVG.jsx
import React from 'react';

export default function CloudSVG({ className = 'w-28 h-20' }) {
  return (
    <svg className={className} viewBox="0 0 64 48" xmlns="http://www.w3.org/2000/svg">
      <g style={{ animation: 'float 6s ease-in-out infinite' }} fill="#CBD5E1">
        <ellipse cx="20" cy="28" rx="18" ry="10" />
        <ellipse cx="36" cy="22" rx="14" ry="9" />
        <ellipse cx="46" cy="30" rx="12" ry="8" />
      </g>
      <style>{`
        @keyframes float { 0% { transform: translateY(0); } 50% { transform: translateY(-6px); } 100% { transform: translateY(0); } }
      `}</style>
    </svg>
  );
}