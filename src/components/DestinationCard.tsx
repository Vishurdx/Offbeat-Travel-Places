
import React, { useState, useEffect } from 'react';
import { getActivityById } from '@/data/activities';
import { Destination } from '@/types/destination';
import { MapPin, Heart, Hotel, Train } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

import ActivityTag from './ActivityTag';
import ImageGallery from './ImageGallery';
import AccommodationInfo from './AccommodationInfo';
import TransportInfo from './TransportInfo';
import DestinationImage from './destination/DestinationImage';
import DestinationContent from './destination/DestinationContent';
import DestinationButtons from './destination/DestinationButtons';

interface DestinationCardProps {
  destination: Destination;
  className?: string;
  style?: React.CSSProperties;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, className, style }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(destination.image);
  const [showAccommodation, setShowAccommodation] = useState(false);
  const [showTransport, setShowTransport] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => {
      // If image fails to load, try a fallback
      setImageSrc('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80');
    };
    img.src = destination.image;
  }, [destination.image]);
  
  const openGallery = () => {
    setIsGalleryOpen(true);
  };

  const toggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const toggleAccommodation = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowAccommodation(!showAccommodation);
    if (showTransport) setShowTransport(false);
  };

  const toggleTransport = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTransport(!showTransport);
    if (showAccommodation) setShowAccommodation(false);
  };

  return (
    <>
      <div 
        className={cn(
          "group relative overflow-hidden rounded-xl hover-scale cursor-pointer",
          "transition-all duration-500 ease-out shadow-md hover:shadow-xl",
          "bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900",
          className
        )}
        style={style}
        onClick={openGallery}
      >
        {/* Like Button */}
        <button 
          onClick={toggleLike}
          className="absolute top-3 right-3 z-30 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md transition-transform hover:scale-110"
        >
          <Heart 
            className={cn(
              "h-5 w-5 transition-colors", 
              isLiked ? "fill-pink-500 text-pink-500" : "text-gray-600"
            )} 
          />
        </button>

        {/* Image Container */}
        <DestinationImage 
          destination={destination} 
          imageSrc={imageSrc} 
        />
        
        {/* Content Section */}
        <DestinationContent 
          destination={destination} 
          getActivityById={getActivityById}
        />
        
        {/* Buttons Section */}
        <DestinationButtons 
          destination={destination}
          showAccommodation={showAccommodation}
          showTransport={showTransport}
          toggleAccommodation={toggleAccommodation}
          toggleTransport={toggleTransport}
        />

        {/* View Gallery Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-sm">
          <span className="px-4 py-2 bg-white/90 dark:bg-black/80 rounded-full text-sm font-semibold text-gray-800 dark:text-white shadow-lg">
            View Gallery
          </span>
        </div>

        {/* Accommodation Info */}
        <AnimatePresence>
          {destination.accommodation && (
            <AccommodationInfo 
              accommodations={destination.accommodation}
              isOpen={showAccommodation}
            />
          )}
        </AnimatePresence>

        {/* Transport Info */}
        <AnimatePresence>
          {destination.transport && (
            <TransportInfo 
              transport={destination.transport}
              isOpen={showTransport}
            />
          )}
        </AnimatePresence>
      </div>
      
      {/* Image Gallery Modal */}
      <ImageGallery 
        destination={destination}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </>
  );
};

export default DestinationCard;
