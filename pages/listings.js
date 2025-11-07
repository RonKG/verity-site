import { useRouter } from 'next/router';
/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "../components/Layout";
import FeatureTeaser from "../components/FeatureTeaser";
import { useState, useEffect } from 'react';

export default function Listings() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [propertyType, setPropertyType] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState('grid');
  const [filteredListings, setFilteredListings] = useState([]);

  const locations = [
    { value: 'all', label: 'All Locations' },
    { value: 'karen', label: 'Karen' },
    { value: 'kitisuru', label: 'Kitisuru' },
    { value: 'lavington', label: 'Lavington' },
    { value: 'muthaiga', label: 'Muthaiga' },
    { value: 'runda', label: 'Runda' },
    { value: 'coastal', label: 'Coastal Region' },
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '200-300', label: 'KSh 200M - 300M' },
    { value: '300-400', label: 'KSh 300M - 400M' },
    { value: '400-500', label: 'KSh 400M - 500M' },
    { value: '500+', label: 'KSh 500M+' },
  ];

  const propertyTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'villa', label: 'Villa' },
    { value: 'penthouse', label: 'Penthouse' },
    { value: 'estate', label: 'Estate' },
    { value: 'beachfront', label: 'Beachfront' },
  ];

  const sortOptions = [
    { value: 'default', label: 'Featured' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest First' },
  ];

  const listings = [
    {
      id: 1,
      title: "The Ridge Residence – Kitisuru",
      location: "Kitisuru, Nairobi",
      price: "KSh 420M",
      specs: "5 Bed • 0.6 Acre",
      image:
        "https://www.elitehomeskenya.com/wp-content/uploads/2025/08/Luxury-Villas-in-Kenya.webp",
      description:
        "A contemporary hillside retreat with clean lines, panoramic glass, and sculpted gardens that blend privacy with open air. Smart climate zones, solar integration, and hardwood interiors deliver understated refinement.",
    },
    {
      id: 2,
      title: "Coastal Haven – Diani Beach",
      location: "Diani Beach, Kwale County",
      price: "KSh 310M",
      specs: "4 Bed • 1.2 Acre • Beachfront",
      image:
        "https://img.jamesedition.com/listing_images/2025/10/15/15/48/34/3cce02f3-4b65-433c-b0b8-8c18be9aaf1a/je/1900xxs.jpg",
      description:
        "Oceanfront living reimagined. Expansive terraces open directly to white sands and palm silhouettes. Architect-led design meets quiet seclusion — where every sunset feels curated.",
    },
    {
      id: 3,
      title: "Forest Edge Glasshouse – Karen",
      location: "Karen, Nairobi",
      price: "KSh 385M",
      specs: "4 Bed • 0.8 Acre",
      image:
        "https://www.flamaproperties.com/wp-content/uploads/2023/08/5-BEDROOMS-HOUSE-in-karen-flama-properties-8.jpg",
      description:
        "A living sculpture of glass and steel at the edge of Oloolua Forest. Expansive light, exposed textures, and intelligent space create harmony between structure and nature.",
    },
    {
      id: 4,
      title: "Nyali Coral Estate",
      location: "Nyali, Mombasa",
      price: "KSh 295M",
      specs: "6 Bed • 0.5 Acre • Sea View",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
      description: "Mediterranean-inspired beachfront villa with private access to Nyali Beach. Features include infinity pool, smart home automation, and a dedicated yacht berth at the nearby marina.",
    },
    {
      id: 5,
      title: "Muthaiga Ambassador's Villa",
      location: "Muthaiga, Nairobi",
      price: "KSh 480M",
      specs: "7 Bed • 1.5 Acre • Embassy Row",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
      description: "Historic estate reimagined with modern luxury. Diplomatic-grade security, helipaid-ready grounds, and state-of-the-art entertainment pavilion. A legacy property in Nairobi's most prestigious address.",
    },
    {
      id: 6,
      title: "Diani Coral Penthouse",
      location: "Diani Beach, Kwale County",
      price: "KSh 225M",
      specs: "4 Bed • 6000 sq ft • Oceanfront",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
      description: "Luxury penthouse with 360° views of the Indian Ocean. Floor-to-ceiling windows, private rooftop garden, and direct beach access. Fully furnished with designer pieces.",
    },
    {
      id: 7,
      title: "Spring Valley Modern Manor",
      location: "Spring Valley, Nairobi",
      price: "KSh 395M",
      specs: "5 Bed • 0.75 Acre • Pool",
      image: "https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?auto=format&fit=crop&w=1600&q=80",
      description: "Architectural masterpiece with double-height ceilings and dramatic open spaces. Smart home integration, wine cellar, and resort-style pool area with entertainment deck.",
    },
    {
      id: 8,
      title: "Watamu Beach Villa",
      location: "Watamu, Kilifi County",
      price: "KSh 280M",
      specs: "5 Bed • 0.9 Acre • Beachfront",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
      description: "Balinese-inspired luxury villa with direct access to Watamu Marine Park. Featuring traditional makuti roofing, infinity pool, and private beach cove.",
    },
    {
      id: 9,
      title: "Runda Water Gardens",
      location: "Runda, Nairobi",
      price: "KSh 320M",
      specs: "6 Bed • 0.5 Acre • Waterfront",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
      description: "Contemporary waterfront residence overlooking Runda dam. Features cascading water gardens, meditation pavilion, and state-of-the-art home theatre.",
    },
    {
      id: 10,
      title: "English Point Marina Penthouse",
      location: "Tudor, Mombasa",
      price: "KSh 265M",
      specs: "4 Bed • 5500 sq ft • Marina View",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=80",
      description: "Ultra-luxury penthouse in Mombasa's premier marina development. Private elevator, yacht berth, and panoramic harbor views. Smart home technology throughout.",
    },
    {
      id: 11,
      title: "Loresho Heights Estate",
      location: "Loresho, Nairobi",
      price: "KSh 355M",
      specs: "5 Bed • 0.4 Acre • City View",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
      description: "Elevated living with panoramic city views. Features include vertical gardens, glass elevator, and infinity edge pool overlooking the Nairobi skyline.",
    },
    {
      id: 12,
      title: "Karen Horse Estate",
      location: "Karen, Nairobi",
      price: "KSh 445M",
      specs: "6 Bed • 2.5 Acre • Equestrian",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      description: "Exclusive equestrian estate with world-class stables and training facilities. Main house features wine cellar, library, and staff quarters. Adjacent to Karen Horse Club.",
    },
    {
      id: 13,
      title: "Kilifi Bay Villa",
      location: "Kilifi, Kilifi County",
      price: "KSh 255M",
      specs: "4 Bed • 1.0 Acre • Oceanfront",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      description: "Modern coastal retreat with private beach access. Featuring indigenous gardens, infinity pool, and guest cottage. Perfect blend of luxury and coastal living.",
    },
    {
      id: 14,
      title: "Lavington Green Estate",
      location: "Lavington, Nairobi",
      price: "KSh 375M",
      specs: "5 Bed • 0.7 Acre • Pool",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
      description: "Contemporary family compound with emphasis on sustainable living. Solar-powered, rainwater harvesting, and organic kitchen garden. Complete with home automation and security systems.",
    },
    {
      id: 15,
      title: "Vipingo Ridge Golf Villa",
      location: "Vipingo, Kilifi County",
      price: "KSh 290M",
      specs: "4 Bed • 0.8 Acre • Golf Course",
      image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=80",
      description: "Luxury golf villa overlooking the PGA Baobab Course. Premium finishes, indoor-outdoor living spaces, and private golf cart garage. Access to exclusive club amenities.",
    }
  ];

  return (
    <Layout>
      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "var(--theme-bg)",
          color: "var(--theme-text)",
          transition: 'background-color 0.3s ease, color 0.3s ease'
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{ 
            fontSize: "2.4rem", 
            fontWeight: "400", 
            marginBottom: "1rem",
            background: `linear-gradient(45deg, var(--theme-accent), var(--theme-accent-strong))`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Premium Listings
          </h1>
          <p style={{ color: "var(--theme-text-muted)", fontSize: "1.1rem" }}>
            Curated homes verified for design integrity, authenticity, and context.
          </p>
        </div>

        {/* Search and Filters */}
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto 3rem",
          padding: "2rem",
          background: "var(--theme-surface)",
          borderRadius: "12px",
          border: `1px solid var(--theme-border)`,
          transition: 'background 0.3s ease, border-color 0.3s ease'
        }}>
          {/* Search Bar */}
          <div style={{ marginBottom: "2rem" }}>
            <input
              type="text"
              placeholder="Search by location, features, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "1rem",
                background: "var(--theme-bg)",
                border: `1px solid var(--theme-border)`,
                borderRadius: "8px",
                color: "var(--theme-text)",
                fontSize: "1rem",
                transition: 'background 0.3s ease, border-color 0.3s ease, color 0.3s ease'
              }}
            />
          </div>

          {/* Filter Controls */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            alignItems: "end"
          }}>
            {/* Location Filter */}
            <div>
              <label style={{ 
                display: "block", 
                marginBottom: "0.5rem", 
                color: "var(--theme-text-muted)",
                fontSize: "0.9rem",
                transition: 'color 0.3s ease'
              }}>
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  background: "var(--theme-bg)",
                  border: `1px solid var(--theme-border)`,
                  borderRadius: "6px",
                  color: "var(--theme-text)",
                  cursor: "pointer",
                  transition: 'background 0.3s ease, border-color 0.3s ease, color 0.3s ease'
                }}
              >
                {locations.map(loc => (
                  <option key={loc.value} value={loc.value}>{loc.label}</option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label style={{ 
                display: "block", 
                marginBottom: "0.5rem", 
                color: "var(--theme-text-muted)",
                fontSize: "0.9rem",
                transition: 'color 0.3s ease'
              }}>
                Price Range
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  background: "var(--theme-bg)",
                  border: `1px solid var(--theme-border)`,
                  borderRadius: "6px",
                  color: "var(--theme-text)",
                  cursor: "pointer",
                  transition: 'background 0.3s ease, border-color 0.3s ease, color 0.3s ease'
                }}
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
            </div>

            {/* Property Type Filter */}
            <div>
              <label style={{ 
                display: "block", 
                marginBottom: "0.5rem", 
                color: "var(--theme-text-muted)",
                fontSize: "0.9rem",
                transition: 'color 0.3s ease'
              }}>
                Property Type
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  background: "var(--theme-bg)",
                  border: `1px solid var(--theme-border)`,
                  borderRadius: "6px",
                  color: "var(--theme-text)",
                  cursor: "pointer",
                  transition: 'background 0.3s ease, border-color 0.3s ease, color 0.3s ease'
                }}
              >
                {propertyTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>

            {/* Sort Options */}
            <div>
              <label style={{ 
                display: "block", 
                marginBottom: "0.5rem", 
                color: "var(--theme-text-muted)",
                fontSize: "0.9rem",
                transition: 'color 0.3s ease'
              }}>
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  background: "var(--theme-bg)",
                  border: `1px solid var(--theme-border)`,
                  borderRadius: "6px",
                  color: "var(--theme-text)",
                  cursor: "pointer",
                  transition: 'background 0.3s ease, border-color 0.3s ease, color 0.3s ease'
                }}
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* View Toggle */}
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div style={{ color: "var(--theme-text-muted)", transition: 'color 0.3s ease' }}>
            <span style={{ color: "var(--theme-accent)" }}>{listings.length}</span> properties found
          </div>
          <div style={{
            display: "flex",
            gap: "0.5rem"
          }}>
            <button
              onClick={() => setViewMode('grid')}
              style={{
                background: viewMode === 'grid' ? 'var(--theme-accent)' : 'var(--theme-surface)',
                color: viewMode === 'grid' ? 'var(--theme-bg)' : 'var(--theme-text-muted)',
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              style={{
                background: viewMode === 'list' ? 'var(--theme-accent)' : 'var(--theme-surface)',
                color: viewMode === 'list' ? 'var(--theme-bg)' : 'var(--theme-text-muted)',
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              List
            </button>
          </div>
        </div>

        {/* Listings Grid */}
        <div
          style={{
            display: viewMode === 'grid' ? 'grid' : 'flex',
            gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fit, minmax(320px, 1fr))' : 'none',
            flexDirection: viewMode === 'list' ? 'column' : 'row',
            gap: viewMode === 'grid' ? '2.5rem' : '1.5rem',
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {listings.map((home) => (
            <div
              key={home.id}
              onClick={() => router.push(`/listings/${home.id}`)}
              style={{
                backgroundColor: "var(--theme-surface)",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
                textAlign: "left",
                transition: "all 0.3s ease",
                cursor: "pointer",
                display: viewMode === 'list' ? 'flex' : 'block',
                border: `1px solid var(--theme-border)`,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.6)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.4)";
              }}
            >
              <div style={{
                flex: viewMode === 'list' ? '0 0 300px' : 'auto',
              }}>
                <img
                  src={home.image}
                  alt={home.title}
                  style={{ 
                    width: "100%", 
                    height: viewMode === 'list' ? "200px" : "240px", 
                    objectFit: "cover" 
                  }}
                />
              </div>
              <div style={{ 
                padding: "1.5rem",
                flex: viewMode === 'list' ? 1 : 'auto',
              }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "0.5rem",
                }}>
                  <h3 style={{ 
                    color: "var(--theme-text)",
                    fontSize: "1.2rem",
                    fontWeight: "400",
                    transition: 'color 0.3s ease'
                  }}>{home.title}</h3>
                  <span style={{
                    background: `linear-gradient(45deg, var(--theme-accent), var(--theme-accent-strong))`,
                    padding: "0.3rem 0.8rem",
                    borderRadius: "6px",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                  }}>{home.price}</span>
                </div>
                <p style={{ 
                  color: "var(--theme-text-muted)", 
                  fontSize: "0.95rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: 'color 0.3s ease'
                }}>
                  <span style={{ color: "var(--theme-text-muted)" }}>📍</span> {home.location}
                </p>
                <p style={{ 
                  color: "var(--theme-text-muted)", 
                  marginTop: "0.5rem",
                  fontSize: "0.9rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: 'color 0.3s ease'
                }}>
                  <span style={{ color: "var(--theme-text-muted)" }}>🏠</span> {home.specs}
                </p>
                <p style={{ 
                  color: "var(--theme-text-muted)", 
                  marginTop: "1rem", 
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                  transition: 'color 0.3s ease'
                }}>{home.description}</p>
                
                <div style={{
                  marginTop: "1.5rem",
                  padding: "1rem 0 0",
                  borderTop: `1px solid var(--theme-border)`,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: 'border-color 0.3s ease'
                }}>
                  <div style={{
                    display: "flex",
                    gap: "1rem",
                  }}>
                    <span style={{ color: "var(--theme-text-muted)", fontSize: "0.9rem", transition: 'color 0.3s ease' }}>
                      Added: Nov 2025
                    </span>
                    <span style={{ color: "var(--theme-text-muted)", fontSize: "0.9rem", transition: 'color 0.3s ease' }}>
                      Views: 245
                    </span>
                  </div>
                  <button style={{
                    background: "transparent",
                    border: `1px solid var(--theme-accent)`,
                    color: "var(--theme-accent)",
                    padding: "0.5rem 1rem",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "var(--theme-accent)";
                    e.currentTarget.style.color = "var(--theme-bg)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "var(--theme-accent)";
                  }}>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Stats Section */}
      <section style={{
        backgroundColor: "var(--theme-surface)",
        padding: "60px 20px",
        marginTop: "4rem",
        transition: 'background-color 0.3s ease'
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
          textAlign: "center",
        }}>
          {[
            { number: "150+", label: "Premium Properties", icon: "🏠" },
            { number: "98%", label: "Verification Rate", icon: "✓" },
            { number: "24/7", label: "Expert Support", icon: "💬" },
            { number: "15+", label: "Prime Locations", icon: "📍" },
          ].map((stat, index) => (
            <div key={index} style={{
              padding: "1.5rem",
              background: "var(--theme-bg)",
              borderRadius: "12px",
              border: `1px solid var(--theme-border)`,
              transition: 'background 0.3s ease, border-color 0.3s ease'
            }}>
              <span style={{ fontSize: "2rem", marginBottom: "1rem", display: "block" }}>
                {stat.icon}
              </span>
              <div style={{
                fontSize: "1.8rem",
                fontWeight: "500",
                marginBottom: "0.5rem",
                background: `linear-gradient(45deg, var(--theme-accent), var(--theme-accent-strong))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                {stat.number}
              </div>
              <div style={{ color: "var(--theme-text-muted)", fontSize: "0.9rem", transition: 'color 0.3s ease' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reusable feature teaser */}
      <FeatureTeaser />
    </Layout>
  );

  useEffect(() => {
    // Filter and sort listings based on selected options
    let filtered = [...listings];

    // Apply search filter
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(home => 
        home.title.toLowerCase().includes(search) ||
        home.location.toLowerCase().includes(search) ||
        home.description.toLowerCase().includes(search)
      );
    }

    // Apply location filter
    if (selectedLocation !== 'all') {
      filtered = filtered.filter(home => 
        home.location.toLowerCase().includes(selectedLocation)
      );
    }

    // Apply price range filter
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(p => parseInt(p));
      filtered = filtered.filter(home => {
        const price = parseInt(home.price.replace(/[^0-9]/g, ''));
        if (max) {
          return price >= min && price <= max;
        }
        return price >= min;
      });
    }

    // Apply property type filter
    if (propertyType !== 'all') {
      filtered = filtered.filter(home =>
        home.description.toLowerCase().includes(propertyType) ||
        home.title.toLowerCase().includes(propertyType)
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => 
          parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''))
        );
        break;
      case 'price-desc':
        filtered.sort((a, b) => 
          parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''))
        );
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        // Keep default order
        break;
    }

    setFilteredListings(filtered);
  }, [searchTerm, selectedLocation, priceRange, propertyType, sortBy]);
}
