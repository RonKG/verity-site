import Layout from "../components/Layout";
import OptimizedImage from "../components/OptimizedImage";

export default function Team() {
  const members = [
    {
      name: "James Kamau",
      role: "Co-Founder & CEO",
      img: "https://plus.unsplash.com/premium_photo-1661511942092-a23c81ac5a31?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      bio: "James started The Registry after losing hours to paperwork and guesswork while helping family buy a home. He builds product to make property decisions faster and less faith-based — a practical idealist who believes clear records beat negotiation theater."
    },
    {
      name: "Amy Kamau",
      role: "Co-Founder & Head of Operations",
      img: "https://images.unsplash.com/photo-1573496527892-904f897eb744?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
      bio: "If there's a chain of custody, Amy has mapped it, simplified it, and taught five people how to use it. She runs verification, partnerships and the engine room that keeps our data honest — with a soft spot for problem tickets that are actually puzzles."
    },
    {
      name: "Ronald Wahome",
      role: "Co-Founder & Head of Technology",
      img: "https://plus.unsplash.com/premium_photo-1661299270240-1fccb9604606?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      bio: "Ronald is our tech and analytics brain: he builds the pipelines that tame noisy records and crafts the models that turn them into decision-ready signals. He loves architecture that scales and insights that surprise — and he pushes us to test the assumptions others take for granted."
    },
    {
      name: "Sophie Muthoni",
      role: "Design & Photography Lead",
      img: "https://plus.unsplash.com/premium_photo-1675419012023-44e6dbd55701?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1174",
      bio: "Sophie sees properties as narratives waiting to be told — preferably in perfect light at golden hour. She orchestrates shoots that make concrete look poetic and ensures every listing feels like an invitation, not a sales pitch. Rumor has it she once rescheduled a shoot four times for cloud coverage."
    },
    {
      name: "Michael Odhiambo",
      role: "Client Services • Partner",
      img: "https://images.unsplash.com/photo-1758519290811-b9df6340dc6a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331",
      bio: "Michael is the voice you hear when things get complicated — which, in property, is often. As our client services partner, he translates jargon, untangles timelines, and turns anxious buyers into informed decision-makers. Equal parts diplomat and detective, he follows up until there's nothing left to follow.",
      isPartner: true
    },
    {
      name: "Wanjiru Githinji",
      role: "Legal Counsel • Partner",
      img: "https://images.unsplash.com/photo-1634397414045-88204efd8353?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=765",
      bio: "Wanjiru reads title deeds the way others read novels — slowly, carefully, with an eye for plot holes. Our legal partner keeps transactions airtight and clients protected from the fine print that isn't so fine. She believes that good law should be invisible until you need it, then indispensable.",
      isPartner: true
    }
  ];

  return (
    <Layout>
      <section style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '60px 20px',
        color: 'var(--theme-text)',
        transition: 'color 0.3s ease'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h1 style={{ 
            fontSize: '2rem', 
            margin: 0, 
            fontWeight: 400, 
            background: `linear-gradient(45deg, var(--theme-accent), var(--theme-accent-strong))`, 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent' 
          }}>Our Team</h1>
          <p style={{ 
            color: 'var(--theme-text-muted)', 
            maxWidth: 820, 
            margin: '0.75rem auto 0',
            transition: 'color 0.3s ease'
          }}>
            We are a small, Nairobi-based team building data and tools for locals, expats and the diaspora who want to move, buy or invest in Kenya. Our focus is verification, clarity and making property markets more accessible.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
          {members.map((m) => (
            <div key={m.name} style={{ 
              background: 'var(--theme-surface)', 
              border: `1px solid var(--theme-border)`, 
              borderRadius: 12, 
              padding: '1rem', 
              textAlign: 'left',
              transition: 'background 0.3s ease, border-color 0.3s ease'
            }}>
              <div style={{ width: '100%', height: 220, borderRadius: 10, overflow: 'hidden' }}>
                <OptimizedImage src={m.img} alt={m.name} priority style={{ height: '220px' }} />
              </div>
              <div style={{ marginTop: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ 
                      fontSize: '1.05rem', 
                      fontWeight: 600, 
                      color: 'var(--theme-text)',
                      transition: 'color 0.3s ease'
                    }}>{m.name}</div>
                    <div style={{ 
                      fontSize: '0.9rem', 
                      color: 'var(--theme-accent-strong)',
                      transition: 'color 0.3s ease'
                    }}>{m.role}</div>
                  </div>
                </div>
                <p style={{ 
                  color: 'var(--theme-text-muted)', 
                  marginTop: '0.6rem', 
                  fontSize: '0.95rem',
                  transition: 'color 0.3s ease'
                }}>{m.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Heroes Section */}
        <div style={{
          marginTop: '3rem',
          padding: '2.5rem',
          background: 'var(--theme-surface)',
          border: `1px solid var(--theme-border)`,
          borderRadius: 12,
          transition: 'background 0.3s ease, border-color 0.3s ease'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '1.5rem'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 400,
              margin: '0 0 0.75rem 0',
              color: 'var(--theme-text)',
              transition: 'color 0.3s ease'
            }}>Our Heroes</h2>
            
            {/* Playful Hero Image */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '1.5rem 0'
            }}>
              <div style={{
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: `4px solid var(--theme-accent)`,
                boxShadow: '0 6px 20px rgba(245, 185, 66, 0.4)',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
                background: 'linear-gradient(135deg, #f5b942 0%, #c2a675 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05) rotate(5deg)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(245, 185, 66, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(245, 185, 66, 0.4)';
              }}
              >
                {/* Wacky Superhero SVG Illustration */}
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Cape */}
                  <path d="M30 35 L15 60 L25 80 L30 50 Z" fill="#e63946" opacity="0.9"/>
                  <path d="M70 35 L85 60 L75 80 L70 50 Z" fill="#e63946" opacity="0.9"/>
                  
                  {/* Body */}
                  <ellipse cx="50" cy="60" rx="18" ry="22" fill="#023047"/>
                  
                  {/* Head */}
                  <circle cx="50" cy="35" r="16" fill="#ffb703"/>
                  
                  {/* Mask */}
                  <ellipse cx="50" cy="35" rx="18" ry="8" fill="#023047"/>
                  
                  {/* Eyes */}
                  <ellipse cx="44" cy="35" rx="3" ry="5" fill="white"/>
                  <ellipse cx="56" cy="35" rx="3" ry="5" fill="white"/>
                  <circle cx="44" cy="36" r="2" fill="#023047"/>
                  <circle cx="56" cy="36" r="2" fill="#023047"/>
                  
                  {/* Smile */}
                  <path d="M 42 42 Q 50 46 58 42" stroke="#023047" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  
                  {/* Chest emblem - House */}
                  <rect x="45" y="55" width="10" height="8" fill="#f5b942"/>
                  <path d="M 40 60 L 50 52 L 60 60 Z" fill="#f5b942"/>
                  
                  {/* Arms - Power Pose */}
                  <ellipse cx="35" cy="55" rx="8" ry="5" fill="#ffb703" transform="rotate(-30 35 55)"/>
                  <ellipse cx="65" cy="55" rx="8" ry="5" fill="#ffb703" transform="rotate(30 65 55)"/>
                  
                  {/* Legs */}
                  <rect x="42" y="78" width="6" height="15" rx="3" fill="#023047"/>
                  <rect x="52" y="78" width="6" height="15" rx="3" fill="#023047"/>
                  
                  {/* Boots */}
                  <ellipse cx="45" cy="93" rx="4" ry="3" fill="#e63946"/>
                  <ellipse cx="55" cy="93" rx="4" ry="3" fill="#e63946"/>
                  
                  {/* Stars around head for extra whimsy */}
                  <path d="M 25 25 L 26 27 L 28 27 L 26.5 28.5 L 27 30 L 25 29 L 23 30 L 23.5 28.5 L 22 27 L 24 27 Z" fill="#f5b942"/>
                  <path d="M 75 25 L 76 27 L 78 27 L 76.5 28.5 L 77 30 L 75 29 L 73 30 L 73.5 28.5 L 72 27 L 74 27 Z" fill="#f5b942"/>
                </svg>
              </div>
            </div>

            <p style={{
              color: 'var(--theme-text-muted)',
              maxWidth: '700px',
              margin: '0 auto',
              fontSize: '1rem',
              lineHeight: '1.7',
              transition: 'color 0.3s ease'
            }}>
              Behind every verified listing and seamless transaction is a network of professionals who share our commitment 
              to integrity and excellence. These contractors and partners work across photography, legal services, valuations, 
              and property management — upholding the promise we make to our clients with unwavering precision and care.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem'
          }}>
            <div style={{
              padding: '1.5rem',
              background: 'var(--theme-bg)',
              borderRadius: '8px',
              border: `1px solid var(--theme-border)`,
              textAlign: 'center',
              transition: 'background 0.3s ease, border-color 0.3s ease'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '0.5rem'
              }}>📸</div>
              <h4 style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--theme-text)',
                marginBottom: '0.5rem',
                transition: 'color 0.3s ease'
              }}>Visual Storytellers</h4>
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--theme-text-muted)',
                lineHeight: '1.5',
                margin: 0,
                transition: 'color 0.3s ease'
              }}>
                Photographers and videographers who capture properties with artistry and authenticity
              </p>
            </div>

            <div style={{
              padding: '1.5rem',
              background: 'var(--theme-bg)',
              borderRadius: '8px',
              border: `1px solid var(--theme-border)`,
              textAlign: 'center',
              transition: 'background 0.3s ease, border-color 0.3s ease'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '0.5rem'
              }}>⚖️</div>
              <h4 style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--theme-text)',
                marginBottom: '0.5rem',
                transition: 'color 0.3s ease'
              }}>Legal Experts</h4>
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--theme-text-muted)',
                lineHeight: '1.5',
                margin: 0,
                transition: 'color 0.3s ease'
              }}>
                Conveyancing specialists and title experts ensuring every transaction is bulletproof
              </p>
            </div>

            <div style={{
              padding: '1.5rem',
              background: 'var(--theme-bg)',
              borderRadius: '8px',
              border: `1px solid var(--theme-border)`,
              textAlign: 'center',
              transition: 'background 0.3s ease, border-color 0.3s ease'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '0.5rem'
              }}>📊</div>
              <h4 style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--theme-text)',
                marginBottom: '0.5rem',
                transition: 'color 0.3s ease'
              }}>Valuation Professionals</h4>
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--theme-text-muted)',
                lineHeight: '1.5',
                margin: 0,
                transition: 'color 0.3s ease'
              }}>
                Certified valuers delivering impartial, data-backed property assessments
              </p>
            </div>

            <div style={{
              padding: '1.5rem',
              background: 'var(--theme-bg)',
              borderRadius: '8px',
              border: `1px solid var(--theme-border)`,
              textAlign: 'center',
              transition: 'background 0.3s ease, border-color 0.3s ease'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '0.5rem'
              }}>🏠</div>
              <h4 style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--theme-text)',
                marginBottom: '0.5rem',
                transition: 'color 0.3s ease'
              }}>Property Managers</h4>
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--theme-text-muted)',
                lineHeight: '1.5',
                margin: 0,
                transition: 'color 0.3s ease'
              }}>
                Trusted managers maintaining properties with the same rigor we apply to verification
              </p>
            </div>
          </div>

          <div style={{
            marginTop: '1.5rem',
            padding: '1rem',
            background: 'var(--theme-bg)',
            borderRadius: '8px',
            border: `1px solid var(--theme-border)`,
            textAlign: 'center',
            transition: 'background 0.3s ease, border-color 0.3s ease'
          }}>
            <p style={{
              fontSize: '0.9rem',
              color: 'var(--theme-text-muted)',
              margin: 0,
              lineHeight: '1.6',
              transition: 'color 0.3s ease'
            }}>
              Interested in joining our network? 
              <a href="/partners" style={{
                color: 'var(--theme-accent-strong)',
                textDecoration: 'none',
                marginLeft: '0.5rem',
                fontWeight: 500
              }}>Apply to become a partner →</a>
            </p>
          </div>
        </div>

        <div style={{ 
          marginTop: '1.75rem', 
          background: 'var(--theme-bg)', 
          border: `1px solid var(--theme-border)`, 
          padding: '1rem', 
          borderRadius: 10,
          transition: 'background 0.3s ease, border-color 0.3s ease'
        }}>
          <h3 style={{ 
            margin: 0, 
            color: 'var(--theme-text)',
            transition: 'color 0.3s ease'
          }}>Our mission</h3>
          <p style={{ 
            color: 'var(--theme-text-muted)', 
            marginTop: '0.5rem',
            transition: 'color 0.3s ease'
          }}>
            We believe access to clear, verified property information is a small design change with outsized impact: it helps families move without fear, lets returning expats reconnect with confidence, and gives diaspora or global investors a sturdy basis for decisions. We build tools that shrink uncertainty and reward careful verification — not better salesmanship.
          </p>
        </div>
      </section>
    </Layout>
  );
}
