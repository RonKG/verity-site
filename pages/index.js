import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "90vh",
          color: "#f0f0f0",
          textAlign: "center",
          padding: "40px 20px",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
          alt="Elegant modern home exterior"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.6,
            zIndex: 0,
          }}
        />

        {/* Dark overlay for contrast */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
            zIndex: 1,
          }}
        />

        {/* Main text content */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "400",
              marginBottom: "1rem",
              letterSpacing: "0.5px",
            }}
          >
            The Registry
          </h1>

          <p
            style={{
              fontSize: "1.25rem",
              color: "#e0e0e0",
              maxWidth: "600px",
              lineHeight: "1.6",
            }}
          >
            Curated. Verified. Data-driven.
          </p>

          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "1.05rem",
              color: "#bcbcbc",
            }}
          >
            Because finding a home should feel inspiring — and certain.
          </p>
        </div>
      </section>

      {/* Optional highlight image section */}
      <section
        style={{
          backgroundColor: "#0e0e0e",
          padding: "60px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8&ixlib=rb-4.1.0&q=60&w=3000"
          alt="Architectural interior"
          style={{
            width: "90%",
            maxWidth: "1000px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
            marginBottom: "1rem",
          }}
        />
        <p style={{ color: "#9a9a9a", fontSize: "0.9rem" }}>
          A glimpse into the detail, story, and truth behind every home.
        </p>
      </section>
    </Layout>
  );
}
