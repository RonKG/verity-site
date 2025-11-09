export default function CredibilitySection() {
  const testimonials = [
    {
      quote: "It blows my mind. The Registry changed everything about how we verify luxury properties. Made our entire verification process 5x faster.",
      authorName: "Alex Chen",
      handle: "@propertytech",
      avatarUrl: "https://cdn.pixabay.com/photo/2021/12/09/13/32/man-6858165_960_720.jpg"
    },
    {
      quote: "I've said it many times, but I'll say it again. The Registry is the GOAT for luxury property verification. You just need to try it once to understand.",
      authorName: "Wanjiku Mwangi",
      handle: "@wmwangi",
      avatarUrl: "https://cdn.pixabay.com/photo/2024/09/02/18/02/woman-9017569_1280.jpg"
    },
    {
      quote: "This is absolutely mind-blowing. Changed how we approach property validation. So much faster than our old process.",
      authorName: "Mike Wilson",
      handle: "@wilsonprops",
      avatarUrl: "https://cdn.pixabay.com/photo/2022/07/29/04/03/man-7351001_1280.jpg"
    }
  ];

  return (
    <section style={{
      backgroundColor: "var(--theme-surface)",
      padding: "60px 20px",
      color: "var(--theme-text)",
      borderTop: `1px solid var(--theme-border)`,
      background: `linear-gradient(to bottom, var(--theme-surface), var(--theme-bg))`,
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "2rem",
        alignItems: "stretch"
      }}>
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "360px",
              margin: "0 auto",
              width: "100%"
            }}
          >
            <p style={{
              fontSize: "1rem",
              marginBottom: "1.5rem",
              color: "var(--theme-text-muted)",
              flex: "1 1 auto",
              fontWeight: "400",
              lineHeight: "1.7",
              fontStyle: "italic",
              letterSpacing: "0.01em",
              transition: 'color 0.3s ease'
            }}>
              {testimonial.quote}
            </p>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem"
            }}>
              <img 
                src={testimonial.avatarUrl} 
                alt={testimonial.authorName}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: `2px solid var(--theme-border)`
                }}
              />
              <div>
                <p style={{
                  fontSize: "0.95rem",
                  color: "var(--theme-text)",
                  margin: 0,
                  fontWeight: "500",
                  transition: 'color 0.3s ease'
                }}>
                  {testimonial.authorName}
                </p>
                <p style={{
                  fontSize: "0.85rem",
                  margin: 0,
                  color: "var(--theme-text-muted)",
                  transition: 'color 0.3s ease'
                }}>
                  {testimonial.handle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}