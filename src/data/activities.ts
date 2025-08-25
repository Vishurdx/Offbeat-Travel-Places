
import { Activity } from '@/types/destination';

export const activities: Activity[] = [
  { id: "hiking", name: "Hiking", icon: "map" },
  { id: "camping", name: "Camping", icon: "tent" },
  { id: "photography", name: "Photography", icon: "camera" },
  { id: "wildlife", name: "Wildlife Watching", icon: "bird" },
  { id: "kayaking", name: "Kayaking", icon: "droplets" },
  { id: "stargazing", name: "Stargazing", icon: "star" },
  { id: "history", name: "Historical Sites", icon: "landmark" },
  { id: "cycling", name: "Cycling", icon: "bike" },
  { id: "food", name: "Local Cuisine", icon: "utensils" },
  { id: "festivals", name: "Local Festivals", icon: "party-popper" },
  { id: "cave", name: "Cave Exploration", icon: "mountain-snow" },
  { id: "hotspring", name: "Hot Springs", icon: "flame" },
  { id: "trekking", name: "Trekking", icon: "footprints" },
  { id: "boating", name: "Boating", icon: "ship" },
  { id: "architecture", name: "Architecture", icon: "building" },
  { id: "waterfall", name: "Waterfall", icon: "waves" },
  { id: "snow", name: "Snow Activities", icon: "snowflake" },
  { id: "nature", name: "Nature Walks", icon: "leaf" },
  { id: "monastery", name: "Monastery Visits", icon: "heart" },
  { id: "scenic", name: "Scenic Views", icon: "mountain" },
  { id: "fishing", name: "Fishing", icon: "fish" },
  { id: "paragliding", name: "Paragliding", icon: "wind" },
  { id: "skiing", name: "Skiing", icon: "snowflake" },
  { id: "rural", name: "Rural Tourism", icon: "home" },
  { id: "beach", name: "Beach", icon: "waves" },
  { id: "spiritual", name: "Spiritual", icon: "heart" },
  { id: "tiger", name: "Tiger Safari", icon: "tiger" },
  { id: "village", name: "Village Tourism", icon: "home" },
  { id: "art", name: "Art & Culture", icon: "palette" },
  { id: "rhino", name: "Rhino Watching", icon: "shield" },
  { id: "tribal", name: "Tribal Culture", icon: "users" },
  { id: "rafting", name: "River Rafting", icon: "boat" },
  { id: "birding", name: "Bird Watching", icon: "bird" },
  { id: "craft", name: "Handicrafts", icon: "scissors" },
  { id: "tea", name: "Tea Gardens", icon: "coffee" },
];

export const getActivityById = (id: string): Activity | undefined => {
  return activities.find(activity => activity.id === id);
};
