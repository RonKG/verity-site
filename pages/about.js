import Layout from "../components/Layout";
import OptimizedImage from "../components/OptimizedImage";

export default function About() {
  return (
    <Layout>
      {/* Hero Section - personal */}
      <section
        style={{
          backgroundColor: "var(--theme-bg)",
          color: "var(--theme-text)",
          padding: "80px 20px 40px 20px",
          position: "relative",
          overflow: "hidden",
          transition: 'background-color 0.3s ease, color 0.3s ease'
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: 'grid', gridTemplateColumns: '1fr 380px', gap: '2rem', alignItems: 'center' }}>
          <div>
            <h1
              style={{
                fontSize: "2.2rem",
                fontWeight: "400",
                marginBottom: "1rem",
                background: `linear-gradient(45deg, var(--theme-accent), var(--theme-accent-strong))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              About The Registry
            </h1>

            <p style={{ color: 'var(--theme-text-muted)', maxWidth: '720px', fontSize: '1.05rem', lineHeight: '1.7', transition: 'color 0.3s ease' }}>
              We started as a small, persistent annoyance — frustrated by missing titles,
              contradictory listings and too many late-night phone calls trying to confirm
              whether a property really existed. The Registry grew out of that irritation: a
              pragmatic effort to combine careful verification with beautiful presentation so
              people can make decisions they actually trust.
            </p>

            <p style={{ color: 'var(--theme-text-muted)', maxWidth: '720px', marginTop: '0.8rem', lineHeight: '1.6', transition: 'color 0.3s ease' }}>
              Today we&apos;re a Nairobi-based team building tools for locals, returning expats and
              the diaspora — anyone who wants to move, invest or simply understand Kenyan
              property markets without the guesswork.
            </p>
          </div>

          <div style={{ width: '100%', height: 380, borderRadius: 12, overflow: 'hidden', border: `1px solid var(--theme-border)`, transition: 'border-color 0.3s ease' }}>
            <OptimizedImage
              src="https://plus.unsplash.com/premium_photo-1733317483746-661d5384329c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
              alt="Founder portrait"
              priority
              style={{ height: '380px' }}
            />
          </div>
        </div>
      </section>

      {/* Analytics Image Section - Our Approach */}
      <section style={{
        backgroundColor: "var(--theme-bg)",
        padding: "60px 20px",
        textAlign: "center",
        transition: 'background-color 0.3s ease'
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
        }}>
          <div style={{ width: '100%', height: 420, borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            <OptimizedImage
              src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
              alt="Real estate analytics dashboard"
              style={{ height: '420px' }}
              priority={false}
            />
          </div>
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(to bottom, transparent, var(--theme-bg) 50%, var(--theme-bg))",
            padding: "80px 20px 20px",
            borderRadius: "0 0 12px 12px",
          }}>
            <h2 style={{
              fontSize: "1.8rem",
              fontWeight: "400",
              marginBottom: "1rem",
              color: "var(--theme-text)",
              transition: 'color 0.3s ease'
            }}>Our Approach</h2>
            <p style={{
              color: "var(--theme-text-muted)",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.8",
              transition: 'color 0.3s ease'
            }}>
              By combining advanced market analytics with architectural expertise, 
              we provide an unmatched platform for Kenya&apos;s most distinguished properties. 
              Our methodology ensures that each listing represents the pinnacle of both 
              value and design excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Grid */}
      <section style={{
        backgroundColor: "var(--theme-bg)",
        padding: "60px 20px",
        transition: 'background-color 0.3s ease'
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
              backgroundColor: "var(--theme-surface)",
              padding: "2rem",
              borderRadius: "12px",
              textAlign: "left",
              border: `1px solid var(--theme-border)`,
              transition: 'background-color 0.3s ease, border-color 0.3s ease'
            }}>
              <span style={{ fontSize: "2rem", marginBottom: "1rem", display: "block" }}>{item.icon}</span>
              <h3 style={{ 
                color: "var(--theme-accent)",
                fontSize: "1.4rem",
                marginBottom: "1rem",
                fontWeight: "400",
                transition: 'color 0.3s ease'
              }}>{item.title}</h3>
              <p style={{
                color: "var(--theme-text-muted)",
                lineHeight: "1.6",
                fontSize: "1rem",
                transition: 'color 0.3s ease'
              }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section style={{
        backgroundColor: "var(--theme-surface)",
        padding: "80px 20px",
        textAlign: "center",
        color: "var(--theme-text)",
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}>
        <h2 style={{
          fontSize: "1.8rem",
          fontWeight: "400",
          marginBottom: "1rem",
          transition: 'color 0.3s ease'
        }}>
          Join The Registry
        </h2>
        <p style={{
          color: "var(--theme-text-muted)",
          maxWidth: "700px",
          margin: "0 auto 2rem auto",
          fontSize: "1.05rem",
          lineHeight: "1.7",
          transition: 'color 0.3s ease'
        }}>
          For property submissions that meet our criteria, we offer a comprehensive 
          analysis and presentation package. Connect with us to explore featuring 
          your property on The Registry.
        </p>

        <a
          href="mailto:submissions@theregistry.co"
          style={{
            display: "inline-block",
            background: `linear-gradient(45deg, var(--theme-accent), var(--theme-accent-strong))`,
            color: "var(--theme-bg)",
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
          color: "var(--theme-text-muted)", 
          fontSize: "0.9rem", 
          marginTop: "1.5rem",
          transition: 'color 0.3s ease'
        }}>
          Contact us: <b>submissions@theregistry.co</b>
        </p>
      </section>
    </Layout>
  );
}
