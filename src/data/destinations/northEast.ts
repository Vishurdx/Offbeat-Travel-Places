
import { Destination } from '@/types/destination';

export const destinations: Destination[] = [
  {
    id: "majuli",
    name: "Majuli Island",
    state: "Assam",
    description: "The world's largest river island, home to unique Assamese culture, neo-Vaishnavite monasteries, and stunning landscapes.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["kayaking", "festivals", "history"],
    galleryImages: [
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ],
    accommodation: [
      {
        type: "homestay",
        name: "Mishing Tribe Homestay",
        description: "Traditional bamboo cottages on stilts with authentic tribal meals and cultural performances.",
        priceRange: "₹800-1500",
        contact: "+91 9435067890"
      },
      {
        type: "guesthouse",
        name: "La Maison de Anand",
        description: "Comfortable guesthouse with river views, organic food and cultural tours.",
        priceRange: "₹1500-2500",
        contact: "+91 9435012345"
      },
      {
        type: "hotel",
        name: "River View Hotel",
        description: "Modern hotel with all amenities and stunning views of the river.",
        priceRange: "₹2500-4500",
        contact: "+91 9435678901"
      }
    ],
    transport: [
      {
        type: "train",
        name: "Rajdhani/Shatabdi",
        from: "Delhi/Kolkata",
        details: "Train to Jorhat, then bus/taxi to Nimati Ghat, ferry to Majuli",
        duration: "20-30 hours + 1 hour + 1 hour ferry",
        fareRange: "₹1500-3000 + ₹100 + ₹15-30"
      },
      {
        type: "flight",
        name: "IndiGo/Air India",
        from: "Major cities",
        details: "Flight to Jorhat, taxi to Nimati Ghat, ferry to Majuli",
        frequency: "Daily flights",
        duration: "2-4 hours + 1 hour + 1 hour ferry",
        fareRange: "₹4000-10000 + ₹500 + ₹15-30"
      },
      {
        type: "ferry",
        name: "Majuli Ferry Service",
        from: "Nimati Ghat",
        details: "Regular ferry service to Majuli Island",
        frequency: "Multiple times daily",
        duration: "1 hour",
        fareRange: "₹15-30"
      }
    ]
  },
  {
    id: "khonoma",
    name: "Khonoma",
    state: "Nagaland",
    description: "India's first green village known for sustainable living, terraced agriculture, and rich Angami Naga cultural heritage.",
    image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["hiking", "food", "history"],
    galleryImages: [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ],
    accommodation: [
      {
        type: "homestay",
        name: "Khonoma Village Homestay",
        description: "Traditional Naga homestay with authentic cultural experiences and local cuisine.",
        priceRange: "₹1000-2000",
        contact: "+91 9436012345"
      },
      {
        type: "guesthouse",
        name: "Green Village Lodge",
        description: "Eco-friendly accommodation with stunning views of the terraced fields.",
        priceRange: "₹1500-3000",
        contact: "+91 8730123456"
      },
      {
        type: "hotel",
        name: "Heritage Inn",
        description: "Comfortable hotel with modern amenities and cultural displays.",
        priceRange: "₹2500-4500",
        contact: "+91 9436789012"
      }
    ],
    transport: [
      {
        type: "train",
        name: "Nagaland Express",
        from: "Guwahati",
        details: "Train to Dimapur, then shared taxi to Kohima and Khonoma",
        frequency: "Tri-weekly service",
        duration: "7-8 hours + 4-5 hours road journey",
        fareRange: "₹400-900 + ₹1500-2000"
      },
      {
        type: "taxi",
        name: "Shared Sumo",
        from: "Kohima",
        details: "Direct shared taxi service to Khonoma",
        frequency: "Daily morning departures",
        duration: "1-1.5 hours",
        fareRange: "₹300-500"
      },
      {
        type: "train",
        name: "Dimapur Express",
        from: "New Delhi",
        details: "Direct train to Dimapur, then local transport to Khonoma",
        frequency: "Twice weekly",
        duration: "30-35 hours + 5-6 hours road journey",
        fareRange: "₹1500-3500 + ₹2000"
      }
    ]
  },
  {
    id: "mechuka",
    name: "Mechuka",
    state: "Arunachal Pradesh",
    description: "A secluded valley near the China border with pristine landscapes, Buddhist monasteries, and tribal culture.",
    image: "/images/mechuka1.jpg",
    activities: ["trekking", "photography", "camping"],
    galleryImages: [
      "/images/mechuka2.jpg",
      "/images/mechuka3.jpg",
      "/images/mechuka4.jpg",
      "/images/mechuka5.jpg"
    ],
    accommodation: [
      {
        type: "homestay",
        name: "Mechuka Valley Homestay",
        description: "Authentic tribal homestay with cultural experiences and local food.",
        priceRange: "₹800-1500",
        contact: "+91 9436701234"
      },
      {
        type: "guesthouse",
        name: "Circuit House",
        description: "Government guesthouse with basic facilities and mountain views.",
        priceRange: "₹1200-2000",
        contact: "+91 3791222555"
      },
      {
        type: "hotel",
        name: "Mountain View Resort",
        description: "Comfortable accommodation with modern amenities and stunning scenery.",
        priceRange: "₹2500-4500",
        contact: "+91 9436789012"
      }
    ],
    transport: [
      {
        type: "train",
        name: "Arunachal Express",
        from: "Guwahati",
        details: "Train to Naharlagun, then shared taxi to Along and Mechuka",
        frequency: "Daily service",
        duration: "12-14 hours + 10-12 hours road journey",
        fareRange: "₹400-900 + ₹2500-3500"
      },
      {
        type: "flight",
        name: "Alliance Air",
        from: "Guwahati/Kolkata",
        details: "Flight to Pasighat, then road journey to Mechuka",
        frequency: "Bi-weekly service",
        duration: "2 hours flight + 6-7 hours road journey",
        fareRange: "₹4000-8000 + ₹2500-3000"
      },
      {
        type: "train",
        name: "Northeast Frontier Express",
        from: "New Delhi",
        details: "Train to Guwahati, then connecting transport to Mechuka",
        frequency: "Daily service",
        duration: "32 hours + 14 hours road journey",
        fareRange: "₹1500-3500 + ₹3000-4000"
      }
    ]
  },
  {
    id: "anini",
    name: "Anini",
    state: "Arunachal Pradesh",
    description: "The headquarters of the Dibang Valley district where the clouds come down to kiss the land. With much of its beauty peeking from behind the misty air, this unexplored town is the place to visit for pristine calmness.",
    image: "/images/anini1.jpg",
    activities: ["hiking", "photography", "nature"],
    galleryImages: [
      "/images/anini2.jpg",
      "/images/anini3.jpg",
      "/images/anini4.jpg",
      "/images/anini5.jpg"
    ],
    accommodation: [
      {
        type: "guesthouse",
        name: "Dibang Valley Guesthouse",
        description: "Simple accommodation with basic amenities and mountain views.",
        priceRange: "₹800-1500",
        contact: "+91 9436701234"
      },
      {
        type: "homestay",
        name: "Local Family Homestay",
        description: "Authentic homestay experience with local hosts and food.",
        priceRange: "₹600-1200",
        contact: "+91 9436789012"
      },
      {
        type: "hotel",
        name: "Mountain Retreat",
        description: "Comfortable rooms with heating and modern amenities.",
        priceRange: "₹2000-3500",
        contact: "+91 9612345678"
      }
    ],
    transport: [
      {
        type: "train",
        name: "Northeast Express",
        from: "New Delhi",
        details: "Train to Tinsukia, then road journey to Anini",
        frequency: "Tri-weekly service",
        duration: "36 hours + 12 hours road journey",
        fareRange: "₹1500-3500 + ₹3000-4000"
      },
      {
        type: "jeep",
        name: "Shared 4x4 Jeep",
        from: "Roing",
        details: "Jeep service through mountain roads to Anini",
        frequency: "Weekly service",
        duration: "8-10 hours",
        fareRange: "₹1500-2000"
      },
      {
        type: "train",
        name: "Arunachal Passenger",
        from: "Guwahati",
        details: "Train to Tinsukia, then shared jeep to Anini",
        frequency: "Daily service",
        duration: "12 hours + 12 hours road journey",
        fareRange: "₹400-900 + ₹2500-3500"
      }
    ]
  },
  // Continue with the other northeast destinations...
];
