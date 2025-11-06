import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/listings", label: "Listings" },
    { href: "/insights", label: "Insights" },
    { href: "/heatmap", label: "Heatmap" },
    { href: "/about", label: "About" },
  ];

  return (
    <div className="mobile-menu" style={{ position: 'relative', zIndex: 1000 }}>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="menu-button"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '12px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5px',
          width: '44px',
          height: '44px',
        }}
      >
        <span style={{
          width: '24px',
          height: '2px',
          background: '#f0f0f0',
          transition: 'transform 0.3s ease',
          transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
        }} />
        <span style={{
          width: '24px',
          height: '2px',
          background: '#f0f0f0',
          transition: 'opacity 0.3s ease',
          opacity: isOpen ? 0 : 1,
        }} />
        <span style={{
          width: '24px',
          height: '2px',
          background: '#f0f0f0',
          transition: 'all 0.3s ease',
          transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
        }} />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(14,14,14,0.98)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          zIndex: 999,
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
          {menuItems.map((link) => (
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
      )}

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