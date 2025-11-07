import Layout from "../components/Layout";

export default function Privacy() {
  return (
    <Layout>
      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "60px 20px",
        color: "#f0f0f0"
      }}>
        <h1 style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
          fontWeight: "400"
        }}>
          Privacy Policy
        </h1>
        
        <div style={{
          fontSize: "1rem",
          lineHeight: "1.7",
          color: "#d0d0d0"
        }}>
          <p style={{ marginBottom: "1.5rem" }}>
            Last updated: November 7, 2025
          </p>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 style={{
              fontSize: "1.5rem",
              marginBottom: "1rem",
              color: "#f0f0f0"
            }}>
              1. Information We Collect
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              The Registry collects information that you provide directly to us when using our platform. This may include personal information such as your name, email address, phone number, and property preferences.
            </p>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 style={{
              fontSize: "1.5rem",
              marginBottom: "1rem",
              color: "#f0f0f0"
            }}>
              2. How We Use Your Information
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to personalize your experience with The Registry.
            </p>
          </section>

          {/* Add more sections as needed */}
        </div>
      </div>
    </Layout>
  );
}