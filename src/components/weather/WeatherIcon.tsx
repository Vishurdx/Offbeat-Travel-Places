
import React from 'react';
import { Cloud, CloudRain, Sun, Wind, CloudSnow } from 'lucide-react';
import { WeatherCondition } from '@/data/weatherData';

interface WeatherIconProps {
  condition: WeatherCondition;
  size?: number;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ condition, size = 24 }) => {
  switch (condition) {
    case 'sunny':
      return <Sun size={size} className="text-amber-500" />;
    case 'cloudy':
      return <Cloud size={size} className="text-gray-500" />;
    case 'rainy':
      return <CloudRain size={size} className="text-blue-500" />;
    case 'snowy':
      return <CloudSnow size={size} className="text-blue-200" />;
    case 'windy':
      return <Wind size={size} className="text-teal-500" />;
    default:
      return <Cloud size={size} className="text-gray-500" />;
  }
};

export default WeatherIcon;
