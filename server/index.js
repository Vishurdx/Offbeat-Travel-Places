import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import fs from 'fs/promises';
import path from 'path';

// Simple server that proxies Open-Meteo (no API key) and returns
// data shaped like src/data/weatherData.ts -> WeatherData
const app = express();
const PORT = process.env.PORT || 5174; // different from Vite default 5173

app.use(cors());
app.use(express.json());

// Map Open-Meteo weathercode to a coarse condition
// 0: Clear sky
// 1-3: Mainly clear, partly cloudy, overcast
// 45-48: Fog
// 51-67: Drizzle/Rain
// 71-77: Snow
// 80-82: Rain showers
// 85-86: Snow showers
// 95-99: Thunderstorm
function mapWeatherCodeToCondition(code) {
  if (code === 0) return 'sunny';
  if (code >= 1 && code <= 3) return 'cloudy';
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82) || (code >= 95 && code <= 99)) return 'rainy';
  if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) return 'snowy';
  // fallback
  return 'windy';
}

// Geocode a free-form location name to lat/lon using Open‑Meteo geocoding API
const IN_STATES = [
  'andhra pradesh','arunachal pradesh','assam','bihar','chhattisgarh','goa','gujarat','haryana','himachal pradesh','jharkhand','karnataka','kerala','madhya pradesh','maharashtra','manipur','meghalaya','mizoram','nagaland','odisha','punjab','rajasthan','sikkim','tamil nadu','telangana','tripura','uttar pradesh','uttarakhand','west bengal',
  'andaman and nicobar islands','chandigarh','dadra and nagar haveli and daman and diu','delhi','jammu and kashmir','ladakh','lakshadweep','puducherry'
];
const IN_STATES_TITLED = IN_STATES.map(s => s.replace(/\b\w/g, c => c.toUpperCase()));

// Load shared destinations dataset from public/data/destinations.json if present
let DESTINATIONS_DB = [];
async function loadDestinationsDB() {
  try {
    const filePath = path.resolve(process.cwd(), 'public', 'data', 'destinations.json');
    const raw = await fs.readFile(filePath, 'utf-8');
    const json = JSON.parse(raw);
    if (Array.isArray(json)) {
      DESTINATIONS_DB = json;
      console.log(`Loaded ${DESTINATIONS_DB.length} destinations from public/data/destinations.json`);
      return;
    }
  } catch (e) {
    console.warn('destinations.json not found or invalid, using minimal fallback');
  }
  // Minimal fallback
  DESTINATIONS_DB = [
    { id: 'spiti-valley', name: 'Spiti Valley', state: 'Himachal Pradesh', description: 'Cold desert mountain valley', image: '' },
    { id: 'tirthan-valley', name: 'Tirthan Valley', state: 'Himachal Pradesh', description: 'Serene riverside valley', image: '' },
    { id: 'majuli', name: 'Majuli Island', state: 'Assam', description: 'Largest river island', image: '' },
    { id: 'khonoma', name: 'Khonoma', state: 'Nagaland', description: 'India\'s first green village', image: '' },
    { id: 'valley-of-flowers', name: 'Valley of Flowers', state: 'Uttarakhand', description: 'UNESCO alpine meadows', image: '' },
    { id: 'dholavira', name: 'Dholavira', state: 'Gujarat', description: 'Indus Valley site', image: '' },
  ];
}
await loadDestinationsDB();
function normalizeText(s) {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // strip diacritics
    .replace(/\s+/g, ' ') // collapse spaces
    .trim();
}

async function tryGeocode(query, opts = {}) {
  const params = new URLSearchParams({
    name: query,
    count: '50',
    language: 'en',
    format: 'json',
    ...(opts.country ? { country: opts.country } : {})
  });
  const url = `https://geocoding-api.open-meteo.com/v1/search?${params.toString()}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to geocode location');
  const data = await res.json();
  if (!data.results || data.results.length === 0) return null;
  // Return all candidates for ranking
  return data.results;
}

async function geocodeLocation(name) {
  // Attempt order: exact, exact+IN, first segment, first segment+IN, normalized, normalized+IN
  const first = name.split(',')[0];
  // detect state/UT mention even without comma
  const lower = name.toLowerCase();
  const detectedState = IN_STATES.find(s => lower.includes(s));
  const stateHint = ((name.split(',')[1] || '').trim()) || (detectedState || '');
  const normalized = normalizeText(name);
  const normalizedFirst = normalizeText(first);

  const attempts = [
    () => tryGeocode(name),
    () => tryGeocode(name, { country: 'IN' }),
    () => tryGeocode(`${name}, India`),
    () => tryGeocode(first),
    () => tryGeocode(first, { country: 'IN' }),
    () => tryGeocode(`${first}, India`),
    () => tryGeocode(normalized),
    () => tryGeocode(normalized, { country: 'IN' }),
    () => tryGeocode(normalizedFirst),
    () => tryGeocode(normalizedFirst, { country: 'IN' })
  ];

  for (const attempt of attempts) {
    const list = await attempt().catch(() => null);
    if (Array.isArray(list) && list.length) {
      const s = stateHint.toLowerCase();
      const f = first.toLowerCase();
      // If a state hint exists, prefer only those matching admin1; fallback to all if none match
      const stateMatched = s
        ? list.filter(r => (r.admin1 || '').toLowerCase().includes(s))
        : [];
      const pool = stateMatched.length ? stateMatched : list;

      // Rank results: prioritize India, exact state match, exact name match, then population
      const scored = pool.map((r) => {
        let score = 0;
        const adm1 = (r.admin1 || '').toLowerCase();
        const nm = (r.name || '').toLowerCase();
        if (r.country_code === 'IN' || r.country === 'India') score += 200; // strong preference
        if (s && adm1 === s) score += 200; // exact state equality dominates
        if (s && adm1.includes(s)) score += 120; // partial state match
        if (nm === f) score += 120; // exact name
        if (nm.includes(f)) score += 60; // partial name
        // small boost for population
        if (typeof r.population === 'number') score += Math.min(20, Math.log10(r.population + 1));
        return { r, score };
      });
      scored.sort((a, b) => b.score - a.score);
      const best = scored[0].r;
      return {
        latitude: best.latitude,
        longitude: best.longitude,
        label: `${best.name}${best.admin1 ? ', ' + best.admin1 : ''}${best.country ? ', ' + best.country : ''}`
      };
    }
  }
  return null;
}

async function fetchWeather(lat, lon) {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    current: 'temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min',
    timezone: 'auto',
    forecast_days: '5'
  });
  const url = `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch weather');
  const data = await res.json();
  return data;
}

app.get('/api/weather', async (req, res) => {
  try {
    const { location } = req.query;
    if (!location || typeof location !== 'string') {
      return res.status(400).json({ error: 'Missing location query parameter' });
    }

    const geo = await geocodeLocation(location);
    if (!geo) return res.status(404).json({ error: 'Location not found' });

    const wx = await fetchWeather(geo.latitude, geo.longitude);

    // Shape response to WeatherData type used on the frontend
    const currentCode = wx.current?.weather_code;
    const condition = mapWeatherCodeToCondition(currentCode);

    const forecast = (wx.daily?.time || []).slice(0, 5).map((dateStr, idx) => {
      const code = wx.daily.weather_code?.[idx];
      const dayCondition = mapWeatherCodeToCondition(code);
      // Convert to weekday label
      const date = new Date(dateStr);
      const label = idx === 0 ? 'Today' : date.toLocaleDateString(undefined, { weekday: 'long' });
      return {
        day: label,
        condition: dayCondition,
        highTemp: Math.round(wx.daily.temperature_2m_max?.[idx] ?? 0),
        lowTemp: Math.round(wx.daily.temperature_2m_min?.[idx] ?? 0)
      };
    });

    const response = {
      location: geo.label,
      condition,
      temperature: Math.round(wx.current?.temperature_2m ?? 0),
      humidity: Math.round(wx.current?.relative_humidity_2m ?? 0),
      windSpeed: Math.round(wx.current?.wind_speed_10m ?? 0),
      forecast
    };

    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// List all Indian states/UTs
app.get('/api/states', (req, res) => {
  res.json({ states: IN_STATES_TITLED });
});

// List destinations for a given state (backend dataset; frontend can fallback to local if empty)
app.get('/api/destinations', (req, res) => {
  const { state } = req.query;
  if (!state || typeof state !== 'string') {
    return res.status(400).json({ error: 'Missing state query parameter' });
  }
  const norm = state.trim().toLowerCase();
  const items = DESTINATIONS_DB.filter(d => d.state.toLowerCase() === norm);
  res.json({ state: state.trim(), destinations: items });
});

app.listen(PORT, () => {
  console.log(`Weather server running on http://localhost:${PORT}`);
});
