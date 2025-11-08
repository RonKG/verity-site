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
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: 'grid', gridTemplateColumns: '1fr 320px', gap: '2rem', alignItems: 'center' }}>
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

          <div style={{ width: '100%', height: 220, borderRadius: 12, overflow: 'hidden', border: `1px solid var(--theme-border)`, transition: 'border-color 0.3s ease' }}>
            <OptimizedImage
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
              alt="Elegant residential architecture"
              priority
              style={{ height: '220px' }}
            />
          </div>
        </div>
      </section>

      {/* Analytics Image Section - Our Approach */}
      <section style={{
        backgroundColor: "var(--theme-bg)",
        padding: "60px 20px",
        transition: 'background-color 0.3s ease'
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}>
          <h2 style={{
            fontSize: "2rem",
            fontWeight: "400",
            marginBottom: "1rem",
            color: "var(--theme-text)",
            textAlign: "center",
            transition: 'color 0.3s ease'
          }}>Our Approach</h2>
          <p style={{
            color: "var(--theme-text-muted)",
            maxWidth: "900px",
            margin: "0 auto 3rem auto",
            lineHeight: "1.8",
            textAlign: "center",
            fontSize: "1.05rem",
            transition: 'color 0.3s ease'
          }}>
            By combining advanced market analytics with architectural expertise, 
            we provide an unmatched platform for Kenya&apos;s most distinguished properties. 
            Our methodology ensures that each listing represents the pinnacle of both 
            value and design excellence.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "1.5rem",
            marginTop: "2rem"
          }}>
            {[
              {
                number: "01",
                title: "Property Discovery & Initial Vetting",
                description: "We identify exceptional properties through our network of architects, developers, and real estate professionals. Each potential listing undergoes preliminary verification to confirm legal documentation, title status, and ownership clarity before proceeding."
              },
              {
                number: "02",
                title: "Comprehensive Site Analysis",
                description: "Our team conducts in-person property inspections, documenting architectural details, construction quality, and unique features. We assess location metrics including proximity to amenities, infrastructure development, and neighborhood trends to provide complete context."
              },
              {
                number: "03",
                title: "Market Valuation & Positioning",
                description: "Using proprietary algorithms and historical transaction data, we analyze comparable properties to establish accurate market valuations. We consider architectural significance, land appreciation trends, and micro-market dynamics to position each property competitively."
              },
              {
                number: "04",
                title: "Professional Documentation",
                description: "We produce high-quality photography, detailed floor plans, and compelling narratives that showcase each property's distinctive character. Every listing includes verified specifications, neighborhood insights, and transparent disclosure of property features and limitations."
              },
              {
                number: "05",
                title: "Continuous Monitoring & Updates",
                description: "Post-listing, we track market feedback, price adjustments, and buyer inquiries to refine positioning strategies. Our platform provides sellers with real-time analytics on property views, engagement metrics, and competitive landscape changes."
              },
              {
                number: "06",
                title: "Transaction Support & Verification",
                description: "Throughout the sales process, we facilitate communication between parties, coordinate property viewings, and provide guidance on negotiation strategies. We verify all documentation and ensure smooth transitions from offer acceptance through to final closing."
              }
            ].map((item, index) => (
              <div key={index} style={{
                backgroundColor: "var(--theme-surface)",
                padding: "1.5rem",
                borderRadius: "10px",
                border: `1px solid var(--theme-border)`,
                transition: 'background-color 0.3s ease, border-color 0.3s ease'
              }}>
                <div style={{
                  fontSize: "2rem",
                  fontWeight: "300",
                  color: "var(--theme-accent)",
                  marginBottom: "0.75rem",
                  opacity: 0.7,
                  transition: 'color 0.3s ease'
                }}>{item.number}</div>
                <h3 style={{
                  color: "var(--theme-text)",
                  fontSize: "1.15rem",
                  marginBottom: "0.75rem",
                  fontWeight: "500",
                  transition: 'color 0.3s ease'
                }}>{item.title}</h3>
                <p style={{
                  color: "var(--theme-text-muted)",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                  transition: 'color 0.3s ease'
                }}>{item.description}</p>
              </div>
            ))}
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
          analysis and presentation package. Explore our services and submit an inquiry 
          to feature your property on The Registry.
        </p>

        <a
          href="/services"
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
          View Our Services
        </a>
      </section>
    </Layout>
  );
}
