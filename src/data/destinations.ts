
import { Destination } from '@/types/destination';
import { destinations as northEastDestinations } from './destinations/northEast';
import { destinations as himachalDestinations } from './destinations/himachal';
import { destinations as otherDestinations } from './destinations/others';

// Combine all destination regions
export const destinations: Destination[] = [
  ...northEastDestinations,
  ...himachalDestinations,
  ...otherDestinations
];

export const states: string[] = Array.from(
  new Set(destinations.map(destination => destination.state))
).sort();

export const getDestinationsByState = (state: string): Destination[] => {
  return destinations.filter(destination => destination.state === state);
};

// Re-export from activities
export { getActivityById } from './activities';
