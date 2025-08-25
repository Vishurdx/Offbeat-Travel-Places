
import React from 'react';
import { MapPin } from 'lucide-react';
import { Destination } from '@/types/destination';

interface DestinationImageProps {
  destination: Destination;
  imageSrc: string;
}

const DestinationImage: React.FC<DestinationImageProps> = ({ destination, imageSrc }) => {
  // Determine gradient based on state name (for visual variety)
  const getGradient = (stateName: string) => {
    const firstChar = stateName.charAt(0).toLowerCase();
    
    if (firstChar <= 'g') return 'from-pink-500 to-purple-600';
    if (firstChar <= 'm') return 'from-amber-500 to-pink-500';
    if (firstChar <= 's') return 'from-blue-500 to-teal-500';
    return 'from-emerald-500 to-blue-600';
  };

  return (
    <div className="aspect-[4/3] w-full overflow-hidden relative">
      <img 
        src={imageSrc} 
        alt={destination.name}
        className="w-full h-full object-cover transition duration-700 ease-in-out group-hover:scale-110"
        loading="lazy"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      
      {/* State Badge */}
      <div className={`absolute top-3 left-3 inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getGradient(destination.state)} text-white shadow-sm`}>
        <MapPin className="mr-1 h-3 w-3 text-white" />
        {destination.state}
      </div>
    </div>
  );
};

export default DestinationImage;
