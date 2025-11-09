import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [formData, setFormData] = useState({ email: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email.trim()) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setFormData({ email: '' });
      setTimeout(() => setStatus(null), 3000);
    }, 700);
  };

  return (
    <footer style={{
      backgroundColor: 'var(--theme-surface)',
      color: 'var(--theme-text-muted)',
      padding: '40px 0',
      borderTop: `1px solid var(--theme-border)`,
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}>
        {/* Main footer content */}
        <div className="footer-main" style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr',
          gap: '2.5rem',
          alignItems: 'start'
        }}>
          {/* Brand section */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              color: 'var(--theme-text)',
              marginBottom: '1rem',
              fontWeight: '400'
            }}>
              The Registry
            </h3>
            <p style={{
              fontSize: '0.9rem',
              lineHeight: '1.6',
              color: 'var(--theme-text-muted)'
            }}>
              Verified listings, market intelligence, and expert advisory for Kenya's premium property market.
            </p>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 style={{
              fontSize: '0.9rem',
              color: 'var(--theme-text-muted)',
              marginBottom: '1rem',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Newsletter
            </h4>
            <p style={{
              fontSize: '0.85rem',
              color: 'var(--theme-text-muted)',
              marginBottom: '1rem',
              lineHeight: '1.5'
            }}>
              Get market insights & new listings
            </p>
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <input
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) => setFormData({ email: e.target.value })}
                required
                style={{
                  padding: '0.6rem 0.75rem',
                  background: 'var(--theme-bg)',
                  border: '1px solid var(--theme-border)',
                  borderRadius: '4px',
                  color: 'var(--theme-text)',
                  fontSize: '0.85rem',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--theme-accent)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--theme-border)';
                }}
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                style={{
                  padding: '0.6rem',
                  background: 'var(--theme-accent)',
                  color: '#0e0e0e',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: status === 'sending' ? 'wait' : 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (status !== 'sending') {
                    e.currentTarget.style.background = 'var(--theme-accent-strong)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--theme-accent)';
                }}
              >
                {status === 'sending' ? 'Sending...' : status === 'sent' ? '✓ Subscribed!' : 'Subscribe'}
              </button>
            </form>
            {status === 'error' && (
              <p style={{ color: '#e74c3c', fontSize: '0.75rem', marginTop: '0.5rem' }}>
                Invalid email
              </p>
            )}
          </div>

          {/* Quick Links */}
          <div className="footer-links-section">
            <h4 style={{
              fontSize: '0.9rem',
              color: 'var(--theme-text-muted)',
              marginBottom: '1rem',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Quick Links
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <Link href="/about">
                <span style={{
                  color: '#6c757d',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  cursor: 'pointer'
                }}>About Us</span>
              </Link>
              <Link href="/team">
                <span style={{
                  color: '#6c757d',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  cursor: 'pointer'
                }}>Team</span>
              </Link>
              <Link href="/listings">
                <span style={{
                  color: '#6c757d',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  cursor: 'pointer'
                }}>Listings</span>
              </Link>
              <Link href="/services">
                <span style={{
                  color: '#6c757d',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  cursor: 'pointer'
                }}>Services</span>
              </Link>
              <Link href="/insights">
                <span style={{
                  color: '#6c757d',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  cursor: 'pointer'
                }}>Market Insights</span>
              </Link>
              <Link href="/partners">
                <span style={{
                  color: '#6c757d',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  cursor: 'pointer'
                }}>Partners</span>
              </Link>
            </div>
          </div>

          {/* Legal Links */}
          <div className="footer-links-section">
            <h4 style={{
              fontSize: '0.9rem',
              color: 'var(--theme-text-muted)',
              marginBottom: '1rem',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Legal
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <Link href="/terms">
                <span style={{
                  color: '#6c757d',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  cursor: 'pointer'
                }}>Terms of Service</span>
              </Link>
              <Link href="/privacy">
                <span style={{
                  color: '#6c757d',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  cursor: 'pointer'
                }}>Privacy Policy</span>
              </Link>
              <Link href="/contact">
                <span style={{
                  color: '#6c757d',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  cursor: 'pointer'
                }}>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontSize: '0.9rem',
              color: 'var(--theme-text-muted)',
              marginBottom: '1rem',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Contact
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              fontSize: '0.95rem'
            }}>
              <p style={{ margin: 0 }}>Nairobi, Kenya</p>
              <p style={{ margin: 0 }}>+254 (0) 700 000 000</p>
              <p style={{ margin: 0 }}>info@theregistry.co.ke</p>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="copyright-bar" style={{
          borderTop: `1px solid var(--theme-border)`,
          paddingTop: '1.5rem',
          fontSize: '0.9rem',
          color: 'var(--theme-text-muted)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} The Registry. All rights reserved.
          </p>
          
          {/* Social Media Icons */}
          <div className="social-icons" style={{
            display: 'flex',
            gap: '0.75rem',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/company/theregistry" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                background: 'var(--theme-accent)',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(0,0,0,0.8)">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/254700000000" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                background: 'var(--theme-accent)',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(0,0,0,0.8)">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com/theregistry.ke" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                background: 'var(--theme-accent)',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(0,0,0,0.8)">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
            </a>

            {/* Twitter/X */}
            <a 
              href="https://twitter.com/theregistry_ke" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                background: 'var(--theme-accent)',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(0,0,0,0.8)">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a 
              href="https://youtube.com/@theregistry" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="YouTube"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                background: 'var(--theme-accent)',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(0,0,0,0.8)">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Hover styles */}
      <style jsx>{`
        a:hover {
          color: var(--theme-text) !important;
        }
        
        .footer-links-section {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          min-height: 50px;
        }
        
        .footer-links-section nav {
          display: flex !important;
          visibility: visible !important;
        }
        
        .footer-links-section nav a {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          min-height: 20px;
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .footer-main {
            flex-direction: column !important;
            align-items: flex-start !important;
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          
          .footer-main > div {
            padding-bottom: 2rem;
            border-bottom: 1px solid var(--theme-border);
          }
          
          .footer-main > div:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
          
          .footer-links-section {
            width: 100%;
            display: block !important;
            margin-bottom: 0;
          }
          
          .copyright-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
            text-align: left !important;
            margin-top: 1rem !important;
          }
          
          .social-icons {
            justify-content: flex-start !important;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1200px) {
          .footer-main {
            grid-template-columns: 1fr 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
