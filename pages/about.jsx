import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <section
        style={{
          backgroundColor: "#0e0e0e",
          color: "#f0f0f0",
          padding: "100px 20px 60px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2.4rem",
            fontWeight: "400",
            marginBottom: "1.5rem",
          }}
        >
          About The Registry
        </h1>
        <p
          style={{
            color: "#d6d6d6",
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "1.1rem",
            lineHeight: "1.7",
          }}
        >
          The Registry was founded on a simple belief — that homes deserve to be
          presented with integrity, context, and beauty. We combine verified
          data with cinematic presentation to create a platform that values both
          truth and design.
        </p>
      </section>

      {/* Visual divider */}
      <div
        style={{
          height: "2px",
          background: "linear-gradient(to right, #1a1a1a, #444, #1a1a1a)",
          margin: "60px auto",
          width: "80%",
        }}
      />

      {/* Mission Section */}
      <section
        style={{
          backgroundColor: "#0e0e0e",
          color: "#f0f0f0",
          padding: "40px 20px 80px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: "400",
            marginBottom: "1.5rem",
          }}
        >
          Our Philosophy
        </h2>
        <p
          style={{
            color: "#bcbcbc",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          We curate properties not just for what they are, but for what they
          represent — trust, story, and authenticity. Every home listed on The
          Registry undergoes review for design, quality, and verification.
          Because presentation matters, but truth matters more.
        </p>
        <img
          src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1400&q=80"
          alt="Modern architecture Kenya"
          style={{
            width: "90%",
            maxWidth: "1000px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
            marginTop: "3rem",
          }}
        />
      </section>

      {/* Contact / Feature Teaser */}
      <section
        style={{
          backgroundColor: "#151515",
          padding: "80px 20px",
          textAlign: "center",
          color: "#f0f0f0",
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
          We partner with architects, developers, and homeowners who share our
          belief that presentation and trust go hand in hand. Submit your
          property or reach out for a collaboration.
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
    </Layout>
  );
}
