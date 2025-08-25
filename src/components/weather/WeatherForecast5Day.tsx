
import React from 'react';
import { WeatherData } from '@/data/weatherData';
import WeatherIcon from './WeatherIcon';

interface WeatherForecast5DayProps {
  forecast: WeatherData['forecast'];
}

const WeatherForecast5Day: React.FC<WeatherForecast5DayProps> = ({ forecast }) => {
  return (
    <>
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">5-Day Forecast</h4>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {forecast.map((day) => (
          <div key={day.day} className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm text-center">
            <p className="font-medium text-gray-900 dark:text-white mb-2">{day.day}</p>
            <div className="flex justify-center mb-2">
              <WeatherIcon condition={day.condition} />
            </div>
            <div className="flex justify-center items-center gap-2 text-sm">
              <span className="font-medium text-gray-900 dark:text-white">{day.highTemp}°</span>
              <span className="text-gray-500 dark:text-gray-400">{day.lowTemp}°</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WeatherForecast5Day;
