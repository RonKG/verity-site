import { useState } from "react";
import Layout from "../components/Layout";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    // Lightweight local UX: pretend to send and show success.
    setTimeout(() => {
      setStatus('sent');
      setName("");
      setEmail("");
      setMessage("");
    }, 700);
  };

  return (
    <Layout>
      <div style={{
        maxWidth: "920px",
        margin: "0 auto",
        padding: "72px 20px",
        color: "var(--theme-text)",
        backgroundImage: "radial-gradient(circle at 10% 10%, rgba(245,185,66,0.02), transparent 10%), radial-gradient(circle at 90% 80%, rgba(194,166,117,0.02), transparent 8%)"
      }}>
        <header style={{ marginBottom: "2.5rem" }}>
          <h1 style={{
            fontSize: "2.25rem",
            margin: 0,
            fontWeight: 400,
            letterSpacing: "-0.01em"
          }}>Start a conversation</h1>
          <p style={{
            marginTop: "0.75rem",
            color: "var(--theme-text-muted)",
            maxWidth: "680px",
            lineHeight: 1.6
          }}>
            This form is for <strong style={{ color: "var(--theme-text)" }}>general and media inquiries</strong>. 
            For service-related requests (property verification, market research, consultancy), please use our{" "}
            <a 
              href="/services" 
              style={{
                color: "var(--theme-accent-strong)",
                textDecoration: "none",
                borderBottom: "1px dotted var(--theme-accent-strong)",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderBottomStyle = "solid";
                e.currentTarget.style.opacity = "0.8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderBottomStyle = "dotted";
                e.currentTarget.style.opacity = "1";
              }}
            >
              services form
            </a>.
          </p>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <main style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr 360px", 
            gap: "2rem",
            alignItems: "stretch"
          }}>
            <style jsx>{`
              @media (max-width: 768px) {
                main {
                  grid-template-columns: 1fr !important;
                }
                .social-section {
                  padding: 1.5rem !important;
                }
              }
            `}</style>
            
            {/* Form column */}
            <section>
            <form onSubmit={handleSubmit} aria-label="Contact form" style={{
              background: "var(--theme-card-bg)",
              padding: "1.5rem",
              borderRadius: "12px",
              border: `1px solid var(--theme-border)`,
              boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
              transition: 'background 0.3s ease, border-color 0.3s ease',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ display: "grid", gap: "1rem" }}>
                <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <span style={{ color: "var(--theme-text)", fontSize: "0.95rem" }}>Name</span>
                  <input
                    aria-label="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{
                      width: "100%",
                      padding: "0.6rem",
                      backgroundColor: "var(--theme-surface)",
                      border: `1px solid var(--theme-border)`,
                      borderRadius: "6px",
                      color: "var(--theme-text)",
                      fontSize: "1rem",
                      transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease'
                    }}
                  />
                </label>

                <div style={{ fontSize: '0.9rem', color: 'var(--theme-text-muted)', background: 'var(--theme-card-bg)', padding: '0.6rem', borderRadius: 8, transition: 'background 0.3s ease, color 0.3s ease' }}>
                  Tip: include a link to the listing or a short note about budget/timeline — it helps us respond precisely.
                </div>

                <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <span style={{ color: "var(--theme-text)", fontSize: "0.95rem" }}>Email</span>
                  <input
                    aria-label="Email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      width: "100%",
                      padding: "0.6rem",
                      backgroundColor: "var(--theme-surface)",
                      border: `1px solid var(--theme-border)`,
                      borderRadius: "6px",
                      color: "var(--theme-text)",
                      fontSize: "1rem",
                      transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease'
                    }}
                  />
                </label>

                <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <span style={{ color: "var(--theme-text)", fontSize: "0.95rem" }}>Message</span>
                  <textarea
                    aria-label="Message"
                    name="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    style={{
                      width: "100%",
                      padding: "0.6rem",
                      backgroundColor: "var(--theme-surface)",
                      border: `1px solid var(--theme-border)`,
                      borderRadius: "6px",
                      color: "var(--theme-text)",
                      fontSize: "1rem",
                      resize: "vertical",
                      transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease'
                    }}
                  />
                </label>

                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    style={{
                      background: "linear-gradient(90deg, var(--theme-accent), var(--theme-accent-strong))",
                      color: "var(--theme-bg)",
                      padding: "0.6rem 1.4rem",
                      border: "none",
                      borderRadius: "6px",
                      fontSize: "1rem",
                      cursor: status === 'sending' ? 'wait' : 'pointer',
                      fontWeight: 600,
                      transition: 'filter 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(0.95)'}
                    onMouseLeave={(e) => e.currentTarget.style.filter = 'none'}
                  >
                    {status === 'sending' ? 'Sending…' : 'Start conversation'}
                  </button>

                  {status === 'sent' && (
                    <div style={{ color: '#bde7b0' }}>Message received — we'll reply within 48 hours.</div>
                  )}
                  {status === 'error' && (
                    <div style={{ color: '#ffbcbc' }}>Please complete all fields.</div>
                  )}
                </div>

                <div style={{ 
                  fontSize: '0.75rem', 
                  color: 'var(--theme-text-muted)', 
                  marginTop: '0.5rem',
                  fontStyle: 'italic',
                  transition: 'color 0.3s ease'
                }}>
                  We do not sell your data.
                </div>
              </div>
            </form>
          </section>

          {/* Contact card */}
          <aside style={{
            background: 'var(--theme-surface)',
            padding: '1.5rem',
            borderRadius: '12px',
            border: `1px solid var(--theme-border)`,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            transition: 'background 0.3s ease, border-color 0.3s ease'
          }}>
            <div style={{ 
              width: '100%', 
              height: 140, 
              borderRadius: 8, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              background: 'linear-gradient(135deg, var(--theme-accent) 0%, var(--theme-accent-strong) 100%)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Background pattern */}
              <div style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.1,
                backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)'
              }} />
              
              {/* Contact icon */}
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'relative', zIndex: 1 }}>
                <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" 
                  stroke="rgba(0,0,0,0.75)" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 style={{ marginTop: 0, marginBottom: '0.25rem', color: 'var(--theme-text)' }}>Direct contact</h3>
            <p style={{ color: 'var(--theme-text-muted)', marginBottom: '0.5rem' }}>Prefer direct mail or phone? We're available during business hours in Nairobi.</p>

            <div style={{ display: 'grid', gap: '0.75rem' }}>
              <div>
                <strong style={{ color: 'var(--theme-text)', display: 'block' }}>Email</strong>
                <a href="mailto:info@theregistry.co.ke" style={{ color: 'var(--theme-accent-strong)', textDecoration: 'none' }}>info@theregistry.co.ke</a>
              </div>

              <div>
                <strong style={{ color: 'var(--theme-text)', display: 'block' }}>Phone</strong>
                <a href="tel:+254700000000" style={{ color: 'var(--theme-text-muted)', textDecoration: 'none' }}>+254 (0) 700 000 000</a>
              </div>

              <div>
                <strong style={{ color: 'var(--theme-text)', display: 'block', marginBottom: '0.25rem' }}>Physical Address</strong>
                <address style={{ 
                  color: 'var(--theme-text-muted)', 
                  fontStyle: 'normal',
                  lineHeight: '1.6',
                  fontSize: '0.95rem'
                }}>
                  The Registry<br />
                  Westlands Business District<br />
                  Parklands Road<br />
                  Nairobi, Kenya
                </address>
              </div>
            </div>
          </aside>
        </main>

        {/* Social Media Links - Below both boxes */}
        <section className="social-section" style={{
          background: 'var(--theme-surface)',
          padding: '2rem',
          borderRadius: '12px',
          border: `1px solid var(--theme-border)`,
          transition: 'background 0.3s ease, border-color 0.3s ease'
        }}>
          <h3 style={{ 
            margin: '0 0 1.25rem 0', 
            color: 'var(--theme-text)',
            fontSize: '1.25rem',
            fontWeight: 500,
            transition: 'color 0.3s ease'
          }}>Connect with us</h3>
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            flexWrap: 'wrap',
            justifyContent: 'flex-start'
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
                width: '44px',
                height: '44px',
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(0,0,0,0.8)">
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
                width: '44px',
                height: '44px',
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(0,0,0,0.8)">
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
                width: '44px',
                height: '44px',
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(0,0,0,0.8)">
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
                width: '44px',
                height: '44px',
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(0,0,0,0.8)">
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
                width: '44px',
                height: '44px',
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(0,0,0,0.8)">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </section>
        </div>
      </div>
    </Layout>
  );
}