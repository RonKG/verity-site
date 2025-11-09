import Layout from "../components/Layout";
import Link from 'next/link';
import CredibilitySection from "../components/CredibilitySection";
import CurrencyDisplay from "../components/CurrencyDisplay";

// Verification Badge Component
const VerificationBadge = ({ level }) => {
  const badges = {
    verified: {
      label: "Verified",
      icon: "✓",
      bg: "linear-gradient(135deg, #219ebc 0%, #023047 100%)"
    },
    premium: {
      label: "Premium",
      icon: "★",
      bg: "linear-gradient(135deg, #f5b942 0%, #c2a675 100%)"
    },
    elite: {
      label: "Elite",
      icon: "◆",
      bg: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)"
    }
  };

  const badge = badges[level] || badges.verified;

  return (
    <div style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4rem",
      padding: "0.35rem 0.75rem",
      background: badge.bg,
      borderRadius: "6px",
      fontSize: "0.75rem",
      fontWeight: "600",
      color: "white",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      letterSpacing: "0.3px",
      textTransform: "uppercase"
    }}>
      <span style={{ fontSize: "0.9rem" }}>{badge.icon}</span>
      {badge.label}
    </div>
  );
};

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
          minHeight: "90vh",
          color: "var(--theme-text)",
          textAlign: "center",
          padding: "40px 20px",
          overflow: "hidden",
        }}
      >
        {/* Background image - higher quality, better visibility */}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
          alt="Elegant modern home exterior"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.18,
            zIndex: 0,
          }}
        />

        {/* Gradient overlay for better readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse at center, transparent 0%, var(--theme-bg) 70%)`,
            opacity: 0.92,
            zIndex: 1,
            transition: 'background 0.3s ease, opacity 0.3s ease'
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
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
              fontWeight: "300",
              marginBottom: "1.5rem",
              letterSpacing: "0.02em",
              lineHeight: "1.2",
              color: "var(--theme-text)",
              transition: 'color 0.3s ease',
              fontFamily: "'Inter', -apple-system, system-ui, sans-serif"
            }}
          >
            The Registry
          </h1>

          <p
            style={{
              fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
              color: "var(--theme-accent)",
              maxWidth: "700px",
              lineHeight: "1.5",
              marginBottom: "1.5rem",
              fontWeight: "500",
              transition: 'color 0.3s ease',
              letterSpacing: "0.01em"
            }}
          >
            Every listing verified. Every detail trusted.
          </p>

          <p
            style={{
              fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
              color: "var(--theme-text-muted)",
              maxWidth: "680px",
              lineHeight: "1.8",
              marginBottom: "3rem",
              letterSpacing: "0.01em",
              fontWeight: "400",
              transition: 'color 0.3s ease'
            }}
          >
            Curated properties from Nairobi's exclusive neighborhoods to Kenya's pristine coastline — each verified through our rigorous 72-hour authentication process.
          </p>

          {/* Hero CTAs */}
          <div style={{
            display: "flex",
            gap: "1.25rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "4rem"
          }}>
            <Link 
              href="/listings"
              style={{
                display: "inline-block",
                padding: "1.1rem 2.5rem",
                background: `linear-gradient(135deg, var(--theme-accent), var(--theme-accent-strong))`,
                color: "#000000",
                textDecoration: "none",
                borderRadius: "8px",
                fontWeight: "600",
                fontSize: "1.05rem",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 20px rgba(245,185,66,0.3)",
                border: "none"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(245,185,66,0.4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(245,185,66,0.3)";
              }}
            >
              Browse Properties
            </Link>
            
            <Link 
              href="/insights"
              style={{
                display: "inline-block",
                padding: "1.1rem 2.5rem",
                background: "transparent",
                color: "var(--theme-text)",
                textDecoration: "none",
                borderRadius: "8px",
                fontWeight: "600",
                fontSize: "1.05rem",
                border: `2px solid var(--theme-accent)`,
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(245,185,66,0.1)";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.borderColor = "var(--theme-accent-strong)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--theme-accent)";
              }}
            >
              Market Insights
            </Link>
          </div>

          {/* Stats display */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1.5rem",
            maxWidth: "1000px",
            width: "100%",
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(10px)",
                padding: "1.5rem 1.25rem",
                borderRadius: "12px",
                border: `1px solid rgba(245,185,66,0.15)`,
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.borderColor = "rgba(245,185,66,0.3)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderColor = "rgba(245,185,66,0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}>
                <span style={{
                  fontSize: "2rem",
                  fontWeight: "600",
                  background: `linear-gradient(135deg, var(--theme-accent), var(--theme-accent-strong))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: "0.5rem"
                }}>{stat.number}</span>
                <span style={{
                  fontSize: "0.85rem",
                  color: "var(--theme-text-muted)",
                  textAlign: "center",
                  lineHeight: "1.4"
                }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Scroll Indicator - Hidden on mobile */}
        <div 
          className="scroll-indicator"
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

          /* Hide scroll indicator on mobile */
          @media (max-width: 768px) {
            .scroll-indicator {
              display: none !important;
            }
          }
        `}</style>
      </section>

      {/* How It Works Section */}
      <section style={{
        backgroundColor: "var(--theme-surface)",
        padding: "80px 20px",
        transition: 'background-color 0.3s ease'
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}>
          <h2 style={{
            fontSize: "2.2rem",
            fontWeight: "400",
            marginBottom: "1rem",
            textAlign: "center",
            color: "var(--theme-text)",
            transition: 'color 0.3s ease'
          }}>
            How The Registry Works
          </h2>
          
          <p style={{
            color: "var(--theme-text-muted)",
            maxWidth: "700px",
            margin: "0 auto 4rem",
            textAlign: "center",
            fontSize: "1.05rem",
            lineHeight: "1.7",
            transition: 'color 0.3s ease'
          }}>
            Our proprietary verification process ensures every property listing meets the highest standards of accuracy and transparency.
          </p>

          {/* Process Steps */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            position: "relative"
          }}>
            {[
              {
                step: "01",
                icon: "🔍",
                title: "Property Inspection",
                description: "Our certified inspectors conduct comprehensive on-site verification including title deed authentication, boundary confirmation, and infrastructure assessment."
              },
              {
                step: "02",
                icon: "📊",
                title: "Data Validation",
                description: "Cross-reference with land registries, conduct market analysis, verify ownership history, and validate all property specifications against official records."
              },
              {
                step: "03",
                icon: "📸",
                title: "Professional Media",
                description: "Cinematic photography, drone footage, and virtual tours capture every detail. Professional staging consultation available for premium listings."
              },
              {
                step: "04",
                icon: "✨",
                title: "Live Listing",
                description: "Properties go live with verified badge, comprehensive documentation, market insights, and dedicated support for viewings and inquiries."
              }
            ].map((item, index) => (
              <div key={index} style={{
                background: "var(--theme-bg)",
                padding: "2.5rem 2rem",
                borderRadius: "16px",
                border: `1px solid var(--theme-border)`,
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.borderColor = "var(--theme-accent)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--theme-border)";
                e.currentTarget.style.boxShadow = "none";
              }}>
                {/* Step number */}
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  fontSize: '3rem',
                  fontWeight: '700',
                  background: `linear-gradient(135deg, var(--theme-accent), var(--theme-accent-strong))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  opacity: 0.15
                }}>
                  {item.step}
                </div>
                
                <span style={{ 
                  fontSize: "3rem", 
                  marginBottom: "1.5rem", 
                  display: "block" 
                }}>
                  {item.icon}
                </span>
                
                <h3 style={{
                  color: "var(--theme-accent)",
                  fontSize: "1.4rem",
                  marginBottom: "1rem",
                  fontWeight: "500",
                  transition: 'color 0.3s ease'
                }}>{item.title}</h3>
                
                <p style={{
                  color: "var(--theme-text-muted)",
                  lineHeight: "1.7",
                  fontSize: "0.95rem",
                  transition: 'color 0.3s ease'
                }}>{item.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: "4rem", textAlign: "center" }}>
            <Link href="/services" style={{ textDecoration: "none" }}>
              <button style={{
                background: `linear-gradient(135deg, var(--theme-accent), var(--theme-accent-strong))`,
                color: "#000000",
                padding: "1rem 2.5rem",
                border: "none",
                borderRadius: "8px",
                fontSize: "1.05rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 16px rgba(245,185,66,0.25)"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(245,185,66,0.35)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(245,185,66,0.25)";
              }}>
                Learn About Our Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Properties Preview */}
      <section style={{
        backgroundColor: "var(--theme-bg)",
        padding: "80px 20px",
        transition: 'background-color 0.3s ease'
      }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{
            fontSize: "2.2rem",
            fontWeight: "400",
            marginBottom: "1rem",
            color: "var(--theme-text)"
          }}>Latest Verified Properties</h2>
          <p style={{
            color: 'var(--theme-text-muted)',
            maxWidth: '760px',
            margin: '0 auto',
            lineHeight: '1.7',
            fontSize: '1.05rem'
          }}>
            A curated selection of recently verified properties — each inspected, documented and presented with data you can trust.
          </p>
        </div>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2.5rem",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px"
        }}>
          {[
            {
              id: "1",
              image: "https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4",
              title: "Modern Villa",
              location: "Karen, Nairobi",
              price: 420000000,
              beds: 5,
              baths: 6,
              sqft: "6,500",
              badge: "premium"
            },
            {
              id: "2",
              image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
              title: "Luxury Penthouse",
              location: "Westlands, Nairobi",
              price: 310000000,
              beds: 4,
              baths: 5,
              sqft: "5,800",
              badge: "elite"
            },
            {
              id: "3",
              image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
              title: "Garden Estate",
              location: "Kitisuru, Nairobi",
              price: 385000000,
              beds: 6,
              baths: 7,
              sqft: "8,200",
              badge: "verified"
            }
          ].map((property, index) => (
            <Link href={`/listings/${property.id}`} key={index} style={{ textDecoration: "none" }}>
              <div style={{
                background: "var(--theme-surface)",
                borderRadius: "16px",
                overflow: "hidden",
                transition: "all 0.3s ease",
                cursor: "pointer",
                border: `1px solid var(--theme-border)`,
                position: "relative",
                height: "100%",
                display: "flex",
                flexDirection: "column"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
              >
              <div style={{ position: "relative" }}>
                <img 
                  src={property.image}
                  alt={property.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "240px",
                    objectFit: "cover"
                  }}
                />
                {/* Verification Badge */}
                <div style={{
                  position: "absolute",
                  top: "14px",
                  left: "14px",
                  zIndex: 10
                }}>
                  <VerificationBadge level={property.badge} />
                </div>
                {/* Price tag */}
                <div style={{
                  position: "absolute",
                  bottom: "14px",
                  right: "14px",
                  background: "rgba(0,0,0,0.75)",
                  backdropFilter: "blur(10px)",
                  padding: "0.6rem 1.1rem",
                  borderRadius: "8px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  color: "var(--theme-accent)"
                }}>
                  <CurrencyDisplay amountInKSH={property.price} showBoth={true} />
                </div>
              </div>
              <div style={{ 
                padding: "1.75rem",
                flex: 1,
                display: "flex",
                flexDirection: "column"
              }}>
                <h3 style={{
                  fontSize: "1.35rem",
                  color: "var(--theme-text)",
                  marginBottom: "0.75rem",
                  fontWeight: "500"
                }}>{property.title}</h3>
                <p style={{
                  color: "var(--theme-text-muted)",
                  fontSize: "0.95rem",
                  marginBottom: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }}>
                  <span>📍</span> {property.location}
                </p>
                
                {/* Property specs */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "1rem",
                  paddingTop: "1rem",
                  borderTop: `1px solid var(--theme-border)`,
                  marginTop: "auto"
                }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{
                      fontSize: "1.4rem",
                      marginBottom: "0.25rem"
                    }}>🛏️</div>
                    <div style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      color: "var(--theme-accent)",
                      marginBottom: "0.15rem"
                    }}>{property.beds}</div>
                    <div style={{
                      fontSize: "0.75rem",
                      color: "var(--theme-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px"
                    }}>Beds</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{
                      fontSize: "1.4rem",
                      marginBottom: "0.25rem"
                    }}>🚿</div>
                    <div style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      color: "var(--theme-accent)",
                      marginBottom: "0.15rem"
                    }}>{property.baths}</div>
                    <div style={{
                      fontSize: "0.75rem",
                      color: "var(--theme-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px"
                    }}>Baths</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{
                      fontSize: "1.4rem",
                      marginBottom: "0.25rem"
                    }}>📐</div>
                    <div style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      color: "var(--theme-accent)",
                      marginBottom: "0.15rem"
                    }}>{property.sqft}</div>
                    <div style={{
                      fontSize: "0.75rem",
                      color: "var(--theme-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px"
                    }}>Sq Ft</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          ))}
        </div>

        <div style={{ 
          display: "flex", 
          gap: "1.25rem", 
          justifyContent: "center", 
          flexWrap: "wrap",
          marginTop: "4rem" 
        }}>
          <Link 
            href="/listings"
            style={{
              display: "inline-block",
              padding: "1rem 2.5rem",
              background: `linear-gradient(135deg, var(--theme-accent), var(--theme-accent-strong))`,
              color: "#000000",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: "600",
              fontSize: "1.05rem",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 16px rgba(245,185,66,0.25)",
              border: "none"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(245,185,66,0.35)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(245,185,66,0.25)";
            }}
          >
            View All Properties
          </Link>
          
          <Link 
            href="/services"
            style={{
              display: "inline-block",
              padding: "1rem 2.5rem",
              background: "transparent",
              color: "var(--theme-text)",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: "600",
              fontSize: "1.05rem",
              border: `2px solid var(--theme-accent)`,
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "rgba(245,185,66,0.1)";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Our Services
          </Link>
        </div>
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

      {/* Testimonials Section */}
      <section style={{
        backgroundColor: "var(--theme-surface)",
        padding: "80px 20px",
        transition: 'background-color 0.3s ease'
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{
              fontSize: "2.2rem",
              fontWeight: "400",
              marginBottom: "1rem",
              color: "var(--theme-text)"
            }}>Client Success Stories</h2>
            <p style={{
              color: 'var(--theme-text-muted)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.7',
              fontSize: '1.05rem'
            }}>
              Hear from clients who found their perfect property through The Registry's verified listings and expert guidance.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem"
          }}>
            {[
              {
                quote: "The verification process gave us complete peace of mind. Every detail they promised was accurate, and the transaction was seamless. We found our dream home in Karen within three weeks.",
                author: "Sarah & James Mwangi",
                role: "Homeowners, Karen Villa",
                rating: 5
              },
              {
                quote: "As an investor, accuracy is everything. The Registry's market insights and verified data helped me make a confident decision on a KSh 400M portfolio. Outstanding professionalism.",
                author: "David Kimani",
                role: "Real Estate Investor",
                rating: 5
              },
              {
                quote: "After months of searching elsewhere, we discovered The Registry. The difference was night and day — verified titles, accurate square footage, and transparent pricing. Highly recommended.",
                author: "Amina Hassan",
                role: "Homeowner, Diani Penthouse",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} style={{
                background: "var(--theme-bg)",
                padding: "2.5rem",
                borderRadius: "16px",
                border: `1px solid var(--theme-border)`,
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.borderColor = "var(--theme-accent)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--theme-border)";
              }}>
                {/* Quote icon */}
                <div style={{
                  fontSize: "3rem",
                  color: "var(--theme-accent)",
                  opacity: 0.2,
                  lineHeight: 1,
                  marginBottom: "1rem"
                }}>"</div>

                {/* Rating stars */}
                <div style={{
                  display: "flex",
                  gap: "0.25rem",
                  marginBottom: "1.5rem"
                }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{ color: "var(--theme-accent)", fontSize: "1.2rem" }}>★</span>
                  ))}
                </div>

                {/* Quote */}
                <p style={{
                  color: "var(--theme-text)",
                  lineHeight: "1.8",
                  fontSize: "1rem",
                  marginBottom: "2rem",
                  flex: 1,
                  fontStyle: "italic"
                }}>
                  {testimonial.quote}
                </p>

                {/* Author info */}
                <div style={{
                  paddingTop: "1.5rem",
                  borderTop: `1px solid var(--theme-border)`
                }}>
                  <div style={{
                    fontWeight: "600",
                    color: "var(--theme-text)",
                    marginBottom: "0.25rem",
                    fontSize: "1.05rem"
                  }}>{testimonial.author}</div>
                  <div style={{
                    color: "var(--theme-text-muted)",
                    fontSize: "0.9rem"
                  }}>{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust indicators */}
          <div style={{
            marginTop: "4rem",
            padding: "2.5rem",
            background: "var(--theme-bg)",
            borderRadius: "16px",
            border: `1px solid var(--theme-border)`,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            textAlign: "center"
          }}>
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "4.9/5", label: "Average Rating" },
              { number: "98%", label: "Would Recommend" },
              { number: "KSh 82B+", label: "Property Value Sold" }
            ].map((stat, index) => (
              <div key={index}>
                <div style={{
                  fontSize: "2rem",
                  fontWeight: "600",
                  background: `linear-gradient(135deg, var(--theme-accent), var(--theme-accent-strong))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: "0.5rem"
                }}>{stat.number}</div>
                <div style={{
                  color: "var(--theme-text-muted)",
                  fontSize: "0.9rem"
                }}>{stat.label}</div>
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
