
import { Destination } from '@/types/destination';

export const destinations: Destination[] = [
  {
    id: "spiti-valley",
    name: "Spiti Valley",
    state: "Himachal Pradesh",
    description: "A cold desert mountain valley with breathtaking landscapes, ancient monasteries, and starry night skies.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["stargazing", "photography", "camping"],
    galleryImages: [
      "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ],
    accommodation: [
      {
        type: "homestay",
        name: "Spiti Heritage Homestay",
        description: "Traditional mountain homestay with warm hospitality and home-cooked meals.",
        priceRange: "₹1200-2500",
        contact: "+91 9418273645"
      },
      {
        type: "hotel",
        name: "Himalayan Heights Hotel",
        description: "Comfortable rooms with panoramic mountain views and modern amenities.",
        priceRange: "₹3000-6000",
        contact: "+91 9876123456"
      },
      {
        type: "hotel",
        name: "Spiti Valley Retreat",
        description: "Luxury accommodations with traditional architecture and all modern comforts.",
        priceRange: "₹4500-8000",
        contact: "+91 9418123456"
      }
    ],
    transport: [
      {
        type: "train",
        name: "Kalka-Shimla Train",
        from: "Delhi/Chandigarh",
        details: "Train to Shimla, then shared taxi to Spiti Valley",
        frequency: "Daily service",
        duration: "5-6 hours train + 10-12 hours road journey",
        fareRange: "₹300-700 + ₹2500-3500"
      },
      {
        type: "bus",
        name: "HRTC Deluxe",
        from: "Manali/Shimla",
        details: "Direct bus service to Kaza (Spiti Valley)",
        frequency: "Seasonal (Jun-Oct)",
        duration: "12-16 hours",
        fareRange: "₹500-1000"
      },
      {
        type: "train",
        name: "Himalayan Queen",
        from: "Delhi",
        details: "Train to Kalka, toy train to Shimla, then taxi to Spiti",
        frequency: "Daily service",
        duration: "5 hours + 5 hours + 12 hours road journey",
        fareRange: "₹400-800 + ₹300-500 + ₹3000-4000"
      }
    ]
  },
  {
    id: "tirthan-valley",
    name: "Tirthan Valley",
    state: "Himachal Pradesh",
    description: "A hidden paradise perfect for nature lovers, offering serene landscapes and adventure activities like trekking and fishing. It's relatively untouched by mainstream tourism.",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["hiking", "fishing", "nature", "photography"],
    galleryImages: [
      "https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1464278533981-50e57c2b7d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ],
    accommodation: [
      {
        type: "homestay",
        name: "Tirthan Riverside Stay",
        description: "Cozy homestay alongside the Tirthan River with home-cooked meals",
        priceRange: "₹1200-2500",
        contact: "+91 9418123456"
      },
      {
        type: "hotel",
        name: "Trout Valley Resort",
        description: "Comfortable resort with riverside location and trout fishing facilities",
        priceRange: "₹3000-5000",
        contact: "+91 9816543210"
      },
      {
        type: "guesthouse",
        name: "Forest View Guesthouse",
        description: "Simple but clean accommodation with beautiful forest views",
        priceRange: "₹800-1500",
        contact: "+91 9459876543"
      }
    ],
    transport: [
      {
        type: "train",
        name: "Shatabdi Express",
        from: "Delhi",
        details: "Train to Chandigarh, then bus/taxi to Tirthan Valley",
        frequency: "Daily service",
        duration: "4-5 hours train + 7-8 hours road journey",
        fareRange: "₹400-1200 + ₹1500-3000"
      },
      {
        type: "bus",
        name: "HRTC Volvo",
        from: "Delhi/Chandigarh",
        details: "Bus to Aut, then local transport to Tirthan Valley",
        frequency: "Daily service",
        duration: "12-14 hours + 1 hour local transport",
        fareRange: "₹800-1200 + ₹300-500"
      },
      {
        type: "train",
        name: "Himalayan Queen",
        from: "Delhi",
        details: "Train to Kiratpur, then taxi to Tirthan Valley",
        frequency: "Daily service",
        duration: "6 hours + 5-6 hours road journey",
        fareRange: "₹300-700 + ₹2000-3000"
      }
    ]
  },
  // Continue with other Himachal destinations...
];
