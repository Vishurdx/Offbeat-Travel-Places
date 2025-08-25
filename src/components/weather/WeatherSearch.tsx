
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { popularDestinations } from '@/data/weatherData';
import { cn } from '@/lib/utils';
import { Search, Locate } from 'lucide-react';
import { motion } from 'framer-motion';

interface WeatherSearchProps {
  searchQuery: string;
  selectedLocation: string | null;
  onSearchQueryChange: (query: string) => void;
  onSearch: () => void;
  onQuickSearch: (location: string) => void;
}

const WeatherSearch: React.FC<WeatherSearchProps> = ({
  searchQuery,
  selectedLocation,
  onSearchQueryChange,
  onSearch,
  onQuickSearch
}) => {
  // Handle Enter key press
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };
  
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Search for a destination..."
            value={searchQuery}
            onChange={(e) => onSearchQueryChange(e.target.value)}
            onKeyDown={handleKeyDown}
            className="pl-10 pr-4 py-2 w-full"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button onClick={onSearch} className="bg-blue-600 hover:bg-blue-700 transition-all duration-300">
            <Search className="mr-2 h-4 w-4" />
            Check Weather
          </Button>
        </motion.div>
      </div>

      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-gray-500 dark:text-gray-400">Popular destinations:</p>
          <Locate className="h-4 w-4 text-blue-500 animate-pulse" />
        </div>
        <div className="flex flex-wrap gap-2">
          {popularDestinations.map((location) => (
            <motion.div
              key={location}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={() => onQuickSearch(location)}
                className={cn(
                  "text-xs border-gray-200 dark:border-gray-700 transition-all duration-300",
                  selectedLocation === location 
                    ? "bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300"
                    : "hover:bg-gray-50 hover:border-gray-300 dark:hover:bg-gray-800 dark:hover:border-gray-600"
                )}
              >
                {location.split(',')[0]}
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WeatherSearch;
