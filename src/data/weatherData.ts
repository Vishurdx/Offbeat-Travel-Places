export type WeatherCondition = 'sunny' | 'cloudy' | 'rainy' | 'snowy' | 'windy';

export interface WeatherData {
  location: string;
  condition: WeatherCondition;
  temperature: number;
  humidity: number;
  windSpeed: number;
  forecast: Array<{
    day: string;
    condition: WeatherCondition;
    highTemp: number;
    lowTemp: number;
  }>;
}

// Mock weather data for different locations
export const weatherDatabase: Record<string, WeatherData> = {
  'Mechuka, Arunachal Pradesh': {
    location: 'Mechuka, Arunachal Pradesh',
    condition: 'cloudy',
    temperature: 15,
    humidity: 78,
    windSpeed: 12,
    forecast: [
      { day: 'Today', condition: 'cloudy', highTemp: 15, lowTemp: 8 },
      { day: 'Tomorrow', condition: 'rainy', highTemp: 14, lowTemp: 9 },
      { day: 'Wednesday', condition: 'cloudy', highTemp: 16, lowTemp: 7 },
      { day: 'Thursday', condition: 'sunny', highTemp: 18, lowTemp: 10 },
      { day: 'Friday', condition: 'rainy', highTemp: 13, lowTemp: 6 }
    ]
  },
  'Anini, Arunachal Pradesh': {
    location: 'Anini, Arunachal Pradesh',
    condition: 'rainy',
    temperature: 12,
    humidity: 85,
    windSpeed: 15,
    forecast: [
      { day: 'Today', condition: 'rainy', highTemp: 12, lowTemp: 5 },
      { day: 'Tomorrow', condition: 'rainy', highTemp: 13, lowTemp: 6 },
      { day: 'Wednesday', condition: 'cloudy', highTemp: 14, lowTemp: 7 },
      { day: 'Thursday', condition: 'cloudy', highTemp: 15, lowTemp: 8 },
      { day: 'Friday', condition: 'sunny', highTemp: 16, lowTemp: 9 }
    ]
  },
  'Sangti Valley, Arunachal Pradesh': {
    location: 'Sangti Valley, Arunachal Pradesh',
    condition: 'sunny',
    temperature: 20,
    humidity: 60,
    windSpeed: 8,
    forecast: [
      { day: 'Today', condition: 'sunny', highTemp: 20, lowTemp: 12 },
      { day: 'Tomorrow', condition: 'cloudy', highTemp: 18, lowTemp: 11 },
      { day: 'Wednesday', condition: 'sunny', highTemp: 21, lowTemp: 13 },
      { day: 'Thursday', condition: 'sunny', highTemp: 22, lowTemp: 14 },
      { day: 'Friday', condition: 'cloudy', highTemp: 19, lowTemp: 12 }
    ]
  },
  'Mayodia, Arunachal Pradesh': {
    location: 'Mayodia, Arunachal Pradesh',
    condition: 'snowy',
    temperature: 3,
    humidity: 90,
    windSpeed: 20,
    forecast: [
      { day: 'Today', condition: 'snowy', highTemp: 3, lowTemp: -2 },
      { day: 'Tomorrow', condition: 'snowy', highTemp: 2, lowTemp: -3 },
      { day: 'Wednesday', condition: 'cloudy', highTemp: 5, lowTemp: -1 },
      { day: 'Thursday', condition: 'snowy', highTemp: 1, lowTemp: -4 },
      { day: 'Friday', condition: 'cloudy', highTemp: 4, lowTemp: -2 }
    ]
  },
  'Namsai, Arunachal Pradesh': {
    location: 'Namsai, Arunachal Pradesh',
    condition: 'cloudy',
    temperature: 22,
    humidity: 75,
    windSpeed: 10,
    forecast: [
      { day: 'Today', condition: 'cloudy', highTemp: 22, lowTemp: 15 },
      { day: 'Tomorrow', condition: 'rainy', highTemp: 20, lowTemp: 14 },
      { day: 'Wednesday', condition: 'rainy', highTemp: 21, lowTemp: 15 },
      { day: 'Thursday', condition: 'cloudy', highTemp: 23, lowTemp: 16 },
      { day: 'Friday', condition: 'sunny', highTemp: 25, lowTemp: 17 }
    ]
  },
  'Ziro, Arunachal Pradesh': {
    location: 'Ziro, Arunachal Pradesh',
    condition: 'sunny',
    temperature: 18,
    humidity: 65,
    windSpeed: 7,
    forecast: [
      { day: 'Today', condition: 'sunny', highTemp: 18, lowTemp: 11 },
      { day: 'Tomorrow', condition: 'sunny', highTemp: 19, lowTemp: 12 },
      { day: 'Wednesday', condition: 'cloudy', highTemp: 17, lowTemp: 10 },
      { day: 'Thursday', condition: 'rainy', highTemp: 16, lowTemp: 9 },
      { day: 'Friday', condition: 'cloudy', highTemp: 17, lowTemp: 10 }
    ]
  },
  'Majuli, Assam': {
    location: 'Majuli, Assam',
    condition: 'cloudy',
    temperature: 24,
    humidity: 80,
    windSpeed: 5,
    forecast: [
      { day: 'Today', condition: 'cloudy', highTemp: 24, lowTemp: 18 },
      { day: 'Tomorrow', condition: 'rainy', highTemp: 23, lowTemp: 17 },
      { day: 'Wednesday', condition: 'rainy', highTemp: 22, lowTemp: 17 },
      { day: 'Thursday', condition: 'cloudy', highTemp: 25, lowTemp: 19 },
      { day: 'Friday', condition: 'sunny', highTemp: 26, lowTemp: 20 }
    ]
  },
  'Gandikota, Andhra Pradesh': {
    location: 'Gandikota, Andhra Pradesh',
    condition: 'sunny',
    temperature: 32,
    humidity: 45,
    windSpeed: 15,
    forecast: [
      { day: 'Today', condition: 'sunny', highTemp: 32, lowTemp: 24 },
      { day: 'Tomorrow', condition: 'sunny', highTemp: 33, lowTemp: 25 },
      { day: 'Wednesday', condition: 'sunny', highTemp: 34, lowTemp: 26 },
      { day: 'Thursday', condition: 'cloudy', highTemp: 31, lowTemp: 23 },
      { day: 'Friday', condition: 'cloudy', highTemp: 30, lowTemp: 22 }
    ]
  },
  'Dholavira, Gujarat': {
    location: 'Dholavira, Gujarat',
    condition: 'sunny',
    temperature: 35,
    humidity: 30,
    windSpeed: 18,
    forecast: [
      { day: 'Today', condition: 'sunny', highTemp: 35, lowTemp: 27 },
      { day: 'Tomorrow', condition: 'sunny', highTemp: 36, lowTemp: 28 },
      { day: 'Wednesday', condition: 'windy', highTemp: 34, lowTemp: 26 },
      { day: 'Thursday', condition: 'sunny', highTemp: 35, lowTemp: 27 },
      { day: 'Friday', condition: 'sunny', highTemp: 37, lowTemp: 29 }
    ]
  },
  'Chitkul, Himachal Pradesh': {
    location: 'Chitkul, Himachal Pradesh',
    condition: 'cloudy',
    temperature: 8,
    humidity: 75,
    windSpeed: 12,
    forecast: [
      { day: 'Today', condition: 'cloudy', highTemp: 8, lowTemp: 1 },
      { day: 'Tomorrow', condition: 'snowy', highTemp: 6, lowTemp: -1 },
      { day: 'Wednesday', condition: 'snowy', highTemp: 5, lowTemp: -2 },
      { day: 'Thursday', condition: 'cloudy', highTemp: 7, lowTemp: 0 },
      { day: 'Friday', condition: 'sunny', highTemp: 10, lowTemp: 2 }
    ]
  },
  'Dzukou Valley, Nagaland': {
    location: 'Dzukou Valley, Nagaland',
    condition: 'cloudy',
    temperature: 15,
    humidity: 82,
    windSpeed: 8,
    forecast: [
      { day: 'Today', condition: 'cloudy', highTemp: 15, lowTemp: 9 },
      { day: 'Tomorrow', condition: 'rainy', highTemp: 14, lowTemp: 8 },
      { day: 'Wednesday', condition: 'rainy', highTemp: 13, lowTemp: 7 },
      { day: 'Thursday', condition: 'cloudy', highTemp: 16, lowTemp: 10 },
      { day: 'Friday', condition: 'sunny', highTemp: 18, lowTemp: 11 }
    ]
  },
  'Munsiyari, Uttarakhand': {
    location: 'Munsiyari, Uttarakhand',
    condition: 'sunny',
    temperature: 12,
    humidity: 60,
    windSpeed: 10,
    forecast: [
      { day: 'Today', condition: 'sunny', highTemp: 12, lowTemp: 5 },
      { day: 'Tomorrow', condition: 'cloudy', highTemp: 11, lowTemp: 4 },
      { day: 'Wednesday', condition: 'sunny', highTemp: 13, lowTemp: 6 },
      { day: 'Thursday', condition: 'sunny', highTemp: 14, lowTemp: 7 },
      { day: 'Friday', condition: 'cloudy', highTemp: 12, lowTemp: 5 }
    ]
  },
  'Sandakphu, West Bengal': {
    location: 'Sandakphu, West Bengal',
    condition: 'windy',
    temperature: 7,
    humidity: 65,
    windSpeed: 25,
    forecast: [
      { day: 'Today', condition: 'windy', highTemp: 7, lowTemp: 0 },
      { day: 'Tomorrow', condition: 'cloudy', highTemp: 8, lowTemp: 1 },
      { day: 'Wednesday', condition: 'windy', highTemp: 6, lowTemp: -1 },
      { day: 'Thursday', condition: 'cloudy', highTemp: 9, lowTemp: 2 },
      { day: 'Friday', condition: 'sunny', highTemp: 11, lowTemp: 3 }
    ]
  },
  'Lambasingi, Andhra Pradesh': {
    location: 'Lambasingi, Andhra Pradesh',
    condition: 'cloudy',
    temperature: 18,
    humidity: 75,
    windSpeed: 10,
    forecast: [
      { day: 'Today', condition: 'cloudy', highTemp: 18, lowTemp: 10 },
      { day: 'Tomorrow', condition: 'cloudy', highTemp: 19, lowTemp: 11 },
      { day: 'Wednesday', condition: 'sunny', highTemp: 21, lowTemp: 12 },
      { day: 'Thursday', condition: 'sunny', highTemp: 22, lowTemp: 13 },
      { day: 'Friday', condition: 'rainy', highTemp: 17, lowTemp: 9 }
    ]
  },
  'Dzüko Valley, Nagaland': {
    location: 'Dzüko Valley, Nagaland',
    condition: 'sunny',
    temperature: 16,
    humidity: 65,
    windSpeed: 8,
    forecast: [
      { day: 'Today', condition: 'sunny', highTemp: 16, lowTemp: 7 },
      { day: 'Tomorrow', condition: 'cloudy', highTemp: 15, lowTemp: 6 },
      { day: 'Wednesday', condition: 'rainy', highTemp: 14, lowTemp: 5 },
      { day: 'Thursday', condition: 'cloudy', highTemp: 16, lowTemp: 7 },
      { day: 'Friday', condition: 'sunny', highTemp: 17, lowTemp: 8 }
    ]
  },
  'Chopta, Uttarakhand': {
    location: 'Chopta, Uttarakhand',
    condition: 'sunny',
    temperature: 10,
    humidity: 55,
    windSpeed: 12,
    forecast: [
      { day: 'Today', condition: 'sunny', highTemp: 10, lowTemp: 2 },
      { day: 'Tomorrow', condition: 'sunny', highTemp: 11, lowTemp: 3 },
      { day: 'Wednesday', condition: 'cloudy', highTemp: 9, lowTemp: 1 },
      { day: 'Thursday', condition: 'snowy', highTemp: 5, lowTemp: -2 },
      { day: 'Friday', condition: 'cloudy', highTemp: 8, lowTemp: 0 }
    ]
  },
  'Saputara, Gujarat': {
    location: 'Saputara, Gujarat',
    condition: 'cloudy',
    temperature: 22,
    humidity: 60,
    windSpeed: 8,
    forecast: [
      { day: 'Today', condition: 'cloudy', highTemp: 22, lowTemp: 15 },
      { day: 'Tomorrow', condition: 'rainy', highTemp: 20, lowTemp: 14 },
      { day: 'Wednesday', condition: 'rainy', highTemp: 21, lowTemp: 15 },
      { day: 'Thursday', condition: 'cloudy', highTemp: 23, lowTemp: 16 },
      { day: 'Friday', condition: 'sunny', highTemp: 25, lowTemp: 17 }
    ]
  },
  'Sunderbans, West Bengal': {
    location: 'Sunderbans, West Bengal',
    condition: 'sunny',
    temperature: 30,
    humidity: 78,
    windSpeed: 7,
    forecast: [
      { day: 'Today', condition: 'sunny', highTemp: 30, lowTemp: 22 },
      { day: 'Tomorrow', condition: 'cloudy', highTemp: 29, lowTemp: 21 },
      { day: 'Wednesday', condition: 'rainy', highTemp: 28, lowTemp: 21 },
      { day: 'Thursday', condition: 'rainy', highTemp: 27, lowTemp: 20 },
      { day: 'Friday', condition: 'cloudy', highTemp: 29, lowTemp: 21 }
    ]
  }
};

// Default popular destinations for quick search
export const popularDestinations = [
  'Mechuka, Arunachal Pradesh',
  'Sandakphu, West Bengal',
  'Chitkul, Himachal Pradesh',
  'Majuli, Assam',
  'Dzüko Valley, Nagaland',
  'Lambasingi, Andhra Pradesh',
  'Chopta, Uttarakhand',
  'Sunderbans, West Bengal',
  'Saputara, Gujarat'
];

// Calculate best time to visit based on location
export const getBestTimeToVisit = (location: string): string => {
  switch (location) {
    case 'Mechuka, Arunachal Pradesh':
      return 'October to April';
    case 'Anini, Arunachal Pradesh':
      return 'March to June';
    case 'Sangti Valley, Arunachal Pradesh':
      return 'September to May';
    case 'Mayodia, Arunachal Pradesh':
      return 'December to February for snow';
    case 'Namsai, Arunachal Pradesh':
      return 'November to March';
    case 'Ziro, Arunachal Pradesh':
      return 'September to March';
    case 'Majuli, Assam':
      return 'November to March';
    case 'Gandikota, Andhra Pradesh':
      return 'October to March';
    case 'Dholavira, Gujarat':
      return 'November to February';
    case 'Chitkul, Himachal Pradesh':
      return 'May to October';
    case 'Dzukou Valley, Nagaland':
      return 'June to September';
    case 'Munsiyari, Uttarakhand':
      return 'March to June and September to November';
    case 'Sandakphu, West Bengal':
      return 'October to December and March to April';
    case 'Lambasingi, Andhra Pradesh':
      return 'November to February';
    case 'Dzüko Valley, Nagaland':
      return 'June to September';
    case 'Chopta, Uttarakhand':
      return 'April to June and September to November';
    case 'Saputara, Gujarat':
      return 'October to June';
    case 'Sunderbans, West Bengal':
      return 'October to March';
    default:
      return 'Varies seasonally';
  }
};
