import Layout from "../components/Layout";
import OptimizedImage from "../components/OptimizedImage";

export default function Team() {
  const members = [
    {
      name: "James Kamau",
      role: "Founder & CEO",
      img: "https://plus.unsplash.com/premium_photo-1723575750878-472d1f54766d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      bio: "James started The Registry after losing hours to paperwork and guesswork while helping family buy a home. He builds product to make property decisions faster and less faith-based — a practical idealist who believes clear records beat negotiation theater."
    },
    {
      name: "Amy Kamau",
      role: "Head of Operations",
      img: "https://images.unsplash.com/photo-1573496527892-904f897eb744?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
      bio: "If there’s a chain of custody, Amy has mapped it, simplified it, and taught five people how to use it. She runs verification, partnerships and the engine room that keeps our data honest — with a soft spot for problem tickets that are actually puzzles."
    },
    {
      name: "Ronald Wahome",
      role: "Head of Technology & Analytics",
      img: "https://images.unsplash.com/photo-1656313815939-6373a497bbf2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      bio: "Ronald is our tech and analytics brain: he builds the pipelines that tame noisy records and crafts the models that turn them into decision-ready signals. He loves architecture that scales and insights that surprise — and he pushes us to test the assumptions others take for granted."
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
