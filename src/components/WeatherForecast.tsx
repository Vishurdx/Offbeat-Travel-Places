
import React, { useState } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { getBestTimeToVisit, type WeatherData } from '@/data/weatherData';
import WeatherSearch from './weather/WeatherSearch';
import CurrentWeather from './weather/CurrentWeather';
import WeatherForecast5Day from './weather/WeatherForecast5Day';
import WeatherTravelTip from './weather/WeatherTravelTip';
import WeatherPlaceholder from './weather/WeatherPlaceholder';

const WeatherForecast: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [bestTimeToVisit, setBestTimeToVisit] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  const API_BASE = import.meta.env.VITE_WEATHER_API_BASE || 'http://localhost:5174';

  const fetchWeather = async (query: string) => {
    const q = query.trim();
    if (!q) {
      toast.error('Please enter a location');
      return;
    }
    try {
      setLoading(true);
      setSelectedLocation(q);
      const res = await fetch(`${API_BASE}/api/weather?location=${encodeURIComponent(q)}`);
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to fetch weather');
      }
      const data: WeatherData = await res.json();
      setWeatherData(data);
      setSelectedLocation(data.location);
      setBestTimeToVisit(getBestTimeToVisit(data.location));
      toast.success(`Weather loaded for ${data.location}`);
    } catch (e: any) {
      setWeatherData(null);
      toast.error(e?.message || 'Unable to load weather');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => fetchWeather(searchQuery);

  const handleQuickSearch = (location: string) => {
    setSearchQuery(location);
    fetchWeather(location);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="weather" className="py-16 sm:py-24 bg-gradient-to-b from-sky-50 via-indigo-50 to-pink-50 dark:from-slate-900 dark:via-indigo-950 dark:to-fuchsia-950 relative overflow-hidden">
      {/* Animated Weather Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500/5"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-indigo-500/5"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-purple-500/5"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -5, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-blue-600 uppercase rounded-full bg-blue-100 dark:bg-blue-900 dark:text-blue-200">
            Plan Your Trip
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Weather Forecast
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Check the weather conditions at your destination to plan the perfect trip
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto bg-gradient-to-br from-white to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-xl shadow-lg overflow-hidden border border-indigo-100/60 dark:border-indigo-900/30"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div 
            className="p-6"
            variants={item}
          >
            <WeatherSearch 
              searchQuery={searchQuery}
              selectedLocation={selectedLocation}
              onSearchQueryChange={setSearchQuery}
              onSearch={handleSearch}
              onQuickSearch={handleQuickSearch}
            />

            {loading ? (
              <div className="bg-white/70 dark:bg-slate-900/70 rounded-lg p-8 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400 animate-pulse">Fetching real-time weather…</p>
              </div>
            ) : weatherData ? (
              <motion.div 
                className="bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-indigo-950 dark:to-fuchsia-950 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <CurrentWeather 
                  weatherData={weatherData} 
                  bestTimeToVisit={bestTimeToVisit || 'Not available'} 
                />
                
                <WeatherForecast5Day forecast={weatherData.forecast} />
                
                <WeatherTravelTip condition={weatherData.condition} />
              </motion.div>
            ) : (
              <WeatherPlaceholder />
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeatherForecast;
