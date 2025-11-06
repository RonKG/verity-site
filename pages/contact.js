import { useState } from 'react';
import Layout from "../components/Layout";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Layout>
      <div style={{
        minHeight: "100vh",
        backgroundColor: "#0e0e0e",
        color: "#f0f0f0",
        padding: "80px 20px",
      }}>
        <div style={{
          maxWidth: "1000px",
          margin: "0 auto",
          position: "relative",
        }}>
          {/* Subtle background gradient */}
          <div style={{
            position: "absolute",
            top: "-50%",
            left: "50%",
            width: "800px",
            height: "800px",
            transform: "translateX(-50%)",
            background: "radial-gradient(circle, rgba(245,185,66,0.03) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

                  <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
            position: "relative",
            zIndex: 1,
          }}>
            {/* Contact Form Section */}
            <div style={{
              backgroundColor: "rgba(21,21,21,0.6)",
              padding: "3rem",
              borderRadius: "20px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.03)",
              position: "relative",
            }}>
              <h2 style={{ 
                fontSize: "1.6rem", 
                marginBottom: "2rem",
                fontWeight: "400",
                color: "#f5b942",
                letterSpacing: "0.5px",
              }}>
                Send us a Message
              </h2>
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    style={{
                      width: "100%",
                      padding: "1rem",
                      backgroundColor: "rgba(0,0,0,0.2)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      borderRadius: "12px",
                      color: "#fff",
                      fontSize: "0.95rem",
                      transition: "border-color 0.2s ease",
                      outline: "none",
                    }}
                    onFocus={(e) => e.target.style.borderColor = "rgba(245,185,66,0.3)"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.05)"}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    style={{
                      width: "100%",
                      padding: "1rem",
                      backgroundColor: "rgba(0,0,0,0.2)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      borderRadius: "12px",
                      color: "#fff",
                      fontSize: "0.95rem",
                      transition: "border-color 0.2s ease",
                      outline: "none",
                    }}
                    onFocus={(e) => e.target.style.borderColor = "rgba(245,185,66,0.3)"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.05)"}
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows="4"
                    style={{
                      width: "100%",
                      padding: "1rem",
                      backgroundColor: "rgba(0,0,0,0.2)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      borderRadius: "12px",
                      color: "#fff",
                      fontSize: "0.95rem",
                      resize: "vertical",
                      transition: "border-color 0.2s ease",
                      outline: "none",
                      minHeight: "120px",
                    }}
                    onFocus={(e) => e.target.style.borderColor = "rgba(245,185,66,0.3)"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.05)"}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: isSubmitting ? "rgba(245,185,66,0.7)" : "#f5b942",
                    color: "#000",
                    padding: "1rem",
                    border: "none",
                    borderRadius: "12px",
                    fontSize: "0.95rem",
                    cursor: isSubmitting ? "default" : "pointer",
                    fontWeight: "500",
                    transition: "all 0.2s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => !isSubmitting && (e.target.style.backgroundColor = "#ffd56a")}
                  onMouseLeave={(e) => !isSubmitting && (e.target.style.backgroundColor = "#f5b942")}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {submitStatus === 'success' && (
                  <div style={{
                    color: "#4CAF50",
                    fontSize: "0.9rem",
                    textAlign: "center",
                    marginTop: "0.5rem",
                  }}>
                    Thank you! Your message has been sent.
                  </div>
                )}
              </div>
            </form>
            </div>

            {/* Info Section */}
            <div style={{
              backgroundColor: "rgba(21,21,21,0.6)",
              padding: "3rem",
              borderRadius: "20px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.03)",
              height: "fit-content",
              position: "sticky",
              top: "2rem",
            }}>
              <h2 style={{ 
                fontSize: "1.6rem",
                marginBottom: "2rem",
                fontWeight: "400",
                color: "#f5b942",
                letterSpacing: "0.5px",
              }}>
                Contact Information
              </h2>

              <div style={{ 
                display: "grid", 
                gap: "2rem" 
              }}>
                {/* Address */}
                <div>
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                    color: "#f5b942",
                  }}>
                    <span>📍</span>
                    <span style={{ fontSize: "0.95rem" }}>Location</span>
                  </div>
                  <p style={{ color: "#ccc", lineHeight: "1.6", paddingLeft: "2rem" }}>
                    Landmark Plaza, 14th Floor<br />
                    Argwings Kodhek Road<br />
                    Nairobi, Kenya
                  </p>
                </div>

                {/* Contact */}
                <div>
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                    color: "#f5b942",
                  }}>
                    <span>📞</span>
                    <span style={{ fontSize: "0.95rem" }}>Get in Touch</span>
                  </div>
                  <div style={{ paddingLeft: "2rem", color: "#ccc" }}>
                    <p style={{ marginBottom: "0.5rem" }}>+254 (0) 20 123 4567</p>
                    <p>info@verityproperties.co.ke</p>
                  </div>
                </div>

                {/* Hours */}
                <div>
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                    color: "#f5b942",
                  }}>
                    <span>🕒</span>
                    <span style={{ fontSize: "0.95rem" }}>Hours</span>
                  </div>
                  <div style={{ paddingLeft: "2rem", color: "#ccc" }}>
                    <p style={{ marginBottom: "0.25rem" }}>Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p style={{ marginBottom: "0.25rem" }}>Sat: 9:00 AM - 2:00 PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>

                {/* Social Links */}
                <div style={{ marginTop: "1rem" }}>
                  <div style={{ 
                    display: "flex", 
                    gap: "1rem" 
                  }}>
                    {[
                      { name: "LinkedIn", icon: "🔗" },
                      { name: "Twitter", icon: "🐦" },
                      { name: "Instagram", icon: "📸" },
                      { name: "Facebook", icon: "👥" }
                    ].map((social) => (
                      <a
                        key={social.name}
                        href="#"
                        title={social.name}
                        style={{
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "rgba(0,0,0,0.2)",
                          border: "1px solid rgba(255,255,255,0.05)",
                          borderRadius: "50%",
                          color: "#ccc",
                          textDecoration: "none",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "rgba(245,185,66,0.1)";
                          e.target.style.borderColor = "rgba(245,185,66,0.2)";
                          e.target.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "rgba(0,0,0,0.2)";
                          e.target.style.borderColor = "rgba(255,255,255,0.05)";
                          e.target.style.transform = "translateY(0)";
                        }}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}