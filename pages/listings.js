import { useRouter } from 'next/router';
import Layout from "../components/Layout";
import FeatureTeaser from "../components/FeatureTeaser";

export default function Listings() {
  const router = useRouter();
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
    {
      id: 4,
      title: "Nyali Coral Estate",
      location: "Nyali, Mombasa",
      price: "KSh 295M",
      specs: "6 Bed • 0.5 Acre • Sea View",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
      description: "Mediterranean-inspired beachfront villa with private access to Nyali Beach. Features include infinity pool, smart home automation, and a dedicated yacht berth at the nearby marina.",
    },
    {
      id: 5,
      title: "Muthaiga Ambassador's Villa",
      location: "Muthaiga, Nairobi",
      price: "KSh 480M",
      specs: "7 Bed • 1.5 Acre • Embassy Row",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
      description: "Historic estate reimagined with modern luxury. Diplomatic-grade security, helipaid-ready grounds, and state-of-the-art entertainment pavilion. A legacy property in Nairobi's most prestigious address.",
    },
    {
      id: 6,
      title: "Diani Coral Penthouse",
      location: "Diani Beach, Kwale County",
      price: "KSh 225M",
      specs: "4 Bed • 6000 sq ft • Oceanfront",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
      description: "Luxury penthouse with 360° views of the Indian Ocean. Floor-to-ceiling windows, private rooftop garden, and direct beach access. Fully furnished with designer pieces.",
    },
    {
      id: 7,
      title: "Spring Valley Modern Manor",
      location: "Spring Valley, Nairobi",
      price: "KSh 395M",
      specs: "5 Bed • 0.75 Acre • Pool",
      image: "https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?auto=format&fit=crop&w=1600&q=80",
      description: "Architectural masterpiece with double-height ceilings and dramatic open spaces. Smart home integration, wine cellar, and resort-style pool area with entertainment deck.",
    },
    {
      id: 8,
      title: "Watamu Beach Villa",
      location: "Watamu, Kilifi County",
      price: "KSh 280M",
      specs: "5 Bed • 0.9 Acre • Beachfront",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
      description: "Balinese-inspired luxury villa with direct access to Watamu Marine Park. Featuring traditional makuti roofing, infinity pool, and private beach cove.",
    },
    {
      id: 9,
      title: "Runda Water Gardens",
      location: "Runda, Nairobi",
      price: "KSh 320M",
      specs: "6 Bed • 0.5 Acre • Waterfront",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
      description: "Contemporary waterfront residence overlooking Runda dam. Features cascading water gardens, meditation pavilion, and state-of-the-art home theatre.",
    },
    {
      id: 10,
      title: "English Point Marina Penthouse",
      location: "Tudor, Mombasa",
      price: "KSh 265M",
      specs: "4 Bed • 5500 sq ft • Marina View",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=80",
      description: "Ultra-luxury penthouse in Mombasa's premier marina development. Private elevator, yacht berth, and panoramic harbor views. Smart home technology throughout.",
    },
    {
      id: 11,
      title: "Loresho Heights Estate",
      location: "Loresho, Nairobi",
      price: "KSh 355M",
      specs: "5 Bed • 0.4 Acre • City View",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
      description: "Elevated living with panoramic city views. Features include vertical gardens, glass elevator, and infinity edge pool overlooking the Nairobi skyline.",
    },
    {
      id: 12,
      title: "Karen Horse Estate",
      location: "Karen, Nairobi",
      price: "KSh 445M",
      specs: "6 Bed • 2.5 Acre • Equestrian",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      description: "Exclusive equestrian estate with world-class stables and training facilities. Main house features wine cellar, library, and staff quarters. Adjacent to Karen Horse Club.",
    },
    {
      id: 13,
      title: "Kilifi Bay Villa",
      location: "Kilifi, Kilifi County",
      price: "KSh 255M",
      specs: "4 Bed • 1.0 Acre • Oceanfront",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      description: "Modern coastal retreat with private beach access. Featuring indigenous gardens, infinity pool, and guest cottage. Perfect blend of luxury and coastal living.",
    },
    {
      id: 14,
      title: "Lavington Green Estate",
      location: "Lavington, Nairobi",
      price: "KSh 375M",
      specs: "5 Bed • 0.7 Acre • Pool",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
      description: "Contemporary family compound with emphasis on sustainable living. Solar-powered, rainwater harvesting, and organic kitchen garden. Complete with home automation and security systems.",
    },
    {
      id: 15,
      title: "Vipingo Ridge Golf Villa",
      location: "Vipingo, Kilifi County",
      price: "KSh 290M",
      specs: "4 Bed • 0.8 Acre • Golf Course",
      image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=80",
      description: "Luxury golf villa overlooking the PGA Baobab Course. Premium finishes, indoor-outdoor living spaces, and private golf cart garage. Access to exclusive club amenities.",
    }
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
            padding: "0 1rem",
          }}
        >
          {listings.map((home) => (
            <div
              key={home.id}
              onClick={() => router.push(`/listings/${home.id}`)}
              style={{
                backgroundColor: "#151515",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
                textAlign: "left",
                transition: "transform 0.3s ease",
                cursor: "pointer",
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
