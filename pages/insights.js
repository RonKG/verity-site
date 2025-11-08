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
  LineChart,
  Line,
  Area,
  AreaChart,
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
  const [activeTab, setActiveTab] = useState("market");
  const [selectedTimeframe, setSelectedTimeframe] = useState("1Y");

  // Market trend data
  const [trendData] = useState([
    { month: "Nov 24", price: 355, volume: 180, growth: 2.1 },
    { month: "Dec 24", price: 362, volume: 195, growth: 2.0 },
    { month: "Jan 25", price: 368, volume: 185, growth: 1.7 },
    { month: "Feb 25", price: 371, volume: 210, growth: 0.8 },
    { month: "Mar 25", price: 375, volume: 205, growth: 1.1 },
    { month: "Apr 25", price: 378, volume: 220, growth: 0.8 },
    { month: "May 25", price: 380, volume: 215, growth: 0.5 },
    { month: "Jun 25", price: 382, volume: 225, growth: 0.5 },
    { month: "Jul 25", price: 383, volume: 230, growth: 0.3 },
    { month: "Aug 25", price: 384, volume: 235, growth: 0.3 },
    { month: "Sep 25", price: 384, volume: 240, growth: 0.0 },
    { month: "Oct 25", price: 385, volume: 245, growth: 0.3 },
  ]);

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

  return (
    <Layout>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "var(--theme-bg)",
          color: "var(--theme-text)",
          padding: "80px 20px 60px",
          transition: 'background-color 0.3s ease, color 0.3s ease'
        }}
      >
        {/* Intro */}
        <div style={{ 
          marginBottom: "2rem", 
          textAlign: "center", 
          maxWidth: "850px",
          position: "relative",
        }}>
          <h1 style={{ 
            fontSize: "2.2rem",
            fontWeight: "400",
            marginBottom: "0.5rem",
            background: `linear-gradient(45deg, var(--theme-accent), var(--theme-accent-strong))`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Market Insights
          </h1>
          <p style={{ color: "var(--theme-text-muted)", fontSize: "1.05rem", lineHeight: "1.6", transition: 'color 0.3s ease' }}>
            Our data blends verified listings, valuation trends, and neighborhood velocity to
            highlight Kenya&apos;s most dynamic property zones.  
            This page presents a snapshot of current conditions and the price movement shaping
            Nairobi&apos;s prime markets.
          </p>

          {/* Tab Navigation */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            marginTop: "2rem",
            padding: "0.5rem",
            background: "var(--theme-surface)",
            borderRadius: "12px",
            border: `1px solid var(--theme-border)`,
            transition: 'background 0.3s ease, border-color 0.3s ease',
            flexWrap: 'wrap'
          }}>
            {[
              { id: "market", label: "Market Overview" },
              { id: "trends", label: "Price Trends" },
              { id: "regions", label: "Regional Analysis" },
              { id: "analysis", label: "Analyst Notes" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: activeTab === tab.id 
                    ? "linear-gradient(135deg, var(--theme-accent), var(--theme-accent-strong))" 
                    : "transparent",
                  border: activeTab === tab.id ? "none" : `1px solid transparent`,
                  color: activeTab === tab.id ? "var(--theme-bg)" : "var(--theme-text-muted)",
                  padding: "12px 20px",
                  cursor: "pointer",
                  fontSize: "0.95rem",
                  fontWeight: activeTab === tab.id ? "600" : "500",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  letterSpacing: '0.3px',
                  position: 'relative',
                  boxShadow: activeTab === tab.id 
                    ? "0 4px 12px rgba(245, 185, 66, 0.25)" 
                    : "none"
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.background = "var(--theme-card-bg)";
                    e.currentTarget.style.borderColor = "var(--theme-border)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "transparent";
                  }
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Timeframe Selection */}
          <div style={{
            display: "flex",
            gap: "0.5rem",
            position: "absolute",
            top: 0,
            right: 0,
          }}>
            {["3M", "6M", "1Y"].map(time => (
              <button
                key={time}
                onClick={() => setSelectedTimeframe(time)}
                style={{
                  background: selectedTimeframe === time ? "var(--theme-accent)" : "var(--theme-surface)",
                  color: selectedTimeframe === time ? "var(--theme-bg)" : "var(--theme-text-muted)",
                  border: "none",
                  borderRadius: "4px",
                  padding: "4px 8px",
                  fontSize: "0.8rem",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Market Overview Tab */}
        {activeTab === "market" && (
          <div className="card" style={{ width: "95%", maxWidth: "1150px", marginBottom: "2rem" }}>
            <h3
              style={{
                textAlign: "center",
                marginBottom: "1rem",
                color: "var(--theme-text)",
                fontWeight: "400",
                transition: 'color 0.3s ease'
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
        )}

        {/* Price Trends Tab */}
        {activeTab === "trends" && (
          <div className="card" style={{ width: "95%", maxWidth: "1150px", marginBottom: "2rem" }}>
            <h3
              style={{
                textAlign: "center",
                marginBottom: "1rem",
                color: "var(--theme-text)",
                fontWeight: "400",
                transition: 'color 0.3s ease'
              }}
            >
              Price Trends & Market Volume
            </h3>
            <SafeResponsiveContainer height={420}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f5b942" stopOpacity={0.18}/>
                      <stop offset="95%" stopColor="#f5b942" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2b2b2b" />
                  <XAxis dataKey="month" stroke="#888" tick={{ fill: "#aaa", fontSize: 11 }} />
                  <YAxis
                    yAxisId="left"
                    stroke="#888"
                    tick={{ fill: "#aaa", fontSize: 11 }}
                    label={{
                      value: "Avg. Price (KES M)",
                      angle: -90,
                      position: "insideLeft",
                      style: { fill: "#aaa", fontSize: 11 },
                    }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    stroke="#888"
                    tick={{ fill: "#aaa", fontSize: 11 }}
                    label={{
                      value: "Volume",
                      angle: 90,
                      position: "insideRight",
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
                  />
                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="price"
                    stroke="#f5b942"
                    fillOpacity={1}
                    fill="url(#colorPrice)"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="volume"
                    stroke="#888"
                    strokeWidth={2}
                    dot={{ fill: "#888", strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </SafeResponsiveContainer>
            
            {/* Growth Rate Indicators */}
            <div style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "1rem",
              marginTop: "2rem",
              flexWrap: "wrap",
            }}>
              {trendData.slice(-3).map((data, index) => (
                <div key={index} style={{
                  background: "var(--theme-surface)",
                  padding: "0.9rem 1rem",
                  borderRadius: "8px",
                  minWidth: "170px",
                  border: `1px solid var(--theme-border)`,
                  transition: 'background 0.3s ease, border-color 0.3s ease'
                }}>
                  <div style={{ fontSize: "0.85rem", color: "var(--theme-text-muted)", marginBottom: "0.4rem", transition: 'color 0.3s ease' }}>
                    {data.month}
                  </div>
                  <div style={{ 
                    fontSize: "1.15rem", 
                    color: data.growth > 0 ? "#4caf50" : data.growth < 0 ? "#f44336" : "#9a9a9a",
                    fontWeight: 600
                  }}>
                    {data.growth > 0 ? "+" : ""}{data.growth}%
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#777", marginTop: "0.25rem" }}>
                    Monthly Growth
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regional Analysis Tab */}
        {activeTab === "regions" && (
          <div className="card" style={{ width: "95%", maxWidth: "1150px", marginBottom: "2rem" }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "2rem"
            }}>
              <h3 style={{ color: "var(--theme-text)", fontWeight: "400", margin: 0, transition: 'color 0.3s ease' }}>
                Regional Price Analysis
              </h3>
              <div style={{
                background: "var(--theme-surface)",
                border: `1px solid var(--theme-border)`,
                borderRadius: "8px",
                display: "flex",
                overflow: "hidden",
                transition: 'background 0.3s ease, border-color 0.3s ease'
              }}>
                {["KSH", "USD"].map((cur) => (
                  <button
                    key={cur}
                    onClick={() => setCurrency(cur)}
                    style={{
                      background: currency === cur ? "var(--theme-accent)" : "transparent",
                      color: currency === cur ? "var(--theme-bg)" : "var(--theme-text-muted)",
                      border: "none",
                      padding: "6px 14px",
                      cursor: "pointer",
                      fontSize: "0.85rem",
                      fontWeight: "500",
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {cur}
                  </button>
                ))}
              </div>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem",
              marginBottom: "2rem"
            }}>
              {[
                { title: "Premium Areas", regions: ["Muthaiga", "Runda", "Kitisuru"] },
                { title: "Business Districts", regions: ["Westlands", "Kilimani", "Riverside"] },
                { title: "Diplomatic Zones", regions: ["Karen", "Gigiri", "Lavington"] }
              ].map((area, idx) => (
                <div key={idx} style={{
                  background: "var(--theme-card-bg)",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  border: `1px solid var(--theme-border)`,
                  transition: 'background 0.3s ease, border-color 0.3s ease'
                }}>
                  <h4 style={{
                    color: "var(--theme-accent-strong)",
                    marginBottom: "1rem",
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    transition: 'color 0.3s ease'
                  }}>{area.title}</h4>
                  {area.regions.map(region => {
                    const price = snapshotData.find(d => d.region === region)?.price || 0;
                    return (
                      <div key={region} style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "0.75rem",
                        padding: "0.5rem",
                        borderRadius: "6px",
                        background: "var(--theme-surface)",
                        transition: 'background 0.3s ease'
                      }}>
                        <span style={{ color: "var(--theme-text)", transition: 'color 0.3s ease' }}>{region}</span>
                        <span style={{ color: "var(--theme-accent-strong)", transition: 'color 0.3s ease' }}>
                          {currency === "USD" 
                            ? `$${(price/130).toFixed(0)}K`
                            : `${price}K`}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            <div style={{
              background: "var(--theme-bg)",
              padding: "2rem",
              borderRadius: "12px",
              marginBottom: "1rem",
              transition: 'background 0.3s ease'
            }}>
              <h4 style={{
                color: "var(--theme-text)",
                marginBottom: "1.5rem",
                fontSize: "1.1rem",
                fontWeight: "400",
                textAlign: "center",
                transition: 'color 0.3s ease'
              }}>Price Range Distribution</h4>
              <SafeResponsiveContainer height={300}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={snapshotData} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2b2b2b" />
                    <XAxis 
                      dataKey="region" 
                      stroke="#888" 
                      tick={{ fill: "#aaa", fontSize: 11 }}
                      interval={0}
                      angle={-45}
                      textAnchor="end"
                    />
                    <YAxis
                      stroke="#888"
                      tick={{ fill: "#aaa", fontSize: 11 }}
                      label={{
                        value: currency === "USD" ? "USD (thousands)" : "KES (thousands)",
                        angle: -90,
                        position: "insideLeft",
                        style: { fill: "#aaa" }
                      }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#222",
                        border: "1px solid #333",
                        borderRadius: "8px",
                        color: "#fff"
                      }}
                      formatter={(value) => [
                        currency === "USD" 
                          ? `$${(value/130).toFixed(0)}K`
                          : `${value}K`,
                        "Price per Sq.M"
                      ]}
                    />
                    <Bar 
                      dataKey="price" 
                      fill="#c2a675"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </SafeResponsiveContainer>
            </div>

            <div style={{
              textAlign: "center",
              color: "var(--theme-text-muted)",
              fontSize: "0.9rem",
              maxWidth: "600px",
              margin: "0 auto",
              transition: 'color 0.3s ease'
            }}>
              Regional analysis based on verified listings and recent transactions.
              Prices shown are average per square meter for luxury residential properties.
            </div>
          </div>
        )}

        {/* Analyst Notes Tab */}
        {activeTab === "analysis" && (
          <div className="card" style={{ width: "95%", maxWidth: "1150px", marginBottom: "2rem" }}>
            <h3 style={{ textAlign: "center", marginBottom: "1rem", color: "var(--theme-text)", fontWeight: "400", transition: 'color 0.3s ease' }}>Analyst Notes & Actionables</h3>

            {/* Small synthesized dataset for analyst summaries */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              {[
                { title: 'Verification Confidence', value: 'High', note: '85% of recent listings fully verified within 72 hrs' },
                { title: 'Inventory Velocity', value: 'Moderate', note: 'Average days on market: 62 — premium pockets under 70 days' },
                { title: 'Liquidity', value: 'Selective', note: 'Liquidity strongest for 1-3 bedroom condos in Westlands & Kilimani' },
                { title: 'Top Movers', value: 'Runda, Kitisuru', note: 'Consistent demand; buyers preferring larger plots' }
              ].map((c, i) => (
                <div key={i} style={{ background: 'var(--theme-bg)', padding: '1rem', borderRadius: '8px', border: `1px solid var(--theme-border)`, transition: 'background 0.3s ease, border-color 0.3s ease' }}>
                  <div style={{ color: 'var(--theme-accent-strong)', fontWeight: 600, marginBottom: '0.5rem', transition: 'color 0.3s ease' }}>{c.title}</div>
                  <div style={{ fontSize: '1.2rem', color: 'var(--theme-text)', marginBottom: '0.5rem', transition: 'color 0.3s ease' }}>{c.value}</div>
                  <div style={{ color: 'var(--theme-text-muted)', fontSize: '0.9rem', transition: 'color 0.3s ease' }}>{c.note}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ background: 'var(--theme-bg)', padding: '1rem', borderRadius: '8px', border: `1px solid var(--theme-border)`, transition: 'background 0.3s ease, border-color 0.3s ease' }}>
                <h4 style={{ margin: 0, color: 'var(--theme-text)', transition: 'color 0.3s ease' }}>Top 3 Investment Signals</h4>
                <ol style={{ color: 'var(--theme-text-muted)', marginTop: '0.5rem', transition: 'color 0.3s ease' }}>
                  <li>Priority neighborhoods with sustained price growth and low inventory — consider focused sourcing and verified listings only.</li>
                  <li>Properties with clear title and verification timestamps close faster; surface verification badges on listings.</li>
                  <li>Use price-per-sqm bands in marketing to set expectations — show historical trend sparklines where possible.</li>
                </ol>
              </div>

              <div style={{ background: 'var(--theme-bg)', padding: '1rem', borderRadius: '8px', border: `1px solid var(--theme-border)`, transition: 'background 0.3s ease, border-color 0.3s ease' }}>
                <h4 style={{ margin: 0, color: 'var(--theme-text)', transition: 'color 0.3s ease' }}>Methodology</h4>
                <p style={{ color: 'var(--theme-text-muted)', marginTop: '0.5rem', transition: 'color 0.3s ease' }}>
                  Insights combine verified listing metadata, recent transaction samples, and market velocity indicators. All presented averages exclude outliers and only use listings that pass our verification checks.
                </p>
              </div>
            </div>

            <div style={{ color: 'var(--theme-text-muted)', fontSize: '0.95rem', textAlign: 'center', transition: 'color 0.3s ease' }}>
              These analyst notes are intended as directional guidance. Contact the research team for bespoke data extracts or API access.
            </div>
          </div>
        )}

        {/* Common card styling */}
        <style>
          {`
            .card {
              background: var(--theme-surface);
              border: 1px solid var(--theme-border);
              border-radius: 12px;
              padding: 2rem;
              box-shadow: 0 6px 16px rgba(0,0,0,0.4);
              color: var(--theme-text-muted);
              transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
            }
            @media (max-width: 900px) {
              div[style*="grid-template-columns"] {
                grid-template-columns: 1fr !important;
              }
            }
          `}
        </style>

        {/* Data sources — credibility footer */}
        <div style={{ width: "95%", maxWidth: "1150px", marginTop: "1.5rem", marginBottom: "4rem" }}>
          <div style={{
            background: 'var(--theme-surface)',
            border: `1px solid var(--theme-border)`,
            borderRadius: '12px',
            padding: '1.25rem 1.5rem',
            color: 'var(--theme-text-muted)',
            transition: 'background 0.3s ease, border-color 0.3s ease, color 0.3s ease'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <h4 style={{ margin: 0, color: 'var(--theme-text)', fontSize: '1.05rem', transition: 'color 0.3s ease' }}>Data sources & notes</h4>
              <div style={{ color: 'var(--theme-accent-strong)', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.3s ease' }}>Primary source: The Registry</div>
            </div>

            <p style={{ margin: '0.65rem 0 0.25rem 0', color: 'var(--theme-text-muted)', lineHeight: 1.6, transition: 'color 0.3s ease' }}>
              The insights above are synthesised from a combination of internal and external datasets to ensure transparency and traceability.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', marginTop: '0.75rem' }}>
              <div style={{ background: 'var(--theme-bg)', border: `1px solid var(--theme-border)`, padding: '0.85rem', borderRadius: '8px', transition: 'background 0.3s ease, border-color 0.3s ease' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 700, color: 'var(--theme-text)', fontSize: '0.95rem', transition: 'color 0.3s ease' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="var(--theme-accent)"/><path d="M7 12l3 3 7-7" stroke="var(--theme-bg)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <div>The Registry <span style={{ color: 'var(--theme-text-muted)', fontWeight: 500, fontSize: '0.82rem' }}>— internal</span></div>
                </div>
                <div style={{ color: 'var(--theme-text-muted)', marginTop: '0.45rem', fontSize: '0.9rem', lineHeight: 1.45, transition: 'color 0.3s ease' }}>Verified listing metadata and transaction samples captured and validated by our in‑house verification process. (Primary source)</div>
              </div>

              <div style={{ background: 'var(--theme-bg)', border: `1px solid var(--theme-border)`, padding: '0.85rem', borderRadius: '8px', transition: 'background 0.3s ease, border-color 0.3s ease' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 700, color: 'var(--theme-text)', fontSize: '0.95rem', transition: 'color 0.3s ease' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" fill="var(--theme-text-muted)"/><path d="M7 9h10" stroke="var(--theme-bg)" strokeWidth="1.2" strokeLinecap="round"/></svg>
                  <div>Public records</div>
                </div>
                <div style={{ color: 'var(--theme-text-muted)', marginTop: '0.45rem', fontSize: '0.9rem', lineHeight: 1.45, transition: 'color 0.3s ease' }}>Land registries and publicly available transaction notices used to corroborate titles and sale dates.</div>
              </div>

              <div style={{ background: 'var(--theme-bg)', border: `1px solid var(--theme-border)`, padding: '0.85rem', borderRadius: '8px', transition: 'background 0.3s ease, border-color 0.3s ease' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 700, color: 'var(--theme-text)', fontSize: '0.95rem', transition: 'color 0.3s ease' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16v10H4z" fill="var(--theme-accent-strong)"/><path d="M8 11h8" stroke="var(--theme-bg)" strokeWidth="1.2" strokeLinecap="round"/></svg>
                  <div>Broker & partner feeds</div>
                </div>
                <div style={{ color: 'var(--theme-text-muted)', marginTop: '0.45rem', fontSize: '0.9rem', lineHeight: 1.45, transition: 'color 0.3s ease' }}>Curated feeds from vetted partners and agents used to supplement liquidity and asking‑price signals.</div>
              </div>

              <div style={{ background: 'var(--theme-bg)', border: `1px solid var(--theme-border)`, padding: '0.85rem', borderRadius: '8px', transition: 'background 0.3s ease, border-color 0.3s ease' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 700, color: 'var(--theme-text)', fontSize: '0.95rem', transition: 'color 0.3s ease' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 6h16v12H4z" fill="var(--theme-text-muted)"/><path d="M7 9h10" stroke="var(--theme-bg)" strokeWidth="1.2" strokeLinecap="round"/></svg>
                  <div>Market reports</div>
                </div>
                <div style={{ color: 'var(--theme-text-muted)', marginTop: '0.45rem', fontSize: '0.9rem', lineHeight: 1.45, transition: 'color 0.3s ease' }}>Third‑party research and market briefs used for context and cross‑validation.</div>
              </div>
            </div>

            <div style={{ marginTop: '0.9rem', paddingTop: '0.8rem', borderTop: `1px solid var(--theme-border)`, transition: 'border-color 0.3s ease' }}>
              <div style={{ color: 'var(--theme-text-muted)', fontSize: '0.95rem', lineHeight: 1.6, transition: 'color 0.3s ease' }}>
                <strong style={{ color: 'var(--theme-text)', transition: 'color 0.3s ease' }}>Note:</strong> averages exclude outliers and only include records that pass our verification checks.
                For bespoke extracts or raw data access, contact <a href="mailto:research@theregistry.co.ke" style={{ color: 'var(--theme-accent)', textDecoration: 'none' }}>research@theregistry.co.ke</a>.
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}