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
            We love clear questions and concrete context. Tell us who you are, what you’re trying to do
            (buy, sell, verify, research) and any timelines or links that help — we’ll get back to you within 48 hours.
          </p>
        </header>

        <main style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 360px", 
          gap: "2rem",
        }}>
          <style jsx>{`
            @media (max-width: 768px) {
              main {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
          
          {/* Form column */}
          <section>
            <form onSubmit={handleSubmit} aria-label="Contact form" style={{
              background: "var(--theme-card-bg)",
              padding: "1.25rem",
              borderRadius: "12px",
              border: `1px solid var(--theme-border)`,
              boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
              transition: 'background 0.3s ease, border-color 0.3s ease'
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
                    <div style={{ color: '#bde7b0' }}>Message received — we’ll reply within 48 hours.</div>
                  )}
                  {status === 'error' && (
                    <div style={{ color: '#ffbcbc' }}>Please complete all fields.</div>
                  )}
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
            height: 'fit-content',
            display: 'grid',
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
                <strong style={{ color: 'var(--theme-text)', display: 'block' }}>Location</strong>
                <span style={{ color: 'var(--theme-text-muted)' }}>Nairobi, Kenya</span>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </Layout>
  );
}