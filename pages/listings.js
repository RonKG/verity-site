import Layout from "../components/Layout";
import FeatureTeaser from "../components/FeatureTeaser";

export default function Listings() {
  const listings = [
    {
      id: 1,
      title: "The Ridge Residence – Kitisuru",
      location: "Kitisuru, Nairobi",
      price: "KSh 420M",
      specs: "5 Bed • 0.6 Acre",
      image:
        "https://www.elitehomeskenya.com/wp-content/uploads/2025/08/Luxury-Villas-in-Kenya.webp",
      description:
        "A contemporary hillside retreat with clean lines, panoramic glass, and sculpted gardens that blend privacy with open air. Smart climate zones, solar integration, and hardwood interiors deliver understated refinement.",
    },
    {
      id: 2,
      title: "Coastal Haven – Diani Beach",
      location: "Diani Beach, Kwale County",
      price: "KSh 310M",
      specs: "4 Bed • 1.2 Acre • Beachfront",
      image:
        "https://img.jamesedition.com/listing_images/2025/10/15/15/48/34/3cce02f3-4b65-433c-b0b8-8c18be9aaf1a/je/1900xxs.jpg",
      description:
        "Oceanfront living reimagined. Expansive terraces open directly to white sands and palm silhouettes. Architect-led design meets quiet seclusion — where every sunset feels curated.",
    },
    {
      id: 3,
      title: "Forest Edge Glasshouse – Karen",
      location: "Karen, Nairobi",
      price: "KSh 385M",
      specs: "4 Bed • 0.8 Acre",
      image:
        "https://www.flamaproperties.com/wp-content/uploads/2023/08/5-BEDROOMS-HOUSE-in-karen-flama-properties-8.jpg",
      description:
        "A living sculpture of glass and steel at the edge of Oloolua Forest. Expansive light, exposed textures, and intelligent space create harmony between structure and nature.",
    },
  ];

  return (
    <Layout>
      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "#0e0e0e",
          color: "#f0f0f0",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.2rem", fontWeight: "400", marginBottom: "1rem" }}>
          Featured Listings
        </h1>
        <p style={{ color: "#cfcfcf", marginBottom: "3rem" }}>
          Curated homes verified for design integrity, authenticity, and context.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {listings.map((home) => (
            <div
              key={home.id}
              style={{
                backgroundColor: "#151515",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
                textAlign: "left",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src={home.image}
                alt={home.title}
                style={{ width: "100%", height: "240px", objectFit: "cover" }}
              />
              <div style={{ padding: "1.5rem" }}>
                <h3 style={{ marginBottom: "0.5rem", color: "#fff" }}>{home.title}</h3>
                <p style={{ color: "#bcbcbc", fontSize: "0.95rem" }}>{home.location}</p>
                <p style={{ color: "#f5f5f5", fontWeight: "500", marginTop: "0.5rem" }}>
                  {home.price} • {home.specs}
                </p>
                <p style={{ color: "#a0a0a0", marginTop: "1rem", fontSize: "0.9rem" }}>
                  {home.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reusable feature teaser */}
      <FeatureTeaser />
    </Layout>
  );
}
