import { useState } from 'react';

export default function RegionalInsights({ data, currency = "KSH" }) {
  const [selectedRegion, setSelectedRegion] = useState("Karen");
  
  // Group regions by area type
  const areaTypes = {
    "Premium Residential": ["Karen", "Runda", "Kitisuru", "Nyari"],
    "Diplomatic Zone": ["Gigiri", "Muthaiga", "Lavington"],
    "Business District": ["Westlands", "Kilimani", "Riverside"]
  };

  const getRegionStats = (region) => {
    const stats = {
      "Karen": { 
        avgPrice: 385000,
        priceChange: +2.3,
        inventory: 45,
        daysOnMarket: 62,
        premium: "15-20%",
        topAmenities: ["Golf Course", "International Schools", "Secure Compounds"]
      },
      "Runda": {
        avgPrice: 410000,
        priceChange: +3.1,
        inventory: 32,
        daysOnMarket: 58,
        premium: "20-25%",
        topAmenities: ["24/7 Security", "Private Water Supply", "Embassy Proximity"]
      },
      // ... other regions with their stats
    };
    return stats[region] || stats["Karen"];
  };

  return (
    <div style={{
      backgroundColor: "#161616",
      borderRadius: "12px",
      padding: "2rem",
      width: "100%"
    }}>
      {/* Region Selection */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
        marginBottom: "3rem"
      }}>
        {Object.entries(areaTypes).map(([type, regions]) => (
          <div key={type}>
            <h3 style={{
              fontSize: "1.1rem",
              color: "#c2a675",
              marginBottom: "1rem",
              fontFamily: "var(--font-secondary)",
              fontWeight: "500"
            }}>
              {type}
            </h3>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem"
            }}>
              {regions.map(region => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  style={{
                    background: selectedRegion === region ? "rgba(194, 166, 117, 0.1)" : "transparent",
                    border: "1px solid " + (selectedRegion === region ? "#c2a675" : "#333"),
                    borderRadius: "8px",
                    padding: "0.75rem",
                    color: selectedRegion === region ? "#ffffff" : "#888",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    fontSize: "0.95rem",
                    fontFamily: "var(--font-secondary)"
                  }}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Region Details */}
      <div style={{
        background: "linear-gradient(to right, rgba(194, 166, 117, 0.05), transparent)",
        borderRadius: "12px",
        padding: "2rem",
        marginTop: "2rem"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem"
        }}>
          {/* Price Stats */}
          <div>
            <h4 style={{
              fontSize: "0.9rem",
              color: "#888",
              marginBottom: "0.5rem",
              fontFamily: "var(--font-secondary)"
            }}>
              Average Price per Sq.M
            </h4>
            <p style={{
              fontSize: "1.8rem",
              color: "#ffffff",
              fontFamily: "var(--font-primary)",
              marginBottom: "0.25rem"
            }}>
              {currency} {getRegionStats(selectedRegion).avgPrice.toLocaleString()}
            </p>
            <p style={{
              fontSize: "0.9rem",
              color: getRegionStats(selectedRegion).priceChange > 0 ? "#4caf50" : "#f44336"
            }}>
              {getRegionStats(selectedRegion).priceChange > 0 ? "+" : ""}
              {getRegionStats(selectedRegion).priceChange}% YoY
            </p>
          </div>

          {/* Market Activity */}
          <div>
            <h4 style={{
              fontSize: "0.9rem",
              color: "#888",
              marginBottom: "0.5rem",
              fontFamily: "var(--font-secondary)"
            }}>
              Market Activity
            </h4>
            <div style={{ marginBottom: "1rem" }}>
              <p style={{
                fontSize: "1.2rem",
                color: "#ffffff",
                fontFamily: "var(--font-primary)"
              }}>
                {getRegionStats(selectedRegion).inventory} Properties
              </p>
              <p style={{
                fontSize: "0.9rem",
                color: "#888"
              }}>
                Available Inventory
              </p>
            </div>
            <div>
              <p style={{
                fontSize: "1.2rem",
                color: "#ffffff",
                fontFamily: "var(--font-primary)"
              }}>
                {getRegionStats(selectedRegion).daysOnMarket} days
              </p>
              <p style={{
                fontSize: "0.9rem",
                color: "#888"
              }}>
                Average Days on Market
              </p>
            </div>
          </div>

          {/* Premium & Amenities */}
          <div>
            <h4 style={{
              fontSize: "0.9rem",
              color: "#888",
              marginBottom: "0.5rem",
              fontFamily: "var(--font-secondary)"
            }}>
              Area Highlights
            </h4>
            <p style={{
              fontSize: "1.2rem",
              color: "#ffffff",
              marginBottom: "1rem",
              fontFamily: "var(--font-primary)"
            }}>
              {getRegionStats(selectedRegion).premium} Premium
            </p>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem"
            }}>
              {getRegionStats(selectedRegion).topAmenities.map((amenity, index) => (
                <span
                  key={index}
                  style={{
                    fontSize: "0.85rem",
                    color: "#888",
                    background: "rgba(255,255,255,0.05)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "12px",
                    border: "1px solid #333"
                  }}
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}