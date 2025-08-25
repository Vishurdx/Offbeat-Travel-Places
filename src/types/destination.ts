
export interface Activity {
  id: string;
  name: string;
  icon: string;
}

export interface Accommodation {
  type: 'hotel' | 'resort' | 'homestay' | 'guesthouse' | 'campsite';
  name: string;
  description: string;
  priceRange: string; // e.g. "₹1500-3000"
  contact?: string;
}

export interface Transport {
  type: 'train' | 'bus' | 'flight' | 'taxi' | 'ferry' | 'jeep';
  name: string;
  from: string;
  details: string;
  frequency?: string;
  duration?: string;
  fareRange?: string; // e.g. "₹800-1500"
}

export interface Destination {
  id: string;
  name: string;
  state: string;
  description: string;
  image: string;
  activities: string[];
  galleryImages?: string[];
  accommodation?: Accommodation[];
  transport?: Transport[];
}
