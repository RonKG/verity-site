import { useState } from "react";
import Layout from "../components/Layout";
import OptimizedImage from "../components/OptimizedImage";

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
        color: "#f0f0f0",
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
            color: "#cfcfcf",
            maxWidth: "680px",
            lineHeight: 1.6
          }}>
            We love clear questions and concrete context. Tell us who you are, what you’re trying to do
            (buy, sell, verify, research) and any timelines or links that help — we’ll get back to you within 48 hours.
          </p>
        </header>

        <main style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "2rem" }}>
          {/* Form column */}
          <section>
            <form onSubmit={handleSubmit} aria-label="Contact form" style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
              padding: "1.25rem",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.04)",
              boxShadow: '0 8px 30px rgba(0,0,0,0.6)'
            }}>
              <div style={{ display: "grid", gap: "1rem" }}>
                <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <span style={{ color: "#e8e8e8", fontSize: "0.95rem" }}>Name</span>
                  <input
                    aria-label="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{
                      width: "100%",
                      padding: "0.6rem",
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "6px",
                      color: "#f0f0f0",
                      fontSize: "1rem"
                    }}
                  />
                </label>

                <div style={{ fontSize: '0.9rem', color: '#bfbfbf', background: 'rgba(255,255,255,0.01)', padding: '0.6rem', borderRadius: 8 }}>
                  Tip: include a link to the listing or a short note about budget/timeline — it helps us respond precisely.
                </div>

                <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <span style={{ color: "#e8e8e8", fontSize: "0.95rem" }}>Email</span>
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
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "6px",
                      color: "#f0f0f0",
                      fontSize: "1rem"
                    }}
                  />
                </label>

                <label style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <span style={{ color: "#e8e8e8", fontSize: "0.95rem" }}>Message</span>
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
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "6px",
                      color: "#f0f0f0",
                      fontSize: "1rem",
                      resize: "vertical"
                    }}
                  />
                </label>

                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    style={{
                      background: "linear-gradient(90deg,#f5b942,#c2a675)",
                      color: "#0e0e0e",
                      padding: "0.6rem 1.4rem",
                      border: "none",
                      borderRadius: "6px",
                      fontSize: "1rem",
                      cursor: status === 'sending' ? 'wait' : 'pointer',
                      fontWeight: 600
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
            background: '#0b0b0b',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.03)',
            height: 'fit-content',
            display: 'grid',
            gap: '1rem'
          }}>
            <div style={{ width: '100%', height: 140, borderRadius: 8, overflow: 'hidden' }}>
              <OptimizedImage src="https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=1200&q=80&auto=format&fit=crop" alt="Nairobi skyline" style={{ height: '140px' }} />
            </div>

            <h3 style={{ marginTop: 0, marginBottom: '0.25rem', color: '#f0f0f0' }}>Direct contact</h3>
            <p style={{ color: '#cfcfcf', marginBottom: '0.5rem' }}>Prefer direct mail or phone? We’re available during business hours in Nairobi.</p>

            <div style={{ display: 'grid', gap: '0.75rem' }}>
              <div>
                <strong style={{ color: '#f0f0f0', display: 'block' }}>Email</strong>
                <a href="mailto:info@theregistry.co.ke" style={{ color: '#c2a675', textDecoration: 'none' }}>info@theregistry.co.ke</a>
              </div>

              <div>
                <strong style={{ color: '#f0f0f0', display: 'block' }}>Phone</strong>
                <a href="tel:+254700000000" style={{ color: '#cfcfcf', textDecoration: 'none' }}>+254 (0) 700 000 000</a>
              </div>

              <div>
                <strong style={{ color: '#f0f0f0', display: 'block' }}>Location</strong>
                <span style={{ color: '#cfcfcf' }}>Nairobi, Kenya</span>
              </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.03)', paddingTop: '0.75rem', color: '#bfbfbf', fontSize: '0.9rem' }}>
              <strong style={{ color: '#f0f0f0', display: 'block', marginBottom: 6 }}>Why contact us?</strong>
              We verify listings, create premium presentations, and help with property research — tell us which you need and we'll advise the best next step.
            </div>
          </aside>
        </main>
      </div>
    </Layout>
  );
}