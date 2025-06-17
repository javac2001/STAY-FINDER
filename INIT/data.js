const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?...q=60"
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.788193, 34.031246] // Malibu, CA :contentReference[oaicite:1]{index=1}
    }
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?...q=60"
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-73.935242, 40.730610] // NYC central
    }
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?...q=60"
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.818000, 39.191444] // Aspen, CO
    }
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?...q=60"
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [11.255814, 43.769562] // Florence
    }
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?...q=60"
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-122.67621, 45.52345] // Portland, OR
    }
  },
  {
    title: "Beachfront Paradise",
    description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?...q=60"
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry: {
      type: "Point",
      coordinates: [-86.851528, 21.161908] // Cancún center :contentReference[oaicite:2]{index=2}
    }
  },
  {
    title: "Rustic Cabin by the Lake",
    description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?...q=60"
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-120.032349, 39.096848] // Lake Tahoe
    }
  },
  {
    title: "Luxury Penthouse with City Views",
    description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?...q=60"
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.243683, 34.052235] // Los Angeles
    }
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?...q=60"
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    geometry: {
      type: "Point",
      coordinates: [7.233136, 46.093746] // Verbier :contentReference[oaicite:3]{index=3}
    }
  },
  {
    title: "Safari Lodge in the Serengeti",
    description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?...q=60"
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    geometry: {
      type: "Point",
      coordinates: [34.6857, -2.3333] // Serengeti approximate
    }
  },
  {
    title: "Historic Canal House",
    description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?...q=60"
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    geometry: {
      type: "Point",
      coordinates: [4.895168, 52.370216] // Amsterdam
    }
  },
  {
    title: "Private Island Retreat",
    description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?...q=60"
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    geometry: {
      type: "Point",
      coordinates: [178.0650, -17.7134] // Central Fiji
    }
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?...q=60"
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [-1.8580, 51.8236] // Approx central Cotswolds
    }
  },
  {
    title: "Historic Brownstone in Boston",
    description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?...q=60"
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-71.0589, 42.3601] // Boston
    }
  },
  {
    title: "Beachfront Bungalow in Bali",
    description: "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?...q=60"
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095] // Bali (Denpasar)
    }
  },
  {
    title: "Mountain View Cabin in Banff",
    description: "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?...q=60"
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-115.565704, 51.180202] // Banff, AB :contentReference[oaicite:4]{index=4}
    }
  },
  {
    title: "Art Deco Apartment in Miami",
    description: "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?...q=60"
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-80.1918, 25.7617] // Miami
    }
  },
  {
    title: "Tropical Villa in Phuket",
    description: "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?...q=60"
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    geometry: {
      type: "Point",
      coordinates: [98.3877, 7.8804] // Phuket
    }
  },
  {
    title: "Historic Castle in Scotland",
    description: "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?...q=60"
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [-4.2026, 57.4778] // Approx Highlands
    }
  },
  {
    title: "Desert Oasis in Dubai",
    description: "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?...q=60"
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: {
      type: "Point",
      coordinates: [55.2708, 25.2048] // Dubai
    }
  },
  {
    title: "Rustic Log Cabin in Montana",
    description: "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?...q=60"
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-110.3626, 46.9653] // Montana approx
    }
  },
  {
    title: "Beachfront Villa in Greece",
    description: "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?...q=60"
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    geometry: {
      type: "Point",
      coordinates: [25.3300, 37.4500] // Mykonos
    }
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description: "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?...q=60"
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: {
      type: "Point",
      coordinates: [-84.0907, 9.9281] // Costa Rica central
    }
  },
  {
    title: "Historic Cottage in Charleston",
    description: "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?...q=60"
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-79.9311, 32.7765] // Charleston, SC
    }
  },
  {
    title: "Modern Apartment in Tokyo",
    description: "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?...q=60"
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895] // Tokyo
    }
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description: "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?...q=60"
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-71.5724, 43.1939] // N. Hampshire approx
    }
  },
  {
    title: "Luxury Villa in the Maldives",
    description: "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?...q=60"
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    geometry: {
      type: "Point",
      coordinates: [73.2207, 3.2028] // Maldives
    }
  },
  {
    title: "Ski Chalet in Aspen",
    description: "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?...q=60"
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.818000, 39.191444] // Aspen
    }
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description: "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?...q=60"
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: {
      type: "Point",
      coordinates: [-84.0907, 9.9281] // Costa Rica
    }
  }
];

module.exports = { data: sampleListings };
