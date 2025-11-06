import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "#0e0e0e",
          color: "#f0f0f0",
          padding: "100px 20px 60px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background pattern */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "radial-gradient(circle at 10% 20%, rgba(245,185,66,0.03) 0%, transparent 40%)",
          zIndex: 1,
        }} />

        <div style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}>
          <h1
            style={{
              fontSize: "2.4rem",
              fontWeight: "400",
              marginBottom: "1.5rem",
              background: "linear-gradient(45deg, #f5b942, #c2a675)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
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
            Where data meets design in real estate. The Registry combines market analytics 
            with curated presentation to redefine how premium properties are discovered 
            and showcased in Kenya's luxury market.
          </p>
        </div>
      </section>

      {/* Vision Grid */}
      <section style={{
        backgroundColor: "#0e0e0e",
        padding: "60px 20px",
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
        }}>
          {[
            {
              title: "Data-Driven Insights",
              description: "Every property is analyzed through our proprietary algorithm, considering location metrics, architectural significance, and market positioning.",
              icon: "📊"
            },
            {
              title: "Curated Excellence",
              description: "We maintain the highest standards in real estate presentation, featuring only properties that meet our strict verification criteria.",
              icon: "✓"
            },
            {
              title: "Market Intelligence",
              description: "Our platform leverages real-time analytics and historical data to provide accurate valuations and market trends.",
              icon: "💡"
            }
          ].map((item, index) => (
            <div key={index} style={{
              backgroundColor: "#151515",
              padding: "2rem",
              borderRadius: "12px",
              textAlign: "left",
              border: "1px solid rgba(255,255,255,0.05)",
            }}>
              <span style={{ fontSize: "2rem", marginBottom: "1rem", display: "block" }}>{item.icon}</span>
              <h3 style={{ 
                color: "#f5b942",
                fontSize: "1.4rem",
                marginBottom: "1rem",
                fontWeight: "400"
              }}>{item.title}</h3>
              <p style={{
                color: "#bcbcbc",
                lineHeight: "1.6",
                fontSize: "1rem"
              }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Analytics Image Section */}
      <section style={{
        backgroundColor: "#0e0e0e",
        padding: "60px 20px",
        textAlign: "center",
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
        }}>
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80"
            alt="Real estate analytics dashboard"
            style={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
            }}
          />
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(to bottom, transparent, rgba(14,14,14,0.9) 50%, #0e0e0e)",
            padding: "80px 20px 20px",
            borderRadius: "0 0 12px 12px",
          }}>
            <h2 style={{
              fontSize: "1.8rem",
              fontWeight: "400",
              marginBottom: "1rem",
              color: "#fff",
            }}>Our Approach</h2>
            <p style={{
              color: "#bcbcbc",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}>
              By combining advanced market analytics with architectural expertise, 
              we provide an unmatched platform for Kenya's most distinguished properties. 
              Our methodology ensures that each listing represents the pinnacle of both 
              value and design excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{
        backgroundColor: "#151515",
        padding: "80px 20px",
        textAlign: "center",
        color: "#f0f0f0",
      }}>
        <h2 style={{
          fontSize: "1.8rem",
          fontWeight: "400",
          marginBottom: "1rem",
        }}>
          Join The Registry
        </h2>
        <p style={{
          color: "#bcbcbc",
          maxWidth: "700px",
          margin: "0 auto 2rem auto",
          fontSize: "1.05rem",
          lineHeight: "1.7",
        }}>
          For property submissions that meet our criteria, we offer a comprehensive 
          analysis and presentation package. Connect with us to explore featuring 
          your property on The Registry.
        </p>

        <a
          href="mailto:submissions@theregistry.co"
          style={{
            display: "inline-block",
            background: "linear-gradient(45deg, #f5b942, #c2a675)",
            color: "#0e0e0e",
            padding: "12px 24px",
            borderRadius: "6px",
            fontWeight: "500",
            textDecoration: "none",
            transition: "transform 0.2s ease",
          }}
          onMouseOver={(e) => e.target.style.transform = "translateY(-2px)"}
          onMouseOut={(e) => e.target.style.transform = "translateY(0)"}
        >
          Submit a Property
        </a>

        <p style={{ 
          color: "#888", 
          fontSize: "0.9rem", 
          marginTop: "1.5rem" 
        }}>
          Contact us: <b>submissions@theregistry.co</b>
        </p>
      </section>
    </Layout>
  );
}
