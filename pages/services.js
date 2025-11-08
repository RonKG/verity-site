import { useState } from "react";
import Layout from "../components/Layout";

export default function Services() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: ""
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.serviceType) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        message: ""
      });
    }, 700);
  };

  const services = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M9 11l3 3L22 4" stroke="var(--theme-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="var(--theme-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Property Verification & Listing",
      description: "From standard listings to premium white-glove service with professional photography, drone footage, and 3D virtual tours.",
      features: [
        "72-hour verification turnaround",
        "Title verification & validation",
        "Professional photography & videography",
        "Virtual 3D tours & drone footage",
        "Premium platform placement",
        "Social media promotion"
      ]
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="var(--theme-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8v4l2 2" stroke="var(--theme-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Market Research & Data Services",
      description: "Comprehensive market insights, bespoke data extracts, and API access for real-time property intelligence.",
      features: [
        "Regional price analysis & forecasting",
        "Custom data extracts & queries",
        "API access with developer documentation",
        "Historical trend analysis",
        "Portfolio valuation reports",
        "Automated valuation models (AVM)"
      ]
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="var(--theme-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="var(--theme-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="var(--theme-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Consultancy Services",
      description: "Strategic advisory for investors, developers, and institutions navigating Kenya's premium property market.",
      features: [
        "Investment advisory & portfolio strategy",
        "Market entry guidance",
        "Developer consulting & positioning",
        "Institutional services & bulk verification",
        "Risk assessment & due diligence",
        "Custom reporting dashboards"
      ]
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="var(--theme-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="var(--theme-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Title & Legal Services",
      description: "Comprehensive title verification, legal documentation review, and transaction support services.",
      features: [
        "Title verification & searches",
        "Legal documentation review",
        "Due diligence coordination",
        "Transaction support",
        "Regulatory compliance assistance",
        "Lease documentation review"
      ]
    }
  ];

  const caseStudies = [
    {
      client: "Private Equity Firm",
      service: "Portfolio Acquisition Strategy",
      result: "Identified and verified KSh 2.1B in premium properties across Nairobi, reducing acquisition risk by 35% through comprehensive due diligence.",
      metric: "KSh 2.1B",
      metricLabel: "Portfolio Value"
    },
    {
      client: "International Developer",
      service: "Market Entry & Positioning",
      result: "Provided market intelligence and strategic positioning that resulted in 40% faster sales velocity compared to market average in Kilimani district.",
      metric: "40%",
      metricLabel: "Faster Sales"
    },
    {
      client: "Family Office",
      service: "White Glove Listing Service",
      result: "Premium marketing package including 3D tours and professional photography achieved 23% above asking price for Runda estate property.",
      metric: "+23%",
      metricLabel: "Above Asking"
    }
  ];

  return (
    <Layout>
      <div style={{
        backgroundColor: "var(--theme-bg)",
        color: "var(--theme-text)",
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}>
        {/* Hero Section */}
        <section style={{
          padding: "100px 20px 60px",
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto"
        }}>
          <h1 style={{
            fontSize: "2.75rem",
            fontWeight: "400",
            marginBottom: "1rem",
            letterSpacing: "-0.01em",
            background: `linear-gradient(45deg, var(--theme-accent), var(--theme-accent-strong))`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Our Services
          </h1>
          <p style={{
            fontSize: "1.15rem",
            color: "var(--theme-text-muted)",
            lineHeight: "1.7",
            maxWidth: "750px",
            margin: "0 auto",
            transition: 'color 0.3s ease'
          }}>
            Comprehensive real estate solutions tailored to Kenya's premium property market. 
            From verification to consultancy, we deliver clarity and confidence at every step.
          </p>
        </section>

        {/* Services Grid */}
        <section style={{
          padding: "40px 20px 80px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem"
          }}>
            {services.map((service, index) => (
              <div key={index} style={{
                background: "var(--theme-surface)",
                border: `1px solid var(--theme-border)`,
                borderRadius: "12px",
                padding: "1.75rem",
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                  {service.icon}
                  <h3 style={{
                    fontSize: "1.25rem",
                    fontWeight: "500",
                    margin: 0,
                    color: "var(--theme-text)",
                    transition: 'color 0.3s ease'
                  }}>
                    {service.title}
                  </h3>
                </div>
                <p style={{
                  color: "var(--theme-text-muted)",
                  lineHeight: "1.6",
                  marginBottom: "1.25rem",
                  fontSize: "0.95rem",
                  transition: 'color 0.3s ease'
                }}>
                  {service.description}
                </p>
                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  gap: "0.5rem",
                  gridTemplateColumns: "repeat(2, 1fr)"
                }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      fontSize: "0.85rem",
                      color: "var(--theme-text-muted)",
                      transition: 'color 0.3s ease'
                    }}>
                      <span style={{
                        color: "var(--theme-accent)",
                        fontSize: "1rem",
                        lineHeight: "1",
                        transition: 'color 0.3s ease'
                      }}>•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section style={{
          padding: "60px 20px",
          background: "var(--theme-card-bg)",
          transition: 'background 0.3s ease'
        }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            <div style={{
              textAlign: "center",
              marginBottom: "2.5rem"
            }}>
              <h2 style={{
                fontSize: "2.25rem",
                fontWeight: "400",
                marginBottom: "0.75rem",
                color: "var(--theme-text)",
                transition: 'color 0.3s ease'
              }}>
                Client Success Stories
              </h2>
              <p style={{
                color: "var(--theme-text-muted)",
                fontSize: "1.05rem",
                maxWidth: "700px",
                margin: "0 auto",
                transition: 'color 0.3s ease'
              }}>
                Real results from clients who trust The Registry for their property needs
              </p>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem"
            }}>
              {caseStudies.map((study, index) => (
                <div key={index} style={{
                  background: "var(--theme-surface)",
                  border: `1px solid var(--theme-border)`,
                  borderRadius: "12px",
                  padding: "1.75rem",
                  position: "relative",
                  overflow: "hidden",
                  transition: 'all 0.3s ease'
                }}>
                  {/* Decorative corner element */}
                  <div style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "80px",
                    height: "80px",
                    background: `linear-gradient(135deg, var(--theme-accent), var(--theme-accent-strong))`,
                    opacity: 0.08,
                    borderRadius: "0 12px 0 100%"
                  }} />

                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    marginBottom: "1.25rem"
                  }}>
                    <div style={{
                      background: `linear-gradient(135deg, var(--theme-accent), var(--theme-accent-strong))`,
                      color: "var(--theme-bg)",
                      padding: "0.75rem 1rem",
                      borderRadius: "8px",
                      fontWeight: "600",
                      fontSize: "1.5rem",
                      textAlign: "center"
                    }}>
                      {study.metric}
                    </div>
                    <div style={{
                      textAlign: "center"
                    }}>
                      <div style={{
                        fontSize: "0.8rem",
                        color: "var(--theme-text-muted)",
                        marginBottom: "0.25rem",
                        transition: 'color 0.3s ease'
                      }}>
                        {study.metricLabel}
                      </div>
                      <div style={{
                        fontWeight: "500",
                        color: "var(--theme-text)",
                        fontSize: "1.05rem",
                        transition: 'color 0.3s ease'
                      }}>
                        {study.client}
                      </div>
                    </div>
                  </div>

                  <div style={{
                    fontSize: "0.85rem",
                    color: "var(--theme-accent-strong)",
                    fontWeight: "500",
                    marginBottom: "0.75rem",
                    transition: 'color 0.3s ease'
                  }}>
                    {study.service}
                  </div>

                  <p style={{
                    color: "var(--theme-text-muted)",
                    lineHeight: "1.6",
                    margin: 0,
                    fontSize: "0.9rem",
                    transition: 'color 0.3s ease'
                  }}>
                    {study.result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section style={{
          padding: "60px 20px 80px",
          maxWidth: "900px",
          margin: "0 auto"
        }}>
          <div style={{
            textAlign: "center",
            marginBottom: "2rem"
          }}>
            <h2 style={{
              fontSize: "2rem",
              fontWeight: "400",
              marginBottom: "0.5rem",
              color: "var(--theme-text)",
              transition: 'color 0.3s ease'
            }}>
              Get Started
            </h2>
            <p style={{
              color: "var(--theme-text-muted)",
              fontSize: "1rem",
              transition: 'color 0.3s ease'
            }}>
              Tell us about your needs and we'll get back to you within 48 hours
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "2rem",
            alignItems: "start"
          }}>
            {/* Contact Form */}
            <form onSubmit={handleSubmit} style={{
              background: "var(--theme-surface)",
              padding: "2rem",
              borderRadius: "12px",
              border: `1px solid var(--theme-border)`,
              boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
              transition: 'background 0.3s ease, border-color 0.3s ease'
            }}>
              <div style={{ display: "grid", gap: "1.25rem" }}>
                <div>
                  <label style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "var(--theme-text)",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    transition: 'color 0.3s ease'
                  }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    style={{
                      width: "100%",
                      padding: "0.7rem",
                      backgroundColor: "var(--theme-bg)",
                      border: `1px solid var(--theme-border)`,
                      borderRadius: "6px",
                      color: "var(--theme-text)",
                      fontSize: "0.95rem",
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      color: "var(--theme-text)",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      transition: 'color 0.3s ease'
                    }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      style={{
                        width: "100%",
                        padding: "0.7rem",
                        backgroundColor: "var(--theme-bg)",
                        border: `1px solid var(--theme-border)`,
                        borderRadius: "6px",
                        color: "var(--theme-text)",
                        fontSize: "0.95rem",
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      color: "var(--theme-text)",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      transition: 'color 0.3s ease'
                    }}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      style={{
                        width: "100%",
                        padding: "0.7rem",
                        backgroundColor: "var(--theme-bg)",
                        border: `1px solid var(--theme-border)`,
                        borderRadius: "6px",
                        color: "var(--theme-text)",
                        fontSize: "0.95rem",
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "var(--theme-text)",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    transition: 'color 0.3s ease'
                  }}>
                    Service Interest *
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                    required
                    style={{
                      width: "100%",
                      padding: "0.7rem",
                      backgroundColor: "var(--theme-bg)",
                      border: `1px solid var(--theme-border)`,
                      borderRadius: "6px",
                      color: "var(--theme-text)",
                      fontSize: "0.95rem",
                      transition: 'all 0.3s ease',
                      cursor: "pointer"
                    }}
                  >
                    <option value="">Select a service...</option>
                    <option value="standard-listing">Standard Property Listing</option>
                    <option value="white-glove">White Glove Listing Service</option>
                    <option value="market-research">Market Research & Insights</option>
                    <option value="data-api">Bespoke Data Extracts / API Access</option>
                    <option value="investment-advisory">Investment Advisory</option>
                    <option value="developer-consulting">Developer Consulting</option>
                    <option value="institutional">Institutional Services</option>
                    <option value="title-legal">Title & Legal Services</option>
                    <option value="other">Other / Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "var(--theme-text)",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    transition: 'color 0.3s ease'
                  }}>
                    Tell us about your needs
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    style={{
                      width: "100%",
                      padding: "0.7rem",
                      backgroundColor: "var(--theme-bg)",
                      border: `1px solid var(--theme-border)`,
                      borderRadius: "6px",
                      color: "var(--theme-text)",
                      fontSize: "0.95rem",
                      resize: "vertical",
                      transition: 'all 0.3s ease'
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
                    borderRadius: "8px",
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
                  {status === 'sending' ? 'Sending...' : 'Request Information'}
                </button>

                {status === 'sent' && (
                  <div style={{
                    padding: "1rem",
                    background: "rgba(76, 175, 80, 0.1)",
                    border: "1px solid rgba(76, 175, 80, 0.3)",
                    borderRadius: "6px",
                    color: "#4caf50",
                    textAlign: "center",
                    fontSize: "0.9rem"
                  }}>
                    Thank you! We'll get back to you within 48 hours.
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
                    fontSize: "0.9rem"
                  }}>
                    Please complete all required fields.
                  </div>
                )}
              </div>
            </form>

            {/* Side Info Panel */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem"
            }}>
              {/* Quick Contact */}
              <div style={{
                background: "var(--theme-surface)",
                border: `1px solid var(--theme-border)`,
                borderRadius: "12px",
                padding: "1.5rem",
                transition: 'background 0.3s ease, border-color 0.3s ease'
              }}>
                <h3 style={{
                  fontSize: "1.1rem",
                  fontWeight: "500",
                  marginBottom: "1rem",
                  color: "var(--theme-text)",
                  transition: 'color 0.3s ease'
                }}>
                  Need Help?
                </h3>
                <p style={{
                  fontSize: "0.9rem",
                  color: "var(--theme-text-muted)",
                  marginBottom: "1rem",
                  lineHeight: "1.6",
                  transition: 'color 0.3s ease'
                }}>
                  Don't see your specific need listed? Contact our research team directly.
                </p>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  fontSize: "0.85rem"
                }}>
                  <a href="mailto:research@theregistry.co.ke" style={{
                    textDecoration: "none",
                    color: "var(--theme-accent-strong)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontWeight: "500",
                    transition: 'color 0.3s ease'
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    research@theregistry.co.ke
                  </a>
                  <a href="tel:+254700000000" style={{
                    textDecoration: "none",
                    color: "var(--theme-accent-strong)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontWeight: "500",
                    transition: 'color 0.3s ease'
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    +254 (0) 700 000 000
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div style={{
                background: `linear-gradient(135deg, var(--theme-accent), var(--theme-accent-strong))`,
                borderRadius: "12px",
                padding: "1.5rem",
                position: "relative",
                overflow: "hidden"
              }}>
                <div style={{
                  position: "absolute",
                  inset: 0,
                  opacity: 0.1,
                  backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.4) 0%, transparent 50%)'
                }} />
                
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{
                    fontSize: "2rem",
                    fontWeight: "600",
                    color: "rgba(0,0,0,0.9)",
                    marginBottom: "0.5rem"
                  }}>
                    48hrs
                  </div>
                  <div style={{
                    fontSize: "0.9rem",
                    color: "rgba(0,0,0,0.75)",
                    lineHeight: "1.5"
                  }}>
                    Average response time for all inquiries
                  </div>
                </div>
              </div>

              {/* API & Data Services Note */}
              <div style={{
                background: "var(--theme-card-bg)",
                border: `1px solid var(--theme-border)`,
                borderRadius: "12px",
                padding: "1.5rem",
                transition: 'background 0.3s ease, border-color 0.3s ease'
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "0.75rem"
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" stroke="var(--theme-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h4 style={{
                    fontSize: "0.95rem",
                    fontWeight: "500",
                    margin: 0,
                    color: "var(--theme-text)",
                    transition: 'color 0.3s ease'
                  }}>
                    Custom Solutions
                  </h4>
                </div>
                <p style={{
                  fontSize: "0.85rem",
                  color: "var(--theme-text-muted)",
                  margin: 0,
                  lineHeight: "1.5",
                  transition: 'color 0.3s ease'
                }}>
                  Looking for API access, bespoke data extracts, or custom consultancy? Select the relevant option or reach out directly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Responsive Styles */}
        <style jsx>{`
          @media (max-width: 968px) {
            div[style*="gridTemplateColumns: \"2fr 1fr\""] {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 768px) {
            section h1 {
              font-size: 2rem !important;
            }
            section h2 {
              font-size: 1.5rem !important;
            }
            div[style*="gridTemplateColumns: \"repeat(2, 1fr)\""] {
              grid-template-columns: 1fr !important;
            }
            div[style*="gridTemplateColumns: \"repeat(3, 1fr)\""] {
              grid-template-columns: 1fr !important;
            }
            div[style*="gridTemplateColumns: \"1fr 1fr\""] {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 600px) {
            div[style*="gridTemplateColumns: \"repeat(2, 1fr)\""] ul {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
}
