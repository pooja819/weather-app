// src/icons/SunSVG.jsx
import React from 'react';

export default function SunSVG({ className = 'w-24 h-24' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="#FFD166" />
          <stop offset="100%" stopColor="#FF8C42" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="12" fill="url(#g)" />
      <g style={{ transformOrigin: '32px 32px', animation: 'spin 8s linear infinite' }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <rect key={i} x="30" y="2" width="4" height="10" rx="2" transform={`rotate(${i * 45} 32 32)`} fill="#FFB86B" />
        ))}
      </g>
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </svg>
  );
}