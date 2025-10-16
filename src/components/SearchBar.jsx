// src/components/SearchBar.jsx
import React from 'react';

export default function SearchBar({ query, setQuery, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="search-row" style={{width:'100%'}}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter city (e.g. Pune, Mumbai, Delhi)"
        className="input"
      />
      <button type="submit" className="btn">Search</button>
    </form>
  );
}