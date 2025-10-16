// src/components/RecentSearches.jsx
import React from 'react';

export default function RecentSearches({ recent = [], onClick, onClear }) {
  return (
    <div className="recent-row">
      <div className="recent-title">
        <div style={{fontSize:14, color:'#0f172a', fontWeight:600}}>Recent searches</div>
        {recent.length > 0 && (
          <button onClick={onClear} style={{fontSize:12, color:'#6b7280', background:'none', border:'none', cursor:'pointer'}}>Clear</button>
        )}
      </div>
      <div className="chips">
        {recent.length === 0 && <span className="text-xs">No recent searches</span>}
        {recent.map((r) => (
          <button key={r} onClick={() => onClick(r)} className="chip">{r}</button>
        ))}
      </div>
    </div>
  );
}