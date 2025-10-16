// src/App.jsx
import React from 'react';
import useWeather from './hooks/useWeather';
import SearchBar from './components/SearchBar';
import RecentSearches from './components/RecentSearches';
import WeatherCard from './components/WeatherCard';

export default function App() {
  const {
    query,
    setQuery,
    weather,
    loading,
    error,
    recent,
    onSubmit,
    useRecent,
    clearRecent,
  } = useWeather();

  return (
    <div className="app-shell">
      <div className="app-card">
        <header className="app-header">
          <div className="app-title">Weather App</div>
          <div className="app-sub">Realtime weather using OpenWeather</div>
        </header>

        <SearchBar query={query} setQuery={setQuery} onSubmit={onSubmit} />

        <div style={{marginTop:10}}>
          <RecentSearches recent={recent} onClick={useRecent} onClear={clearRecent} />
        </div>

        <div className="grid">
          <WeatherCard weather={weather} loading={loading} />
          <div className="details-card">
            <h4 style={{fontSize:14, fontWeight:600, marginBottom:8}}>Weather details</h4>
            {error && <div style={{color:'#ef4444', marginBottom:8}}>{error}</div>}
            {weather ? (
              <div>
                <div className="detail-line">Feels like: <strong>{weather.feels_like}°C</strong></div>
                <div className="detail-line">Humidity: <strong>{weather.humidity}%</strong></div>
                <div className="detail-line">Wind: <strong>{weather.wind} m/s</strong></div>
                <div style={{marginTop:8}}>
                  <div className="text-xs" style={{marginBottom:6}}>Raw:</div>
                  <pre className="raw-pre">{JSON.stringify(weather.raw, null, 2)}</pre>
                </div>
              </div>
            ) : (
              <div className="text-xs">No details yet.</div>
            )}
          </div>
        </div>

        <footer style={{marginTop:12}} className="text-xs">
          Note: Rate-limit (HTTP 429) will show a user-friendly message.
        </footer>
      </div>
    </div>
  );
}