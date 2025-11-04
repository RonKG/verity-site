export default function Layout({ children }) {
  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        color: "#f0f0f0",
        backgroundColor: "#0e0e0e",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <header
        style={{
          padding: "20px 40px",
          borderBottom: "1px solid #1e1e1e",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#0e0e0e",
        }}
      >
        <h2 style={{ margin: 0, fontWeight: "400", color: "#f5f5f5" }}>
          The Registry
        </h2>
        <nav>
          <a href="/" style={linkStyle}>Home</a>
          <a href="/listings" style={linkStyle}>Listings</a>
          <a href="/insights" style={linkStyle}>Insights</a>
          <a href="/about" style={linkStyle}>About</a>
        </nav>
      </header>

      <main style={{ flexGrow: 1 }}>{children}</main>

      <footer
        style={{
          textAlign: "center",
          borderTop: "1px solid #1e1e1e",
          padding: "25px 20px",
          color: "#9a9a9a",
          fontSize: "0.9rem",
          backgroundColor: "#0e0e0e",
        }}
      >
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} The Registry — Curated. Verified. Data-driven.
        </p>
        <p style={{ marginTop: "4px", fontSize: "0.85rem", color: "#7a7a7a" }}>
          Built on insight, powered by design.
        </p>
      </footer>
    </div>
  );
}

const linkStyle = {
  marginRight: 20,
  color: "#cfcfcf",
  textDecoration: "none",
  fontSize: "0.95rem",
};
