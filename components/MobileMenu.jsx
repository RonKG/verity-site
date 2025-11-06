import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const menuLinks = [
    { href: "/", label: "Home" },
    { href: "/listings", label: "Listings" },
    { href: "/insights", label: "Insights" },
    { href: "/heatmap", label: "Heatmap" },
    { href: "/about", label: "About" },
  ];

  return (
    <div className="mobile-menu">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="menu-button"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <div style={{
          width: '24px',
          height: '2px',
          background: '#f0f0f0',
          transition: 'all 0.3s ease',
          transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
        }} />
        <div style={{
          width: '24px',
          height: '2px',
          background: '#f0f0f0',
          margin: '5px 0',
          transition: 'all 0.3s ease',
          opacity: isOpen ? 0 : 1,
        }} />
        <div style={{
          width: '24px',
          height: '2px',
          background: '#f0f0f0',
          transition: 'all 0.3s ease',
          transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
        }} />
      </button>

      {/* Mobile Menu Overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(14,14,14,0.98)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        zIndex: 1000,
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? 'visible' : 'hidden',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}>
        <nav style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          textAlign: 'center',
        }}>
          {menuLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => {
                toggleMenu();
              }}
              style={{
                color: '#f0f0f0',
                textDecoration: 'none',
                fontSize: '1.5rem',
                fontWeight: '400',
                transition: 'color 0.3s ease',
              }}
            >
              <span
                onMouseEnter={(e) => (e.target.style.color = '#c2a675')}
                onMouseLeave={(e) => (e.target.style.color = '#f0f0f0')}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      <style jsx global>{`
        @media (min-width: 768px) {
          .mobile-menu {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}