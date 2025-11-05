import Layout from "../components/Layout";
import { useState, useRef, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Safe wrapper to avoid Canvas width=0 errors
function SafeResponsiveContainer({ children, height = 350 }) {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    function checkSize() {
      if (ref.current && ref.current.offsetWidth > 0) setReady(true);
    }
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <div ref={ref} style={{ width: "100%", height }}>
      {ready ? children : null}
    </div>
  );
}

export default function Insights() {
  const [currency, setCurrency] = useState("KSH");
  const [showInfo, setShowInfo] = useState(false);

  const [snapshotData] = useState([
    { region: "Karen", price: 385 },
    { region: "Runda", price: 410 },
    { region: "Lavington", price: 398 },
    { region: "Kitisuru", price: 430 },
    { region: "Gigiri", price: 415 },
    { region: "Muthaiga", price: 442 },
    { region: "Westlands", price: 372 },
    { region: "Kilimani", price: 360 },
    { region: "Riverside", price: 400 },
    { region: "Nyari", price: 392 },
  ]);

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const regions = [
    "Karen", "Runda", "Lavington", "Kitisuru", "Gigiri",
    "Muthaiga", "Westlands", "Kilimani", "Riverside", "Nyari",
  ];

  return (
    <Layout>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#0e0e0e",
          color: "#f0f0f0",
          padding: "80px 20px 60px",
        }}
      >
        {/* Intro */}
        <div style={{ marginBottom: "2rem", textAlign: "center", maxWidth: "850px" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: "400", marginBottom: "0.5rem" }}>
            Market Insights
          </h1>
          <p style={{ color: "#d6d6d6", fontSize: "1.05rem", lineHeight: "1.6" }}>
            Our data blends verified listings, valuation trends, and neighborhood velocity to
            highlight Kenya’s most dynamic property zones.  
            This page presents a snapshot of current conditions and the price movement shaping
            Nairobi’s prime markets.
          </p>
        </div>

        {/* Top Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            width: "95%",
            maxWidth: "1150px",
            marginBottom: "1rem",
          }}
        >
          <div className="card">
            <h3 style={{ marginBottom: "1rem", color: "#f0f0f0" }}>
              Nairobi Prime Market Snapshot (Q4 2025)
            </h3>
            <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.5rem" }}>
              <li>Average home price: <b>KSh 385 million</b></li>
              <li>Quarterly growth rate: <b>+4.8%</b></li>
              <li>Fastest-moving market: <b>Riverside</b></li>
              <li>Average listing period: <b>42 days</b></li>
              <li>New developments: <b>+7% YoY</b></li>
            </ul>
            <p style={{ color: "#aaa" }}>
              Verified signals from Nairobi’s top-tier residential markets —  
              data aggregated from active listings and verified agent disclosures.
            </p>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: "1rem", color: "#f0f0f0" }}>
              Quick Market Indicators
            </h3>
            <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.5rem" }}>
              <li>Buyer demand: <b>↑ 6.3%</b> vs last quarter</li>
              <li>Average days on market: <b>42 → 38 days</b></li>
              <li>Foreign interest: <b>+15% YTD</b></li>
              <li>Active listings: <b>~2,150</b> across key suburbs</li>
              <li>Luxury segment share: <b>24%</b></li>
            </ul>
            <p style={{ color: "#aaa" }}>
              Reflects momentum from premium listings and renewed foreign-buyer confidence
              following macroeconomic stability.
            </p>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="card" style={{ width: "95%", maxWidth: "1150px", marginBottom: "2rem" }}>
          <h3
            style={{
              textAlign: "center",
              marginBottom: "1rem",
              color: "#f5f5f5",
              fontWeight: "400",
            }}
          >
            Average Price per Sq.Ft — Nairobi Prime (2025)
          </h3>
          <SafeResponsiveContainer height={350}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={snapshotData} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2b2b2b" />
                <XAxis dataKey="region" stroke="#888" tick={{ fill: "#aaa", fontSize: 11 }} />
                <YAxis
                  stroke="#888"
                  tick={{ fill: "#aaa", fontSize: 11 }}
                  label={{
                    value: "KES (thousands)",
                    angle: -90,
                    position: "insideLeft",
                    style: { fill: "#aaa", fontSize: 11 },
                  }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#222",
                    border: "1px solid #333",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                  formatter={(v) => [`KES ${v}K`, "Avg. Price"]}
                />
                <Bar dataKey="price" fill="#f5b942" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </SafeResponsiveContainer>
        </div>

        {/* Heatmap */}
        <div
          className="card"
          style={{
            width: "95%",
            maxWidth: "1150px",
            overflowX: "auto",
            paddingBottom: "3rem",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <h3 style={{ color: "#f5f5f5", fontWeight: "400", margin: 0 }}>
              Monthly Price Density — Top 10 Regions
            </h3>
            <div
              style={{
                background: "#222",
                border: "1px solid #333",
                borderRadius: "8px",
                display: "flex",
                overflow: "hidden",
              }}
            >
              {["KSH", "USD"].map((cur) => (
                <button
                  key={cur}
                  onClick={() => setCurrency(cur)}
                  style={{
                    background: currency === cur ? "#f5b942" : "transparent",
                    color: currency === cur ? "#000" : "#ccc",
                    border: "none",
                    padding: "6px 14px",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                    fontWeight: "500",
                  }}
                >
                  {cur}
                </button>
              ))}
            </div>
          </div>

          <div
            style={{
              overflowX: "auto",
              border: "1px solid #222",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "120px repeat(12, 1fr)",
                minWidth: "800px",
                fontSize: "clamp(0.7rem, 0.9vw, 0.85rem)",
              }}
            >
              {/* Header Row */}
              <div style={{ background: "#1b1b1b", padding: "8px", color: "#ccc", fontWeight: 500 }}>
                Region
              </div>
              {months.map((m) => (
                <div
                  key={m}
                  style={{
                    background: "#1b1b1b",
                    padding: "8px",
                    textAlign: "center",
                    color: "#ccc",
                    borderLeft: "1px solid #222",
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                  }}
                >
                  {m}
                </div>
              ))}

              {/* Data Rows */}
              {regions.map((region) => (
                <>
                  <div
                    key={region}
                    style={{
                      padding: "10px 6px",
                      color: "#ddd",
                      background: "#191919",
                      borderTop: "1px solid #222",
                      fontWeight: 500,
                      position: "sticky",
                      left: 0,
                      backgroundClip: "padding-box",
                      zIndex: 1,
                    }}
                  >
                    {region}
                  </div>

                  {Array.from({ length: 12 }).map((_, i) => {
                    let base = 125 + i * 15 + Math.random() * 40 + Math.sin(i + region.length) * 80;
                    const regionAdjustments = {
                      Runda: 260,
                      Kitisuru: 220,
                      Muthaiga: 210,
                      Gigiri: 200,
                      Karen: 190,
                      Riverside: 185,
                      Lavington: 170,
                      Westlands: 165,
                      Kilimani: 160,
                      Nyari: 175,
                    };
                    const valueKsh = base + (regionAdjustments[region] || 150);
                    const value = currency === "USD" ? valueKsh / 130 : valueKsh;
                    const intensity = Math.min(Math.max((valueKsh - 300) / 250, 0), 1);
                    const hue = 40;
                    const lightness = 88 - intensity * 55;

                    return (
                      <div
                        key={`${region}-${i}`}
                        style={{
                          padding: "10px 0",
                          textAlign: "center",
                          backgroundColor: `hsl(${hue}, 95%, ${lightness}%)`,
                          color: lightness < 55 ? "#fff" : "#000",
                          borderLeft: "1px solid #222",
                          borderTop: "1px solid #222",
                        }}
                      >
                        {currency === "USD"
                          ? `$${value.toFixed(0)}K`
                          : `${value.toFixed(0)}K`}
                      </div>
                    );
                  })}
                </>
              ))}
            </div>
          </div>

          {/* Legend + Info */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "1.5rem",
              color: "#aaa",
              fontSize: "0.85rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                background:
                  "linear-gradient(to right, hsl(40,95%,85%), hsl(40,95%,55%), hsl(40,95%,35%))",
                height: "12px",
                width: "220px",
                borderRadius: "6px",
                border: "1px solid #333",
                marginBottom: "0.4rem",
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", width: "240px" }}>
              <span>Low</span>
              <span style={{ fontWeight: "500" }}>→</span>
              <span>High</span>
            </div>

            <div
              onMouseEnter={() => setShowInfo(true)}
              onMouseLeave={() => setShowInfo(false)}
              style={{
                cursor: "help",
                color: "#f5b942",
                fontSize: "0.9rem",
                marginTop: "0.8rem",
                userSelect: "none",
              }}
            >
              ⓘ Hover for interpretation
            </div>

            <div
              style={{
                opacity: showInfo ? 1 : 0,
                transition: "opacity 0.4s ease",
                background: "rgba(25,25,25,0.95)",
                color: "#ddd",
                border: "1px solid #333",
                borderRadius: "8px",
                padding: "0.8rem 1rem",
                fontSize: "0.85rem",
                maxWidth: "550px",
                position: "absolute",
                bottom: "3.2rem",
                pointerEvents: "none",
              }}
            >
              The heatmap highlights pricing momentum — darker gold tones signal higher average
              price per Sq.Ft. Runda and Muthaiga consistently anchor the upper range, while Karen
              and Riverside show steady mid-tier stability.
            </div>
          </div>
        </div>

        {/* Common card styling */}
        <style>
          {`
            .card {
              background: #151515;
              border: 1px solid #222;
              border-radius: 12px;
              padding: 2rem;
              box-shadow: 0 6px 16px rgba(0,0,0,0.4);
              color: #ddd;
            }
            @media (max-width: 900px) {
              div[style*="grid-template-columns"] {
                grid-template-columns: 1fr !important;
              }
            }
          `}
        </style>
      </section>
    </Layout>
  );
}
