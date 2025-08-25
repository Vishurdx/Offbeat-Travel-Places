
import React from 'react';
import { Train, Bus, Plane, Car, Ship } from 'lucide-react';

interface TransportIconProps {
  type: string;
  className?: string;
}

const TransportIcon: React.FC<TransportIconProps> = ({ type, className = "w-5 h-5" }) => {
  switch (type) {
    case 'train':
      return <Train className={className} />;
    case 'bus':
      return <Bus className={className} />;
    case 'flight':
      return <Plane className={className} />;
    case 'taxi':
      return <Car className={className} />;
    case 'ferry':
      return <Ship className={className} />;
    case 'jeep':
      return <Car className={className} />;
    default:
      return <Car className={className} />;
  }
};

export default TransportIcon;
