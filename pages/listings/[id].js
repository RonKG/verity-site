import { useRouter } from 'next/router';
import { useState, useCallback, useEffect } from 'react';
import Layout from "../../components/Layout";
import OptimizedImage from "../../components/OptimizedImage";

// Verification Badge Component
const VerificationBadge = ({ level, size = "normal" }) => {
  const badges = {
    verified: {
      label: "Verified",
      icon: "✓",
      bg: "linear-gradient(135deg, #219ebc 0%, #023047 100%)",
      description: "Title verified • Documentation complete"
    },
    premium: {
      label: "Premium",
      icon: "★",
      bg: "linear-gradient(135deg, #f5b942 0%, #c2a675 100%)",
      description: "Full verification • Professional media • Enhanced listing"
    },
    elite: {
      label: "Elite",
      icon: "◆",
      bg: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
      description: "White-glove service • 3D tours • Priority placement"
    }
  };

  const badge = badges[level] || badges.verified;
  const isLarge = size === "large";

  return (
    <div style={{
      display: "inline-flex",
      flexDirection: isLarge ? "column" : "row",
      alignItems: isLarge ? "flex-start" : "center",
      gap: isLarge ? "0.5rem" : "0.4rem",
      padding: isLarge ? "1rem 1.25rem" : "0.35rem 0.75rem",
      background: badge.bg,
      borderRadius: isLarge ? "10px" : "6px",
      fontSize: isLarge ? "0.9rem" : "0.75rem",
      fontWeight: "600",
      color: "white",
      boxShadow: isLarge ? "0 4px 12px rgba(0,0,0,0.2)" : "0 2px 8px rgba(0,0,0,0.15)",
      letterSpacing: "0.3px",
      textTransform: "uppercase"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
        <span style={{ fontSize: isLarge ? "1.2rem" : "0.9rem" }}>{badge.icon}</span>
        <span>{badge.label}</span>
      </div>
      {isLarge && (
        <div style={{
          fontSize: "0.7rem",
          opacity: 0.95,
          fontWeight: "400",
          textTransform: "none",
          letterSpacing: "normal",
          lineHeight: "1.4"
        }}>
          {badge.description}
        </div>
      )}
    </div>
  );
};

// Detailed property data
const propertyDetails = {
  1: {
    title: "The Ridge Residence – Kitisuru",
    location: "Kitisuru, Nairobi",
    price: "KSh 420M",
    badge: "premium",
    specs: {
      bedrooms: 5,
      bathrooms: 6,
      plotSize: "0.6 Acre",
      builtArea: "12,000 sq ft",
      yearBuilt: 2024,
      parking: "4 cars",
      style: "Contemporary Modern",
    },
    description: "Perched elegantly on Kitisuru Ridge, this architectural masterpiece represents the pinnacle of modern luxury living in Nairobi. The Ridge Residence seamlessly blends contemporary design with environmental consciousness, creating an unparalleled living experience that celebrates both sophistication and sustainability.\n\nThis exclusive property spans 12,000 square feet of meticulously crafted living space, set within 0.6 acres of sculpted gardens. The residence features clean architectural lines, floor-to-ceiling windows, and thoughtfully designed spaces that maximize natural light while maintaining privacy.",
    features: [
      {
        category: "Interior Features",
        items: [
          "Double-height living room with panoramic valley views",
          "Gourmet kitchen with premium European appliances",
          "Temperature-controlled wine cellar (200+ bottle capacity)",
          "Home theater with professional acoustics",
          "Primary suite with private terrace and spa-like bathroom",
          "Custom Italian wardrobes in all bedrooms",
          "Home office with built-in shelving and city views",
          "Staff quarters with separate entrance"
        ]
      },
      {
        category: "Exterior & Grounds",
        items: [
          "Infinity edge pool with heating system",
          "Outdoor kitchen and entertainment area",
          "Manicured gardens with mature indigenous trees",
          "Solar-powered landscape lighting",
          "Automated irrigation system",
          "Electric gate with security booth",
          "CCTV surveillance system",
          "Generator house with auto-switch capability"
        ]
      },
      {
        category: "Smart Home Features",
        items: [
          "Integrated home automation system",
          "Climate-controlled zones with smart thermostats",
          "Automated lighting scenes",
          "Smart security system with mobile integration",
          "Electric vehicle charging station",
          "Solar power system with battery storage",
          "Water harvesting and recycling system",
          "High-speed fiber internet infrastructure"
        ]
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        title: "Exterior View",
        description: "Modern facade with expansive glass windows"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
        title: "Living Room",
        description: "Double-height living space with valley views"
      },
      {
        url: "https://kitchenmastersllc.com/wp-content/uploads/2022/04/kitchenmasterkitchenremodeling-2880w.webp",
        title: "Kitchen",
        description: "Gourmet kitchen with premium appliances"
      },
      {
        url: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2",
        title: "Master Suite",
        description: "Primary bedroom with private terrace access"
      },
      {
        url: "https://www.decorilla.com/online-decorating/wp-content/uploads/2024/06/Chic-luxury-master-bath-layout-with-seamless-glass-shower-by-Decorilla-1024x683.jpeg",
        title: "Master Bath",
        description: "Spa-inspired master bathroom"
      },
      {
        url: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4",
        title: "Pool Area",
        description: "Infinity pool with entertainment deck"
      },
      {
        url: "https://www.peerspace.com/resources/wp-content/uploads/Houston-Mansion-for-Next-Production-1.avif",
        title: "Garden",
        description: "Landscaped gardens with mature trees"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e",
        title: "Home Office",
        description: "Executive office with built-in shelving"
      }
    ],
    neighborhood: {
      description: "Kitisuru remains one of Nairobi's most prestigious addresses, known for its diplomatic residences and luxury homes. The Ridge Residence enjoys an elevated position that provides both privacy and stunning views while being conveniently located near premium amenities.\n\nThe property is within easy reach of international schools, high-end shopping centers, and diplomatic missions. The serene environment is complemented by excellent security and well-maintained infrastructure.",
      nearbyAmenities: [
        {
          category: "Education",
          items: [
            "International School of Kenya (7 minutes)",
            "Peponi School (10 minutes)",
            "Braeburn School (12 minutes)"
          ]
        },
        {
          category: "Shopping & Dining",
          items: [
            "Village Market (8 minutes)",
            "Westgate Mall (15 minutes)",
            "Two Rivers Mall (12 minutes)"
          ]
        },
        {
          category: "Healthcare",
          items: [
            "Aga Khan University Hospital (15 minutes)",
            "MP Shah Hospital (20 minutes)"
          ]
        },
        {
          category: "Recreation",
          items: [
            "Windsor Golf Club (15 minutes)",
            "Karura Forest (10 minutes)",
            "Muthaiga Country Club (12 minutes)"
          ]
        }
      ]
    }
  },
  2: {
    title: "Coastal Haven – Diani Beach",
    location: "Diani Beach, Kwale County",
    price: "KSh 310M",
    badge: "elite",
    specs: {
      bedrooms: 4,
      bathrooms: 5,
      plotSize: "1.2 Acre",
      builtArea: "8,500 sq ft",
      yearBuilt: 2023,
      parking: "3 cars",
      style: "Coastal Contemporary",
    },
    description: "Oceanfront living reimagined. Expansive terraces open directly to white sands and palm silhouettes. This architectural gem on Diani Beach represents the perfect fusion of luxury and tropical living.\n\nSpanning 8,500 square feet across 1.2 acres of prime beachfront property, Coastal Haven features expansive indoor-outdoor living spaces, floor-to-ceiling glass walls that blur the boundaries between interior comfort and ocean paradise, and thoughtful design that captures cooling sea breezes while maintaining modern comfort.",
    features: [
      {
        category: "Interior Features",
        items: [
          "Open-plan living area with 18-foot ceilings",
          "Chef's kitchen with coral stone countertops",
          "Master suite with private ocean-view balcony",
          "Media room with surround sound",
          "Spa bathroom with soaking tub and rain showers",
          "Walk-in wardrobes with custom shelving",
          "Study with built-in mahogany desk",
          "Wine storage with climate control"
        ]
      },
      {
        category: "Exterior & Grounds",
        items: [
          "Private beach access with 100m of white sand",
          "Infinity pool overlooking the Indian Ocean",
          "Outdoor dining pavilion with BBQ kitchen",
          "Tropical gardens with palm and frangipani trees",
          "Beach shower and changing area",
          "Boat parking and water sports storage",
          "Solar panels with battery backup",
          "Staff cottage with separate entrance"
        ]
      },
      {
        category: "Luxury Amenities",
        items: [
          "Smart home automation throughout",
          "Central air conditioning in all rooms",
          "High-speed satellite internet",
          "Borehole water system with filtration",
          "Security system with perimeter cameras",
          "Generator for uninterrupted power",
          "Beach lounge furniture and umbrellas",
          "Snorkeling and diving equipment storage"
        ]
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
        title: "Beachfront View",
        description: "Direct access to pristine white sand beach"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
        title: "Living Area",
        description: "Open-plan living with ocean views"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        title: "Pool Deck",
        description: "Infinity pool with Indian Ocean backdrop"
      },
      {
        url: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2",
        title: "Master Bedroom",
        description: "Oceanfront master suite"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        title: "Outdoor Dining",
        description: "Al fresco dining pavilion"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e",
        title: "Beach Access",
        description: "Private pathway to the beach"
      }
    ],
    neighborhood: {
      description: "Diani Beach is Kenya's premier coastal destination, renowned for its powdery white sand beaches and crystal-clear waters. This property sits on one of the most exclusive stretches of beachfront, offering both privacy and access to world-class amenities.\n\nThe area is perfect for water sports enthusiasts, with excellent snorkeling, diving, and kitesurfing opportunities. The nearby Diani shopping center and restaurants provide convenient access to services while maintaining the area's tranquil atmosphere.",
      nearbyAmenities: [
        {
          category: "Leisure & Recreation",
          items: [
            "Diani Beach (private access)",
            "Kongo River (5 minutes)",
            "Shimba Hills National Reserve (30 minutes)"
          ]
        },
        {
          category: "Shopping & Dining",
          items: [
            "Diani Beach Shopping Centre (10 minutes)",
            "Nomad Beach Bar (8 minutes)",
            "Sails Beach Bar & Restaurant (12 minutes)"
          ]
        },
        {
          category: "Healthcare",
          items: [
            "Diani Beach Hospital (15 minutes)",
            "Mombasa Hospital (45 minutes)"
          ]
        },
        {
          category: "Transport",
          items: [
            "Ukunda Airstrip (20 minutes)",
            "Moi International Airport (1 hour)",
            "Likoni Ferry (35 minutes)"
          ]
        }
      ]
    }
  },
  3: {
    title: "Forest Edge Glasshouse – Karen",
    location: "Karen, Nairobi",
    price: "KSh 385M",
    badge: "verified",
    specs: {
      bedrooms: 4,
      bathrooms: 5,
      plotSize: "0.8 Acre",
      builtArea: "10,500 sq ft",
      yearBuilt: 2024,
      parking: "4 cars",
      style: "Modern Glass & Steel",
    },
    description: "A living sculpture of glass and steel at the edge of Oloolua Forest. This architectural masterpiece creates harmony between structure and nature, offering expansive light, exposed textures, and intelligent space design.\n\nThe 10,500 square foot residence sits on 0.8 acres bordering the indigenous forest, with floor-to-ceiling glass walls that bring the outdoors in. Every room offers forest views, while smart shading systems maintain comfort and energy efficiency.",
    features: [
      {
        category: "Interior Features",
        items: [
          "Triple-height atrium with living green wall",
          "Floating staircase with glass balustrades",
          "Chef's kitchen with Miele appliances",
          "Temperature-controlled wine cellar (300 bottles)",
          "Home cinema with Dolby Atmos",
          "Master suite with forest-view terrace",
          "Library with floor-to-ceiling bookshelves",
          "Gym with yoga studio"
        ]
      },
      {
        category: "Exterior & Grounds",
        items: [
          "25-meter lap pool with forest views",
          "Outdoor entertainment area with fire pit",
          "Indigenous forest garden with walking trails",
          "Birdwatching deck and hide",
          "Outdoor meditation pavilion",
          "Staff quarters (3 bedrooms)",
          "Triple garage with EV charging",
          "Borehole and rainwater harvesting"
        ]
      },
      {
        category: "Sustainable Features",
        items: [
          "Solar panel array (20kW) with Tesla Powerwall",
          "Geothermal heating and cooling system",
          "Smart glass with UV and heat control",
          "Greywater recycling system",
          "LED lighting throughout",
          "Energy monitoring and optimization",
          "Composting and organic waste management",
          "Indigenous plant landscaping (low water use)"
        ]
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        title: "Exterior View",
        description: "Glass and steel architecture at forest edge"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
        title: "Atrium",
        description: "Triple-height space with living green wall"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        title: "Living Area",
        description: "Open-plan living with forest views"
      },
      {
        url: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2",
        title: "Master Suite",
        description: "Bedroom with forest canopy views"
      },
      {
        url: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4",
        title: "Pool Area",
        description: "Lap pool overlooking indigenous forest"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e",
        title: "Library",
        description: "Reading room with natural light"
      }
    ],
    neighborhood: {
      description: "Karen remains one of Nairobi's most sought-after suburbs, combining lush greenery with modern luxury. This property borders the Oloolua Forest, offering residents a unique connection to nature while being minutes from world-class amenities.\n\nThe area is known for its international community, excellent schools, and cultural attractions including the Giraffe Centre and Karen Blixen Museum. Wide tree-lined streets and expansive properties ensure privacy and tranquility.",
      nearbyAmenities: [
        {
          category: "Education",
          items: [
            "Rosslyn Academy (8 minutes)",
            "Brookhouse School Karen (10 minutes)",
            "Hillcrest International Schools (12 minutes)"
          ]
        },
        {
          category: "Shopping & Dining",
          items: [
            "The Hub Karen (5 minutes)",
            "Karen Blixen Coffee Garden (7 minutes)",
            "Talisman Restaurant (8 minutes)"
          ]
        },
        {
          category: "Culture & Nature",
          items: [
            "Oloolua Forest (adjacent)",
            "Giraffe Centre (10 minutes)",
            "Karen Blixen Museum (12 minutes)"
          ]
        },
        {
          category: "Healthcare",
          items: [
            "Nairobi West Hospital (15 minutes)",
            "MP Shah Hospital (25 minutes)"
          ]
        }
      ]
    }
  },
  4: {
    title: "Nyali Coral Estate",
    location: "Nyali, Mombasa",
    price: "KSh 295M",
    badge: "premium",
    specs: {
      bedrooms: 6,
      bathrooms: 7,
      plotSize: "0.5 Acre",
      builtArea: "9,200 sq ft",
      yearBuilt: 2023,
      parking: "5 cars",
      style: "Mediterranean Villa",
    },
    description: "Mediterranean-inspired beachfront villa with private access to Nyali Beach. This elegant estate combines classic coastal architecture with modern luxury, featuring terracotta roofs, arched doorways, and expansive sea-view terraces.\n\nThe 9,200 square foot villa sits on half an acre of prime Nyali beachfront, offering direct beach access and stunning views of the Indian Ocean. With six en-suite bedrooms and dedicated yacht berth access, this property epitomizes coastal luxury living.",
    features: [
      {
        category: "Interior Features",
        items: [
          "Grand entrance with double-height foyer",
          "Formal dining room seating 12",
          "Gourmet kitchen with Italian marble counters",
          "Entertainment lounge with bar",
          "Master suite with private balcony and jacuzzi",
          "Five additional en-suite bedrooms",
          "Home office with ocean views",
          "Game room with pool table"
        ]
      },
      {
        category: "Exterior & Grounds",
        items: [
          "Private beach access (50m of beachfront)",
          "Infinity pool with swim-up bar",
          "Outdoor kitchen and pizza oven",
          "Mediterranean gardens with fountains",
          "Tennis court with lighting",
          "Yacht berth access at nearby marina",
          "Six-car garage with workshop",
          "Staff quarters (4 bedrooms)"
        ]
      },
      {
        category: "Premium Amenities",
        items: [
          "Smart home automation system",
          "Central AC throughout",
          "Backup generator (40kVA)",
          "Solar water heating",
          "Desalination plant for fresh water",
          "Security system with 24/7 monitoring",
          "High-speed fiber internet",
          "Intercom system throughout"
        ]
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
        title: "Beachfront Villa",
        description: "Mediterranean architecture on Nyali Beach"
      },
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
        title: "Living Room",
        description: "Elegant living space with ocean views"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        title: "Pool Area",
        description: "Infinity pool with beach access"
      },
      {
        url: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2",
        title: "Master Bedroom",
        description: "Oceanfront suite with private terrace"
      },
      {
        url: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4",
        title: "Outdoor Dining",
        description: "Al fresco dining with sea breeze"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e",
        title: "Tennis Court",
        description: "Private court with ocean backdrop"
      }
    ],
    neighborhood: {
      description: "Nyali is Mombasa's most prestigious address, known for its beachfront properties and upscale lifestyle. This prime location offers the perfect blend of coastal living and urban convenience, with easy access to Mombasa's best shopping, dining, and entertainment.\n\nThe area features excellent security, well-maintained infrastructure, and a vibrant expatriate community. Nearby Nyali Golf Club and various water sports facilities provide endless recreational opportunities.",
      nearbyAmenities: [
        {
          category: "Shopping & Dining",
          items: [
            "Nyali Cinemax Mall (5 minutes)",
            "City Mall (10 minutes)",
            "Tamarind Restaurant (8 minutes)"
          ]
        },
        {
          category: "Recreation",
          items: [
            "Nyali Golf & Country Club (7 minutes)",
            "Haller Park (10 minutes)",
            "Mamba Village (12 minutes)"
          ]
        },
        {
          category: "Education",
          items: [
            "Aga Khan Academy (10 minutes)",
            "Shelly Beach School (15 minutes)"
          ]
        },
        {
          category: "Healthcare",
          items: [
            "Aga Khan Hospital Mombasa (12 minutes)",
            "Pandya Memorial Hospital (10 minutes)"
          ]
        }
      ]
    }
  },
  5: {
    title: "Muthaiga Ambassador's Villa",
    location: "Muthaiga, Nairobi",
    price: "KSh 480M",
    badge: "elite",
    specs: {
      bedrooms: 7,
      bathrooms: 8,
      plotSize: "1.5 Acre",
      builtArea: "14,000 sq ft",
      yearBuilt: 2022,
      parking: "6 cars",
      style: "Colonial Modern",
    },
    description: "Historic estate reimagined with modern luxury on Nairobi's most prestigious address. This 14,000 square foot villa combines colonial elegance with contemporary amenities, featuring diplomatic-grade security, helipad-ready grounds, and state-of-the-art entertainment facilities.\n\nSituated on 1.5 acres in the heart of Muthaiga's embassy row, this property offers unparalleled privacy, security, and prestige. The residence has hosted dignitaries and maintains the highest standards of luxury and discretion.",
    features: [
      {
        category: "Interior Features",
        items: [
          "Grand ballroom with 20-foot ceilings",
          "Formal dining room seating 16",
          "Commercial-grade chef's kitchen",
          "Presidential master suite (2,000 sq ft)",
          "Six additional en-suite bedrooms",
          "Private library with fireplace",
          "Wine cellar (500+ bottle capacity)",
          "Home theater (12-seater)"
        ]
      },
      {
        category: "Exterior & Grounds",
        items: [
          "Olympic-sized heated pool",
          "Floodlit tennis court",
          "Helipad-ready lawn area",
          "Formal gardens with water features",
          "Guest cottage (3 bedrooms)",
          "Staff quarters (6 bedrooms)",
          "Underground parking (8 cars)",
          "Generator house with soundproofing"
        ]
      },
      {
        category: "Security & Technology",
        items: [
          "Diplomatic-grade security system",
          "Biometric access control",
          "Panic room with independent systems",
          "Perimeter intrusion detection",
          "24/7 CCTV monitoring (40+ cameras)",
          "Backup power (100kVA generator + solar)",
          "Secure communication systems",
          "Smart home integration throughout"
        ]
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
        title: "Main Facade",
        description: "Colonial elegance with modern updates"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        title: "Grand Ballroom",
        description: "Entertaining space for 50+ guests"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
        title: "Living Room",
        description: "Formal living with period details"
      },
      {
        url: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2",
        title: "Master Suite",
        description: "Presidential bedroom with sitting area"
      },
      {
        url: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4",
        title: "Pool & Gardens",
        description: "Manicured grounds with mature trees"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e",
        title: "Library",
        description: "Private study with wood paneling"
      }
    ],
    neighborhood: {
      description: "Muthaiga is synonymous with prestige in Nairobi, home to embassies, diplomatic residences, and Kenya's elite. This property sits on the most coveted street, offering maximum privacy and security while being minutes from the city center.\n\nThe area's rich history combines with modern infrastructure, excellent schools, and the exclusive Muthaiga Country Club. Tree-lined streets and expansive properties ensure a serene environment despite the central location.",
      nearbyAmenities: [
        {
          category: "Social",
          items: [
            "Muthaiga Country Club (3 minutes)",
            "Karura Forest (5 minutes)",
            "Diplomatic missions (walking distance)"
          ]
        },
        {
          category: "Education",
          items: [
            "International School of Kenya (10 minutes)",
            "St. Mary's School (12 minutes)",
            "Brookhouse School (15 minutes)"
          ]
        },
        {
          category: "Shopping",
          items: [
            "Village Market (10 minutes)",
            "Gigiri Shopping Centre (8 minutes)",
            "Two Rivers Mall (15 minutes)"
          ]
        },
        {
          category: "Healthcare",
          items: [
            "Aga Khan University Hospital (12 minutes)",
            "MP Shah Hospital (18 minutes)"
          ]
        }
      ]
    }
  },
  6: {
    title: "Diani Coral Penthouse",
    location: "Diani Beach, Kwale County",
    price: "KSh 225M",
    badge: "verified",
    specs: {
      bedrooms: 4,
      bathrooms: 4,
      plotSize: "N/A (Penthouse)",
      builtArea: "6,000 sq ft",
      yearBuilt: 2024,
      parking: "3 cars",
      style: "Contemporary Luxury",
    },
    description: "Luxury penthouse with 360° views of the Indian Ocean. Floor-to-ceiling windows, private rooftop garden, and direct beach access define this exceptional residence. Fully furnished with designer pieces, this turn-key property represents the pinnacle of coastal penthouse living.\n\nSpanning 6,000 square feet across the top floor, this penthouse features wraparound terraces, a private infinity pool, and unobstructed ocean views. Every detail has been curated for luxury and comfort.",
    features: [
      {
        category: "Interior Features",
        items: [
          "Open-plan living with 12-foot ceilings",
          "Italian designer kitchen with Gaggenau appliances",
          "Four en-suite bedrooms with ocean views",
          "Master suite with walk-through wardrobe",
          "Entertainment room with wet bar",
          "Home office with built-in desks",
          "Designer furniture package included",
          "Custom lighting throughout"
        ]
      },
      {
        category: "Outdoor Spaces",
        items: [
          "Private rooftop infinity pool",
          "Wraparound terraces (1,500 sq ft)",
          "Outdoor kitchen with BBQ",
          "Rooftop garden with irrigation",
          "Sun deck with day beds",
          "Direct beach access via private lift",
          "Beach cabana with seating",
          "Outdoor shower and changing area"
        ]
      },
      {
        category: "Building Amenities",
        items: [
          "24/7 concierge service",
          "Secure underground parking",
          "Resident's gym and spa",
          "Communal pool and gardens",
          "Beach service with loungers",
          "High-speed internet throughout",
          "Backup power and water",
          "CCTV security system"
        ]
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        title: "Living Area",
        description: "Open-plan space with ocean panorama"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        title: "Terrace",
        description: "Wraparound balcony with ocean views"
      },
      {
        url: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4",
        title: "Rooftop Pool",
        description: "Private infinity pool on rooftop"
      },
      {
        url: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2",
        title: "Master Bedroom",
        description: "Suite with floor-to-ceiling glass"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        title: "Kitchen",
        description: "Designer kitchen with island"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e",
        title: "Beach View",
        description: "Unobstructed Indian Ocean panorama"
      }
    ],
    neighborhood: {
      description: "Diani Beach offers the perfect blend of tranquility and convenience. This penthouse is located in Diani's premier beachfront development, offering resort-style living with the privacy of a private residence.\n\nThe area is renowned for its pristine beaches, water sports, and vibrant restaurant scene. Despite the peaceful setting, excellent shopping and services are minutes away.",
      nearbyAmenities: [
        {
          category: "Dining & Entertainment",
          items: [
            "Forty Thieves Beach Bar (5 minutes)",
            "Ali Barbour's Cave Restaurant (10 minutes)",
            "Sails Beach Bar (8 minutes)"
          ]
        },
        {
          category: "Activities",
          items: [
            "Diani Beach (direct access)",
            "Kitesurfing Kenya (10 minutes)",
            "Scuba diving centers (15 minutes)"
          ]
        },
        {
          category: "Shopping",
          items: [
            "Diani Beach Shopping Centre (12 minutes)",
            "Diani Beach Art Gallery (10 minutes)"
          ]
        },
        {
          category: "Transport",
          items: [
            "Ukunda Airstrip (20 minutes)",
            "Moi International Airport (50 minutes)"
          ]
        }
      ]
    }
  },
  7: {
    title: "Spring Valley Modern Manor",
    location: "Spring Valley, Nairobi",
    price: "KSh 395M",
    badge: "premium",
    specs: {
      bedrooms: 5,
      bathrooms: 6,
      plotSize: "0.75 Acre",
      builtArea: "11,500 sq ft",
      yearBuilt: 2024,
      parking: "5 cars",
      style: "Contemporary Minimalist",
    },
    description: "Architectural masterpiece with double-height ceilings and dramatic open spaces. This contemporary residence pushes the boundaries of modern design with smart home integration, a temperature-controlled wine cellar, and resort-style pool area with entertainment deck.\n\nThe 11,500 square foot home sits on three-quarters of an acre in prestigious Spring Valley. Clean lines, premium materials, and thoughtful spatial design create an atmosphere of refined luxury.",
    features: [
      {
        category: "Interior Features",
        items: [
          "Double-height entrance gallery",
          "Floating cantilever staircase",
          "Show kitchen with Miele appliances",
          "Scullery with commercial equipment",
          "Wine cellar (temperature & humidity controlled)",
          "Master suite with spa bathroom",
          "Four additional en-suite bedrooms",
          "Home theater with Dolby Atmos"
        ]
      },
      {
        category: "Exterior & Grounds",
        items: [
          "25m heated lap pool",
          "Pool house with changing rooms",
          "Entertainment deck with outdoor kitchen",
          "Manicured lawns and landscaping",
          "Water features and sculpture garden",
          "Staff quarters (3 bedrooms)",
          "Five-car garage with charging points",
          "Borehole and water storage"
        ]
      },
      {
        category: "Technology & Sustainability",
        items: [
          "Crestron smart home system",
          "Automated climate control zones",
          "Smart lighting with scenes",
          "Integrated audio-visual system",
          "Solar panels (15kW) with batteries",
          "Rainwater harvesting (30,000L)",
          "Greywater recycling system",
          "Fiber internet with WiFi 6"
        ]
      }
    ],
    gallery: [
      {
        url: "https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc",
        title: "Main Entrance",
        description: "Double-height gallery with art collection"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
        title: "Living Space",
        description: "Open-plan living with dramatic volumes"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        title: "Kitchen",
        description: "Show kitchen with island and wine display"
      },
      {
        url: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4",
        title: "Pool Area",
        description: "Resort-style pool with entertainment deck"
      },
      {
        url: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2",
        title: "Master Suite",
        description: "Luxurious bedroom with sitting area"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e",
        title: "Wine Cellar",
        description: "Temperature-controlled wine storage"
      }
    ],
    neighborhood: {
      description: "Spring Valley represents the perfect blend of suburban tranquility and urban convenience. This established neighborhood offers tree-lined streets, expansive properties, and a strong sense of community while being minutes from Nairobi's business district.\n\nThe area is home to several embassies, international schools, and the exclusive Nairobi Club. Excellent infrastructure and 24/7 security patrols ensure peace of mind.",
      nearbyAmenities: [
        {
          category: "Social & Recreation",
          items: [
            "Nairobi Club (10 minutes)",
            "Westlands entertainment district (8 minutes)",
            "Karura Forest (12 minutes)"
          ]
        },
        {
          category: "Education",
          items: [
            "International School of Kenya (15 minutes)",
            "Brookhouse School (12 minutes)",
            "Braeburn School (10 minutes)"
          ]
        },
        {
          category: "Shopping",
          items: [
            "Westgate Mall (10 minutes)",
            "Village Market (15 minutes)",
            "Sarit Centre (8 minutes)"
          ]
        },
        {
          category: "Business",
          items: [
            "Westlands CBD (8 minutes)",
            "UN Complex Gigiri (15 minutes)",
            "Nairobi CBD (20 minutes)"
          ]
        }
      ]
    }
  },
  8: {
    title: "Watamu Beach Villa",
    location: "Watamu, Kilifi County",
    price: "KSh 280M",
    badge: "elite",
    specs: {
      bedrooms: 5,
      bathrooms: 6,
      plotSize: "0.9 Acre",
      builtArea: "8,800 sq ft",
      yearBuilt: 2023,
      parking: "4 cars",
      style: "Balinese Contemporary",
    },
    description: "Balinese-inspired luxury villa with direct access to Watamu Marine Park. This unique property features traditional makuti roofing, infinity pool, and a private beach cove, creating an authentic yet luxurious tropical experience.\n\nSpanning 8,800 square feet on nearly an acre of beachfront, this villa combines traditional Indonesian architectural elements with modern comforts. The property's unique position offers both marine park snorkeling and pristine beach privacy.",
    features: [
      {
        category: "Interior Features",
        items: [
          "Open-plan living with vaulted makuti ceilings",
          "Teak and coral stone throughout",
          "Gourmet kitchen with traditional pizza oven",
          "Five en-suite bedrooms with ocean views",
          "Master pavilion with outdoor shower",
          "Yoga studio with sea breeze ventilation",
          "Library and reading nooks",
          "Indoor-outdoor bathrooms"
        ]
      },
      {
        category: "Outdoor Living",
        items: [
          "Private beach cove with powder sand",
          "Infinity pool with ocean merge effect",
          "Balinese-style bale pavilions",
          "Outdoor dining areas with makuti roofing",
          "Tropical gardens with frangipani and palms",
          "Beach fire pit and lounging area",
          "Snorkeling equipment storage",
          "Staff cottage (2 bedrooms)"
        ]
      },
      {
        category: "Eco-Luxury Features",
        items: [
          "Solar panels with battery backup",
          "Rainwater collection and filtration",
          "Natural ventilation design (minimal AC)",
          "Sustainable teak and local materials",
          "Organic waste composting",
          "Marine-friendly lighting",
          "Borehole with UV filtration",
          "Greywater garden irrigation"
        ]
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
        title: "Beachfront Setting",
        description: "Balinese villa on private beach cove"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
        title: "Living Pavilion",
        description: "Open-plan space with makuti roofing"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        title: "Pool Area",
        description: "Infinity pool overlooking marine park"
      },
      {
        url: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2",
        title: "Master Pavilion",
        description: "Bedroom with ocean views and outdoor bath"
      },
      {
        url: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4",
        title: "Beach Dining",
        description: "Al fresco dining under the stars"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e",
        title: "Yoga Studio",
        description: "Wellness space with sea views"
      }
    ],
    neighborhood: {
      description: "Watamu is one of Kenya's most beautiful coastal destinations, renowned for its marine park, pristine beaches, and laid-back atmosphere. This property offers direct access to world-class snorkeling and diving in the protected marine reserve.\n\nThe area attracts nature lovers and water sports enthusiasts while maintaining a peaceful, unspoiled character. Nearby Arabuko Sokoke Forest provides additional eco-tourism opportunities.",
      nearbyAmenities: [
        {
          category: "Marine Activities",
          items: [
            "Watamu Marine Park (direct access)",
            "Diving centers (10 minutes)",
            "Deep sea fishing charters (15 minutes)"
          ]
        },
        {
          category: "Dining & Shopping",
          items: [
            "Watamu village shops (12 minutes)",
            "Crab Shack Restaurant (10 minutes)",
            "Hemingways Restaurant (8 minutes)"
          ]
        },
        {
          category: "Nature & Culture",
          items: [
            "Arabuko Sokoke Forest (20 minutes)",
            "Gede Ruins (15 minutes)",
            "Bio-Ken Snake Farm (10 minutes)"
          ]
        },
        {
          category: "Transport",
          items: [
            "Malindi Airport (30 minutes)",
            "Mombasa (2 hours)"
          ]
        }
      ]
    }
  },
  9: {
    title: "Runda Water Gardens",
    location: "Runda, Nairobi",
    price: "KSh 320M",
    badge: "verified",
    specs: {
      bedrooms: 6,
      bathrooms: 7,
      plotSize: "0.5 Acre",
      builtArea: "10,200 sq ft",
      yearBuilt: 2024,
      parking: "4 cars",
      style: "Contemporary Asian Fusion",
    },
    description: "Contemporary waterfront residence overlooking Runda dam. This architectural gem features cascading water gardens, a meditation pavilion, and state-of-the-art home theatre, creating a zen-like atmosphere in one of Nairobi's most exclusive estates.\n\nThe 10,200 square foot home maximizes its waterfront position with floor-to-ceiling windows, multiple terraces, and thoughtfully designed outdoor spaces that blur the lines between interior and exterior living.",
    features: [
      {
        category: "Interior Features",
        items: [
          "Triple-aspect living room with dam views",
          "Japanese-inspired kitchen with teppanyaki grill",
          "Six en-suite bedrooms with private balconies",
          "Master suite with steam room and soaking tub",
          "Home theater (16-seat) with Dolby Atmos",
          "Wine cellar with tasting room",
          "Home gym with spa facilities",
          "Library with floor-to-ceiling windows"
        ]
      },
      {
        category: "Water Features & Gardens",
        items: [
          "Cascading water gardens with koi pond",
          "Meditation pavilion over water",
          "Infinity pool with dam views",
          "Japanese zen garden with stone pathways",
          "Outdoor yoga deck",
          "Private boat dock",
          "Illuminated water features",
          "Mature bamboo and water plants"
        ]
      },
      {
        category: "Premium Technology",
        items: [
          "Lutron smart lighting system",
          "Integrated Sonos audio throughout",
          "Climate control with humidity management",
          "Security system with AI cameras",
          "Solar power (18kW) with storage",
          "Water filtration and softening system",
          "Smart irrigation for gardens",
          "High-speed fiber internet"
        ]
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
        title: "Waterfront View",
        description: "Contemporary architecture overlooking Runda dam"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
        title: "Living Room",
        description: "Open-plan space with water views"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        title: "Water Gardens",
        description: "Cascading gardens with meditation pavilion"
      },
      {
        url: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2",
        title: "Master Suite",
        description: "Bedroom with private terrace and dam views"
      },
      {
        url: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4",
        title: "Pool Deck",
        description: "Infinity pool with waterfront setting"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e",
        title: "Home Theater",
        description: "Private cinema with premium AV"
      }
    ],
    neighborhood: {
      description: "Runda is one of Nairobi's most exclusive gated communities, known for its security, pristine environment, and proximity to diplomatic missions and international schools. This waterfront property offers a unique combination of natural beauty and suburban convenience.\n\nThe estate provides 24/7 security, well-maintained roads, and a strong sense of community. Its central location allows easy access to Westlands, Gigiri, and the CBD.",
      nearbyAmenities: [
        {
          category: "Education",
          items: [
            "International School of Kenya (10 minutes)",
            "German School Nairobi (12 minutes)",
            "Rosslyn Academy (15 minutes)"
          ]
        },
        {
          category: "Shopping & Dining",
          items: [
            "Village Market (12 minutes)",
            "Gigiri Shopping Centre (10 minutes)",
            "Two Rivers Mall (15 minutes)"
          ]
        },
        {
          category: "Recreation",
          items: [
            "Runda dam walking trails (on property)",
            "Windsor Golf Club (10 minutes)",
            "Karura Forest (15 minutes)"
          ]
        },
        {
          category: "Business",
          items: [
            "UN Complex Gigiri (12 minutes)",
            "Westlands CBD (15 minutes)"
          ]
        }
      ]
    }
  },
  10: {
    title: "English Point Marina Penthouse",
    location: "Tudor, Mombasa",
    price: "KSh 265M",
    badge: "premium",
    specs: {
      bedrooms: 4,
      bathrooms: 5,
      plotSize: "N/A (Penthouse)",
      builtArea: "5,500 sq ft",
      yearBuilt: 2023,
      parking: "3 cars",
      style: "Ultra-Modern Marina",
    },
    description: "Ultra-luxury penthouse in Mombasa's premier marina development. Private elevator access, dedicated yacht berth, and panoramic harbor views define this exceptional residence. Smart home technology throughout ensures effortless luxury living.\n\nThis 5,500 square foot penthouse occupies the entire top floor, offering 270-degree views of the marina, harbor, and ocean. Every detail has been crafted for the discerning owner who values both luxury and the marina lifestyle.",
    features: [
      {
        category: "Interior Features",
        items: [
          "Private elevator with biometric access",
          "Open-plan living with 11-foot ceilings",
          "Gourmet kitchen with Sub-Zero appliances",
          "Four en-suite bedrooms with marina views",
          "Master suite with his/hers closets",
          "Entertainment lounge with cocktail bar",
          "Home office with built-in cabinetry",
          "Laundry room with high-end appliances"
        ]
      },
      {
        category: "Outdoor Spaces",
        items: [
          "Wraparound terrace (1,200 sq ft)",
          "Private plunge pool with city views",
          "Outdoor kitchen with pizza oven",
          "Multiple seating and dining areas",
          "Glass balustrades for unobstructed views",
          "Outdoor shower and day beds",
          "Built-in sound system",
          "Yacht berth (45ft capacity)"
        ]
      },
      {
        category: "Marina Amenities",
        items: [
          "Concierge service 24/7",
          "Marina management and yacht services",
          "Resident's clubhouse and gym",
          "Infinity pool overlooking harbor",
          "Fine dining restaurants",
          "Secure underground parking",
          "Marina security and CCTV",
          "Water sports equipment storage"
        ]
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
        title: "Marina View",
        description: "Penthouse with panoramic harbor views"
      },
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        title: "Living Space",
        description: "Open-plan living with marina backdrop"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        title: "Terrace",
        description: "Wraparound terrace with plunge pool"
      },
      {
        url: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2",
        title: "Master Bedroom",
        description: "Suite with floor-to-ceiling windows"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
        title: "Kitchen",
        description: "Gourmet kitchen with marina views"
      },
      {
        url: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4",
        title: "Evening Ambiance",
        description: "Sunset views from private terrace"
      }
    ],
    neighborhood: {
      description: "English Point Marina is Mombasa's flagship mixed-use development, combining luxury residences with world-class marina facilities. This prime Tudor location offers the perfect blend of coastal living and urban convenience.\n\nThe development features restaurants, shops, and services within the complex, while the historic Mombasa Old Town, Fort Jesus, and business district are minutes away. The marina lifestyle includes easy access to yacht services, water sports, and social events.",
      nearbyAmenities: [
        {
          category: "Marina Facilities",
          items: [
            "Yacht berths (on-site)",
            "Water sports center (on-site)",
            "Marina restaurants (on-site)"
          ]
        },
        {
          category: "Culture & History",
          items: [
            "Fort Jesus UNESCO Site (10 minutes)",
            "Mombasa Old Town (8 minutes)",
            "Mamba Village (15 minutes)"
          ]
        },
        {
          category: "Shopping",
          items: [
            "Nyali Cinemax (15 minutes)",
            "City Mall (10 minutes)",
            "Mombasa CBD (12 minutes)"
          ]
        },
        {
          category: "Transport",
          items: [
            "Moi International Airport (20 minutes)",
            "Likoni Ferry (15 minutes)"
          ]
        }
      ]
    }
  },
  11: {
    title: "Loresho Heights Estate",
    location: "Loresho, Nairobi",
    price: "KSh 355M",
    badge: "verified",
    specs: {
      bedrooms: 5,
      bathrooms: 6,
      plotSize: "0.4 Acre",
      builtArea: "9,800 sq ft",
      yearBuilt: 2024,
      parking: "4 cars",
      style: "Contemporary Urban",
    },
    description: "Elevated living with panoramic city views. This modern architectural statement features vertical gardens, a glass elevator, and an infinity edge pool that appears to merge with the Nairobi skyline. Every level offers breathtaking views.\n\nThe 9,800 square foot residence is built on multiple levels to maximize the elevated plot, with each floor offering different perspectives of the city. Floor-to-ceiling windows and outdoor terraces on every level create a unique urban retreat.",
    features: [
      {
        category: "Interior Features",
        items: [
          "Glass panoramic elevator (4 floors)",
          "Double-height living room with city views",
          "Gourmet kitchen with Siemens appliances",
          "Five en-suite bedrooms with terraces",
          "Rooftop master suite with 360° views",
          "Home theater and games room",
          "Wine cellar with glass walls",
          "Home gym with mirrored walls"
        ]
      },
      {
        category: "Outdoor Features",
        items: [
          "Infinity pool with city skyline views",
          "Rooftop terrace with bar and lounge",
          "Vertical gardens on three floors",
          "Multiple balconies and viewing decks",
          "Outdoor dining with retractable roof",
          "BBQ station with pizza oven",
          "Landscaped gardens with lighting",
          "Staff quarters (2 bedrooms)"
        ]
      },
      {
        category: "Smart Living",
        items: [
          "Integrated home automation system",
          "Voice-controlled lighting and climate",
          "Automated window blinds and curtains",
          "Security system with facial recognition",
          "Solar panels with Tesla Powerwall",
          "Smart appliances throughout",
          "High-speed mesh WiFi system",
          "Video intercom at all entry points"
        ]
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
        title: "Exterior View",
        description: "Modern architecture with city backdrop"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
        title: "Living Room",
        description: "Double-height space with panoramic windows"
      },
      {
        url: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4",
        title: "Infinity Pool",
        description: "Pool deck with Nairobi skyline views"
      },
      {
        url: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2",
        title: "Rooftop Master Suite",
        description: "Top floor bedroom with 360° views"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        title: "Vertical Gardens",
        description: "Living walls on multiple levels"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e",
        title: "Glass Elevator",
        description: "Panoramic elevator with city views"
      }
    ],
    neighborhood: {
      description: "Loresho is Nairobi's newest premium suburb, known for its elevated position offering stunning city views. This rapidly developing area attracts young professionals and families seeking modern living with excellent security and infrastructure.\n\nThe neighborhood features wide roads, ample green spaces, and proximity to Westlands business district. The elevated location ensures fresh air and spectacular sunsets over the city.",
      nearbyAmenities: [
        {
          category: "Shopping & Dining",
          items: [
            "Westgate Mall (12 minutes)",
            "Village Market (15 minutes)",
            "Sarit Centre (10 minutes)"
          ]
        },
        {
          category: "Education",
          items: [
            "Brookhouse School (10 minutes)",
            "Braeburn School (15 minutes)",
            "Riara School (12 minutes)"
          ]
        },
        {
          category: "Recreation",
          items: [
            "Westlands entertainment district (10 minutes)",
            "Karura Forest (18 minutes)",
            "Windsor Golf Club (20 minutes)"
          ]
        },
        {
          category: "Business",
          items: [
            "Westlands CBD (10 minutes)",
            "Nairobi CBD (25 minutes)"
          ]
        }
      ]
    }
  },
  12: {
    title: "Karen Horse Estate",
    location: "Karen, Nairobi",
    price: "KSh 445M",
    badge: "elite",
    specs: {
      bedrooms: 6,
      bathrooms: 7,
      plotSize: "2.5 Acre",
      builtArea: "13,500 sq ft",
      yearBuilt: 2023,
      parking: "6 cars",
      style: "Equestrian Colonial",
    },
    description: "Exclusive equestrian estate with world-class stables and training facilities. The main house features a temperature-controlled wine cellar, extensive library, and dedicated staff quarters. Located adjacent to Karen Horse Club, this property is perfect for horse enthusiasts.\n\nSpanning 2.5 acres of prime Karen land, this estate combines elegant living with professional equestrian facilities. The 13,500 square foot main house is complemented by stables, paddocks, and riding arena.",
    features: [
      {
        category: "Main House Features",
        items: [
          "Grand entrance with sweeping staircase",
          "Formal living and dining rooms",
          "Country kitchen with Aga range",
          "Six en-suite bedrooms with garden views",
          "Master suite with dressing room",
          "Library with fireplace and wood paneling",
          "Wine cellar (1,000+ bottle capacity)",
          "Billiards room with bar"
        ]
      },
      {
        category: "Equestrian Facilities",
        items: [
          "12-stall stable block with tack room",
          "Covered riding arena (40m x 20m)",
          "Outdoor jumping arena",
          "Paddocks with automatic waterers",
          "Hay barn and feed store",
          "Veterinary and grooming area",
          "Horsebox parking",
          "Groom's accommodation (4 bedrooms)"
        ]
      },
      {
        category: "Grounds & Amenities",
        items: [
          "Swimming pool with pool house",
          "Tennis court with lighting",
          "Manicured gardens and lawns",
          "Kitchen garden and orchard",
          "Generator house",
          "Six-car garage with workshop",
          "Staff quarters (6 bedrooms)",
          "Borehole and water storage"
        ]
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        title: "Main House",
        description: "Colonial-style residence with modern amenities"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
        title: "Living Room",
        description: "Elegant living space with fireplace"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        title: "Stables",
        description: "Professional equestrian facilities"
      },
      {
        url: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2",
        title: "Master Suite",
        description: "Spacious bedroom with garden views"
      },
      {
        url: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4",
        title: "Riding Arena",
        description: "Covered arena for year-round training"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e",
        title: "Library",
        description: "Wood-paneled study with fireplace"
      }
    ],
    neighborhood: {
      description: "Karen is synonymous with spacious living and equestrian lifestyle in Nairobi. This property's location adjacent to Karen Horse Club offers unparalleled access to riding trails, polo facilities, and a vibrant equestrian community.\n\nThe area combines rural tranquility with urban convenience, featuring excellent schools, shopping centers, and cultural attractions. The large plots and green environment ensure privacy and peaceful living.",
      nearbyAmenities: [
        {
          category: "Equestrian",
          items: [
            "Karen Horse Club (adjacent)",
            "Riding trails (direct access)",
            "Veterinary clinics (15 minutes)"
          ]
        },
        {
          category: "Education",
          items: [
            "Brookhouse School Karen (8 minutes)",
            "Hillcrest International Schools (12 minutes)",
            "Rosslyn Academy (15 minutes)"
          ]
        },
        {
          category: "Shopping",
          items: [
            "The Hub Karen (10 minutes)",
            "Karen Crossroads (12 minutes)",
            "Junction Mall (20 minutes)"
          ]
        },
        {
          category: "Culture",
          items: [
            "Giraffe Centre (12 minutes)",
            "Karen Blixen Museum (10 minutes)",
            "Nairobi National Park (15 minutes)"
          ]
        }
      ]
    }
  },
  13: {
    title: "Kilifi Bay Villa",
    location: "Kilifi, Kilifi County",
    price: "KSh 255M",
    badge: "premium",
    specs: {
      bedrooms: 4,
      bathrooms: 5,
      plotSize: "1.0 Acre",
      builtArea: "7,500 sq ft",
      yearBuilt: 2024,
      parking: "3 cars",
      style: "Modern Coastal",
    },
    description: "Modern coastal retreat with private beach access on Kilifi Bay. Featuring indigenous gardens, infinity pool overlooking the creek, and separate guest cottage. This property offers the perfect blend of luxury and coastal living.\n\nThe 7,500 square foot villa sits on one acre with breathtaking views of Kilifi Creek and the Indian Ocean. Thoughtful design maximizes natural ventilation and light while maintaining privacy and comfort.",
    features: [
      {
        category: "Interior Features",
        items: [
          "Open-plan living with vaulted ceilings",
          "Gourmet kitchen with island and breakfast bar",
          "Four en-suite bedrooms with ocean views",
          "Master suite with private terrace",
          "Media room with surround sound",
          "Home office with built-in desk",
          "Spacious walk-in wardrobes",
          "Laundry and utility room"
        ]
      },
      {
        category: "Outdoor Living",
        items: [
          "Private beach access (100m frontage)",
          "Infinity pool overlooking Kilifi Creek",
          "Covered outdoor dining for 12",
          "BBQ area with pizza oven",
          "Indigenous gardens with irrigation",
          "Guest cottage (2 bedrooms)",
          "Beach shower and changing area",
          "Staff quarters (2 bedrooms)"
        ]
      },
      {
        category: "Sustainable Features",
        items: [
          "Solar power system (12kW)",
          "Rainwater harvesting (25,000L)",
          "Borehole with filtration",
          "Natural ventilation design",
          "Energy-efficient appliances",
          "LED lighting throughout",
          "Indigenous landscaping (low water)",
          "Composting system"
        ]
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        title: "Creek View",
        description: "Villa overlooking Kilifi Creek"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
        title: "Living Area",
        description: "Open-plan space with ocean breeze"
      },
      {
        url: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4",
        title: "Infinity Pool",
        description: "Pool with creek and ocean views"
      },
      {
        url: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2",
        title: "Master Bedroom",
        description: "Suite with private terrace"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        title: "Guest Cottage",
        description: "Separate accommodation for guests"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e",
        title: "Beach Access",
        description: "Private pathway to the beach"
      }
    ],
    neighborhood: {
      description: "Kilifi is a charming coastal town known for its natural beauty, historical sites, and relaxed atmosphere. Kilifi Creek provides excellent sailing, kitesurfing, and fishing opportunities, while the nearby beaches offer pristine swimming and snorkeling.\n\nThe town has developed into a sophisticated coastal destination while maintaining its authentic character. Art galleries, boutique shops, and excellent restaurants complement the natural attractions.",
      nearbyAmenities: [
        {
          category: "Activities",
          items: [
            "Kilifi Creek (waterfront)",
            "Bofa Beach (10 minutes)",
            "Mnarani Ruins and Snake Park (5 minutes)"
          ]
        },
        {
          category: "Dining & Shopping",
          items: [
            "Kilifi town center (12 minutes)",
            "Distant Relatives Eco-Lodge (8 minutes)",
            "The Moorings Restaurant (10 minutes)"
          ]
        },
        {
          category: "Recreation",
          items: [
            "Kitesurfing Kenya (15 minutes)",
            "Kilifi Golf Club (10 minutes)",
            "Sailing and yacht club (8 minutes)"
          ]
        },
        {
          category: "Transport",
          items: [
            "Malindi Airport (45 minutes)",
            "Mombasa (1 hour)"
          ]
        }
      ]
    }
  },
  14: {
    title: "Lavington Green Estate",
    location: "Lavington, Nairobi",
    price: "KSh 375M",
    badge: "elite",
    specs: {
      bedrooms: 5,
      bathrooms: 6,
      plotSize: "0.7 Acre",
      builtArea: "10,800 sq ft",
      yearBuilt: 2024,
      parking: "5 cars",
      style: "Sustainable Contemporary",
    },
    description: "Contemporary family compound with emphasis on sustainable living. Solar-powered, rainwater harvesting, and organic kitchen garden combine with home automation and premium security systems to create an eco-luxury residence.\n\nThis 10,800 square foot home on 0.7 acres demonstrates that luxury and sustainability can coexist beautifully. Every system has been optimized for efficiency without compromising on comfort or style.",
    features: [
      {
        category: "Interior Features",
        items: [
          "Open-plan living with 12-foot ceilings",
          "Gourmet kitchen with energy-efficient appliances",
          "Pantry and walk-in cold room",
          "Five en-suite bedrooms with smart climate control",
          "Master suite with spa bathroom",
          "Home office with built-in storage",
          "Playroom and study area",
          "Mudroom with storage lockers"
        ]
      },
      {
        category: "Sustainable Living",
        items: [
          "Solar panels (25kW) with battery storage",
          "Rainwater harvesting (50,000L capacity)",
          "Greywater recycling for gardens",
          "Organic kitchen garden with greenhouse",
          "Composting system for organic waste",
          "EV charging station (dual)",
          "Natural ventilation with ceiling fans",
          "Energy monitoring system"
        ]
      },
      {
        category: "Luxury Amenities",
        items: [
          "Heated swimming pool",
          "Home gym with mirrored walls",
          "Outdoor kitchen and dining",
          "Fire pit and lounge area",
          "Children's play area with equipment",
          "Staff quarters (3 bedrooms)",
          "Five-car garage with workshop",
          "Borehole with UV filtration"
        ]
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
        title: "Exterior View",
        description: "Sustainable contemporary design"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
        title: "Living Space",
        description: "Open-plan with natural lighting"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        title: "Kitchen Garden",
        description: "Organic vegetables and greenhouse"
      },
      {
        url: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2",
        title: "Master Bedroom",
        description: "Sustainable luxury suite"
      },
      {
        url: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4",
        title: "Pool Area",
        description: "Solar-heated pool with deck"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e",
        title: "Solar Array",
        description: "25kW solar system with batteries"
      }
    ],
    neighborhood: {
      description: "Lavington is one of Nairobi's most established and sought-after suburbs, known for its leafy streets, excellent schools, and convenient location. This property sits on a quiet street while being minutes from shopping centers and business districts.\n\nThe area offers a perfect balance of residential tranquility and urban accessibility, with excellent infrastructure, 24/7 security patrols, and a strong community atmosphere.",
      nearbyAmenities: [
        {
          category: "Education",
          items: [
            "Brookhouse School (10 minutes)",
            "Rusinga School (8 minutes)",
            "St. Mary's School (12 minutes)"
          ]
        },
        {
          category: "Shopping & Dining",
          items: [
            "Westgate Mall (8 minutes)",
            "Valley Arcade (10 minutes)",
            "Yaya Centre (12 minutes)"
          ]
        },
        {
          category: "Healthcare",
          items: [
            "Nairobi Hospital (10 minutes)",
            "MP Shah Hospital (15 minutes)"
          ]
        },
        {
          category: "Recreation",
          items: [
            "Windsor Golf Club (12 minutes)",
            "Karura Forest (15 minutes)",
            "Nairobi Arboretum (10 minutes)"
          ]
        }
      ]
    }
  },
  15: {
    title: "Vipingo Ridge Golf Villa",
    location: "Vipingo, Kilifi County",
    price: "KSh 290M",
    badge: "verified",
    specs: {
      bedrooms: 4,
      bathrooms: 5,
      plotSize: "0.8 Acre",
      builtArea: "8,200 sq ft",
      yearBuilt: 2023,
      parking: "4 cars",
      style: "Golf Resort Contemporary",
    },
    description: "Luxury golf villa overlooking the PGA Baobab Course at Vipingo Ridge. This property combines premium finishes with indoor-outdoor living spaces and includes a private golf cart garage. Access to exclusive club amenities including championship golf courses, spa, and beach club.\n\nThe 8,200 square foot villa is positioned to maximize golf course views while maintaining privacy. Large covered terraces and thoughtful landscaping create perfect spaces for entertaining and relaxation.",
    features: [
      {
        category: "Interior Features",
        items: [
          "Open-plan living with golf course views",
          "Gourmet kitchen with Smeg appliances",
          "Four en-suite bedrooms with terraces",
          "Master suite with spa bathroom and balcony",
          "Media room with projector",
          "Wine cellar with temperature control",
          "Home office with custom cabinetry",
          "Separate laundry and storage"
        ]
      },
      {
        category: "Outdoor Living",
        items: [
          "Infinity pool overlooking fairway",
          "Covered outdoor living and dining (1,000 sq ft)",
          "Built-in BBQ and outdoor kitchen",
          "Manicured gardens with indigenous plants",
          "Golf cart garage with charging",
          "Multiple viewing decks",
          "Staff quarters (2 bedrooms)",
          "Borehole and irrigation system"
        ]
      },
      {
        category: "Club Access & Amenities",
        items: [
          "Two championship golf courses (Baobab & Fynbos)",
          "Clubhouse with restaurants and bars",
          "Spa and wellness center",
          "Fitness center and tennis courts",
          "Beach club with watersports (10 minutes)",
          "24/7 estate security",
          "Residents' events and activities",
          "Property management services available"
        ]
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e",
        title: "Golf Course View",
        description: "Villa overlooking PGA Baobab Course"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
        title: "Living Room",
        description: "Open-plan space with fairway views"
      },
      {
        url: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4",
        title: "Pool Terrace",
        description: "Infinity pool with golf course backdrop"
      },
      {
        url: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2",
        title: "Master Suite",
        description: "Bedroom with private balcony"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        title: "Outdoor Dining",
        description: "Covered entertaining area"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e",
        title: "Golf Cart Garage",
        description: "Dedicated storage with charging"
      }
    ],
    neighborhood: {
      description: "Vipingo Ridge is Kenya's premier golf and beach resort community, offering residents an unparalleled lifestyle combining championship golf with Indian Ocean beach access. The estate features two PGA-standard courses designed by David Jones, set among indigenous coastal forest.\n\nThe exclusive community provides resort-style amenities while maintaining a peaceful residential atmosphere. The nearby village of Vipingo offers local shops and services, while Kilifi and Mombasa provide additional urban conveniences.",
      nearbyAmenities: [
        {
          category: "Golf & Sports",
          items: [
            "Baobab Golf Course (on estate)",
            "Fynbos Golf Course (on estate)",
            "Tennis courts (on estate)"
          ]
        },
        {
          category: "Beach & Leisure",
          items: [
            "Vipingo Beach Club (10 minutes)",
            "Bofa Beach (15 minutes)",
            "Kitesurfing centers (20 minutes)"
          ]
        },
        {
          category: "Dining & Shopping",
          items: [
            "Clubhouse restaurants (on estate)",
            "Vipingo village (5 minutes)",
            "Kilifi town (20 minutes)"
          ]
        },
        {
          category: "Transport",
          items: [
            "Malindi Airport (30 minutes)",
            "Mombasa Airport (45 minutes)"
          ]
        }
      ]
    }
  }
};

export default function PropertyDetail() {
  const router = useRouter();
  const { id } = router.query;
  const property = propertyDetails[id];
  const [selectedImage, setSelectedImage] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleKeyPress = useCallback((e) => {
    if (!isGalleryOpen) return;
    
    if (e.key === 'Escape') {
      setIsGalleryOpen(false);
      return;
    }

    if (!property?.gallery) return;

    const currentIndex = selectedImage !== null 
      ? property.gallery.findIndex(img => img.url === selectedImage.url)
      : -1;

    if (e.key === 'ArrowRight' && currentIndex < property.gallery.length - 1) {
      setSelectedImage(property.gallery[currentIndex + 1]);
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
      setSelectedImage(property.gallery[currentIndex - 1]);
    }
  }, [isGalleryOpen, selectedImage, property]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  if (!property) {
    return (
      <Layout>
        <div style={{ 
          minHeight: "100vh",
          backgroundColor: "var(--theme-bg)",
          color: "var(--theme-text)",
          padding: "120px 20px",
          textAlign: "center",
          transition: 'background-color 0.3s ease, color 0.3s ease'
        }}>
          Property not found
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div style={{
        backgroundColor: "var(--theme-bg)",
        color: "var(--theme-text)",
        minHeight: "100vh",
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}>
        {/* Hero Section - Photo Front and Center */}
        <section style={{
          position: "relative",
          height: "85vh",
          minHeight: "500px",
          maxHeight: "800px",
          overflow: "hidden"
        }}>
          {/* Full-size hero image */}
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(" + property.gallery[0].url + "?auto=format&fit=crop&w=2400&q=85)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
          
          {/* Subtle gradient overlay - only at bottom for text readability */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 30%, transparent 60%)",
          }} />
          
          {/* Info overlay at bottom */}
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "2rem 1.5rem",
            background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 60%, transparent 100%)",
          }}>
            <div style={{
              maxWidth: "1200px",
              margin: "0 auto",
            }}>
              {property.badge && (
                <div style={{ marginBottom: "0.875rem" }}>
                  <VerificationBadge level={property.badge} size="large" />
                </div>
              )}
              <h1 style={{
                fontSize: "clamp(1.75rem, 5vw, 3rem)",
                fontWeight: "500",
                marginBottom: "0.625rem",
                color: "#ffffff",
                textShadow: "0 3px 12px rgba(0,0,0,0.8)",
                lineHeight: "1.2"
              }}>{property.title}</h1>
              <p style={{
                fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                color: "#ffffff",
                marginBottom: "0.75rem",
                textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                opacity: "0.95"
              }}>{property.location}</p>
              <p style={{
                fontSize: "clamp(1.25rem, 3vw, 1.6rem)",
                color: "#f5b942",
                fontWeight: "600",
                textShadow: "0 2px 8px rgba(0,0,0,0.8)"
              }}>{property.price}</p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 20px",
        }}>
          {/* Quick Specs */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            marginBottom: "4rem",
            backgroundColor: "var(--theme-surface)",
            padding: "2rem",
            borderRadius: "12px",
            transition: 'background-color 0.3s ease'
          }}>
            {Object.entries(property.specs).map(([key, value]) => (
              <div key={key} style={{ textAlign: "center" }}>
                <div style={{ 
                  color: "var(--theme-text-muted)", 
                  marginBottom: "0.5rem",
                  transition: 'color 0.3s ease'
                }}>
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
                <div style={{ color: "var(--theme-accent)", fontSize: "1.1rem" }}>{value}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div style={{ marginBottom: "4rem" }}>
            <h2 style={{ 
              fontSize: "1.8rem", 
              marginBottom: "1.5rem",
              color: "var(--theme-text)",
              transition: 'color 0.3s ease'
            }}>Property Overview</h2>
            <p style={{ 
              color: "var(--theme-text-muted)",
              lineHeight: "1.8",
              whiteSpace: "pre-line",
              transition: 'color 0.3s ease'
            }}>{property.description}</p>
          </div>

          {/* Features */}
          <div style={{ marginBottom: "4rem" }}>
            <h2 style={{ 
              fontSize: "1.8rem", 
              marginBottom: "2rem",
              color: "var(--theme-text)",
              transition: 'color 0.3s ease'
            }}>Premium Features</h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}>
              {property.features.map((category, index) => (
                <div key={index} style={{
                  backgroundColor: "var(--theme-surface)",
                  padding: "2rem",
                  borderRadius: "12px",
                  transition: 'background-color 0.3s ease'
                }}>
                  <h3 style={{ 
                    color: "var(--theme-accent)",
                    marginBottom: "1.5rem" 
                  }}>{category.category}</h3>
                  <ul style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}>
                    {category.items.map((item, idx) => (
                      <li key={idx} style={{
                        color: "var(--theme-text-muted)",
                        marginBottom: "0.8rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        transition: 'color 0.3s ease'
                      }}>
                        <span style={{ color: "var(--theme-accent)" }}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div style={{ marginBottom: "4rem" }}>
            <h2 style={{ 
              fontSize: "1.8rem", 
              marginBottom: "2rem",
              color: "var(--theme-text)",
              transition: 'color 0.3s ease'
            }}>Property Gallery</h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}>
              {property.gallery.map((image, index) => (
                <div 
                  key={index} 
                  style={{
                    backgroundColor: "var(--theme-surface)",
                    borderRadius: "12px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "transform 0.2s ease, background-color 0.3s ease",
                  }}
                  onClick={() => {
                    setSelectedImage(image);
                    setIsGalleryOpen(true);
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <OptimizedImage
                    src={image.url + "?auto=format&fit=crop&w=600&q=80"}
                    alt={image.title}
                    height={"240px"}
                    objectFit={"cover"}
                    quality={80}
                    style={{ width: '100%' }}
                  />
                  <div style={{ padding: "1rem" }}>
                    <h4 style={{ 
                      color: "var(--theme-text)",
                      marginBottom: "0.5rem",
                      transition: 'color 0.3s ease'
                    }}>{image.title}</h4>
                    <p style={{ 
                      color: "var(--theme-text-muted)",
                      fontSize: "0.9rem",
                      transition: 'color 0.3s ease'
                    }}>{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Property Inquiry Section - Moved up for better visibility */}
          <div style={{
            marginBottom: "4rem"
          }}>
            <PropertyInquiryForm propertyTitle={property.title} />
          </div>

          {/* Neighborhood */}
          <div>
            <h2 style={{ 
              fontSize: "1.8rem", 
              marginBottom: "2rem",
              color: "var(--theme-text)",
              transition: 'color 0.3s ease'
            }}>Neighborhood</h2>
            <div style={{
              backgroundColor: "var(--theme-surface)",
              padding: "2rem",
              borderRadius: "12px",
              marginBottom: "2rem",
              transition: 'background-color 0.3s ease'
            }}>
              <p style={{
                color: "var(--theme-text-muted)",
                lineHeight: "1.8",
                whiteSpace: "pre-line",
                marginBottom: "2rem",
                transition: 'color 0.3s ease'
              }}>{property.neighborhood.description}</p>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "2rem",
              }}>
                {property.neighborhood.nearbyAmenities.map((category, index) => (
                  <div key={index}>
                    <h3 style={{
                      color: "var(--theme-accent)",
                      marginBottom: "1rem",
                      fontSize: "1.1rem",
                    }}>{category.category}</h3>
                    <ul style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                    }}>
                      {category.items.map((item, idx) => (
                        <li key={idx} style={{
                          color: "var(--theme-text-muted)",
                          marginBottom: "0.5rem",
                          transition: 'color 0.3s ease'
                        }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Similar Properties Section */}
          <div style={{
            marginTop: "4rem",
            paddingTop: "4rem",
            borderTop: `1px solid var(--theme-border)`,
            transition: 'border-color 0.3s ease'
          }}>
            <h2 style={{ 
              fontSize: "1.8rem", 
              marginBottom: "2rem",
              color: "var(--theme-text)",
              transition: 'color 0.3s ease'
            }}>Similar Properties</h2>
            
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem"
            }}>
              {Object.entries(propertyDetails)
                .filter(([key]) => key !== id)
                .slice(0, 3)
                .map(([key, prop]) => (
                  <div
                    key={key}
                    onClick={() => router.push(`/listings/${key}`)}
                    style={{
                      backgroundColor: "var(--theme-surface)",
                      borderRadius: "12px",
                      overflow: "hidden",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      border: `1px solid var(--theme-border)`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div style={{ position: "relative", height: "240px", overflow: "hidden" }}>
                      <OptimizedImage
                        src={prop.gallery[0].url + "?auto=format&fit=crop&w=600&q=80"}
                        alt={prop.title}
                        height={"240px"}
                        objectFit={"cover"}
                        quality={80}
                        style={{ width: '100%' }}
                      />
                      {prop.badge && (
                        <div style={{ position: "absolute", top: "1rem", left: "1rem" }}>
                          <VerificationBadge level={prop.badge} />
                        </div>
                      )}
                    </div>
                    <div style={{ padding: "1.5rem" }}>
                      <h3 style={{
                        color: "var(--theme-text)",
                        fontSize: "1.2rem",
                        marginBottom: "0.5rem",
                        fontWeight: "500",
                        transition: 'color 0.3s ease'
                      }}>{prop.title}</h3>
                      <p style={{
                        color: "var(--theme-text-muted)",
                        fontSize: "0.9rem",
                        marginBottom: "0.75rem",
                        transition: 'color 0.3s ease'
                      }}>{prop.location}</p>
                      <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingTop: "0.75rem",
                        borderTop: `1px solid var(--theme-border)`,
                        transition: 'border-color 0.3s ease'
                      }}>
                        <span style={{
                          color: "var(--theme-accent)",
                          fontSize: "1.25rem",
                          fontWeight: "600"
                        }}>{prop.price}</span>
                        <span style={{
                          color: "var(--theme-text-muted)",
                          fontSize: "0.85rem",
                          transition: 'color 0.3s ease'
                        }}>{prop.specs.bedrooms} Bed • {prop.specs.plotSize}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Lightbox Modal */}
      {isGalleryOpen && selectedImage && (
        <div 
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.95)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setIsGalleryOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsGalleryOpen(false);
            }}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "rgba(255,255,255,0.1)",
              border: "2px solid rgba(255,255,255,0.3)",
              borderRadius: "50%",
              color: "#fff",
              fontSize: "24px",
              cursor: "pointer",
              zIndex: 10001,
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
            }}
          >
            ✕
          </button>

          {/* Navigation buttons */}
          {property.gallery.findIndex(img => img.url === selectedImage.url) > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = property.gallery.findIndex(img => img.url === selectedImage.url);
                if (currentIndex > 0) {
                  setSelectedImage(property.gallery[currentIndex - 1]);
                }
              }}
              style={{
                position: "absolute",
                top: "50%",
                left: "20px",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.1)",
                border: "2px solid rgba(255,255,255,0.3)",
                borderRadius: "50%",
                color: "#fff",
                fontSize: "28px",
                cursor: "pointer",
                zIndex: 10001,
                width: "60px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
            >
              ←
            </button>
          )}

          {property.gallery.findIndex(img => img.url === selectedImage.url) < property.gallery.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = property.gallery.findIndex(img => img.url === selectedImage.url);
                if (currentIndex < property.gallery.length - 1) {
                  setSelectedImage(property.gallery[currentIndex + 1]);
                }
              }}
              style={{
                position: "absolute",
                top: "50%",
                right: "20px",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.1)",
                border: "2px solid rgba(255,255,255,0.3)",
                borderRadius: "50%",
                color: "#fff",
                fontSize: "28px",
                cursor: "pointer",
                zIndex: 10001,
                width: "60px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
            >
              →
            </button>
          )}

          {/* Main image container */}
          <div 
            style={{
              maxWidth: "90vw",
              maxHeight: "85vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url + "?auto=format&fit=crop&w=1920&q=90"}
              alt={selectedImage.title}
              style={{
                maxWidth: "100%",
                maxHeight: "75vh",
                objectFit: "contain",
                borderRadius: "8px"
              }}
            />
            <div style={{
              marginTop: "1.5rem",
              textAlign: "center",
              color: "#ffffff",
              maxWidth: "600px"
            }}>
              <h3 style={{ 
                marginBottom: "0.5rem",
                fontSize: "1.25rem",
                fontWeight: "500"
              }}>{selectedImage.title}</h3>
              <p style={{ 
                color: "rgba(255,255,255,0.8)",
                fontSize: "0.95rem"
              }}>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

// Property Inquiry Form Component
function PropertyInquiryForm({ propertyTitle }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', phone: '', email: '' });
    }, 700);
  };

  return (
    <section style={{
      maxWidth: "800px",
      margin: "0 auto 4rem",
      padding: "0 20px"
    }}>
      <div style={{
        background: "var(--theme-surface)",
        padding: "3rem 2.5rem",
        borderRadius: "12px",
        border: `1px solid var(--theme-border)`,
        transition: 'background 0.3s ease, border-color 0.3s ease'
      }}>
        <div style={{
          textAlign: "center",
          marginBottom: "2rem"
        }}>
          <h2 style={{
            fontSize: "1.8rem",
            fontWeight: 400,
            marginBottom: "0.75rem",
            color: "var(--theme-text)",
            transition: 'color 0.3s ease'
          }}>
            Inquire About This Property
          </h2>
          <p style={{
            color: "var(--theme-text-muted)",
            fontSize: "1rem",
            lineHeight: "1.7",
            maxWidth: "600px",
            margin: "0 auto",
            transition: 'color 0.3s ease'
          }}>
            Experience our personalized, vetted service. Share your details and our team will reach out 
            within <strong style={{ color: "var(--theme-accent-strong)" }}>24 hours</strong> to begin a curated engagement 
            tailored to your needs.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem"
        }}>
          <div>
            <label style={{
              display: "block",
              marginBottom: "0.5rem",
              color: "var(--theme-text)",
              fontSize: "0.95rem",
              fontWeight: 500,
              transition: 'color 0.3s ease'
            }}>
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              style={{
                width: "100%",
                padding: "0.85rem",
                background: "var(--theme-bg)",
                border: "2px solid rgba(128, 128, 128, 0.3)",
                borderRadius: "6px",
                color: "var(--theme-text)",
                fontSize: "1rem",
                outline: "none",
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "rgba(128, 128, 128, 0.6)";
                e.currentTarget.style.boxShadow = "0 0 0 3px rgba(128, 128, 128, 0.1)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(128, 128, 128, 0.3)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.25rem"
          }}>
            <div>
              <label style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "var(--theme-text)",
                fontSize: "0.95rem",
                fontWeight: 500,
                transition: 'color 0.3s ease'
              }}>
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                style={{
                  width: "100%",
                  padding: "0.85rem",
                  background: "var(--theme-bg)",
                  border: "2px solid rgba(128, 128, 128, 0.3)",
                  borderRadius: "6px",
                  color: "var(--theme-text)",
                  fontSize: "1rem",
                  outline: "none",
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(128, 128, 128, 0.6)";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(128, 128, 128, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(128, 128, 128, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            <div>
              <label style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "var(--theme-text)",
                fontSize: "0.95rem",
                fontWeight: 500,
                transition: 'color 0.3s ease'
              }}>
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                style={{
                  width: "100%",
                  padding: "0.85rem",
                  background: "var(--theme-bg)",
                  border: "2px solid rgba(128, 128, 128, 0.3)",
                  borderRadius: "6px",
                  color: "var(--theme-text)",
                  fontSize: "1rem",
                  outline: "none",
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(128, 128, 128, 0.6)";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(128, 128, 128, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(128, 128, 128, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            style={{
              background: "linear-gradient(135deg, var(--theme-accent), var(--theme-accent-strong))",
              color: "var(--theme-bg)",
              padding: "1rem 2.5rem",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: status === 'sending' ? 'wait' : 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(245, 185, 66, 0.25)',
              marginTop: "0.5rem"
            }}
            onMouseEnter={(e) => {
              if (status !== 'sending') {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(245, 185, 66, 0.35)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(245, 185, 66, 0.25)';
            }}
          >
            {status === 'sending' ? 'Submitting...' : 'Submit Inquiry'}
          </button>

          <div style={{ 
            fontSize: '0.75rem', 
            color: 'var(--theme-text-muted)', 
            marginTop: '0.25rem',
            fontStyle: 'italic',
            textAlign: 'center',
            transition: 'color 0.3s ease'
          }}>
            We do not sell your data.
          </div>

          {status === 'sent' && (
            <div style={{
              padding: "1.25rem",
              background: "rgba(76, 175, 80, 0.1)",
              border: "1px solid rgba(76, 175, 80, 0.3)",
              borderRadius: "8px",
              color: "#4caf50",
              fontSize: "1rem",
              lineHeight: "1.6",
              textAlign: "center"
            }}>
              <strong>Thank you for your inquiry about {propertyTitle}.</strong><br />
              Our team will contact you within 24 hours to discuss this exclusive opportunity and 
              arrange a personalized viewing experience.
            </div>
          )}

          {status === 'error' && (
            <div style={{
              padding: "1rem",
              background: "rgba(244, 67, 54, 0.1)",
              border: "1px solid rgba(244, 67, 54, 0.3)",
              borderRadius: "8px",
              color: "#f44336",
              textAlign: "center",
              fontSize: "0.95rem"
            }}>
              Please complete all required fields.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}