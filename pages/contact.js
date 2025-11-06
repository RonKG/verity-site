import { useState } from 'react';
import Layout from "../components/Layout";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! This is a demo form.');
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
      }}>
        {/* Hero Section */}
        <div style={{
          padding: "120px 20px 60px",
          position: "relative",
          background: "linear-gradient(45deg, #0e0e0e 0%, #151515 100%)",
          overflow: "hidden",
        }}>
          {/* Decorative background pattern */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.03,
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }} />

          <div style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
          }}>
            <h1 style={{
              fontSize: "2.8rem",
              fontWeight: "500",
              marginBottom: "1.5rem",
              background: "linear-gradient(45deg, #f5b942, #c2a675)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Get in Touch
            </h1>
            <p style={{
              fontSize: "1.2rem",
              color: "#ccc",
              lineHeight: "1.6",
              maxWidth: "600px",
              margin: "0 auto 2rem",
            }}>
              Whether you're looking to list your property or explore investment opportunities,
              our team is here to assist you every step of the way.
            </p>

            {/* Quick Contact Options */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              marginTop: "3rem",
            }}>
              {[
                { icon: "📞", label: "Call Us", value: "+254 (0) 20 123 4567" },
                { icon: "✉️", label: "Email", value: "info@verityproperties.co.ke" }
              ].map((item, index) => (
                <div key={index} style={{
                  background: "rgba(255,255,255,0.03)",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                  minWidth: "200px",
                  transition: "transform 0.2s ease",
                  cursor: "pointer",
                }} onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"}
                   onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                  <span style={{ fontSize: "2rem" }}>{item.icon}</span>
                  <div style={{ color: "#aaa", fontSize: "0.9rem" }}>{item.label}</div>
                  <div style={{ color: "#f5b942", fontWeight: "500" }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div style={{
          padding: "0 20px 80px",
          position: "relative",
          background: "linear-gradient(0deg, #0e0e0e 0%, #111111 100%)",
        }}>
          <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "start",
          position: "relative",
          zIndex: 1,
        }}>
          {/* Contact Form Section */}
          <div style={{
            backgroundColor: "#151515",
            padding: "2.5rem",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            border: "1px solid rgba(255,255,255,0.05)",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Decorative corner accent */}
            <div style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "150px",
              height: "150px",
              background: "linear-gradient(45deg, transparent 48%, rgba(245,185,66,0.03) 50%, rgba(245,185,66,0.1) 100%)",
              borderRadius: "0 16px 0 150px",
            }} />
            
            <h2 style={{ 
              fontSize: "1.8rem", 
              marginBottom: "2rem",
              fontWeight: "400",
              position: "relative",
            }}>
              Send us a Message
              <div style={{
                width: "60px",
                height: "3px",
                background: "#f5b942",
                marginTop: "12px",
                borderRadius: "2px",
              }} />
            </h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "1.2rem" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", color: "#ccc" }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    backgroundColor: "#1d1d1d",
                    border: "1px solid #333",
                    borderRadius: "6px",
                    color: "#fff",
                    fontSize: "1rem",
                  }}
                />
              </div>
              <div style={{ marginBottom: "1.2rem" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", color: "#ccc" }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    backgroundColor: "#1d1d1d",
                    border: "1px solid #333",
                    borderRadius: "6px",
                    color: "#fff",
                    fontSize: "1rem",
                  }}
                />
              </div>
              <div style={{ marginBottom: "1.2rem" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", color: "#ccc" }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    backgroundColor: "#1d1d1d",
                    border: "1px solid #333",
                    borderRadius: "6px",
                    color: "#fff",
                    fontSize: "1rem",
                  }}
                />
              </div>
              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", color: "#ccc" }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    backgroundColor: "#1d1d1d",
                    border: "1px solid #333",
                    borderRadius: "6px",
                    color: "#fff",
                    fontSize: "1rem",
                    resize: "vertical",
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: "#f5b942",
                  color: "#000",
                  padding: "0.8rem 2rem",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "1rem",
                  cursor: "pointer",
                  fontWeight: "500",
                  transition: "background-color 0.2s ease",
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "#ffd56a"}
                onMouseOut={(e) => e.target.style.backgroundColor = "#f5b942"}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div>
            {/* Map Placeholder */}
            <div style={{
              backgroundColor: "#151515",
              borderRadius: "16px",
              overflow: "hidden",
              marginBottom: "2rem",
              border: "1px solid rgba(255,255,255,0.05)",
              position: "relative",
            }}>
              <div style={{
                background: "linear-gradient(45deg, #151515, #1a1a1a)",
                height: "240px",
                position: "relative",
                overflow: "hidden",
              }}>
                {/* Decorative map elements */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  opacity: 0.03,
                  background: `
                    linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent),
                    linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)
                  `,
                  backgroundSize: '50px 50px',
                }} />
                <div style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "40px",
                  height: "40px",
                  background: "#f5b942",
                  borderRadius: "50%",
                  boxShadow: "0 0 0 8px rgba(245,185,66,0.2), 0 0 0 16px rgba(245,185,66,0.1)",
                }} />
              </div>
            </div>

            {/* Office Location */}
            <div style={{
              backgroundColor: "#151515",
              padding: "2rem",
              borderRadius: "16px",
              marginBottom: "2rem",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}>
              <h3 style={{ 
                fontSize: "1.4rem", 
                marginBottom: "1rem", 
                fontWeight: "400",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}>
                <span style={{ color: "#f5b942" }}>📍</span> Our Office
              </h3>
              <p style={{ color: "#ccc", lineHeight: "1.6", marginBottom: "1rem" }}>
                Verity Properties Ltd<br />
                Landmark Plaza, 14th Floor<br />
                Argwings Kodhek Road<br />
                Nairobi, Kenya
              </p>
              <p style={{ color: "#ccc", marginBottom: "0.5rem" }}>
                📞 +254 (0) 20 123 4567
              </p>
              <p style={{ color: "#ccc" }}>
                ✉️ info@verityproperties.co.ke
              </p>
            </div>

            {/* Social Links */}
            <div style={{
              backgroundColor: "#151515",
              padding: "2rem",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              border: "1px solid rgba(255,255,255,0.05)",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Decorative background */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "radial-gradient(circle at top right, rgba(245,185,66,0.03) 0%, transparent 60%)",
              }} />
              
              <h3 style={{ 
                fontSize: "1.4rem", 
                marginBottom: "1.5rem", 
                fontWeight: "400",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                position: "relative",
              }}>
                <span style={{ color: "#f5b942" }}>🌐</span> Connect With Us
              </h3>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1rem",
                position: "relative",
              }}>
                {[
                  { name: "LinkedIn", icon: "🔗", url: "#", color: "#0077b5" },
                  { name: "Twitter", icon: "🐦", url: "#", color: "#1DA1F2" },
                  { name: "Instagram", icon: "📸", url: "#", color: "#E4405F" },
                  { name: "Facebook", icon: "👥", url: "#", color: "#1877F2" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "0.8rem",
                      backgroundColor: "#1d1d1d",
                      border: "1px solid #333",
                      borderRadius: "6px",
                      color: "#ccc",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#252525";
                      e.target.style.borderColor = "#444";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "#1d1d1d";
                      e.target.style.borderColor = "#333";
                    }}
                  >
                    <span style={{ marginRight: "0.5rem" }}>{social.icon}</span>
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div style={{
              backgroundColor: "#151515",
              padding: "2rem",
              borderRadius: "12px",
              marginTop: "2rem",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            }}>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "1rem", fontWeight: "400" }}>
                Business Hours
              </h3>
              <div style={{ color: "#ccc", lineHeight: "1.8" }}>
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}