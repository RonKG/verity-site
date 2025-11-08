import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  return (
    <>
      <button
        onClick={handleToggle}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        style={{
          position: 'fixed',
          top: '12px',
          right: '12px',
          zIndex: 10001,
          background: isOpen ? 'none' : 'rgba(14, 14, 14, 0.8)',
          border: 'none',
          padding: '12px',
          cursor: 'pointer',
          width: '44px',
          height: '44px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '6px',
          borderRadius: '8px',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      >
        <span style={{
          display: 'block',
          width: '24px',
          height: '2px',
          background: '#f0f0f0',
          transform: isOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none',
          transition: 'transform 0.3s ease'
        }} />
        <span style={{
          display: 'block',
          width: '24px',
          height: '2px',
          background: '#f0f0f0',
          opacity: isOpen ? 0 : 1,
          transition: 'opacity 0.2s ease'
        }} />
        <span style={{
          display: 'block',
          width: '24px',
          height: '2px',
          background: '#f0f0f0',
          transform: isOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none',
          transition: 'transform 0.3s ease'
        }} />
      </button>

      {isOpen && (
        <nav style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(14, 14, 14, 0.98)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 10000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          overflowY: 'auto'
        }}>
          {[
            [{ href: '/', label: 'Home' }],
            [
              { href: '/listings', label: 'Listings' },
              { href: '/insights', label: 'Insights' },
              { href: '/heatmap', label: 'Heatmap' },
            ],
            [
              { href: '/about', label: 'About Us' },
              { href: '/team', label: 'Team' },
              { href: '/contact', label: 'Contact' },
            ]
          ].map((group, groupIndex) => (
            <div 
              key={groupIndex}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                position: 'relative',
                paddingBottom: groupIndex < 2 ? '2rem' : 0,
                marginBottom: groupIndex < 2 ? '2rem' : 0,
              }}
            >
              {groupIndex < 2 && (
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  width: '40px',
                  height: '1px',
                  background: '#333',
                  marginTop: '1rem',
                }} />
              )}
              {group.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={handleToggle}
                  style={{
                    color: '#f0f0f0',
                    textDecoration: 'none',
                    fontSize: '1.5rem',
                    padding: '12px'
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      )}

      <style jsx global>{`
        @media (min-width: 769px) {
          button[aria-label="Open menu"],
          button[aria-label="Close menu"] {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          button[aria-label="Open menu"],
          button[aria-label="Close menu"] {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}