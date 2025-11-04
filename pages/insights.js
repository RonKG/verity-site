import Layout from "../components/Layout";

export default function Insights() {
  return (
    <Layout>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "100vh",
          backgroundColor: "#0e0e0e",
          color: "#f0f0f0",
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        {/* Title */}
        <div style={{ marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: "400", marginBottom: "0.5rem" }}>
            Market Insights
          </h1>
          <p style={{ color: "#d6d6d6", fontSize: "1.05rem", margin: 0 }}>
            Data that tells the real story of Kenya’s evolving property market.
          </p>
        </div>

        {/* Content Card */}
        <div
          style={{
            maxWidth: "800px",
            backgroundColor: "#151515",
            border: "1px solid #222",
            borderRadius: "12px",
            padding: "2.5rem",
            boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
            textAlign: "left",
            color: "#ddd",
            lineHeight: "1.8",
          }}
        >
          <h3 style={{ marginBottom: "1rem", color: "#f0f0f0", fontWeight: "500" }}>
            Nairobi Prime Market Snapshot (Q4 2025)
          </h3>
          <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.5rem" }}>
            <li>Average home price: <b>KSh 385 million</b></li>
            <li>Quarterly growth rate: <b>+4.8%</b></li>
            <li>Fastest-moving market: <b>Riverside</b></li>
            <li>Average listing period: <b>42 days</b></li>
            <li>New developments: <b>+7% year-over-year</b></li>
          </ul>

          <p style={{ color: "#aaa" }}>
            These figures represent early signals from our proprietary tracking of verified listings.
            As The Registry expands, we’ll introduce interactive dashboards to visualize price
            evolution, demand trends, and neighborhood liquidity.
          </p>
        </div>

        {/* Image Section */}
        <div style={{ marginTop: "4rem", maxWidth: "900px", width: "100%" }}>
          <img
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1200&q=80"
            alt="Market analytics dashboard"
            style={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
            }}
          />
          <p style={{ marginTop: "0.75rem", color: "#777", fontSize: "0.9rem" }}>
            *Sample analytics visualization — demo only*
          </p>
        </div>
      </section>
    </Layout>
  );
}
