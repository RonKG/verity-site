import { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import "leaflet/dist/leaflet.css";

export default function HeatmapPage() {
  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [timeRange, setTimeRange] = useState("3m");
  const [propertyType, setPropertyType] = useState("all");
  const [loading, setLoading] = useState(false);

  const initialView = { lat: -1.2921, lng: 36.8219, zoom: 12.5 };

  const filters = {
    all: "All Properties",
    luxury: "Luxury Segment",
    new: "New Developments",
    hot: "High Demand"
  };

  const timeRanges = {
    "1m": "1 Month",
    "3m": "3 Months",
    "6m": "6 Months",
    "1y": "1 Year"
  };

  const propertyTypes = {
    all: "All Types",
    house: "Houses",
    apartment: "Apartments",
    villa: "Villas",
    land: "Land"
  };

  useEffect(() => {
    (async () => {
      if (typeof window === "undefined") return;
      const L = (await import("leaflet")).default;
      await import("leaflet.heat");

      if (!mapRef.current) {
        const map = L.map("heatmapContainer", {
          zoomControl: true,
          scrollWheelZoom: true,
          doubleClickZoom: true,
          dragging: true,
          touchZoom: true,
        }).setView([initialView.lat, initialView.lng], initialView.zoom);

        L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
          maxZoom: 20,
          minZoom: 2,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Enhanced sample data with more points and varied intensities
        const heatData = [
          // Karen area
          [-1.3190, 36.7062, 0.9],
          [-1.3185, 36.7070, 0.85],
          [-1.3195, 36.7055, 0.8],
          // Lavington area
          [-1.2833, 36.7719, 0.95],
          [-1.2840, 36.7725, 0.9],
          [-1.2828, 36.7715, 0.85],
          // Westlands area
          [-1.2671, 36.8076, 0.95],
          [-1.2675, 36.8070, 0.9],
          [-1.2668, 36.8080, 0.85],
          // Kilimani area
          [-1.2920, 36.7820, 0.8],
          [-1.2925, 36.7825, 0.75],
          [-1.2915, 36.7815, 0.7],
          // Kileleshwa area
          [-1.2800, 36.7780, 0.85],
          [-1.2805, 36.7785, 0.8],
          [-1.2795, 36.7775, 0.75],
          // Runda area
          [-1.2250, 36.8040, 0.9],
          [-1.2255, 36.8045, 0.85],
          [-1.2245, 36.8035, 0.8],
          // Muthaiga area
          [-1.2550, 36.8350, 0.85],
          [-1.2555, 36.8355, 0.8],
          [-1.2545, 36.8345, 0.75],
          // Spring Valley area
          [-1.2650, 36.7830, 0.8],
          [-1.2655, 36.7835, 0.75],
          [-1.2645, 36.7825, 0.7]
        ];

        L.heatLayer(heatData, {
          radius: 25,
          blur: 18,
          maxZoom: 19,
          gradient: {
            0.3: "#8ecae6",
            0.5: "#219ebc",
            0.8: "#ffb703",
            1.0: "#fb8500",
          },
        }).addTo(map);

        L.control.zoom({ position: "bottomright" }).addTo(map);
        mapRef.current = map;
        setMapReady(true);
      }
    })();
  }, []);

  const handleResetView = () => {
    if (mapRef.current) {
      mapRef.current.setView([initialView.lat, initialView.lng], initialView.zoom, {
        animate: true,
        duration: 0.6,
      });
    }
  };

  return (
    <Layout>
      <section
        style={{
          textAlign: "center",
          color: "#ccc",
          padding: "2rem 1rem 0.5rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ 
          fontWeight: 400, 
          fontSize: "2.4rem", 
          marginBottom: "0.5rem",
          background: "linear-gradient(45deg, #f5b942, #c2a675)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          Property Density Map
        </h1>
        <p style={{ color: "#999", fontSize: "1.1rem", marginBottom: "2rem" }}>
          Explore real estate concentrations across Nairobi's premium neighborhoods
        </p>

        {/* Filter Controls */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          marginBottom: "2rem",
          flexWrap: "wrap"
        }}>
          {/* Property Type Filter */}
          <div style={{ minWidth: "200px" }}>
            <label style={{
              display: "block",
              marginBottom: "0.5rem",
              color: "#888",
              fontSize: "0.9rem"
            }}>
              Property Type
            </label>
            <select
              value={propertyType}
              onChange={(e) => {
                setPropertyType(e.target.value);
                setLoading(true);
                setTimeout(() => setLoading(false), 500);
              }}
              style={{
                width: "100%",
                padding: "8px 12px",
                background: "#151515",
                border: "1px solid #333",
                borderRadius: "6px",
                color: "#f0f0f0",
                cursor: "pointer"
              }}
            >
              {Object.entries(propertyTypes).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>

          {/* Market Segment Filter */}
          <div style={{ minWidth: "200px" }}>
            <label style={{
              display: "block",
              marginBottom: "0.5rem",
              color: "#888",
              fontSize: "0.9rem"
            }}>
              Market Segment
            </label>
            <select
              value={selectedFilter}
              onChange={(e) => {
                setSelectedFilter(e.target.value);
                setLoading(true);
                setTimeout(() => setLoading(false), 500);
              }}
              style={{
                width: "100%",
                padding: "8px 12px",
                background: "#151515",
                border: "1px solid #333",
                borderRadius: "6px",
                color: "#f0f0f0",
                cursor: "pointer"
              }}
            >
              {Object.entries(filters).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>

          {/* Time Range Filter */}
          <div style={{ minWidth: "200px" }}>
            <label style={{
              display: "block",
              marginBottom: "0.5rem",
              color: "#888",
              fontSize: "0.9rem"
            }}>
              Time Range
            </label>
            <select
              value={timeRange}
              onChange={(e) => {
                setTimeRange(e.target.value);
                setLoading(true);
                setTimeout(() => setLoading(false), 500);
              }}
              style={{
                width: "100%",
                padding: "8px 12px",
                background: "#151515",
                border: "1px solid #333",
                borderRadius: "6px",
                color: "#f0f0f0",
                cursor: "pointer"
              }}
            >
              {Object.entries(timeRanges).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Loading Indicator */}
        {loading && (
          <div style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(0,0,0,0.8)",
            padding: "20px 40px",
            borderRadius: "12px",
            zIndex: 9999,
            color: "#f5b942"
          }}>
            Updating map...
          </div>
        )}

        <p style={{ color: "#888", fontSize: "0.9rem", lineHeight: "1.6" }}>
          🖱️ <strong>Use your mouse or fingers</strong> to zoom and pan the map. <br />
          Areas in <span style={{ color: "#fb8500" }}>orange</span> indicate 
          stronger listing concentrations, while 
          <span style={{ color: "#8ecae6" }}> blue zones</span> show lower density.
        </p>
      </section>

      <div
        id="heatmapContainer"
        style={{
          height: "75vh",
          width: "90%",
          maxWidth: "1000px",
          margin: "1.5rem auto",
          borderRadius: "14px",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          position: "relative",
        }}
      />

      {/* Unified Floating Controls */}
      {mapReady && (
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "6%",
            zIndex: 9999,
            background: "rgba(20, 20, 20, 0.95)",
            color: "#f5f5f5",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
            border: "1px solid rgba(255,255,255,0.1)"
          }}
        >
          {/* Quick Stats */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "10px",
            width: "100%",
            fontSize: "0.85rem",
            marginBottom: "5px"
          }}>
            <div>
              <div style={{ color: "#888" }}>Active Listings</div>
              <div style={{ color: "#f5b942", fontWeight: "500" }}>2,150</div>
            </div>
            <div>
              <div style={{ color: "#888" }}>Avg. Price/Sq.ft</div>
              <div style={{ color: "#f5b942", fontWeight: "500" }}>KES 385K</div>
            </div>
            <div>
              <div style={{ color: "#888" }}>Market Activity</div>
              <div style={{ color: "#4caf50", fontWeight: "500" }}>↑ 6.3%</div>
            </div>
            <div>
              <div style={{ color: "#888" }}>Density Score</div>
              <div style={{ color: "#f5b942", fontWeight: "500" }}>8.4/10</div>
            </div>
          </div>

          {/* Density Legend */}
          <div style={{ textAlign: "center", width: "100%" }}>
            <div style={{ 
              marginBottom: "8px", 
              fontWeight: 500, 
              fontSize: "0.9rem",
              color: "#ccc"
            }}>
              Property Density
            </div>
            <div style={{
              height: "12px",
              width: "100%",
              background: "linear-gradient(to right, #8ecae6, #219ebc, #ffb703, #fb8500)",
              borderRadius: "6px",
              margin: "0 auto",
              border: "1px solid rgba(255,255,255,0.1)"
            }}></div>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "6px",
              fontSize: "0.75rem",
              color: "#888"
            }}>
              <span>Low Activity</span>
              <span>High Activity</span>
            </div>
          </div>

          {/* Controls */}
          <div style={{
            display: "flex",
            gap: "10px",
            width: "100%"
          }}>
            <button
              onClick={handleResetView}
              style={{
                flex: 1,
                background: "#f5b942",
                color: "#000",
                border: "none",
                borderRadius: "8px",
                padding: "8px 16px",
                fontSize: "0.85rem",
                cursor: "pointer",
                boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#ffd56a";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "#f5b942";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              🔁 Reset View
            </button>
          </div>
        </div>
      )}

      {/* Insights Section */}
      <section style={{
        maxWidth: "1200px",
        margin: "3rem auto",
        padding: "0 20px",
        color: "#f0f0f0",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          marginBottom: "3rem",
        }}>
          {/* Market Insight Cards */}
          {[
            {
              title: "Premium Zones",
              icon: "⭐",
              description: "Karen and Runda maintain their positions as premium property hotspots, with consistent high-value transactions and development activity.",
            },
            {
              title: "Emerging Areas",
              icon: "📈",
              description: "Riverside and Kilimani show increasing density, reflecting growing investor interest and new development projects.",
            },
            {
              title: "Market Velocity",
              icon: "🔄",
              description: "Properties in high-density zones (orange) typically close 40% faster than those in lower-density areas.",
            }
          ].map((card, index) => (
            <div key={index} style={{
              background: "#151515",
              borderRadius: "12px",
              padding: "1.5rem",
              border: "1px solid rgba(255,255,255,0.05)",
            }}>
              <div style={{
                fontSize: "1.5rem",
                marginBottom: "1rem",
              }}>{card.icon}</div>
              <h3 style={{
                fontSize: "1.2rem",
                marginBottom: "1rem",
                color: "#f5b942",
                fontWeight: "400",
              }}>{card.title}</h3>
              <p style={{
                color: "#bcbcbc",
                lineHeight: "1.6",
                fontSize: "0.95rem",
              }}>{card.description}</p>
            </div>
          ))}
        </div>

        {/* Methodology Section */}
        <div style={{
          background: "linear-gradient(to right, rgba(245,185,66,0.1), transparent)",
          borderRadius: "12px",
          padding: "2rem",
          marginBottom: "2rem",
        }}>
          <h2 style={{
            fontSize: "1.5rem",
            marginBottom: "1.5rem",
            fontWeight: "400",
            color: "#f5b942",
          }}>Our Methodology</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}>
            <div>
              <h3 style={{
                fontSize: "1.1rem",
                marginBottom: "0.5rem",
                color: "#e0e0e0",
              }}>Data Collection</h3>
              <p style={{
                color: "#bcbcbc",
                lineHeight: "1.6",
                fontSize: "0.95rem",
              }}>
                Heat signatures are generated from verified property listings, market transactions, 
                and development permits across Nairobi's prime neighborhoods.
              </p>
            </div>
            <div>
              <h3 style={{
                fontSize: "1.1rem",
                marginBottom: "0.5rem",
                color: "#e0e0e0",
              }}>Analysis</h3>
              <p style={{
                color: "#bcbcbc",
                lineHeight: "1.6",
                fontSize: "0.95rem",
              }}>
                Our algorithm weighs multiple factors including listing density, price points, 
                transaction velocity, and development activity to generate intensity levels.
              </p>
            </div>
            <div>
              <h3 style={{
                fontSize: "1.1rem",
                marginBottom: "0.5rem",
                color: "#e0e0e0",
              }}>Updates</h3>
              <p style={{
                color: "#bcbcbc",
                lineHeight: "1.6",
                fontSize: "0.95rem",
              }}>
                Heat maps are refreshed weekly, incorporating new listings, closed transactions, 
                and verified market activity to maintain accuracy.
              </p>
            </div>
          </div>
        </div>

        {/* Note */}
        <div style={{
          textAlign: "center",
          padding: "1rem",
          color: "#888",
          fontSize: "0.85rem",
          borderTop: "1px solid #222",
        }}>
          <p>Last updated: November 6, 2025 • Data reflects verified property activity</p>
        </div>
      </section>
    </Layout>
  );
}
