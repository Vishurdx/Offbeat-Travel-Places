
import React from 'react';
import { MapPin, Hotel, Home, Tent, Building2, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Accommodation } from '@/data/destinations';

interface AccommodationInfoProps {
  accommodations: Accommodation[];
  isOpen: boolean;
}

const accommodationIcons = {
  hotel: <Hotel className="w-5 h-5" />,
  resort: <Building2 className="w-5 h-5" />,
  homestay: <Home className="w-5 h-5" />,
  guesthouse: <Home className="w-5 h-5" />,
  campsite: <Tent className="w-5 h-5" />
};

const AccommodationInfo: React.FC<AccommodationInfoProps> = ({ accommodations, isOpen }) => {
  if (!isOpen || !accommodations || accommodations.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 shadow-md"
    >
      <h3 className="text-lg font-semibold mb-3 flex items-center">
        <Hotel className="mr-2 h-5 w-5 text-primary" />
        <span>Stay Options</span>
      </h3>
      <div className="space-y-4">
        {accommodations.map((accommodation, index) => (
          <motion.div
            key={`${accommodation.name}-${index}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="p-3 bg-white dark:bg-gray-800/50 rounded shadow-sm"
          >
            <div className="flex items-start">
              <div className="mt-1 mr-3 text-primary">
                {accommodationIcons[accommodation.type] || <Building2 className="w-5 h-5" />}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 flex items-center">
                  {accommodation.name}
                  <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary">
                    {accommodation.type.charAt(0).toUpperCase() + accommodation.type.slice(1)}
                  </span>
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {accommodation.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-3 text-sm">
                  <div className="flex items-center text-amber-600 dark:text-amber-400">
                    <span className="font-medium">{accommodation.priceRange}</span>
                  </div>
                  {accommodation.contact && (
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Phone className="h-3.5 w-3.5 mr-1" />
                      <span>{accommodation.contact}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AccommodationInfo;
