
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StateFilterProps {
  filteredStates: string[];
  selectedState: string | null;
  searchQuery: string;
  handleStateClick: (state: string) => void;
}

const StateFilter: React.FC<StateFilterProps> = ({ 
  filteredStates, 
  selectedState, 
  searchQuery,
  handleStateClick 
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
      {filteredStates.map((state) => (
        <motion.button
          key={state}
          onClick={() => handleStateClick(state)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
            "border hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/30",
            selectedState === state
              ? "bg-primary text-white border-transparent"
              : "bg-white text-gray-800 border-gray-200 hover:border-primary/50 hover:scale-105"
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {state}
        </motion.button>
      ))}
      
      {filteredStates.length === 0 && (
        <p className="text-gray-500 italic mt-4">No states found matching "{searchQuery}"</p>
      )}
    </div>
  );
};

export default StateFilter;
