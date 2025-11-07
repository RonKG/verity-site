import Layout from "../components/Layout";

export default function Contact() {
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
          Contact Us
        </h1>
        
        <div style={{
          fontSize: "1rem",
          lineHeight: "1.7",
          color: "#d0d0d0"
        }}>
          <p style={{ marginBottom: "2rem" }}>
            We'd love to hear from you. Please fill out the form below or use our direct contact information.
          </p>

          <form style={{ marginBottom: "3rem" }}>
            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "#f0f0f0"
              }}>
                Name
              </label>
              <input
                type="text"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "4px",
                  color: "#f0f0f0",
                  fontSize: "1rem"
                }}
              />
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "#f0f0f0"
              }}>
                Email
              </label>
              <input
                type="email"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "4px",
                  color: "#f0f0f0",
                  fontSize: "1rem"
                }}
              />
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "#f0f0f0"
              }}>
                Message
              </label>
              <textarea
                rows={5}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "4px",
                  color: "#f0f0f0",
                  fontSize: "1rem",
                  resize: "vertical"
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: "#f5b942",
                color: "#000",
                padding: "0.75rem 2rem",
                border: "none",
                borderRadius: "4px",
                fontSize: "1rem",
                cursor: "pointer",
                fontWeight: "500",
                transition: "background-color 0.2s ease"
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#c2a675"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "#f5b942"}
            >
              Send Message
            </button>
          </form>

          <div style={{ marginTop: "4rem" }}>
            <h2 style={{
              fontSize: "1.5rem",
              marginBottom: "1.5rem",
              color: "#f0f0f0",
              fontWeight: "400"
            }}>
              Direct Contact
            </h2>
            <div style={{
              display: "grid",
              gap: "2rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
            }}>
              <div>
                <h3 style={{
                  fontSize: "1.1rem",
                  marginBottom: "0.75rem",
                  color: "#f0f0f0",
                  fontWeight: "400"
                }}>
                  Location
                </h3>
                <p style={{ color: "#d0d0d0" }}>
                  Nairobi, Kenya
                </p>
              </div>
              <div>
                <h3 style={{
                  fontSize: "1.1rem",
                  marginBottom: "0.75rem",
                  color: "#f0f0f0",
                  fontWeight: "400"
                }}>
                  Email
                </h3>
                <p style={{ color: "#d0d0d0" }}>
                  info@theregistry.co.ke
                </p>
              </div>
              <div>
                <h3 style={{
                  fontSize: "1.1rem",
                  marginBottom: "0.75rem",
                  color: "#f0f0f0",
                  fontWeight: "400"
                }}>
                  Phone
                </h3>
                <p style={{ color: "#d0d0d0" }}>
                  +254 (0) 700 000 000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}