// src/components/WeatherCard.jsx
import React, { useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { getIconForWeather } from '../icons';

export default function WeatherCard({ weather, loading }) {
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    // animate on new weather
    setEnter(false);
    const t = setTimeout(() => setEnter(true), 30);
    return () => clearTimeout(t);
  }, [weather]);

  if (loading) {
    return (
      <div className="weather-card">
        <div className="spinner-row">
          <LoadingSpinner />
          <span style={{marginLeft:8, color:'#64748b'}}>Loading...</span>
        </div>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className={`weather-card ${enter ? 'enter' : ''}`}>
        <div className="text-xs">Search for a city or click a recent search.</div>
      </div>
    );
  }

  const IconComp = getIconForWeather(weather.weather_main);

  return (
    <div className={`weather-card ${enter ? 'enter' : ''}`}>
      <div style={{display:'flex', alignItems:'center', gap:14}}>
        <div className="icon-wrap" aria-hidden>
          {IconComp ? <IconComp className="icon-svg" /> : null}
        </div>

        <div style={{textAlign:'center'}}>
          <div className="weather-temp">{weather.temp}°C</div>
          <div className="weather-desc">{weather.weather_desc}</div>
        </div>
      </div>

      <div className="text-xs" style={{marginTop:6}}>{weather.name}, {weather.country}</div>
      <div className="text-xs" style={{color:'#94a3b8'}}>{weather.cached ? '(using cached data)' : '(fresh API data)'}</div>
    </div>
  );
}