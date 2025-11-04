export default function FeatureTeaser() {
  return (
    <section
      style={{
        backgroundColor: "#151515",
        padding: "80px 20px",
        textAlign: "center",
        color: "#f0f0f0",
        marginTop: "80px",
      }}
    >
      <h2
        style={{
          fontSize: "1.8rem",
          fontWeight: "400",
          marginBottom: "1rem",
        }}
      >
        Get Featured on The Registry
      </h2>
      <p
        style={{
          color: "#bcbcbc",
          maxWidth: "700px",
          margin: "0 auto 2rem auto",
          fontSize: "1.05rem",
          lineHeight: "1.7",
        }}
      >
        We collaborate with architects, developers, and homeowners who share our
        belief that presentation and trust go hand in hand. Submit your property
        or reach out for a potential feature.
      </p>

      <a
        href="mailto:features@theregistry.co"
        style={{
          display: "inline-block",
          backgroundColor: "#f0f0f0",
          color: "#0e0e0e",
          padding: "12px 24px",
          borderRadius: "6px",
          fontWeight: "500",
          textDecoration: "none",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#ddd")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
      >
        Submit a Home
      </a>

      <p style={{ color: "#888", fontSize: "0.9rem", marginTop: "1.5rem" }}>
        Or write to us at <b>features@theregistry.co</b>
      </p>
    </section>
  );
}
