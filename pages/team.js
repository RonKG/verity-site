import Layout from "../components/Layout";
import OptimizedImage from "../components/OptimizedImage";

export default function Team() {
  const members = [
    {
      name: "James Kamau",
      role: "Founder & CEO",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80&auto=format&fit=crop",
      bio: "James started The Registry after losing hours to paperwork and guesswork while helping family buy a home. He builds product to make property decisions faster and less faith-based — a practical idealist who believes clear records beat negotiation theater."
    {
      name: "Ronald Wahome",
      role: "Tech Lead — the tech brains",
      img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=1200&q=80&auto=format&fit=crop",
      bio: "Ronald turns messy public records into meaningful signals. He designs the methods and experiments that make our analytics reliable — and enjoys proving when conventional wisdom about a neighborhood needs updating."
    }
    },
    {
      name: "Ronald Wahome",
      role: "Head of Research",
      img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=1200&q=80&auto=format&fit=crop",
      bio: "Ronald turns messy public records into meaningful signals. He designs the methods and experiments that make our analytics reliable — and enjoys proving when conventional wisdom about a neighborhood needs updating."
    }
  ];

  return (
    <Layout>
      <section style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '60px 20px',
        color: '#f0f0f0'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h1 style={{ fontSize: '2rem', margin: 0, fontWeight: 400, background: 'linear-gradient(45deg, rgba(245,185,66,0.95), rgba(194,166,117,0.9))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Our Team</h1>
          <p style={{ color: '#cfcfcf', maxWidth: 820, margin: '0.75rem auto 0' }}>
            We are a small, Nairobi-based team building data and tools for locals, expats and the diaspora who want to move, buy or invest in Kenya. Our focus is verification, clarity and making property markets more accessible.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
          {members.map((m) => (
            <div key={m.name} style={{ background: '#141414', border: '1px solid #222', borderRadius: 12, padding: '1rem', textAlign: 'left' }}>
              <div style={{ width: '100%', height: 220, borderRadius: 10, overflow: 'hidden' }}>
                <OptimizedImage src={m.img} alt={m.name} priority style={{ height: '220px' }} />
              </div>
              <div style={{ marginTop: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#fff' }}>{m.name}</div>
                    <div style={{ fontSize: '0.9rem', color: '#c2a675' }}>{m.role}</div>
                  </div>
                </div>
                <p style={{ color: '#bfbfbf', marginTop: '0.6rem', fontSize: '0.95rem' }}>{m.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '1.75rem', background: '#0f0f0f', border: '1px solid #222', padding: '1rem', borderRadius: 10 }}>
          <h3 style={{ margin: 0, color: '#f5f5f5' }}>Our mission</h3>
          <p style={{ color: '#cfcfcf', marginTop: '0.5rem' }}>
            We believe access to clear, verified property information is a small design change with outsized impact: it helps families move without fear, lets returning expats reconnect with confidence, and gives diaspora or global investors a sturdy basis for decisions. We build tools that shrink uncertainty and reward careful verification — not better salesmanship.
          </p>
        </div>
      </section>
    </Layout>
  );
}
