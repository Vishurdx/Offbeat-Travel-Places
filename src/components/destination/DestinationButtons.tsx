
import React from 'react';
import { Hotel, Train } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Destination } from '@/types/destination';

interface DestinationButtonsProps {
  destination: Destination;
  showAccommodation: boolean;
  showTransport: boolean;
  toggleAccommodation: (e: React.MouseEvent) => void;
  toggleTransport: (e: React.MouseEvent) => void;
}

const DestinationButtons: React.FC<DestinationButtonsProps> = ({ 
  destination, 
  showAccommodation, 
  showTransport,
  toggleAccommodation,
  toggleTransport
}) => {
  return (
    <div className="flex space-x-2 mt-3 px-4 pb-4">
      {destination.accommodation && destination.accommodation.length > 0 && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleAccommodation}
          className={cn(
            "flex items-center px-3 py-1.5 rounded-full text-xs font-medium transition-colors",
            showAccommodation 
              ? "bg-primary text-white" 
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          )}
        >
          <Hotel className="mr-1.5 h-3.5 w-3.5" />
          Stay Options
        </motion.button>
      )}
      
      {destination.transport && destination.transport.length > 0 && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTransport}
          className={cn(
            "flex items-center px-3 py-1.5 rounded-full text-xs font-medium transition-colors",
            showTransport 
              ? "bg-primary text-white" 
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          )}
        >
          <Train className="mr-1.5 h-3.5 w-3.5" />
          How to Reach
        </motion.button>
      )}
    </div>
  );
};

export default DestinationButtons;
