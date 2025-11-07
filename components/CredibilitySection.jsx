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
      authorName: "Sarah Martinez",
      handle: "@smartinez",
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
      backgroundColor: "#161616",
      padding: "60px 0",
      color: "#f0f0f0",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      background: "linear-gradient(to bottom, #161616, #1a1a1a)"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 40px",
        display: "flex",
        alignItems: "stretch",
        gap: "3rem",
        justifyContent: "center"
      }}>
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              flex: "1 1 0",
              maxWidth: "360px"
            }}
          >
            <p style={{
              fontSize: "1rem",
              marginBottom: "1.5rem",
              color: "#d0d0d0",
              flex: "1 1 auto",
              fontWeight: "400",
              lineHeight: "1.7",
              className: "quote-text",
              fontStyle: "italic",
              letterSpacing: "0.01em"
            }}>
              "{testimonial.quote}"
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
                  border: "2px solid rgba(255,255,255,0.1)"
                }}
              />
              <div>
                <p style={{
                  fontSize: "0.95rem",
                  color: "#f0f0f0",
                  margin: 0,
                  fontWeight: "500",
                  className: "author-name"
                }}>
                  {testimonial.authorName}
                </p>
                <p style={{
                  fontSize: "0.85rem",
                  margin: 0,
                  color: "#888",
                  className: "author-handle"
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