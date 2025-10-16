// src/icons/RainSVG.jsx
import React from 'react';

export default function RainSVG({ className = 'w-28 h-20' }) {
  return (
    <svg className={className} viewBox="0 0 64 48" xmlns="http://www.w3.org/2000/svg">
      <g fill="#94A3B8">
        <ellipse cx="20" cy="18" rx="14" ry="8" />
        <ellipse cx="36" cy="14" rx="12" ry="7" />
        <ellipse cx="46" cy="20" rx="10" ry="6" />
      </g>
      <g style={{ animation: 'drop 1s linear infinite' }} fill="#60A5FA">
        <path d="M18 34c0 2 2 4 2 4s2-2 2-4-2-4-2-4-2 2-2 4z" />
        <path style={{ animationDelay: '0.2s' }} d="M28 34c0 2 2 4 2 4s2-2 2-4-2-4-2-4-2 2-2 4z" />
        <path style={{ animationDelay: '0.4s' }} d="M38 34c0 2 2 4 2 4s2-2 2-4-2-4-2-4-2 2-2 4z" />
      </g>
      <style>{`
        @keyframes drop { 0% { transform: translateY(-2px); opacity: .6 } 50% { transform: translateY(6px); opacity: 1 } 100% { transform: translateY(12px); opacity: 0 } }
      `}</style>
    </svg>
  );
}