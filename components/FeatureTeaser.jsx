export default function FeatureTeaser() {
  return (
    <section
      style={{
        backgroundColor: "var(--theme-surface)",
        padding: "80px 20px",
        textAlign: "center",
        color: "var(--theme-text)",
        marginTop: "80px",
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}
    >
      <h2
        style={{
          fontSize: "1.8rem",
          fontWeight: "400",
          marginBottom: "1rem",
          transition: 'color 0.3s ease'
        }}
      >
        Get Featured on The Registry
      </h2>
      <p
        style={{
          color: "var(--theme-text-muted)",
          maxWidth: "700px",
          margin: "0 auto 2rem auto",
          fontSize: "1.05rem",
          lineHeight: "1.7",
          transition: 'color 0.3s ease'
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
          backgroundColor: "var(--theme-text)",
          color: "var(--theme-bg)",
          padding: "12px 24px",
          borderRadius: "6px",
          fontWeight: "500",
          textDecoration: "none",
          transition: "background-color 0.3s ease, color 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "var(--theme-text-muted)";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "var(--theme-text)";
        }}
      >
        Submit a Home
      </a>

      <p style={{ 
        color: "var(--theme-text-muted)", 
        fontSize: "0.9rem", 
        marginTop: "1.5rem",
        transition: 'color 0.3s ease'
      }}>
        Or write to us at <b>features@theregistry.co</b>
      </p>
    </section>
  );
}
