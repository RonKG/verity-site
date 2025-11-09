import { useState, useEffect } from 'react';
import Router from 'next/router';
import "@/styles/globals.css";
import "@/styles/mobile.css";
import 'leaflet/dist/leaflet.css';
import { CurrencyProvider } from '@/contexts/CurrencyContext';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <CurrencyProvider>
      {loading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '2px',
          background: '#f5b942',
          zIndex: 9999,
          animation: 'loading 1s infinite linear',
        }} />
      )}
      <Component {...pageProps} />
      <style jsx global>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </CurrencyProvider>
  );
}
