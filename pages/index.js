import Layout from "../components/Layout";
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
          minHeight: "92vh",
          color: "#f0f0f0",
          textAlign: "center",
          padding: "60px 24px",
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
              fontSize: "clamp(3.5rem, 6vw, 5rem)",
              fontWeight: "400",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
            }}
          >
            The Registry
          </h1>

          <p
            style={{
              fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
              color: "#e0e0e0",
              maxWidth: "600px",
              lineHeight: "1.6",
              marginBottom: "1.5rem",
            }}
          >
            Curated. Verified. Data-driven.
          </p>

          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              color: "#cccccc",
              maxWidth: "700px",
              lineHeight: "1.7",
              margin: "0 auto",
              letterSpacing: "0.01em",
            }}
          >
            Because finding a home should feel inspiring — and certain.
          </p>

          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "1.05rem",
              color: "#bcbcbc",
              marginBottom: "3rem"
            }}
          >
            Because finding a home should feel inspiring — and certain.
          </p>

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
                background: "rgba(0,0,0,0.3)",
                backdropFilter: "blur(10px)",
                padding: "1rem 2rem",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.1)"
              }}>
                <span style={{
                  fontSize: "1.8rem",
                  fontWeight: "500",
                  background: "linear-gradient(45deg, #f5b942, #c2a675)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>{stat.number}</span>
                <span style={{
                  fontSize: "0.9rem",
                  color: "#bcbcbc",
                  marginTop: "0.3rem"
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
            color: "#f5b942",
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
            background: "linear-gradient(to bottom, #f5b942 50%, transparent)",
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

      {/* Featured Properties Preview */}
      <section style={{
        backgroundColor: "#0e0e0e",
        padding: "80px 20px",
        textAlign: "center",
      }}>
        <h2 style={{
          fontSize: "2rem",
          fontWeight: "400",
          marginBottom: "2rem",
          color: "#f0f0f0"
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
              background: "#151515",
              borderRadius: "12px",
              overflow: "hidden",
              transition: "transform 0.3s",
              cursor: "pointer",
            }}
            onMouseOver={(e) => e.target.style.transform = "translateY(-5px)"}
            onMouseOut={(e) => e.target.style.transform = "translateY(0)"}
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
                  color: "#f0f0f0",
                  marginBottom: "0.5rem"
                }}>{property.title}</h3>
                <p style={{
                  color: "#bcbcbc",
                  fontSize: "0.9rem",
                  marginBottom: "1rem"
                }}>{property.location}</p>
                <p style={{
                  color: "#f5b942",
                  fontWeight: "500"
                }}>{property.price}</p>
              </div>
            </div>
          ))}
        </div>

        <a 
          href="/listings"
          style={{
            display: "inline-block",
            marginTop: "3rem",
            padding: "12px 24px",
            background: "linear-gradient(45deg, #f5b942, #c2a675)",
            color: "#0e0e0e",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "500",
            transition: "transform 0.2s"
          }}
          onMouseOver={(e) => e.target.style.transform = "translateY(-2px)"}
          onMouseOut={(e) => e.target.style.transform = "translateY(0)"}
        >
          View All Properties
        </a>
      </section>

      {/* Trust Indicators Section */}
      <section style={{
        backgroundColor: "#0e0e0e",
        padding: "80px 20px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
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
            color: "#f0f0f0"
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
                background: "#151515",
                padding: "2rem",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.05)",
              }}>
                <span style={{ fontSize: "2rem", marginBottom: "1rem", display: "block" }}>
                  {feature.icon}
                </span>
                <h3 style={{
                  color: "#f5b942",
                  fontSize: "1.3rem",
                  marginBottom: "1rem",
                  fontWeight: "400"
                }}>{feature.title}</h3>
                <p style={{
                  color: "#bcbcbc",
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
