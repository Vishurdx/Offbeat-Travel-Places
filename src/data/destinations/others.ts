
import { Destination } from '@/types/destination';

export const destinations: Destination[] = [
  {
    id: "valley-of-flowers",
    name: "Valley of Flowers",
    state: "Uttarakhand",
    description: "A UNESCO World Heritage site nestled in the Western Himalayas, known for its meadows of endemic alpine flowers and diverse flora.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["hiking", "photography", "wildlife"],
    galleryImages: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ],
    accommodation: [
      {
        type: "guesthouse",
        name: "Valley View Guesthouse",
        description: "Simple, clean accommodations with great views of the valley and surrounding mountains.",
        priceRange: "₹1200-2500",
        contact: "+91 9876543210"
      },
      {
        type: "campsite",
        name: "Alpine Meadows Camp",
        description: "Tented accommodations with basic facilities, perfect for nature lovers.",
        priceRange: "₹800-1500",
        contact: "+91 8765432109"
      },
      {
        type: "hotel",
        name: "Himalayan Retreat",
        description: "Comfortable hotel with mountain views and all modern amenities",
        priceRange: "₹3000-5000",
        contact: "+91 9411123456"
      }
    ],
    transport: [
      {
        type: "train",
        name: "Haridwar Express",
        from: "Delhi",
        details: "Train to Haridwar, then local transport to Valley of Flowers",
        duration: "6-7 hours + 8 hours local transport",
        fareRange: "₹300-1200"
      },
      {
        type: "bus",
        name: "GMOU Deluxe",
        from: "Rishikesh",
        details: "Bus to Govindghat, then trek to Valley of Flowers",
        frequency: "Daily morning departure",
        duration: "10-12 hours + 4 hour trek",
        fareRange: "₹400-600"
      },
      {
        type: "train",
        name: "Dehradun Shatabdi",
        from: "Delhi",
        details: "Train to Dehradun, then local transport to Govindghat and trek",
        frequency: "Daily service",
        duration: "6 hours + 10 hours road journey + 4 hour trek",
        fareRange: "₹600-1200 + ₹1500-2500"
      }
    ]
  },
  {
    id: "dholavira",
    name: "Dholavira",
    state: "Gujarat",
    description: "An archaeological site from the Indus Valley Civilization with remarkable water conservation systems and ancient urban planning.",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["history", "photography"],
    galleryImages: [
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ],
    accommodation: [
      {
        type: "guesthouse",
        name: "Dholavira Tourist Guesthouse",
        description: "Basic, clean accommodation near the archaeological site with helpful staff.",
        priceRange: "₹800-1500",
        contact: "+91 9427654321"
      },
      {
        type: "resort",
        name: "Rann Retreat",
        description: "Comfortable resort with traditional Kutchi decor and cultural experiences.",
        priceRange: "₹2500-5000",
        contact: "+91 9898765432"
      },
      {
        type: "hotel",
        name: "Heritage Dholavira Hotel",
        description: "Modern hotel with archaeological themed decor and guided tour services",
        priceRange: "₹2000-4000",
        contact: "+91 9725123456"
      }
    ],
    transport: [
      {
        type: "train",
        name: "Gujarat Express",
        from: "Ahmedabad",
        details: "Train to Bhuj, then local transport to Dholavira",
        frequency: "Daily service",
        duration: "8-10 hours + 4 hours local transport",
        fareRange: "₹300-700 + ₹800-1200"
      },
      {
        type: "bus",
        name: "GSRTC Bus",
        from: "Bhuj",
        details: "Bus to Rapar, then local transport to Dholavira",
        frequency: "Daily morning service",
        duration: "3 hours + 2 hours local transport",
        fareRange: "₹150-300 + ₹500-800"
      },
      {
        type: "train",
        name: "Kutch Express",
        from: "Mumbai",
        details: "Train to Gandhidham, then road journey to Dholavira",
        frequency: "Daily service",
        duration: "16 hours + 5 hours road journey",
        fareRange: "₹700-1500 + ₹1000-1800"
      }
    ]
  },
  // Continue with other destinations...
];
