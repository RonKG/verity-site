import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";

export default function Layout({ children }) {
  const linkStyle = {
    color: "#cfcfcf",
    textDecoration: "none",
    fontSize: "0.95rem",
    marginLeft: "1.8rem",
    transition: "color 0.3s ease",
  };

  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        color: "#f0f0f0",
        backgroundColor: "#0e0e0e",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <header 
        className="main-header"
        style={{
          padding: "16px 20px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          background: "rgba(14,14,14,0.7)",
          boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
        }}>
        {/* Logo Section */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Gold circular icon */}
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1.5px solid #c2a675",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#c2a675",
              fontWeight: "500",
              fontSize: "1.1rem",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#c2a675";
              e.target.style.color = "#0e0e0e";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#c2a675";
            }}
          >
            R
          </div>

          {/* Title text */}
          <h2
            style={{
              margin: 0,
              fontWeight: "500",
              color: "#f5f5f5",
              fontSize: "1.35rem",
              letterSpacing: "0.3px",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#c2a675")}
            onMouseLeave={(e) => (e.target.style.color = "#f5f5f5")}
          >
            The Registry
          </h2>
        </Link>

        {/* Mobile Menu */}
        <div className="mobile-nav">
          <MobileMenu />
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.5rem",
          fontSize: "0.9rem",
        }}>
          {[
            [{ href: "/", label: "Home" }],
            [
              { href: "/listings", label: "Listings" },
              { href: "/insights", label: "Insights" },
              { href: "/heatmap", label: "Heatmap" },
            ],
            [
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ]
          ].map((group, groupIndex) => (
            <div key={groupIndex} style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}>
              {group.map((link, linkIndex) => (
                <Link key={link.href} href={link.href} style={{
                  color: "#cfcfcf",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                }}>
                  <span
                    onMouseEnter={(e) => (e.target.style.color = "#c2a675")}
                    onMouseLeave={(e) => (e.target.style.color = "#cfcfcf")}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              {groupIndex < 2 && (
                <span style={{ 
                  color: "#333",
                  margin: "0 0.5rem",
                }}>|</span>
              )}
            </div>
          ))}
        </nav>
      </header>

      {/* Page Content */}
      <main style={{ flex: 1 }}>
        {children}
      </main>
      
      {/* Footer */}
      <Footer />

      <style jsx global>{`
        /* Navigation visibility */
        .mobile-nav {
          display: block;
        }
        .desktop-nav {
          display: none;
        }
        
        @media (min-width: 768px) {
          .mobile-nav {
            display: none;
          }
          .desktop-nav {
            display: flex;
          }
        }

        /* Touch-friendly improvements */
        @media (hover: none) {
          a, button {
            padding: 12px;
          }
        }
      `}</style>
    </div>
  );
}
