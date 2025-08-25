
import React from 'react';
import { Thermometer } from 'lucide-react';
import { WeatherCondition } from '@/data/weatherData';

interface WeatherTravelTipProps {
  condition: WeatherCondition;
}

const WeatherTravelTip: React.FC<WeatherTravelTipProps> = ({ condition }) => {
  const getTravelTip = (weatherCondition: WeatherCondition): string => {
    switch (weatherCondition) {
      case 'sunny':
        return 'Pack sunscreen, sunglasses, and light clothing. Stay hydrated!';
      case 'cloudy':
        return 'Pack a light jacket and consider layers for changing conditions.';
      case 'rainy':
        return 'Pack a waterproof jacket, umbrella, and waterproof footwear.';
      case 'snowy':
        return 'Pack warm layers, waterproof boots, gloves, and a heavy jacket.';
      case 'windy':
        return 'Pack windproof clothing and secure any loose items during your trip.';
      default:
        return 'Pack for variable weather conditions and check the forecast before your trip.';
    }
  };

  return (
    <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-4">
      <h4 className="flex items-center gap-2 text-blue-700 dark:text-blue-300 font-medium mb-2">
        <Thermometer className="h-4 w-4" /> 
        Travel Tip
      </h4>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        {getTravelTip(condition)}
      </p>
    </div>
  );
};

export default WeatherTravelTip;
