import Layout from "../components/Layout";

export default function Terms() {
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
          Terms of Service
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
              1. Agreement to Terms
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              By accessing or using The Registry platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this platform.
            </p>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 style={{
              fontSize: "1.5rem",
              marginBottom: "1rem",
              color: "#f0f0f0"
            }}>
              2. Use License
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              Permission is granted to temporarily access the materials (information or software) on The Registry's platform for personal, non-commercial transitory viewing only.
            </p>
          </section>

          {/* Add more sections as needed */}
        </div>
      </div>
    </Layout>
  );
}