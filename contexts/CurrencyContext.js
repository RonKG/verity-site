import React, { createContext, useContext, useState, useEffect } from 'react';

const CurrencyContext = createContext();

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within CurrencyProvider');
  }
  return context;
};

// Default exchange rates (fallback if API fails)
const DEFAULT_RATES = {
  USD: 0.00775, // 1 KSH = 0.00775 USD (approx 129 KSH/USD)
  EUR: 0.00710, // 1 KSH = 0.00710 EUR
  GBP: 0.00610, // 1 KSH = 0.00610 GBP
  KSH: 1
};

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('KSH');
  const [rates, setRates] = useState(DEFAULT_RATES);
  const [loading, setLoading] = useState(true);

  // Detect user's preferred currency based on location/browser
  useEffect(() => {
    // Check localStorage first
    const saved = localStorage.getItem('preferredCurrency');
    if (saved && ['KSH', 'USD', 'EUR', 'GBP'].includes(saved)) {
      setCurrency(saved);
      setLoading(false);
      return;
    }

    // Detect from timezone/locale
    const detectCurrency = () => {
      try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const locale = navigator.language;

        // Kenya timezone
        if (timezone.includes('Nairobi') || timezone.includes('Africa')) {
          return 'KSH';
        }
        
        // US timezones
        if (timezone.includes('America') || locale.startsWith('en-US')) {
          return 'USD';
        }
        
        // UK
        if (timezone.includes('London') || timezone.includes('Europe/London') || locale.startsWith('en-GB')) {
          return 'GBP';
        }
        
        // European timezones
        if (timezone.includes('Europe') && !timezone.includes('London')) {
          return 'EUR';
        }

        // Default to USD for international
        return 'USD';
      } catch (error) {
        return 'KSH'; // Default to KSH if detection fails
      }
    };

    const detected = detectCurrency();
    setCurrency(detected);
    setLoading(false);
  }, []);

  // Fetch live exchange rates (optional - using a free API)
  useEffect(() => {
    const fetchRates = async () => {
      try {
        // Using exchangerate-api.com free tier (no key required for basic usage)
        const response = await fetch('https://open.er-api.com/v6/latest/KSH');
        const data = await response.json();
        
        if (data && data.rates) {
          setRates({
            USD: data.rates.USD || DEFAULT_RATES.USD,
            EUR: data.rates.EUR || DEFAULT_RATES.EUR,
            GBP: data.rates.GBP || DEFAULT_RATES.GBP,
            KSH: 1
          });
        }
      } catch (error) {
        console.log('Using default exchange rates');
        // Keep default rates on error
      }
    };

    fetchRates();
    // Refresh rates every hour
    const interval = setInterval(fetchRates, 3600000);
    return () => clearInterval(interval);
  }, []);

  const changeCurrency = (newCurrency) => {
    setCurrency(newCurrency);
    localStorage.setItem('preferredCurrency', newCurrency);
  };

  const convert = (amountInKSH, targetCurrency = currency) => {
    if (!amountInKSH) return 0;
    const numAmount = typeof amountInKSH === 'string' 
      ? parseFloat(amountInKSH.replace(/[^0-9.]/g, ''))
      : amountInKSH;
    
    return numAmount * rates[targetCurrency];
  };

  const formatPrice = (amountInKSH, targetCurrency = currency) => {
    const converted = convert(amountInKSH, targetCurrency);
    
    const formatters = {
      KSH: new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', minimumFractionDigits: 0 }),
      USD: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }),
      EUR: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }),
      GBP: new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 0 })
    };

    return formatters[targetCurrency].format(converted);
  };

  const value = {
    currency,
    changeCurrency,
    convert,
    formatPrice,
    rates,
    loading
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};
