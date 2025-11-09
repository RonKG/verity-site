import { useState } from 'react';

export default function FeatureTeaser() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '' });
    }, 700);
  };

  return (
    <section
      style={{
        backgroundColor: "var(--theme-surface)",
        padding: "80px 20px",
        textAlign: "center",
        color: "var(--theme-text)",
        marginTop: "80px",
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}
    >
      <h2
        style={{
          fontSize: "1.8rem",
          fontWeight: "400",
          marginBottom: "1rem",
          transition: 'color 0.3s ease'
        }}
      >
        Join Our Mailing List
      </h2>
      <p
        style={{
          color: "var(--theme-text-muted)",
          maxWidth: "700px",
          margin: "0 auto 2rem auto",
          fontSize: "1.05rem",
          lineHeight: "1.7",
          transition: 'color 0.3s ease'
        }}
      >
        We send new listings regularly and publish market summaries every quarter. 
        Stay informed about premium properties and market trends.
      </p>

      <form 
        onSubmit={handleSubmit}
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}
      >
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1rem"
        }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            style={{
              padding: "0.85rem",
              background: "var(--theme-bg)",
              border: "2px solid rgba(128, 128, 128, 0.3)",
              borderRadius: "6px",
              color: "var(--theme-text)",
              fontSize: "1rem",
              outline: "none",
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "rgba(128, 128, 128, 0.6)";
              e.currentTarget.style.boxShadow = "0 0 0 3px rgba(128, 128, 128, 0.1)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(128, 128, 128, 0.3)";
              e.currentTarget.style.boxShadow = "none";
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            style={{
              padding: "0.85rem",
              background: "var(--theme-bg)",
              border: "2px solid rgba(128, 128, 128, 0.3)",
              borderRadius: "6px",
              color: "var(--theme-text)",
              fontSize: "1rem",
              outline: "none",
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "rgba(128, 128, 128, 0.6)";
              e.currentTarget.style.boxShadow = "0 0 0 3px rgba(128, 128, 128, 0.1)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(128, 128, 128, 0.3)";
              e.currentTarget.style.boxShadow = "none";
            }}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          style={{
            background: "linear-gradient(135deg, var(--theme-accent), var(--theme-accent-strong))",
            color: "var(--theme-bg)",
            padding: "0.85rem 2rem",
            border: "none",
            borderRadius: "6px",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: status === 'sending' ? 'wait' : 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(245, 185, 66, 0.25)'
          }}
          onMouseEnter={(e) => {
            if (status !== 'sending') {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(245, 185, 66, 0.35)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(245, 185, 66, 0.25)';
          }}
        >
          {status === 'sending' ? 'Subscribing...' : 'Subscribe to Newsletter'}
        </button>

        <div style={{ 
          fontSize: '0.75rem', 
          color: 'var(--theme-text-muted)', 
          marginTop: '0.25rem',
          fontStyle: 'italic',
          transition: 'color 0.3s ease'
        }}>
          Your data stays private — we never share or sell it. <a href="/privacy" style={{ color: 'var(--theme-accent-strong)', textDecoration: 'underline' }}>Privacy Policy</a>
        </div>

        {status === 'sent' && (
          <div style={{
            padding: "1rem",
            background: "rgba(76, 175, 80, 0.1)",
            border: "1px solid rgba(76, 175, 80, 0.3)",
            borderRadius: "6px",
            color: "#4caf50",
            textAlign: "center",
            fontSize: "0.95rem",
            marginTop: "0.5rem"
          }}>
            Thank you for subscribing! You'll receive our latest updates.
          </div>
        )}

        {status === 'error' && (
          <div style={{
            padding: "1rem",
            background: "rgba(244, 67, 54, 0.1)",
            border: "1px solid rgba(244, 67, 54, 0.3)",
            borderRadius: "6px",
            color: "#f44336",
            textAlign: "center",
            fontSize: "0.95rem",
            marginTop: "0.5rem"
          }}>
            Please fill in all required fields.
          </div>
        )}
      </form>
    </section>
  );
}
