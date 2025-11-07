import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#0a0a0a',
      color: '#888',
      padding: '40px 0',
      borderTop: '1px solid rgba(255,255,255,0.05)'
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
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          {/* Brand section */}
          <div style={{ maxWidth: '300px' }}>
            <h3 style={{
              fontSize: '1.5rem',
              color: '#f0f0f0',
              marginBottom: '1rem',
              fontWeight: '400'
            }}>
              The Registry
            </h3>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: '1.6',
              color: '#888'
            }}>
              Setting new standards in property verification and luxury real estate presentation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '0.9rem',
              color: '#aaa',
              marginBottom: '1rem',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Quick Links
            </h4>
            <nav style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <Link href="/about" style={{
                color: '#888',
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'color 0.2s'
              }}>
                About Us
              </Link>
              <Link href="/listings" style={{
                color: '#888',
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'color 0.2s'
              }}>
                Listings
              </Link>
              <Link href="/insights" style={{
                color: '#888',
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'color 0.2s'
              }}>
                Market Insights
              </Link>
              <Link href="/team" style={{
                color: '#888',
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'color 0.2s'
              }}>
                Team
              </Link>
            </nav>
          </div>

          {/* Legal Links */}
          <div>
            <h4 style={{
              fontSize: '0.9rem',
              color: '#aaa',
              marginBottom: '1rem',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Legal
            </h4>
            <nav style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <Link href="/terms" style={{
                color: '#888',
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'color 0.2s'
              }}>
                Terms of Service
              </Link>
              <Link href="/privacy" style={{
                color: '#888',
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'color 0.2s'
              }}>
                Privacy Policy
              </Link>
              <Link href="/contact" style={{
                color: '#888',
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'color 0.2s'
              }}>
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontSize: '0.9rem',
              color: '#aaa',
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
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '1.5rem',
          fontSize: '0.9rem',
          color: '#666',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} The Registry. All rights reserved.
          </p>
          <div style={{
            display: 'flex',
            gap: '2rem'
          }}>
            <a href="#" style={{
              color: '#666',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}>
              Twitter
            </a>
            <a href="#" style={{
              color: '#666',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}>
              LinkedIn
            </a>
            <a href="#" style={{
              color: '#666',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}>
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Hover styles */}
      <style jsx>{`
        a:hover {
          color: #f0f0f0 !important;
        }
      `}</style>
    </footer>
  );
}
