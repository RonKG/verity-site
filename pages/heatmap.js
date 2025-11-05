import { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import "leaflet/dist/leaflet.css";

export default function HeatmapPage() {
  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);

  const initialView = { lat: -1.2921, lng: 36.8219, zoom: 12.5 };

  useEffect(() => {
    (async () => {
      if (typeof window === "undefined") return;
      const L = (await import("leaflet")).default;
      await import("leaflet.heat");

      if (!mapRef.current) {
        const map = L.map("heatmapContainer", {
          zoomControl: true,
          scrollWheelZoom: true,
          doubleClickZoom: true,
          dragging: true,
          touchZoom: true,
        }).setView([initialView.lat, initialView.lng], initialView.zoom);

        L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
          maxZoom: 20,
          minZoom: 2,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
        }).addTo(map);

        const heatData = [
          [-1.2833, 36.8219, 0.8],
          [-1.292, 36.802, 0.7],
          [-1.300, 36.792, 0.65],
          [-1.310, 36.780, 0.75],
          [-1.320, 36.825, 0.6],
          [-1.325, 36.830, 0.7],
        ];

        L.heatLayer(heatData, {
          radius: 25,
          blur: 18,
          maxZoom: 19,
          gradient: {
            0.3: "#8ecae6",
            0.5: "#219ebc",
            0.8: "#ffb703",
            1.0: "#fb8500",
          },
        }).addTo(map);

        L.control.zoom({ position: "bottomright" }).addTo(map);
        mapRef.current = map;
        setMapReady(true);
      }
    })();
  }, []);

  const handleResetView = () => {
    if (mapRef.current) {
      mapRef.current.setView([initialView.lat, initialView.lng], initialView.zoom, {
        animate: true,
        duration: 0.6,
      });
    }
  };

  return (
    <Layout>
      <section
        style={{
          textAlign: "center",
          color: "#ccc",
          padding: "2rem 1rem 0.5rem",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ fontWeight: 500, fontSize: "1.9rem", marginBottom: "0.5rem" }}>
          Nairobi Property Density
        </h1>
        <p style={{ color: "#999", fontSize: "0.95rem", marginBottom: "1rem" }}>
          This interactive heatmap highlights property listing density across Nairobi. 
          Each glowing cluster represents areas with higher activity — based on sample 
          property data.
        </p>
        <p style={{ color: "#888", fontSize: "0.9rem", lineHeight: "1.6" }}>
          🖱️ <strong>Use your mouse or fingers</strong> to zoom and pan the map. <br />
          Areas in <span style={{ color: "#fb8500" }}>orange</span> indicate 
          stronger listing concentrations, while 
          <span style={{ color: "#8ecae6" }}> blue zones</span> show lower density.
        </p>
      </section>

      <div
        id="heatmapContainer"
        style={{
          height: "75vh",
          width: "90%",
          maxWidth: "1000px",
          margin: "1.5rem auto",
          borderRadius: "14px",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          position: "relative",
        }}
      />

      {/* Unified Floating Controls */}
      {mapReady && (
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "6%",
            zIndex: 9999,
            background: "rgba(20, 20, 20, 0.85)",
            color: "#f5f5f5",
            padding: "14px 18px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {/* Density Legend */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{ marginBottom: "6px", fontWeight: 500, fontSize: "0.9rem" }}
            >
              Density
            </div>
            <div
              style={{
                height: "10px",
                width: "120px",
                background:
                  "linear-gradient(to right, #8ecae6, #219ebc, #ffb703, #fb8500)",
                borderRadius: "6px",
                margin: "0 auto",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "4px",
                fontSize: "0.75rem",
                color: "#ccc",
              }}
            >
              <span>Low</span>
              <span>High</span>
            </div>
          </div>

          {/* Reset View Button */}
          <button
            onClick={handleResetView}
            style={{
              background: "#f5b942",
              color: "#000",
              border: "none",
              borderRadius: "8px",
              padding: "6px 14px",
              fontSize: "0.85rem",
              cursor: "pointer",
              boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
              transition: "background 0.2s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#ffd56a")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#f5b942")}
          >
            🔁 Reset View
          </button>
        </div>
      )}

      <div
        style={{
          textAlign: "center",
          padding: "10px",
          color: "#888",
          fontSize: "0.85rem",
        }}
      >
        <p>Sample visualization — property heat density overlay</p>
      </div>
    </Layout>
  );
}
