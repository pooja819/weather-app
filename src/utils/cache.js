// src/utils/cache.js
// Simple LocalStorage cache with TTL

const PREFIX = 'weather_app_cache_v1::';

export function setCache(key, data, ttlMs = 10 * 60 * 1000) {
  try {
    const payload = { ts: Date.now(), ttl: ttlMs, data };
    localStorage.setItem(PREFIX + key.toLowerCase(), JSON.stringify(payload));
  } catch (err) {
    console.warn('setCache failed', err);
  }
}

export function getCache(key) {
  try {
    const raw = localStorage.getItem(PREFIX + key.toLowerCase());
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.ts > (parsed.ttl || 0)) {
      // expired
      localStorage.removeItem(PREFIX + key.toLowerCase());
      return null;
    }
    return parsed.data;
  } catch (err) {
    console.warn('getCache failed', err);
    return null;
  }
}

export function removeCache(key) {
  try {
    localStorage.removeItem(PREFIX + key.toLowerCase());
  } catch (err) {
    console.warn('removeCache failed', err);
  }
}