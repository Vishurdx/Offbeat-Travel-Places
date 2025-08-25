
import React from 'react';
import { Activity } from '@/types/destination';
import ActivityTag from '../ActivityTag';

interface DestinationContentProps {
  destination: {
    name: string;
    description: string;
    activities: string[];
  };
  getActivityById: (id: string) => Activity | undefined;
}

const DestinationContent: React.FC<DestinationContentProps> = ({ destination, getActivityById }) => {
  return (
    <div className="p-4 sm:p-5">
      <h3 className="text-xl font-bold mb-2 text-balance bg-gradient-to-br from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
        {destination.name}
      </h3>
      
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
        {destination.description}
      </p>
      
      {/* Activities */}
      <div className="flex flex-wrap gap-2 mb-4">
        {destination.activities.slice(0, 3).map((activityId) => {
          const activity = getActivityById(activityId);
          return activity ? (
            <ActivityTag key={activityId} activity={activity} />
          ) : null;
        })}
        {destination.activities.length > 3 && (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
            +{destination.activities.length - 3} more
          </span>
        )}
      </div>
    </div>
  );
};

export default DestinationContent;
