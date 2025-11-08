import { useRouter } from 'next/router';
import { useState, useCallback, useEffect } from 'react';
import Layout from "../../components/Layout";
import OptimizedImage from "../../components/OptimizedImage";

// Detailed property data
const propertyDetails = {
  1: {
    title: "The Ridge Residence – Kitisuru",
    location: "Kitisuru, Nairobi",
    price: "KSh 420M",
    specs: {
      bedrooms: 5,
      bathrooms: 6,
      plotSize: "0.6 Acre",
      builtArea: "12,000 sq ft",
      yearBuilt: 2024,
      parking: "4 cars",
      style: "Contemporary Modern",
    },
    description: "Perched elegantly on Kitisuru Ridge, this architectural masterpiece represents the pinnacle of modern luxury living in Nairobi. The Ridge Residence seamlessly blends contemporary design with environmental consciousness, creating an unparalleled living experience that celebrates both sophistication and sustainability.\n\nThis exclusive property spans 12,000 square feet of meticulously crafted living space, set within 0.6 acres of sculpted gardens. The residence features clean architectural lines, floor-to-ceiling windows, and thoughtfully designed spaces that maximize natural light while maintaining privacy.",
    features: [
      {
        category: "Interior Features",
        items: [
          "Double-height living room with panoramic valley views",
          "Gourmet kitchen with premium European appliances",
          "Temperature-controlled wine cellar (200+ bottle capacity)",
          "Home theater with professional acoustics",
          "Primary suite with private terrace and spa-like bathroom",
          "Custom Italian wardrobes in all bedrooms",
          "Home office with built-in shelving and city views",
          "Staff quarters with separate entrance"
        ]
      },
      {
        category: "Exterior & Grounds",
        items: [
          "Infinity edge pool with heating system",
          "Outdoor kitchen and entertainment area",
          "Manicured gardens with mature indigenous trees",
          "Solar-powered landscape lighting",
          "Automated irrigation system",
          "Electric gate with security booth",
          "CCTV surveillance system",
          "Generator house with auto-switch capability"
        ]
      },
      {
        category: "Smart Home Features",
        items: [
          "Integrated home automation system",
          "Climate-controlled zones with smart thermostats",
          "Automated lighting scenes",
          "Smart security system with mobile integration",
          "Electric vehicle charging station",
          "Solar power system with battery storage",
          "Water harvesting and recycling system",
          "High-speed fiber internet infrastructure"
        ]
      }
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        title: "Exterior View",
        description: "Modern facade with expansive glass windows"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
        title: "Living Room",
        description: "Double-height living space with valley views"
      },
      {
        url: "https://kitchenmastersllc.com/wp-content/uploads/2022/04/kitchenmasterkitchenremodeling-2880w.webp",
        title: "Kitchen",
        description: "Gourmet kitchen with premium appliances"
      },
      {
        url: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2",
        title: "Master Suite",
        description: "Primary bedroom with private terrace access"
      },
      {
        url: "https://www.decorilla.com/online-decorating/wp-content/uploads/2024/06/Chic-luxury-master-bath-layout-with-seamless-glass-shower-by-Decorilla-1024x683.jpeg",
        title: "Master Bath",
        description: "Spa-inspired master bathroom"
      },
      {
        url: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4",
        title: "Pool Area",
        description: "Infinity pool with entertainment deck"
      },
      {
        url: "https://www.peerspace.com/resources/wp-content/uploads/Houston-Mansion-for-Next-Production-1.avif",
        title: "Garden",
        description: "Landscaped gardens with mature trees"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e",
        title: "Home Office",
        description: "Executive office with built-in shelving"
      }
    ],
    neighborhood: {
      description: "Kitisuru remains one of Nairobi's most prestigious addresses, known for its diplomatic residences and luxury homes. The Ridge Residence enjoys an elevated position that provides both privacy and stunning views while being conveniently located near premium amenities.\n\nThe property is within easy reach of international schools, high-end shopping centers, and diplomatic missions. The serene environment is complemented by excellent security and well-maintained infrastructure.",
      nearbyAmenities: [
        {
          category: "Education",
          items: [
            "International School of Kenya (7 minutes)",
            "Peponi School (10 minutes)",
            "Braeburn School (12 minutes)"
          ]
        },
        {
          category: "Shopping & Dining",
          items: [
            "Village Market (8 minutes)",
            "Westgate Mall (15 minutes)",
            "Two Rivers Mall (12 minutes)"
          ]
        },
        {
          category: "Healthcare",
          items: [
            "Aga Khan University Hospital (15 minutes)",
            "MP Shah Hospital (20 minutes)"
          ]
        },
        {
          category: "Recreation",
          items: [
            "Windsor Golf Club (15 minutes)",
            "Karura Forest (10 minutes)",
            "Muthaiga Country Club (12 minutes)"
          ]
        }
      ]
    }
  }
};

export default function PropertyDetail() {
  const router = useRouter();
  const { id } = router.query;
  const property = propertyDetails[id];
  const [selectedImage, setSelectedImage] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleKeyPress = useCallback((e) => {
    if (!isGalleryOpen) return;
    
    if (e.key === 'Escape') {
      setIsGalleryOpen(false);
      return;
    }

    if (!property?.gallery) return;

    const currentIndex = selectedImage !== null 
      ? property.gallery.findIndex(img => img.url === selectedImage.url)
      : -1;

    if (e.key === 'ArrowRight' && currentIndex < property.gallery.length - 1) {
      setSelectedImage(property.gallery[currentIndex + 1]);
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
      setSelectedImage(property.gallery[currentIndex - 1]);
    }
  }, [isGalleryOpen, selectedImage, property]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  if (!property) {
    return (
      <Layout>
        <div style={{ 
          minHeight: "100vh",
          backgroundColor: "var(--theme-bg)",
          color: "var(--theme-text)",
          padding: "120px 20px",
          textAlign: "center",
          transition: 'background-color 0.3s ease, color 0.3s ease'
        }}>
          Property not found
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div style={{
        backgroundColor: "var(--theme-bg)",
        color: "var(--theme-text)",
        minHeight: "100vh",
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}>
        {/* Hero Section */}
        <section style={{
          position: "relative",
          height: "70vh",
          minHeight: "600px",
          backgroundImage: "url(" + property.gallery[0].url + "?auto=format&fit=crop&w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(to top, var(--theme-bg) 0%, rgba(14,14,14,0) 100%)",
            padding: "120px 20px 40px",
          }}>
            <div style={{
              maxWidth: "1200px",
              margin: "0 auto",
            }}>
              <h1 style={{
                fontSize: "2.8rem",
                fontWeight: "500",
                marginBottom: "1rem",
                color: "var(--theme-text)",
                transition: 'color 0.3s ease'
              }}>{property.title}</h1>
              <p style={{
                fontSize: "1.2rem",
                color: "var(--theme-text-muted)",
                marginBottom: "1rem",
                transition: 'color 0.3s ease'
              }}>{property.location}</p>
              <p style={{
                fontSize: "1.4rem",
                color: "var(--theme-accent)"
              }}>{property.price}</p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 20px",
        }}>
          {/* Quick Specs */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            marginBottom: "4rem",
            backgroundColor: "var(--theme-surface)",
            padding: "2rem",
            borderRadius: "12px",
            transition: 'background-color 0.3s ease'
          }}>
            {Object.entries(property.specs).map(([key, value]) => (
              <div key={key} style={{ textAlign: "center" }}>
                <div style={{ 
                  color: "var(--theme-text-muted)", 
                  marginBottom: "0.5rem",
                  transition: 'color 0.3s ease'
                }}>
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
                <div style={{ color: "var(--theme-accent)", fontSize: "1.1rem" }}>{value}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div style={{ marginBottom: "4rem" }}>
            <h2 style={{ 
              fontSize: "1.8rem", 
              marginBottom: "1.5rem",
              color: "var(--theme-text)",
              transition: 'color 0.3s ease'
            }}>Property Overview</h2>
            <p style={{ 
              color: "var(--theme-text-muted)",
              lineHeight: "1.8",
              whiteSpace: "pre-line",
              transition: 'color 0.3s ease'
            }}>{property.description}</p>
          </div>

          {/* Features */}
          <div style={{ marginBottom: "4rem" }}>
            <h2 style={{ 
              fontSize: "1.8rem", 
              marginBottom: "2rem",
              color: "var(--theme-text)",
              transition: 'color 0.3s ease'
            }}>Premium Features</h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}>
              {property.features.map((category, index) => (
                <div key={index} style={{
                  backgroundColor: "var(--theme-surface)",
                  padding: "2rem",
                  borderRadius: "12px",
                  transition: 'background-color 0.3s ease'
                }}>
                  <h3 style={{ 
                    color: "var(--theme-accent)",
                    marginBottom: "1.5rem" 
                  }}>{category.category}</h3>
                  <ul style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}>
                    {category.items.map((item, idx) => (
                      <li key={idx} style={{
                        color: "var(--theme-text-muted)",
                        marginBottom: "0.8rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        transition: 'color 0.3s ease'
                      }}>
                        <span style={{ color: "var(--theme-accent)" }}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div style={{ marginBottom: "4rem" }}>
            <h2 style={{ 
              fontSize: "1.8rem", 
              marginBottom: "2rem",
              color: "var(--theme-text)",
              transition: 'color 0.3s ease'
            }}>Property Gallery</h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}>
              {property.gallery.map((image, index) => (
                <div 
                  key={index} 
                  style={{
                    backgroundColor: "var(--theme-surface)",
                    borderRadius: "12px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "transform 0.2s ease, background-color 0.3s ease",
                  }}
                  onClick={() => {
                    setSelectedImage(image);
                    setIsGalleryOpen(true);
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <OptimizedImage
                    src={image.url + "?auto=format&fit=crop&w=600&q=80"}
                    alt={image.title}
                    height={"240px"}
                    objectFit={"cover"}
                    quality={80}
                    style={{ width: '100%' }}
                  />
                  <div style={{ padding: "1rem" }}>
                    <h4 style={{ 
                      color: "var(--theme-text)",
                      marginBottom: "0.5rem",
                      transition: 'color 0.3s ease'
                    }}>{image.title}</h4>
                    <p style={{ 
                      color: "var(--theme-text-muted)",
                      fontSize: "0.9rem",
                      transition: 'color 0.3s ease'
                    }}>{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Neighborhood */}
          <div>
            <h2 style={{ 
              fontSize: "1.8rem", 
              marginBottom: "2rem",
              color: "var(--theme-text)",
              transition: 'color 0.3s ease'
            }}>Neighborhood</h2>
            <div style={{
              backgroundColor: "var(--theme-surface)",
              padding: "2rem",
              borderRadius: "12px",
              marginBottom: "2rem",
              transition: 'background-color 0.3s ease'
            }}>
              <p style={{
                color: "var(--theme-text-muted)",
                lineHeight: "1.8",
                whiteSpace: "pre-line",
                marginBottom: "2rem",
                transition: 'color 0.3s ease'
              }}>{property.neighborhood.description}</p>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "2rem",
              }}>
                {property.neighborhood.nearbyAmenities.map((category, index) => (
                  <div key={index}>
                    <h3 style={{
                      color: "var(--theme-accent)",
                      marginBottom: "1rem",
                      fontSize: "1.1rem",
                    }}>{category.category}</h3>
                    <ul style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                    }}>
                      {category.items.map((item, idx) => (
                        <li key={idx} style={{
                          color: "var(--theme-text-muted)",
                          marginBottom: "0.5rem",
                          transition: 'color 0.3s ease'
                        }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {isGalleryOpen && selectedImage && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.95)",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
          {/* Close button */}
          <button
            onClick={() => setIsGalleryOpen(false)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "24px",
              cursor: "pointer",
              zIndex: 1001,
              padding: "10px",
            }}
          >
            ✕
          </button>

          {/* Navigation buttons */}
          <div style={{
            position: "absolute",
            top: "50%",
            left: "20px",
            transform: "translateY(-50%)",
            zIndex: 1001,
          }}>
            <button
              onClick={() => {
                const currentIndex = property.gallery.findIndex(img => img.url === selectedImage.url);
                if (currentIndex > 0) {
                  setSelectedImage(property.gallery[currentIndex - 1]);
                }
              }}
              disabled={property.gallery.indexOf(selectedImage) === 0}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "24px",
                cursor: "pointer",
                padding: "10px",
                opacity: property.gallery.indexOf(selectedImage) === 0 ? 0.5 : 1,
              }}
            >
              ←
            </button>
          </div>

          <div style={{
            position: "absolute",
            top: "50%",
            right: "20px",
            transform: "translateY(-50%)",
            zIndex: 1001,
          }}>
            <button
              onClick={() => {
                const currentIndex = property.gallery.findIndex(img => img.url === selectedImage.url);
                if (currentIndex < property.gallery.length - 1) {
                  setSelectedImage(property.gallery[currentIndex + 1]);
                }
              }}
              disabled={property.gallery.indexOf(selectedImage) === property.gallery.length - 1}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "24px",
                cursor: "pointer",
                padding: "10px",
                opacity: property.gallery.indexOf(selectedImage) === property.gallery.length - 1 ? 0.5 : 1,
              }}
            >
              →
            </button>
          </div>

          {/* Main image */}
          <div style={{
            maxWidth: "90vw",
            maxHeight: "90vh",
            position: "relative",
          }}>
            <OptimizedImage
              src={selectedImage.url + "?auto=format&fit=crop&w=1920&q=100"}
              alt={selectedImage.title}
              height={"85vh"}
              objectFit={"contain"}
              quality={100}
              priority={true}
              style={{ maxWidth: '100%' }}
            />
            <div style={{
              position: "absolute",
              bottom: "-40px",
              left: 0,
              right: 0,
              textAlign: "center",
              color: "var(--theme-text)",
              transition: 'color 0.3s ease'
            }}>
              <h3 style={{ marginBottom: "0.5rem" }}>{selectedImage.title}</h3>
              <p style={{ 
                color: "var(--theme-text-muted)",
                transition: 'color 0.3s ease'
              }}>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}