// src/services/openWeatherApi.js
// Lightweight fetch-based API layer for OpenWeather — returns normalized data
const BASE = 'https://api.openweathermap.org/data/2.5';
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY; // from .env (Vite)

function handleErrorResponse(resp) {
  // Try to parse JSON message if available
  return resp.json().catch(() => ({})).then((body) => {
    const msg = body?.message || resp.statusText || 'Unknown error';
    const err = new Error(msg);
    err.status = resp.status;
    if (resp.status === 429) {
      // attach Retry-After if present
      const retry = resp.headers.get('Retry-After');
      if (retry) err.retryAfter = retry;
      err.code = 'RATE_LIMIT';
    }
    throw err;
  });
}

export async function fetchWeatherByCity(city) {
  if (!API_KEY) {
    const e = new Error('Missing OpenWeather API key. Add VITE_OPENWEATHER_API_KEY to .env');
    e.code = 'NO_API_KEY';
    throw e;
  }
  const url = `${BASE}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
  const resp = await fetch(url);

  if (!resp.ok) {
    return handleErrorResponse(resp);
  }

  const data = await resp.json();
  // Normalize useful fields to pass to UI / cache
  const normalized = {
    name: data.name,
    country: data.sys?.country,
    temp: Math.round(data.main?.temp ?? NaN),
    feels_like: Math.round(data.main?.feels_like ?? NaN),
    humidity: data.main?.humidity,
    wind: data.wind?.speed,
    weather_main: data.weather?.[0]?.main,
    weather_desc: data.weather?.[0]?.description,
    raw: data,
    fetchedAt: Date.now(),
  };
  return normalized;
}