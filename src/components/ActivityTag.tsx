
import React from 'react';
import { Activity } from '@/data/destinations';
import { cn } from '@/lib/utils';
import { 
  Map, Camera, Bird, Droplets, Star, Landmark, Bike, Utensils, PartyPopper, 
  MountainSnow, Flame, Tent
} from 'lucide-react';

interface ActivityTagProps {
  activity: Activity;
  className?: string;
}

const ActivityTag: React.FC<ActivityTagProps> = ({ activity, className }) => {
  const getIcon = () => {
    switch (activity.icon) {
      case 'map': return <Map className="h-3 w-3" />;
      case 'camera': return <Camera className="h-3 w-3" />;
      case 'bird': return <Bird className="h-3 w-3" />;
      case 'droplets': return <Droplets className="h-3 w-3" />;
      case 'star': return <Star className="h-3 w-3" />;
      case 'landmark': return <Landmark className="h-3 w-3" />;
      case 'bike': return <Bike className="h-3 w-3" />;
      case 'utensils': return <Utensils className="h-3 w-3" />;
      case 'party-popper': return <PartyPopper className="h-3 w-3" />;
      case 'mountain-snow': return <MountainSnow className="h-3 w-3" />;
      case 'flame': return <Flame className="h-3 w-3" />;
      case 'tent': return <Tent className="h-3 w-3" />;
      default: return <Map className="h-3 w-3" />;
    }
  };

  return (
    <div 
      className={cn(
        "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary",
        className
      )}
    >
      {getIcon()}
      <span className="ml-1">{activity.name}</span>
    </div>
  );
};

export default ActivityTag;
