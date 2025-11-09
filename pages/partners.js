import { useState } from "react";
import Layout from "../components/Layout";

export default function Partners() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    statement: "",
    experience: ""
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.category || !formData.email.trim() || 
        !formData.phone.trim() || !formData.linkedin.trim() || !formData.portfolio.trim() ||
        !formData.statement.trim() || !formData.experience) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setFormData({
        name: "",
        category: "",
        email: "",
        phone: "",
        linkedin: "",
        portfolio: "",
        statement: "",
        experience: ""
      });
    }, 700);
  };

  return (
    <Layout>
      <div style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "80px 20px",
        color: "var(--theme-text)",
        transition: 'color 0.3s ease'
      }}>
        {/* Hero Section */}
        <header style={{ 
          textAlign: "center", 
          marginBottom: "4rem",
          paddingBottom: "3rem",
          borderBottom: `1px solid var(--theme-border)`,
          transition: 'border-color 0.3s ease'
        }}>
          <h1 style={{
            fontSize: "2.5rem",
            margin: "0 0 1rem 0",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            background: `linear-gradient(135deg, var(--theme-accent), var(--theme-accent-strong))`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Join The Registry Network
          </h1>
          <p style={{
            fontSize: "1.2rem",
            color: "var(--theme-text-muted)",
            marginTop: "0.5rem",
            fontWeight: 300,
            transition: 'color 0.3s ease'
          }}>
            An invitation to Kenya's most discerning property professionals
          </p>
        </header>

        {/* Opening Statement */}
        <section style={{
          background: "var(--theme-surface)",
          padding: "2.5rem",
          borderRadius: "12px",
          border: `1px solid var(--theme-border)`,
          marginBottom: "3rem",
          transition: 'background 0.3s ease, border-color 0.3s ease'
        }}>
          <p style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "var(--theme-text)",
            margin: 0,
            transition: 'color 0.3s ease'
          }}>
            The Registry is Kenya's premier property verification platform, setting new standards in luxury 
            real estate presentation and trust. We work with a <strong style={{ color: "var(--theme-accent-strong)" }}>select group 
            of professionals</strong> who share our commitment to excellence, precision, and integrity.
          </p>
          <p style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "var(--theme-text)",
            marginTop: "1.5rem",
            marginBottom: 0,
            transition: 'color 0.3s ease'
          }}>
            Partnership with The Registry is <strong style={{ color: "var(--theme-accent-strong)" }}>by invitation and 
            application only</strong>. Our network represents the top tier of Kenya's property professionals—those 
            whose work speaks to quality, authenticity, and an unwavering standard of excellence.
          </p>
        </section>

        {/* Partner Categories */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{
            fontSize: "1.8rem",
            fontWeight: 400,
            marginBottom: "2rem",
            color: "var(--theme-text)",
            transition: 'color 0.3s ease'
          }}>
            Partnership Opportunities
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem"
          }}>
            {/* Visual Storytellers */}
            <div style={{
              background: "var(--theme-card-bg)",
              padding: "2rem",
              borderRadius: "12px",
              border: `1px solid var(--theme-border)`,
              transition: 'background 0.3s ease, border-color 0.3s ease'
            }}>
              <div style={{
                width: "48px",
                height: "48px",
                background: "linear-gradient(135deg, var(--theme-accent), var(--theme-accent-strong))",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem"
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke="rgba(0,0,0,0.8)" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="3" stroke="rgba(0,0,0,0.8)" strokeWidth="2"/>
                  <circle cx="17.5" cy="7.5" r="0.5" fill="rgba(0,0,0,0.8)"/>
                </svg>
              </div>
              <h3 style={{
                fontSize: "1.3rem",
                fontWeight: 500,
                marginBottom: "1rem",
                color: "var(--theme-text)",
                transition: 'color 0.3s ease'
              }}>
                Visual Storytellers
              </h3>
              <p style={{
                color: "var(--theme-text-muted)",
                lineHeight: "1.7",
                fontSize: "0.95rem",
                marginBottom: "1rem",
                transition: 'color 0.3s ease'
              }}>
                Photographers and videographers who understand architectural excellence and luxury aesthetics.
              </p>
              <ul style={{
                color: "var(--theme-text-muted)",
                lineHeight: "1.8",
                fontSize: "0.9rem",
                paddingLeft: "1.2rem",
                margin: 0,
                transition: 'color 0.3s ease'
              }}>
                <li>Portfolio demonstrating luxury real estate work</li>
                <li>Mastery of light, space, and composition</li>
                <li>Experience with properties valued at KSh 200M+</li>
                <li>Drone and 3D tour capabilities preferred</li>
              </ul>
            </div>

            {/* Real Estate Professionals */}
            <div style={{
              background: "var(--theme-card-bg)",
              padding: "2rem",
              borderRadius: "12px",
              border: `1px solid var(--theme-border)`,
              transition: 'background 0.3s ease, border-color 0.3s ease'
            }}>
              <div style={{
                width: "48px",
                height: "48px",
                background: "linear-gradient(135deg, var(--theme-accent), var(--theme-accent-strong))",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem"
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 21h18M3 7l9-4 9 4M5 21V10M19 21V10M9 21v-6h6v6" stroke="rgba(0,0,0,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={{
                fontSize: "1.3rem",
                fontWeight: 500,
                marginBottom: "1rem",
                color: "var(--theme-text)",
                transition: 'color 0.3s ease'
              }}>
                Real Estate Professionals
              </h3>
              <p style={{
                color: "var(--theme-text-muted)",
                lineHeight: "1.7",
                fontSize: "0.95rem",
                marginBottom: "1rem",
                transition: 'color 0.3s ease'
              }}>
                Agents and developers with proven track records in Kenya's premium property market.
              </p>
              <ul style={{
                color: "var(--theme-text-muted)",
                lineHeight: "1.8",
                fontSize: "0.9rem",
                paddingLeft: "1.2rem",
                margin: 0,
                transition: 'color 0.3s ease'
              }}>
                <li>Demonstrated expertise in properties KSh 200M+</li>
                <li>Commitment to verified listings only</li>
                <li>Professional standing and market reputation</li>
                <li>Client references from high-net-worth individuals</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section style={{
          background: "var(--theme-surface)",
          padding: "2.5rem",
          borderRadius: "12px",
          border: `1px solid var(--theme-border)`,
          marginBottom: "3rem",
          transition: 'background 0.3s ease, border-color 0.3s ease'
        }}>
          <h3 style={{
            fontSize: "1.5rem",
            fontWeight: 400,
            marginBottom: "1.5rem",
            color: "var(--theme-text)",
            transition: 'color 0.3s ease'
          }}>
            Why Partner With The Registry
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem"
          }}>
            <div>
              <div style={{
                color: "var(--theme-accent)",
                fontSize: "1.8rem",
                marginBottom: "0.5rem"
              }}>✓</div>
              <p style={{
                color: "var(--theme-text)",
                fontWeight: 500,
                marginBottom: "0.3rem",
                transition: 'color 0.3s ease'
              }}>Premium Network</p>
              <p style={{
                color: "var(--theme-text-muted)",
                fontSize: "0.9rem",
                lineHeight: "1.6",
                margin: 0,
                transition: 'color 0.3s ease'
              }}>
                Featured in Kenya's most prestigious property platform
              </p>
            </div>
            <div>
              <div style={{
                color: "var(--theme-accent)",
                fontSize: "1.8rem",
                marginBottom: "0.5rem"
              }}>✓</div>
              <p style={{
                color: "var(--theme-text)",
                fontWeight: 500,
                marginBottom: "0.3rem",
                transition: 'color 0.3s ease'
              }}>High-Value Clients</p>
              <p style={{
                color: "var(--theme-text-muted)",
                fontSize: "0.9rem",
                lineHeight: "1.6",
                margin: 0,
                transition: 'color 0.3s ease'
              }}>
                Direct referrals from discerning, high-net-worth individuals
              </p>
            </div>
            <div>
              <div style={{
                color: "var(--theme-accent)",
                fontSize: "1.8rem",
                marginBottom: "0.5rem"
              }}>✓</div>
              <p style={{
                color: "var(--theme-text)",
                fontWeight: 500,
                marginBottom: "0.3rem",
                transition: 'color 0.3s ease'
              }}>Elite Collaboration</p>
              <p style={{
                color: "var(--theme-text-muted)",
                fontSize: "0.9rem",
                lineHeight: "1.6",
                margin: 0,
                transition: 'color 0.3s ease'
              }}>
                Work alongside top-tier developers and architects
              </p>
            </div>
            <div>
              <div style={{
                color: "var(--theme-accent)",
                fontSize: "1.8rem",
                marginBottom: "0.5rem"
              }}>✓</div>
              <p style={{
                color: "var(--theme-text)",
                fontWeight: 500,
                marginBottom: "0.3rem",
                transition: 'color 0.3s ease'
              }}>Priority Access</p>
              <p style={{
                color: "var(--theme-text-muted)",
                fontSize: "0.9rem",
                lineHeight: "1.6",
                margin: 0,
                transition: 'color 0.3s ease'
              }}>
                First consideration for premium listing opportunities
              </p>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section>
          <h2 style={{
            fontSize: "1.8rem",
            fontWeight: 400,
            marginBottom: "1rem",
            color: "var(--theme-text)",
            transition: 'color 0.3s ease'
          }}>
            Submit Your Application
          </h2>
          <p style={{
            color: "var(--theme-text-muted)",
            marginBottom: "2rem",
            fontSize: "1rem",
            lineHeight: "1.7",
            transition: 'color 0.3s ease'
          }}>
            Applications are reviewed quarterly. We maintain rigorous standards to ensure every partner 
            reflects The Registry's commitment to excellence and verification.
          </p>

          <form onSubmit={handleSubmit} style={{
            background: "var(--theme-card-bg)",
            padding: "2.5rem",
            borderRadius: "12px",
            border: `1px solid var(--theme-border)`,
            transition: 'background 0.3s ease, border-color 0.3s ease'
          }}>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {/* Full Name */}
              <div>
                <label style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "var(--theme-text)",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  transition: 'color 0.3s ease'
                }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  style={{
                    width: "100%",
                    padding: "0.85rem",
                    background: "var(--theme-surface)",
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

              {/* Category */}
              <div>
                <label style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "var(--theme-text)",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  transition: 'color 0.3s ease'
                }}>
                  Professional Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                  style={{
                    width: "100%",
                    padding: "0.85rem",
                    background: "var(--theme-surface)",
                    border: "2px solid rgba(128, 128, 128, 0.3)",
                    borderRadius: "6px",
                    color: "var(--theme-text)",
                    fontSize: "1rem",
                    cursor: "pointer",
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
                >
                  <option value="">Select category...</option>
                  <option value="photographer">Photographer / Videographer</option>
                  <option value="real-estate">Real Estate Professional</option>
                </select>
              </div>

              {/* Email & Phone */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1.5rem"
              }}>
                <div>
                  <label style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "var(--theme-text)",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    transition: 'color 0.3s ease'
                  }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    style={{
                      width: "100%",
                      padding: "0.85rem",
                      background: "var(--theme-surface)",
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
                <div>
                  <label style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "var(--theme-text)",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    transition: 'color 0.3s ease'
                  }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    style={{
                      width: "100%",
                      padding: "0.85rem",
                      background: "var(--theme-surface)",
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
              </div>

              {/* LinkedIn & Portfolio */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1.5rem"
              }}>
                <div>
                  <label style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "var(--theme-text)",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    transition: 'color 0.3s ease'
                  }}>
                    LinkedIn Profile URL *
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    placeholder="https://linkedin.com/in/..."
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    required
                    style={{
                      width: "100%",
                      padding: "0.85rem",
                      background: "var(--theme-surface)",
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
                <div>
                  <label style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "var(--theme-text)",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    transition: 'color 0.3s ease'
                  }}>
                    Portfolio / Work Link *
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    placeholder="https://..."
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    required
                    style={{
                      width: "100%",
                      padding: "0.85rem",
                      background: "var(--theme-surface)",
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
              </div>

              {/* Years of Experience */}
              <div>
                <label style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "var(--theme-text)",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  transition: 'color 0.3s ease'
                }}>
                  Years of Experience in Luxury Property Sector *
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  required
                  style={{
                    width: "100%",
                    padding: "0.85rem",
                    background: "var(--theme-surface)",
                    border: "2px solid rgba(128, 128, 128, 0.3)",
                    borderRadius: "6px",
                    color: "var(--theme-text)",
                    fontSize: "1rem",
                    cursor: "pointer",
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
                >
                  <option value="">Select experience...</option>
                  <option value="2-5">2-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              {/* Statement */}
              <div>
                <label style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "var(--theme-text)",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  transition: 'color 0.3s ease'
                }}>
                  Why would you be a valuable addition to The Registry network? * (Max 200 words)
                </label>
                <textarea
                  name="statement"
                  rows={5}
                  maxLength={1200}
                  value={formData.statement}
                  onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                  required
                  style={{
                    width: "100%",
                    padding: "0.85rem",
                    background: "var(--theme-surface)",
                    border: "2px solid rgba(128, 128, 128, 0.3)",
                    borderRadius: "6px",
                    color: "var(--theme-text)",
                    fontSize: "1rem",
                    resize: "vertical",
                    lineHeight: "1.6",
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
                <div style={{
                  fontSize: "0.85rem",
                  color: "var(--theme-text-muted)",
                  marginTop: "0.5rem",
                  transition: 'color 0.3s ease'
                }}>
                  {formData.statement.length} / 1200 characters
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                style={{
                  background: "linear-gradient(135deg, var(--theme-accent), var(--theme-accent-strong))",
                  color: "var(--theme-bg)",
                  padding: "1rem 2.5rem",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: status === 'sending' ? 'wait' : 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(245, 185, 66, 0.25)',
                  marginTop: "0.5rem"
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
                {status === 'sending' ? 'Submitting Application...' : 'Submit Application'}
              </button>

              <div style={{ 
                fontSize: '0.75rem', 
                color: 'var(--theme-text-muted)', 
                marginTop: '0.5rem',
                fontStyle: 'italic',
                transition: 'color 0.3s ease'
              }}>
                We do not sell your data. <a href="/privacy" style={{ color: 'var(--theme-accent-strong)', textDecoration: 'underline' }}>Privacy Policy</a>
              </div>

              {/* Success Message */}
              {status === 'sent' && (
                <div style={{
                  padding: "1.25rem",
                  background: "rgba(76, 175, 80, 0.1)",
                  border: "1px solid rgba(76, 175, 80, 0.3)",
                  borderRadius: "8px",
                  color: "#4caf50",
                  fontSize: "1rem",
                  lineHeight: "1.6"
                }}>
                  <strong>Application submitted successfully.</strong><br />
                  We review applications quarterly and will contact qualified candidates within 8-12 weeks. 
                  If your profile aligns with our standards, you'll receive an invitation to proceed.
                </div>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <div style={{
                  padding: "1rem",
                  background: "rgba(244, 67, 54, 0.1)",
                  border: "1px solid rgba(244, 67, 54, 0.3)",
                  borderRadius: "8px",
                  color: "#f44336",
                  textAlign: "center",
                  fontSize: "0.95rem"
                }}>
                  Please complete all required fields.
                </div>
              )}
            </div>
          </form>

          {/* Review Timeline Note */}
          <div style={{
            marginTop: "2rem",
            padding: "1.5rem",
            background: "var(--theme-surface)",
            borderRadius: "8px",
            border: `1px solid var(--theme-border)`,
            transition: 'background 0.3s ease, border-color 0.3s ease'
          }}>
            <p style={{
              color: "var(--theme-text-muted)",
              fontSize: "0.9rem",
              lineHeight: "1.7",
              margin: 0,
              transition: 'color 0.3s ease'
            }}>
              <strong style={{ color: "var(--theme-text)", transition: 'color 0.3s ease' }}>Review Timeline:</strong> Applications 
              are assessed quarterly by our partnerships committee. Successful applicants receive detailed onboarding 
              within 8-12 weeks. This is not a listing platform—it's a curated partnership that elevates your professional practice.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
