// src/hooks/useWeather.js
import { useState, useEffect, useCallback } from 'react';
import { fetchWeatherByCity } from '../services/openWeatherApi';
import { getCache, setCache } from '../utils/cache';

const RECENT_KEY = 'weather_app_recent_searches_v1';
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

function readRecent() {
  try {
    const raw = localStorage.getItem(RECENT_KEY) || '[]';
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveRecent(city) {
  try {
    const raw = localStorage.getItem(RECENT_KEY) || '[]';
    const arr = JSON.parse(raw);
    const norm = city.trim();
    const filtered = [norm, ...arr.filter((c) => c.toLowerCase() !== norm.toLowerCase())];
    const limited = filtered.slice(0, 6);
    localStorage.setItem(RECENT_KEY, JSON.stringify(limited));
  } catch (e) {
    console.warn('saveRecent failed', e);
  }
}

export default function useWeather() {
  const [query, setQuery] = useState('');
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recent, setRecent] = useState(readRecent());

  useEffect(() => {
    setRecent(readRecent());
  }, []);

  const fetchForCity = useCallback(
    async (cityName) => {
      if (!cityName) return;
      setError(null);
      setLoading(true);
      setWeather(null);

      // use cache first
      const cached = getCache(cityName);
      if (cached) {
        setWeather({ ...cached, cached: true });
        setLoading(false);
        saveRecent(cityName);
        setRecent(readRecent());
        return;
      }

      try {
        const data = await fetchWeatherByCity(cityName);
        // save to cache and recent
        setCache(cityName, data, CACHE_TTL);
        saveRecent(cityName);
        setRecent(readRecent());
        setWeather({ ...data, cached: false });
      } catch (err) {
        // Rate-limit handling
        if (err.code === 'RATE_LIMIT' || err.status === 429 || err.retryAfter) {
          const wait = err.retryAfter ? `${err.retryAfter} seconds` : 'a short while';
          setError(`Rate limit reached — please try again after ${wait}.`);
        } else if (err.code === 'NO_API_KEY') {
          setError('Missing API key. Add VITE_OPENWEATHER_API_KEY to your .env file.');
        } else {
          setError(err.message || 'Network error or API error.');
        }
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const doSearch = (cityName) => {
    const trimmed = (cityName || '').trim();
    if (!trimmed) return;
    setCity(trimmed);
    fetchForCity(trimmed);
  };

  const onSubmit = (e) => {
    e && e.preventDefault && e.preventDefault();
    doSearch(query);
    setQuery('');
  };

  const useRecent = (cityName) => {
    setQuery(cityName);
    doSearch(cityName);
  };

  const clearRecent = () => {
    try {
      localStorage.removeItem(RECENT_KEY);
      setRecent([]);
    } catch { /* ignore */ }
  };

  return {
    query,
    setQuery,
    city,
    setCity,
    weather,
    loading,
    error,
    recent,
    fetchForCity,
    onSubmit,
    useRecent,
    clearRecent,
  };
}