import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCurrency } from '../contexts/CurrencyContext';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const { currency, changeCurrency } = useCurrency();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Initialize theme from localStorage
    const stored = localStorage.getItem('theme');
    const initialTheme = stored || 'light';
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [isOpen]);

  return (
    <>
      <button
        onClick={handleToggle}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        style={{
          position: 'fixed',
          top: '12px',
          right: '12px',
          zIndex: 10000,
          background: isOpen ? 'rgba(14, 14, 14, 0.9)' : 'rgba(14, 14, 14, 0.8)',
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

      {/* Mobile Menu Overlay */}
      <nav 
        aria-hidden={!isOpen}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(14, 14, 14, 0.98)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          overflowY: 'auto',
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease, visibility 0.3s ease',
          pointerEvents: isOpen ? 'auto' : 'none'
        }}
      >
          {/* Main Navigation */}
          {[
            [{ href: '/', label: 'Home' }],
            [
              { href: '/listings', label: 'Listings' },
              { href: '/services', label: 'Services' },
              { href: '/insights', label: 'Insights' },
              { href: '/heatmap', label: 'Map' },
            ],
            [
              { href: '/about', label: 'About Us' },
              { href: '/partners', label: 'Partners' },
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
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
                transition: `all 0.4s ease ${groupIndex * 0.1}s`
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

          {/* Quick Links Section */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem',
            marginTop: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid #333',
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'all 0.4s ease 0.4s'
          }}>
            <div style={{
              fontSize: '0.75rem',
              color: '#888',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '0.5rem'
            }}>
              Quick Links
            </div>
            {[
              { href: '/about', label: 'About Us' },
              { href: '/team', label: 'Team' },
              { href: '/listings', label: 'Listings' },
              { href: '/services', label: 'Services' },
              { href: '/insights', label: 'Market Insights' },
              { href: '/partners', label: 'Partners' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={handleToggle}
                style={{
                  color: '#aaa',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  padding: '8px'
                }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Legal Section */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem',
            marginTop: '1.5rem',
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'all 0.4s ease 0.5s'
          }}>
            <div style={{
              fontSize: '0.75rem',
              color: '#888',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '0.5rem'
            }}>
              Legal
            </div>
            {[
              { href: '/terms', label: 'Terms of Service' },
              { href: '/privacy', label: 'Privacy Policy' },
              { href: '/contact', label: 'Contact Us' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={handleToggle}
                style={{
                  color: '#aaa',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  padding: '8px'
                }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Currency Selector & Theme Toggle - Mobile Only */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
            marginTop: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid #333',
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'all 0.4s ease 0.6s'
          }}>
            {/* Currency Selector */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <div style={{
                fontSize: '0.75rem',
                color: '#888',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Currency
              </div>
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                {['KSH', 'USD', 'EUR', 'GBP'].map((curr) => (
                  <button
                    key={curr}
                    onClick={() => changeCurrency(curr)}
                    style={{
                      background: currency === curr ? '#f5b942' : 'transparent',
                      color: currency === curr ? '#0e0e0e' : '#aaa',
                      border: `1px solid ${currency === curr ? '#f5b942' : '#444'}`,
                      borderRadius: '6px',
                      padding: '8px 16px',
                      fontSize: '0.9rem',
                      fontWeight: currency === curr ? '600' : '500',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      minWidth: '60px'
                    }}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Toggle */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <div style={{
                fontSize: '0.75rem',
                color: '#888',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Theme
              </div>
              <button
                onClick={toggleTheme}
                style={{
                  background: 'transparent',
                  border: '1.5px solid #f5b942',
                  borderRadius: '50%',
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  transition: 'all 0.2s ease'
                }}
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </nav>

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