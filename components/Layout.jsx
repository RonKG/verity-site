import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";
import { useState, useEffect } from "react";

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Initialize theme from localStorage or OS preference
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const linkStyle = {
    color: "var(--theme-text-muted)",
    textDecoration: "none",
    fontSize: "0.95rem",
    marginLeft: "1.8rem",
    transition: "color 0.3s ease",
  };

  const headerStyle = {
    padding: scrolled ? "10px 20px" : "16px 20px",
    borderBottom: `1px solid var(--theme-border)`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    width: '100%',
    zIndex: 1000,
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    background: theme === 'dark' 
      ? (scrolled ? "rgba(14,14,14,0.95)" : "rgba(14,14,14,0.7)")
      : (scrolled ? "rgba(248,247,245,0.95)" : "rgba(248,247,245,0.7)"),
    boxShadow: theme === 'dark'
      ? (scrolled ? "0 6px 30px rgba(0,0,0,0.55)" : "0 2px 12px rgba(0,0,0,0.3)")
      : (scrolled ? "0 6px 30px rgba(0,0,0,0.08)" : "0 2px 12px rgba(0,0,0,0.05)"),
    transition: "all 220ms ease",
  };
  const headerHeight = scrolled ? 56 : 72;
 

  const logoStyle = {
    width: scrolled ? 44 : 56,
    height: scrolled ? 44 : 56,
    fontSize: scrolled ? '1.05rem' : '1.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        color: "var(--theme-text)",
        backgroundColor: "var(--theme-bg)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      {/* Header */}
        <header className="main-header" style={headerStyle}>
        {/* Logo Section */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Gold circular icon */}
          <div
            role="img"
            aria-label="The Registry logo"
            style={{
              ...logoStyle,
              borderRadius: "50%",
              border: scrolled ? `2.5px solid var(--theme-accent)` : `2px solid var(--theme-accent-strong)`,
              background: scrolled 
                ? (theme === 'dark' ? "linear-gradient(135deg, rgba(245,185,66,0.08), rgba(194,166,117,0.03))" : "linear-gradient(135deg, rgba(183,121,31,0.08), rgba(143,106,64,0.03))")
                : "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: scrolled ? "var(--theme-accent)" : "var(--theme-accent-strong)",
              fontWeight: "700",
              boxShadow: scrolled 
                ? (theme === 'dark' ? "0 8px 30px rgba(197,153,90,0.12)" : "0 8px 30px rgba(143,106,64,0.08)")
                : (theme === 'dark' ? "0 4px 12px rgba(0,0,0,0.25)" : "0 4px 12px rgba(0,0,0,0.08)"),
              transform: "scale(1)",
              transition: "all 200ms ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = "scale(1.06)";
              el.style.background = theme === 'dark' 
                ? "linear-gradient(135deg, rgba(245,185,66,0.12), rgba(194,166,117,0.06))"
                : "linear-gradient(135deg, rgba(183,121,31,0.15), rgba(143,106,64,0.08))";
              el.style.color = theme === 'dark' ? "#0e0e0e" : "#ffffff";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = "scale(1)";
              el.style.background = scrolled 
                ? (theme === 'dark' ? "linear-gradient(135deg, rgba(245,185,66,0.08), rgba(194,166,117,0.03))" : "linear-gradient(135deg, rgba(183,121,31,0.08), rgba(143,106,64,0.03))")
                : "transparent";
              el.style.color = scrolled ? "var(--theme-accent)" : "var(--theme-accent-strong)";
            }}
          >
            <span style={{ fontSize: scrolled ? '1.05rem' : '1.35rem', lineHeight: 1 }}>
              R
            </span>
          </div>

          {/* Title text */}
          <h2
            style={{
              margin: 0,
              fontWeight: "500",
              color: "var(--theme-text)",
              fontSize: scrolled ? '1.15rem' : '1.35rem',
              letterSpacing: "0.3px",
              transition: "color 0.3s ease, font-size 180ms ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--theme-accent-strong)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--theme-text)")}
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
              { href: "/services", label: "Services" },
              { href: "/insights", label: "Insights" },
              { href: "/heatmap", label: "Heatmap" },
            ],
            [
              { href: "/about", label: "About Us" },
              { href: "/partners", label: "Partners" },
              { href: "/team", label: "Team" },
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
                  color: "var(--theme-text-muted)",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                }}>
                  <span
                    onMouseEnter={(e) => (e.target.style.color = "var(--theme-accent-strong)")}
                    onMouseLeave={(e) => (e.target.style.color = "var(--theme-text-muted)")}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              {groupIndex < 2 && (
                <span style={{ 
                  color: "var(--theme-border)",
                  margin: "0 0.5rem",
                }}>|</span>
              )}
            </div>
          ))}
        </nav>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          aria-pressed={theme === 'light'}
          style={{
            background: 'transparent',
            border: `1.5px solid var(--theme-accent-strong)`,
            borderRadius: '50%',
            width: scrolled ? '36px' : '40px',
            height: scrolled ? '36px' : '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            color: 'var(--theme-accent-strong)',
            fontSize: scrolled ? '1rem' : '1.1rem',
            marginLeft: '1rem',
            padding: 0
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--theme-accent)';
            e.currentTarget.style.background = theme === 'dark' ? 'rgba(194, 166, 117, 0.1)' : 'rgba(143, 106, 64, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--theme-accent-strong)';
            e.currentTarget.style.background = 'transparent';
          }}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </header>

      {/* spacer to prevent content sitting under fixed header */}
      <div style={{ height: headerHeight }} aria-hidden="true" />

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
