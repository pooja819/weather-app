// src/icons/index.js
import SunSVG from './SunSVG';
import CloudSVG from './CloudSVG';
import RainSVG from './RainSVG';
import SnowSVG from './SnowSVG';
import StormSVG from './StormSVG';

export function getIconForWeather(main) {
  const k = (main || '').toLowerCase();
  if (k.includes('clear')) return SunSVG;
  if (k.includes('cloud')) return CloudSVG;
  if (k.includes('rain') || k.includes('drizzle')) return RainSVG;
  if (k.includes('snow')) return SnowSVG;
  if (k.includes('thunder')) return StormSVG;
  return CloudSVG;
}