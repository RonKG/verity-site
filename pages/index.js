import Layout from "../components/Layout";
import Link from 'next/link';
import CredibilitySection from "../components/CredibilitySection";

export default function Home() {

  const accolades = [
    { 
      quote: "Setting new standards in property verification",
      source: "Business Daily Africa"
    },
    {
      quote: "The future of luxury real estate in Kenya",
      source: "The Standard"
    },
    {
      quote: "Transforming how premium properties are presented",
      source: "Property Watch EA"
    }
  ];

  const partners = [
    { name: "Kenya Bankers Association", type: "Financial" },
    { name: "Architectural Association of Kenya", type: "Design" },
    { name: "Kenya Property Developers Association", type: "Industry" },
    { name: "Estate Agents Registration Board", type: "Regulatory" }
  ];

  const stats = [
    { number: "KSh 82B+", label: "Portfolio Value" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "2.4K+", label: "Verified Properties" },
    { number: "72hrs", label: "Avg. Verification Time" }
  ];

  return (
    <Layout>
      <section
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "85vh",
          color: "var(--theme-text)",
          textAlign: "center",
          padding: "40px 20px",
          overflow: "hidden",
        }}
      >
        {/* Background image - increased opacity and added filter */}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
          alt="Elegant modern home exterior"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.75,
            filter: "blur(4px) brightness(0.85)",
            transform: "scale(1.05)",
            zIndex: 0,
          }}
        />

        {/* Theme-aware overlay with subtle gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(180deg, 
              var(--theme-overlay) 0%, 
              transparent 40%, 
              transparent 60%, 
              var(--theme-overlay) 100%)`,
            zIndex: 1,
            transition: 'background 0.3s ease'
          }}
        />

        {/* Main text content */}
        <div style={{ 
          position: "relative", 
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 20px"
        }}>
          {/* Title with pill background */}
          <div style={{
            background: "var(--theme-surface)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            padding: "1.5rem 3rem",
            borderRadius: "60px",
            border: `1px solid var(--theme-border)`,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            marginBottom: "1.5rem",
            transition: 'background 0.3s ease, border-color 0.3s ease'
          }}>
            <h1
              style={{
                fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
                fontWeight: "400",
                margin: 0,
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
                color: "var(--theme-text)",
                transition: 'color 0.3s ease'
              }}
            >
              The Registry
            </h1>
          </div>

          {/* Tagline with pill background */}
          <div style={{
            background: "var(--theme-card-bg)",
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
            padding: "1rem 2.5rem",
            borderRadius: "50px",
            border: `1px solid var(--theme-border)`,
            boxShadow: "0 4px 24px rgba(0, 0, 0, 0.2)",
            marginBottom: "1.5rem",
            transition: 'background 0.3s ease, border-color 0.3s ease'
          }}>
            <p
              style={{
                fontSize: "clamp(1.2rem, 1.8vw, 1.4rem)",
                color: "var(--theme-accent-strong)",
                margin: 0,
                lineHeight: "1.4",
                fontWeight: "500",
                transition: 'color 0.3s ease'
              }}
            >
              Curated. Verified. Data-driven.
            </p>
          </div>

          {/* Subtitle with pill background */}
          <div style={{
            background: "var(--theme-card-bg)",
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
            padding: "0.85rem 2rem",
            borderRadius: "40px",
            border: `1px solid var(--theme-border)`,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            marginBottom: "3rem",
            maxWidth: "600px",
            transition: 'background 0.3s ease, border-color 0.3s ease'
          }}>
            <p
              style={{
                fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
                color: "var(--theme-text-muted)",
                margin: 0,
                lineHeight: "1.6",
                letterSpacing: "0.01em",
                fontWeight: "300",
                transition: 'color 0.3s ease'
              }}
            >
              Because finding a home should feel inspiring — and certain.
            </p>
          </div>

          {/* Stats display */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            maxWidth: "900px",
            width: "100%",
            marginTop: "2rem"
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "var(--theme-card-bg)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                padding: "1rem 2rem",
                borderRadius: "16px",
                border: `1px solid var(--theme-border)`,
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.35)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.25)";
              }}
              >
                <span style={{
                  fontSize: "1.8rem",
                  fontWeight: "500",
                  background: `linear-gradient(45deg, var(--theme-accent), var(--theme-accent-strong))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>{stat.number}</span>
                <span style={{
                  fontSize: "0.9rem",
                  color: "var(--theme-text-muted)",
                  marginTop: "0.3rem",
                  transition: 'color 0.3s ease'
                }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Scroll Indicator - Moved outside main content div */}
        <div 
          onClick={() => window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
          })}
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            opacity: 0.7,
            transition: "all 0.3s ease",
            zIndex: 2 // Ensure it's above other elements
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "translateX(-50%) translateY(-5px)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.opacity = "0.7";
            e.currentTarget.style.transform = "translateX(-50%) translateY(0)";
          }}
        >
          <span style={{
            color: "var(--theme-accent)",
            fontSize: "0.85rem",
            fontWeight: "500",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}>
            Explore
          </span>
          <div style={{
            width: "2px",
            height: "40px",
            background: `linear-gradient(to bottom, var(--theme-accent) 50%, transparent)`,
            animation: "fadeInOut 2s infinite",
          }} />
        </div>

        <style jsx>{`
          @keyframes fadeInOut {
            0% {
              opacity: 0;
              transform: scaleY(0);
              transform-origin: top;
            }
            50% {
              opacity: 1;
              transform: scaleY(1);
              transform-origin: top;
            }
            51% {
              transform-origin: bottom;
            }
            100% {
              opacity: 0;
              transform: scaleY(0);
              transform-origin: bottom;
            }
          }
        `}</style>
      </section>

      {/* Quick Search Section */}
      <section style={{
        backgroundColor: "var(--theme-surface)",
        padding: "60px 20px",
        transition: 'background-color 0.3s ease'
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}>
          <h2 style={{
            fontSize: "1.8rem",
            fontWeight: "400",
            marginBottom: "2rem",
            textAlign: "center",
            color: "var(--theme-text)",
            transition: 'color 0.3s ease'
          }}>
            Find Your Perfect Property
          </h2>
          
          <div style={{
            background: "var(--theme-bg)",
            padding: "2rem",
            borderRadius: "12px",
            border: `1px solid var(--theme-border)`,
            transition: 'background 0.3s ease, border-color 0.3s ease'
          }}>
            {/* Search Bar */}
            <div style={{ marginBottom: "2rem" }}>
              <input
                type="text"
                placeholder="Search by location, features, or keywords..."
                style={{
                  width: "100%",
                  padding: "1rem",
                  background: "var(--theme-surface)",
                  border: `1px solid var(--theme-border)`,
                  borderRadius: "8px",
                  color: "var(--theme-text)",
                  fontSize: "1rem",
                  transition: 'background 0.3s ease, border-color 0.3s ease, color 0.3s ease'
                }}
              />
            </div>

            {/* Filter Controls */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
            }}>
              {/* Location Filter */}
              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "0.5rem", 
                  color: "var(--theme-text-muted)",
                  fontSize: "0.9rem",
                  transition: 'color 0.3s ease'
                }}>
                  Location
                </label>
                <select
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    background: "var(--theme-surface)",
                    border: `1px solid var(--theme-border)`,
                    borderRadius: "6px",
                    color: "var(--theme-text)",
                    cursor: "pointer",
                    transition: 'background 0.3s ease, border-color 0.3s ease, color 0.3s ease'
                  }}
                >
                  <option>All Locations</option>
                  <option>Karen</option>
                  <option>Kitisuru</option>
                  <option>Lavington</option>
                  <option>Muthaiga</option>
                  <option>Runda</option>
                  <option>Coastal Region</option>
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "0.5rem", 
                  color: "var(--theme-text-muted)",
                  fontSize: "0.9rem",
                  transition: 'color 0.3s ease'
                }}>
                  Price Range
                </label>
                <select
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    background: "var(--theme-surface)",
                    border: `1px solid var(--theme-border)`,
                    borderRadius: "6px",
                    color: "var(--theme-text)",
                    cursor: "pointer",
                    transition: 'background 0.3s ease, border-color 0.3s ease, color 0.3s ease'
                  }}
                >
                  <option>All Prices</option>
                  <option>KSh 200M - 300M</option>
                  <option>KSh 300M - 400M</option>
                  <option>KSh 400M - 500M</option>
                  <option>KSh 500M+</option>
                </select>
              </div>

              {/* Property Type Filter */}
              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "0.5rem", 
                  color: "var(--theme-text-muted)",
                  fontSize: "0.9rem",
                  transition: 'color 0.3s ease'
                }}>
                  Property Type
                </label>
                <select
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    background: "var(--theme-surface)",
                    border: `1px solid var(--theme-border)`,
                    borderRadius: "6px",
                    color: "var(--theme-text)",
                    cursor: "pointer",
                    transition: 'background 0.3s ease, border-color 0.3s ease, color 0.3s ease'
                  }}
                >
                  <option>All Types</option>
                  <option>Villa</option>
                  <option>Penthouse</option>
                  <option>Estate</option>
                  <option>Beachfront</option>
                </select>
              </div>

              {/* Sort Options */}
              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "0.5rem", 
                  color: "var(--theme-text-muted)",
                  fontSize: "0.9rem",
                  transition: 'color 0.3s ease'
                }}>
                  Sort By
                </label>
                <select
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    background: "var(--theme-surface)",
                    border: `1px solid var(--theme-border)`,
                    borderRadius: "6px",
                    color: "var(--theme-text)",
                    cursor: "pointer",
                    transition: 'background 0.3s ease, border-color 0.3s ease, color 0.3s ease'
                  }}
                >
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div style={{ marginTop: "2rem", textAlign: "center" }}>
              <Link href="/listings" style={{ textDecoration: "none" }}>
                <button style={{
                  background: `linear-gradient(45deg, var(--theme-accent), var(--theme-accent-strong))`,
                  color: "var(--theme-bg)",
                  padding: "1rem 3rem",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}>
                  Search Properties
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Preview */}
      <section style={{
        backgroundColor: "var(--theme-bg)",
        padding: "80px 20px",
        textAlign: "center",
        transition: 'background-color 0.3s ease'
      }}>
        <p style={{
          color: 'var(--theme-text-muted)',
          maxWidth: '760px',
          margin: '0 auto 1.25rem',
          lineHeight: '1.6'
        }}>
          A concise selection of recently verified properties — each inspected, documented and presented with data you can trust.
        </p>
        <h2 style={{
          fontSize: "2rem",
          fontWeight: "400",
          marginBottom: "2rem",
          color: "var(--theme-text)"
        }}>Latest Verified Properties</h2>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px"
        }}>
          {[
            {
              image: "https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4",
              title: "Modern Villa",
              location: "Karen",
              price: "$1.2M",
            },
            {
              image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
              title: "Luxury Penthouse",
              location: "Westlands",
              price: "$850K",
            },
            {
              image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
              title: "Garden Estate",
              location: "Kitisuru",
              price: "$2.1M",
            }
          ].map((property, index) => (
            <div key={index} style={{
              background: "var(--theme-surface)",
              borderRadius: "12px",
              overflow: "hidden",
              transition: "transform 0.3s, background 0.3s ease",
              cursor: "pointer",
              border: `1px solid var(--theme-border)`
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              <img 
                src={property.image}
                alt={property.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover"
                }}
              />
              <div style={{ padding: "1.5rem" }}>
                <h3 style={{
                  fontSize: "1.3rem",
                  color: "var(--theme-text)",
                  marginBottom: "0.5rem"
                }}>{property.title}</h3>
                <p style={{
                  color: "var(--theme-text-muted)",
                  fontSize: "0.9rem",
                  marginBottom: "1rem"
                }}>{property.location}</p>
                <p style={{
                  color: "var(--theme-accent)",
                  fontWeight: "500"
                }}>{property.price}</p>
              </div>
            </div>
          ))}
        </div>

        <Link 
          href="/listings"
          style={{
            display: "inline-block",
            marginTop: "3rem",
            padding: "12px 24px",
            background: `linear-gradient(45deg, var(--theme-accent), var(--theme-accent-strong))`,
            color: "var(--theme-bg)",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "500",
            transition: "transform 0.2s"
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
          View All Properties
        </Link>
      </section>

      {/* Trust Indicators Section */}
      <section style={{
        backgroundColor: "var(--theme-bg)",
        padding: "80px 20px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        transition: 'background-color 0.3s ease'
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "radial-gradient(circle at 90% 10%, rgba(245,185,66,0.03) 0%, transparent 40%)",
          zIndex: 1
        }} />
        
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2 style={{
            fontSize: "2rem",
            fontWeight: "400",
            marginBottom: "3rem",
            color: "var(--theme-text)"
          }}>Why The Registry</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            {[
              {
                icon: "🔍",
                title: "Verified Data",
                description: "Every listing undergoes our proprietary 72-hour verification process"
              },
              {
                icon: "📊",
                title: "Market Analytics",
                description: "Access real-time market insights and property valuations"
              },
              {
                icon: "✨",
                title: "Premium Presentation",
                description: "Cinematic photography and immersive virtual tours"
              }
            ].map((feature, index) => (
              <div key={index} style={{
                background: "var(--theme-surface)",
                padding: "2rem",
                borderRadius: "12px",
                border: `1px solid var(--theme-border)`,
                transition: 'background 0.3s ease, border-color 0.3s ease'
              }}>
                <span style={{ fontSize: "2rem", marginBottom: "1rem", display: "block" }}>
                  {feature.icon}
                </span>
                <h3 style={{
                  color: "var(--theme-accent)",
                  fontSize: "1.3rem",
                  marginBottom: "1rem",
                  fontWeight: "400"
                }}>{feature.title}</h3>
                <p style={{
                  color: "var(--theme-text-muted)",
                  lineHeight: "1.6"
                }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <CredibilitySection accolades={accolades} partners={partners} />
    </Layout>
  );
}
